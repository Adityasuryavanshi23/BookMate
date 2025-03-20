
const API_HOST = import.meta.env.VITE_REACT_APP_HOST


export const login = async(authlogindetail)=>{
  
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authlogindetail),
  };
  const response = await fetch(`${API_HOST}/login`, req);
  
  const data = await response.json();
  console.log(data);
  


  if (data.accessToken) {
    JSON.stringify(sessionStorage.setItem("token", data.accessToken));
    JSON.stringify(sessionStorage.setItem("bmid", data.user.id));
    JSON.stringify(sessionStorage.setItem("username", data.user.name));
  }

  return data
}

 export const register = async(userAuth)=>{
  const res = await fetch(`${API_HOST}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userAuth),
  });
 
  const data = await res.json();
  console.log(data);

  
  if (data.accessToken) {
    JSON.stringify(sessionStorage.setItem("token", data.accessToken));
    JSON.stringify(sessionStorage.setItem("bmid", data.user.id));
    JSON.stringify(sessionStorage.setItem("username", data.user.name));
  }

  return data
}


export const logout = () => {
  sessionStorage.clear();
};