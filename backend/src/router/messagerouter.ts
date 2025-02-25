import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage, getMessage,getUsersforSidebar } from "../controllers/messageController.js"
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/conversations", protectRoute, getUsersforSidebar)
router.get("/:id", protectRoute, getMessage);

export default router;