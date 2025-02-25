import express from "express";
import protectRoute from "../middleware/protectRoute.js"
import { logout,login,signup, getme } from "../controllers/authController.js"
const router = express.Router();



router.get("/Me",protectRoute, getme)
router.post("/login", login)

router.post("/logout",logout)
router.post("/signup", signup);
export default router;