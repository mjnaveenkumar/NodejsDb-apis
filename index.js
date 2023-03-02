const express = require("express");
const fs = require("fs");
const app=express();
const path=require("path");




const currentDir=path.join(__dirname,"express");
console.log(currentDir)
const secret="hello there"
fs.writeFile(`${currentDir}/express.txt`,secret,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created")

    }
})
app.use(express.static("express"));
app.get("/static",(req,res)=>{
    res.sendFile(path.join(__dirname,"express/express.txt"))
})




 


const students=[{"name":"naveen","age":"23","id":"7"},
{"name":"sushma","gender":"female","age":"25","id":"6"}

]
app.get("/",(req,res)=>{
    res.send("Hello im mj naveen")
})

app.get("/students",(req,res)=>{


res.send(students)
})

app.get("students/:id",(req,res)=>{
    const{id}=req.params;
    console.log(id)
    console.log(req.params)
    const student=students.find((stud)=>stud.id == id)
    res.send(students);
})
    app.get("/all/students",(req,res)=>{
    res.send(students)
})

app.get("/students",(req,res)=>{
    const{gender}=req.query
    console.log(req.query)
    const selected=students.filter((studs)=>studs.gender==gender);
    res.send(selected)
})


app.listen(353, ()=>console.log(`server started localhost:353`))