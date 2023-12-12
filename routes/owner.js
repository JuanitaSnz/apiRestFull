const routes = require('express').Router()

const {findAll,
       findById,
       findByObjectId,
       save,
       update
} = require("../controllers/owners")

routes.get("/",findAll)
routes.get("/:id",findByObjectId)
routes.get("/id/:id",findById)
routes.post("/",save)
routes.put("/update/:id",update)
module.exports=routes;
