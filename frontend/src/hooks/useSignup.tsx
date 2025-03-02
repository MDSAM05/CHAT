import { useState } from "react";

import { useAuthcontext } from "../context/AuthContext";

type signInput =  {
    fullName:String,
    Username:String,
    password:String,
    confirmPassword:String,
    gender: String
}
export const useSignup = () =>
{
   const [Loading, setIsLoading] = useState(false);
   const { setAuthUser } = useAuthcontext();

   const signup = async (inputs : signInput) =>
   {
      try{
        setIsLoading(true);
        const res = await fetch("http://localhost:5000/auth/signup" ,{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      console.log(data);
      if(!res.ok) throw new Error(data.error)
       setAuthUser(data)
    }
      catch(error: any)
      {
        console.log(error)
      }
      finally{
        setIsLoading(false);
      }
   }
   return {Loading, signup}
}

