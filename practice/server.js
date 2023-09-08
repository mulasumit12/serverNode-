

const http=require("http");
// console.log(http);
const fs=require("fs");
const server=http.createServer((req,res)=>{
      
    const url=req.url;
    console.log(url);
    //create end point to handle req
    if(url=="/"||url=="/index.html")
    {

    //    // res.writeHead(200,{"Content-type":"text/plain"}); //for simple text
    //     res.writeHead(200,{"Content-type":"text/html"}); //for html content
    //     res.write("<h1>Welcome to Home page</h1>");
    //     // res.write("welcome to home");
    //     res.end();
     
     



    }
    else if(url=="/contact" ||url=="/contact.html")
    {
        res.write("contact us");
        res.end();
    }
    else 
    {   
        res.writeHead(404,{"Content-type":"text/html"})
        res.write("<h3>404 page not find<h3>");
        res.end();
    }
})

server.listen("4000",(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("running on port 4000");
})