const express=require('express');
const router=express.Router();
const MensRanking=require('../models/mens');

router.post('/mens',async (req,res)=>{
    try{
      const menadd=new MensRanking(req.body);
      console.log(menadd);
      const data=await menadd.save();
      res.status(201).send(data)
    }catch(e){
   res.status(400).send(e);
    }
  })
  router.get('/mens/:name',async (req,res)=>{
    try{
      const menadd=new MensRanking(req.body);
      
      const data=await MensRanking.find({name:req.params.name});
      res.status(201).send(data)
    }catch(e){
   res.status(400).send(e);
    }
  })
  router.patch('/mens/:id/:name',async (req,res)=>{
    try{
      const menadd=new MensRanking(req.body);
      
      const data=await MensRanking.update(
          {_id:req.params.id},
          {$set:
           {
            name:req.params.name
            }
          });
      res.status(201).send(data)
    }catch(e){
   res.status(400).send(e);
    }
  })
  router.delete('/mens/:id',async (req,res)=>{
      try{
      //   const menadd=new MensRanking(req.body);
        
        const data=await MensRanking.findByIdAndDelete({_id:req.params.id});
        res.status(201).send(data)
      }catch(e){
     res.status(400).send(e); 
      }
    })
   
module.exports=router;