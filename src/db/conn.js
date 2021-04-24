const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/olympics",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log('Connected To db')
}).catch((e)=>{
console.log(e)
});