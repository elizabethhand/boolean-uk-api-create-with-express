const express = require("express")

const booksRouter = express.Router()

const router = express.Router()

router.post("/", createOne)

module.exports = router