const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const dotenv =require("dotenv"); 
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:"*"}));
mongoose.set('strictQuery', false);

//mongoose connection
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(()=>{
    console.log("mongodb connected");
}).catch((e)=>{
   console.log(e);
});


// Mongoose schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

//Mongoose model
const User= new mongoose.model("User",userSchema);

//login
app.post("/login",(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
                if(password===user.password){
                    res.status(200).send({massage:"Login Successful",user:user})
                    
                }else{
                    res.status(401).send({massage:"Password didn't match"})
                   
                }
        }else{
           
            res.status(401).send({massage:"User not registered"})
        }
    })
})


//register
app.post("/register",(req,res)=>{
    const {name,email,password}=req.body.user
    User.findOne({email:email},(err,user)=>{
         if(user){
            res.send({massage:"User already register"})
             
         }else{
            const user=new User({
                name,
                email, 
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({massage:"Successfully Registered, please login now."});
                }
            });
         }
    })
  
});

//test server 
app.get("/",(req,res)=>{
   res.send("server is connected")
})
//server connection
app.listen(process.env.PORT,()=>{
    console.log("server 8000"); 
}); 
