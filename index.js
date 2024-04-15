//Adding feature of deleting and editing the post is still left to do.
import express from "express";
import bodyParser from "body-parser";

var blogs = {};

const port = 3000;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , (req , res)=>{
    res.render("index.ejs");
});

app.get("/home" , (req , res)=>{
    res.render("index.ejs");
});

app.get("/about", (req, res)=>{
    res.render("about.ejs");
});

app.get("/faqs" , (req,res)=>{
    res.render("faqs.ejs");
});

app.get("/create" , (req , res)=>{
    res.render("create.ejs");
});

app.post("/myWeirdos" , (req , res)=>{
    blogs[req.body.title] = req.body.content; 
    // console.log(blogs);
    res.render("weirdos.ejs", {blogsData:blogs});
});

app.get("/myWeirdos" , (req , res)=>{
    res.render("weirdos.ejs",{blogsData: blogs});          
});

app.post("/viewPage" , (req , res)=>{
    var currentKey = req.body.key;
    res.render("viewPage.ejs",{reqKey : currentKey , blogsData : blogs});
});


app.listen(port , ()=> {
    console.log(`Server is listening at port ${port}`);
});

