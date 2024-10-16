import express from "express"
import userController from "./controllers/userController.js"
import authenticate from "./middleware/authenticate.js"
import axios from "axios"
import ParkirController from "./controllers/parkirController.js"

const router = express.Router()

// User
router.get("/user", userController.get)
router.get("/user/me", authenticate, userController.me)
router.get("/user/:id", userController.detail)
router.post("/user", userController.store)
router.post("/user/register", userController.regiter)
router.put("/user/:id", userController.update)
router.delete("/user/:id", userController.delete)



router.get("/bitcoin-price-index", async (req, res) => {
    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    return res.json(response.data)
})

router.get("/parkir", authenticate, ParkirController.get)
router.post("/parkir", authenticate, ParkirController.order)
router.put("/parkir/:id", authenticate, ParkirController.update)
router.delete("/parkir/:id", authenticate, ParkirController.cancel)
export default router;