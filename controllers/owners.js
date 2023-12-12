
const Owner = require ('./../models/model-owner')
module.exports={
    findAll :async(req,res)=>{
       try {
        //const data=[{"id":82,"name":"Juanita"},{"id":83,"name":"Juancho"}]
        const data= await Owner.find({}).populate('pets')
        return res.status(200).json({"state":true, "data": data})
       } catch (error) {
        
        return res.status(500).json({"state":false,"error":error})
       }
    },
    findByObjectId :async(req,res)=>{
        const {id}=req.params
        try {
           
           const data = await Owner.findById(id).populate('pets');
            return res.status(200).json({"state":true, "data": data})
       } catch (error) {
        console.log(error)
        return res.status(500).json({"state":false,"error":error})
       }
    },
    findById :async(req,res)=>{
        const {id}=req.params
        try {
           
           const data = await Owner.find({id:id});
            return res.status(200).json({"state":true, "data": data})
       } catch (error) {
        console.log(error)
        return res.status(500).json({"state":false,"error":error})
       }
    },
    save: async(req,res)=>{
        const owner = new Owner(req.body);
        try {
            const data= await owner.save();
        return res.status(200).json({"state":true,"data":data});    
        } catch (error) {
            return res.status(500).json({"state":false,"error":error}) 
        }
    },
    update : async(req,res)=>{
        const {id} = req.params;
        const newData= req.body;
        try {
            const updatedData= await Owner.findOneAndUpdate({id:id},newData,{new:true});
            if (updatedData) {
                return res.status(200).json({ "state": true, "data": updatedData });
            } else {
                return res.status(404).json({ "state": false, "error": "Documento no encontrado" });
            }        } catch (error) {
            return res.status(500).json({"state":false,"error":error}) 
        }

    }
}