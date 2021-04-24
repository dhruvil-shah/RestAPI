const express=require('express');
const app=express()
const port=process.env.PORT || 8000;
require("../src/db/conn");
const MensRanking=require("../src/models/mens")
// app.get("/",async (req,res)=>{
// res.send("Hello from Dhruvil");
// })
const router=require('./routers/men');
app.use(express.json())
app.use(router);

app.listen(port,()=>{
    console.log('Connected Succesfully');
})



// app.post('/mens',async (req,res)=>{
//   try{
//     const menadd=new MensRanking(req.body);
//     console.log(menadd);
//     const data=await menadd.save();
//     res.status(201).send(data)
//   }catch(e){
//  res.status(400).send(e);
//   }
// })
// app.get('/mens/:name',async (req,res)=>{
//   try{
//     const menadd=new MensRanking(req.body);
    
//     const data=await MensRanking.find({name:req.params.name});
//     res.status(201).send(data)
//   }catch(e){
//  res.status(400).send(e);
//   }
// })
// app.patch('/mens/:id/:name',async (req,res)=>{
//   try{
//     const menadd=new MensRanking(req.body);
    
//     const data=await MensRanking.update(
//         {_id:req.params.id},
//         {$set:
//          {
//           name:req.params.name
//           }
//         });
//     res.status(201).send(data)
//   }catch(e){
//  res.status(400).send(e);
//   }
// })
// app.delete('/mens/:id',async (req,res)=>{
//     try{
//     //   const menadd=new MensRanking(req.body);
      
//       const data=await MensRanking.findByIdAndDelete({_id:req.params.id});
//       res.status(201).send(data)
//     }catch(e){
//    res.status(400).send(e); 
//     }
//   })
 
