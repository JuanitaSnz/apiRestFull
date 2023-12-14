const routes = require('express').Router()

const {findAll,
       findById,
       findByObjectId,
       findPetDetails,
       save,
       update,
       deleteById
} = require("../controllers/owners")

routes.get("/",findAll)
routes.get("/:id",findByObjectId)
routes.get("/id/:id",findById)
routes.get("/findPet/:ownerId/pets/:petId",findPetDetails)
routes.post("/",save)
routes.put("/update/:id",update)
routes.delete("/delete/:id",deleteById)
module.exports=routes;
