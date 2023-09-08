

const http=require("http");

const fs=require("fs");
const server=http.createServer((req,res)=>{
      
    const url=req.url;
    console.log(url);
    //create end point to handle req
    if(url=="/"||url=="/index.html")
    {

     const data= fs.readFileSync("./index.html","utf-8");
     //console.log(data);
     res.write(data);
     res.end();
       



    }
    else if(url=="/contact" ||url=="/contact.html")
    {
        
       fs.readFile("./contact.html","utf-8",(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
       })

    }
    else if(url=="/about" ){
        fs.readFile("./about.html","utf-8",(err,data)=>{      
                if(err){
                    console.log(err);
                }
                else{
                    res.write(data);
                    res.end();
                }
      })
   }
   else if(url=="/style.css")
   {
    fs.readFile("./style.css","utf-8",(err,data)=>{      
        if(err){
            console.log(err);
        }
        else{
         
            res.write(data);
            res.end();
        }
})
   }
   else if(url=="/script.js"){
          
          fs.readFile("./script.js","utf-8",(err,data)=>{
              if(err)
              {
                throw err;
              }
              else{
                res.write(data);
                res.end();
              }
          })

   }
   else{


    fs.readFile("./404page.html","utf-8",(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.writeHead(404,{"Content-type":"text/html"})
            res.write(data);
            res.end();
        }
    })
   }
})
  

server.listen("4000",(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("running on port 4000");
})