import {Request, Response} from "express"


import prisma from "../db/prisma.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"
export const logout = async (req: Request, res: Response) =>{
   try{
     res.cookie("jwt", "", {maxAge: 0});
     res.status(200).json({ message : "logout successfully"})
   }
   catch(error: any)
   {
    console.log("Error in logout", error.message);
    res.status(500).json({error: "Internal error"})

   }
}
export const login = async (req: Request, res: Response): Promise<any> =>{
    try {
     const { username, password } = req.body;
     const user = await prisma.user.findUnique({ where : { username }})

     if(!user)
        {
           return res.status(400).json({error: "Invalid user"})
        }
     const isPass = await bcrypt.compare(password,user.password)

     if(!isPass)
     {
        return res.status(400).json({error: "Invalid password"})
     }

     generateToken(user.id, res);

     return res.status(200).json({
        id: user.id,
        fullName :user.fullName,
        username :user.username,
        profile :user.profile
     })
    }
    catch(error: any)
    {
        console.log("Error in login", error.message)
        res.status(500).json({error: "Interal server error"})
    }
}
export const signup = async (req: Request , res: Response): Promise<any> => {
    try
    {
    const {fullName, username, password, confirmPassword,gender} = req.body;
 
    if(!username || ! fullName || !password || !confirmPassword || !gender)
    {
     return res.status(400).json({ error : "please enter all fields"});
    }

    if(password !== confirmPassword)
    {
        return res.status(400).json({error :"password doesnt match"});
    }
    const user = await prisma.user.findUnique({ where : {username } });

    if(user)
    {
        return res.status(400).json({error :"username already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await prisma.user.create({
        data: {
            username,
            fullName,
            password: hashpass,
            gender,
            profile: gender == "male" ? boyProfilePic : girlProfilePic
        }
    })

    if(newUser)
    {
        generateToken(newUser.id, res);
        res.status(201).json({
            id: newUser.id,
            fullName: newUser.fullName,
            username: newUser.username,
            profile: newUser.profile
        });
    }
    else
    {
        res.status(400).json({error :"Invalid user data"})
    }
    }
    catch(err :any)
    {
     console.log("ERROR IN SIGNUP",err.message);
    }
}
interface users {
    id: string | undefined
}
export const getme = async (req: Request, res: Response): Promise<any> =>
{
     try{
        const user1 = await prisma.user.findUnique({ where: { id: req.user.id } });
        if(!user1){
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            id: user1.id,
            fullName: user1.fullName,
            userName: user1.username,
            profile: user1.profile
        })
     }
     catch(error: any){
        console.log("error in getMe controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
     }
}