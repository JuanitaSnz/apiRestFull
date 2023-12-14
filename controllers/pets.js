const Pet = require('./../models/model-pets')
const Owner = require('./../models/model-owner')

module.exports={

    findAll :async(req,res)=>{
        try {
         
         const data= await Pet.find({})
         return res.status(200).json({"state":true, "data": data})
        } catch (error) {
         return res.status(500).json({"state":false,"error":error})
        }
     },
     findByObjectId :async(req,res)=>{
         const {id}=req.params
         try {
            const data = await Pet.findById(id);
             return res.status(200).json({"state":true, "data": data})
        } catch (error) {
         return res.status(500).json({"state":false,"error":error})
        }
     },
     findById :async(req,res)=>{
        const {id}=req.params
        try {
           const data = await Pet.find({id:id});
            return res.status(200).json({"state":true, "data": data})
       } catch (error) {
        return res.status(500).json({"state":false,"error":error})
       }
    },
     save: async(req,res)=>{
        //Id del dueño al que se le va a asignar
        const{id}=req.params;
        const owner= await Owner.findById(id)
         if(owner){
            try {
                const pet = new Pet(req.body);
                pet.owner=owner
                const result= await pet.save()
                owner.pets.push(pet)
               await owner.save()
             return res.status(200).json({"state":true,"data":result});    
             } catch (error) {
                 return res.status(500).json({"state":false,"error":error}) 
             }
         }else{
            return res.status(200).json({"state":false,"error":"El dueño no existe"}) 
         }
     },
     update : async(req,res)=>{
        const {id} = req.params;
        const newData= req.body;
        try {
            const updatedData= await Pet.findOneAndUpdate({_id:id},newData,{new:true});
            if (updatedData) {
                return res.status(200).json({ "state": true, "data": updatedData });
            } else {
                return res.status(404).json({ "state": false, "error": "Documento no encontrado" });
            }        } catch (error) {
            return res.status(500).json({"state":false,"error":error}) 
        }

    },

    deletePetById:async(req,res)=>{
        const {id} =req.params
        try{
            const pet=await Pet.findByIdAndDelete(id)
            if(!pet){
                return res.status(404).json({"state":false,"error":"Mascota no encontrada"})
            }
            const owner= await Owner.findById(pet.owner)
            owner.pets.pull(id)
            await owner.save()
            return res.status(200).json({ "state": true, "message": "Mascota eliminada exitosamente" })
        }catch(error){
            return res.status(500).json({ "state": false, "error": "Error al eliminar la mascota", "details": error.message })
        }
    }

}