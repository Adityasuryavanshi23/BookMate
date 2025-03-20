

const API_HOST = import.meta.env.VITE_REACT_APP_HOST;
export const getProductList = async(queryterm)=>{
  const res = await fetch(
    `${API_HOST}/444/products?q=${queryterm ? queryterm : ""}`
  );
  if(!res.ok){
    throw {message: "sorry! we have server issue 😔", status: res.status }
  }
  console.log(res);
  
  const data = await res.json();

  return data
}

export const productDetail = async(id)=>{


  const res = await fetch(`${API_HOST}/444/products/${id}`);
  if(!res.ok){
    throw {message: "sorry! we have server issue 😔" , status: res.status }
  }
  const data = await res.json();

  return data
}

export const featuredProducts= async()=>{
  const res = await fetch(`${API_HOST}/444/featured_products`);
  if(!res.ok){
    throw {message: "sorry! we have server issue 😔", status: res.status }
  }
  console.log(res);

  const data = await res.json();

  return  data
}

