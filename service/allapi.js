import base_url from "./base_url";
import { CommanAPI } from "./commanapi";

export const userRegister=async(data)=>{
    return  await CommanAPI("POST",`${base_url}/register`,data,"")
}

export const userlogin=async(data)=>{
    return await CommanAPI("POST", `${base_url}/login`,data,"")
}