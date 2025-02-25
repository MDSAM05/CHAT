import jwt , {JwtPayload} from "jsonwebtoken";
import prisma from "../db/prisma.js";
import {Request, Response , NextFunction} from "express";

interface decodedToken extends JwtPayload {
    userId: string;
}

declare global {
    namespace Express {
        export interface Request {
            user :{
                id: string;
            };
        }
    }
}
const protectRoute = async(req: Request, res: Response, next:NextFunction) =>
{ 
    try{
   const token = req.cookies.jwt;

   if(!token){
    res.status(400).json({ error: "Unauthorized - No token "})
   }

   const decoded = jwt.verify(token , process.env.JWT_SECRET!) as decodedToken;

   if(!decoded)
   {
    res.status(400).json({error :"Unauthorized token"});
   }

   const user = await prisma.user.findUnique({ where: {id: decoded.userId},
     select: {id: true, username: true, fullName: true,
    // profilePic: true
   }})
   if(!user)
    {
     res.status(400).json({error :"User not found"});
    }

    if (user) {
        req.user = { id: user.id };
    }
    next();
    }
    catch(error: any)
    {
    console.log("Error in protectRoute", error.message);
    res.status(500).json({error :"Interal server Error"})
    }
}

export default protectRoute;