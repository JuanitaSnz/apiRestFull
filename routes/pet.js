const routes = require('express').Router()

const{findAll,
      findByObjectId,
      findById,
      save,
      update
}=require('./../controllers/pets')

routes.get("/",findAll)
routes.get("/:id",findByObjectId)
routes.get("/id/:id",findById)
routes.post("/savePet/:id",save)
routes.put("/update/:id",update)

module.exports=routes