const routes = require('express').Router()

const{findAll,
      findByObjectId,
      findById,
      save,
      update,
      deletePetById
}=require('./../controllers/pets')

routes.get("/",findAll)
routes.get("/:id",findByObjectId)
routes.get("/id/:id",findById)
routes.post("/savePet/:id",save)
routes.put("/update/:id",update)
routes.delete("/delete/:id",deletePetById)

module.exports=routes