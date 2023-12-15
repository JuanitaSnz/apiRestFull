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
routes.post("/:id",save)
routes.put("/:id",update)
routes.delete("/:id",deletePetById)

module.exports=routes