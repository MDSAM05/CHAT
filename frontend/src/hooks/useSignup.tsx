import { useState } from "react";
import { useAuthcontext } from "../context/AuthContext"; // Ensure correct import
import {Request, Response} from "express";
const express = require("express");
const app = express();

type SignInput = {
  fullName: string;
  Username: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthcontext();

  app.post("/auth/signup", (req: Request, res: Response) => {
    res.json({ message: "Signup successful" });
  });
  
 const signup = async (inputs: SignInput) => {
     setLoading(true);
     try {
    const res = await fetch("http://localhost:5001/auth/signup", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(inputs),
       });

       const data = await res.json();
       if (!res.ok) throw new Error(data.error || "Signup failed");

      setAuthUser(data);
     return { success: true, user: data };
     } catch (error: any) {
       console.error("Signup Error:", error.message);
       return { success: false, error: error.message };
     } finally {
        setLoading(false);
      } 
    }

   return { loading, signup };

};
