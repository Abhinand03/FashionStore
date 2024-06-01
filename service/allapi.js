import base_url from "./base_url";
import { CommanAPI } from "./commanapi";

export const userRegister=async(data)=>{
    return  await CommanAPI("POST",`${base_url}/register`,data,"")
}

export const userlogin=async(data)=>{
    return await CommanAPI("POST", `${base_url}/login`,data,"")
}

export const userupdate=async(data,header)=>
{
    return await CommanAPI("PUT", `${base_url}/user-update`,data,header)
}

export const allproduct=async()=>{
    return await CommanAPI("GET",`${base_url}/all-product`,"","")

}
//cart section
export const adtocart=async(data,header)=>{
    return await CommanAPI("POST",`${base_url}/cart`,data,header)
}

export const cartcount=async(header)=>{
    return await CommanAPI("GET",`${base_url}/cartcount`,"",header)
}


export const cartview=async(header)=>{
    return await CommanAPI("GET",`${base_url}/cart-product`,"",header)
}

export const upcart=async(data,header)=>{
    return await CommanAPI("PUT",`${base_url}/upcart`,data,header)
}

export const removeitem=async(id)=>{
    return await CommanAPI("DELETE",`${base_url}/deletecart/${id}`,{},"")

}

//orders

export const orderup=async(data)=>{
    return await CommanAPI("POST",`${base_url}/order`,data,"")
}

export const alldeltcart=async(id)=>{
    return await CommanAPI("DELETE",`${base_url}/alldelt/${id}`,{},"")
}

//razorpay
export const razorpay=async(data)=>{
    return await CommanAPI("POST",`${base_url}/razorpay`,data,"")
}