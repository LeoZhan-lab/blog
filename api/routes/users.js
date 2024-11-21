import express from "express"

const router = express.Router()

//TODO
router.get("/test", (req, res) => {
    res.json("this is post")
})
export default router