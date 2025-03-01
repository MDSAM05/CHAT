import { Request, Response } from "express"
import prisma from "../db/prisma.js";


export const sendMessage = async (req: Request, res: Response) =>{
    try{
        const { message } = req.body;
        const { id: receiverId} = req.params;
        const senderId = req.user.id;

        let conversation = await prisma.conversation.findFirst({
             where :{
                    participantIDs : {
                       hasEvery: [senderId,receiverId]
                    }
             } 
        })

        if(!conversation) {
            conversation = await prisma.conversation.create({
                data :
                {
                    participantIDs : {
                         set: [senderId,receiverId]
                     }
                }
            })
        }
        
        const newmessage = await prisma.message.create({
             data: {
                senderId,
                body: message,
                conversationId: conversation.id
             },

        })

        if(newmessage)
        {
            conversation = await prisma.conversation.update({
                where :{
                   id:  conversation.id
                },
                data : {
                    messages : {
                        connect : {
                            id :newmessage.id
                        }
                    }
                }
            })
        }
        res.status(201).json(newmessage);

    }
    catch(error: any)
    {
        console.log("Error in sendMessage:", error.message);
        res.status(500).json({ error :"Interal server error"})

    }

}

export const getMessage = async (req: Request, res: Response): Promise<any> =>{
  try {
    const {id: chatid} = req.params;
    const senderId = req.user.id;

    const conversation = await prisma.conversation.findFirst({
        where :{
            participantIDs :{
                hasEvery: [chatid, senderId]
            }
        },
        include: {
            messages: {
               orderBy: {
                createdAt: "asc"
               }
            }
        }
    })

    if(!conversation)
    {
         res.status(200).json({messages: []})
    }
    if (conversation) {
        return res.status(200).json(conversation.messages);
    } else {
        return res.status(404).json({ error: "Conversation not found" });
    }
  }
  catch(error: any)
  {
    res.status(500).json({ error : "internal error"});
    console.log("Error in getMessage: ", error.message);
  }
}

export const getUsersforSidebar = async (req: Request, res: Response): Promise<any>    => {
   try{
    const authUser = req.user.id;

    const users = await prisma.user.findMany({
        where :
        {
            id :{
                not:authUser
            }
        },
        select: {
            id: true,
            username: true,
            profile: true
        }
    }) 
    return res.status(200).json(users);
   }
   catch(error: any)
   {
       console.log("Error in sendMessage:", error.message);
       res.status(500).json({ error :"Interal server error"})
   }
}