const API_HOST = import.meta.env.VITE_REACT_APP_HOST;
export  const getSession = ()=>{
  
  const token = sessionStorage.getItem("token");
  const bmid = sessionStorage.getItem("bmid");

  return {token , bmid }
}

export const getUser = async()=>{
   const browerdata = getSession();
   const request =  {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${browerdata.token}`,
    },
  }
   
  const res = await fetch(`${API_HOST}/600/users/${browerdata.bmid}`,request);
  if(!res.ok){
    throw {message: "sorry! we have server issue 😔", status: res.status }
  }
  const data = await res.json();
  return data
}

export const createorder = async(cartList , total , users)=>{
  const browserdata = getSession();
  const ordersdetail = {
          cartList: cartList,
          total: total,
          quantity: cartList.length,
          user: {
            name: users.name,
            email: users.email,
            id: users.id,
          },
        };
  const res = await fetch(`${API_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${browserdata.token}`,
    },
    body: JSON.stringify(ordersdetail),
  });
  if(!res.ok){
    throw {message: "sorry! we have server issue 😔", status: res.status }
  }
  const data = await res.json();

  return data
}


export const getuserorder =  async()=>{
const browserdata = getSession()
   const res = await fetch(
          `${API_HOST}/660/orders?user.id=${browserdata.bmid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${browserdata.token}`,
            },
          }
        );
        if(!res.ok){
          throw {message: "sorry! we have server issue 😔", status: res.status }
        }
        const data = await res.json();
       
        return data
    
}