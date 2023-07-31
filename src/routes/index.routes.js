import {Router} from "express";

const router = Router()

router.get("/", (req, res) => {
    res.render("index")
})

router.post("/tasks/add", (req, res) => {
    res.send("saved")
})

router.get("/about", (req, res) => {
    res.render("about")
})

router.get("/edit", (req, res) => {
    res.render("edit")
})

export default router;