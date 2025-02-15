const http=require('http');

const server=http.createServer((req,res)=>{//server is Event Emitter
if(req.url==="/"){
    res.write("<h1>I am Nikhil Pandey</h1> ");
    res.end();
}
if(req.url==="/source-code"){
    res.setHeader("Content-Type","text/html");
    res.write("<h1>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text Nikhil Pandey</h1>");
    res.end();
}

if(req.url==="/contact"){
    res.setHeader("Content-Type","text/html")
    res.write("<h1>Hi contact  me on (+91 7070031705)!</h1>");
    res.end();
}
}); 

//Creating a web server
const PORT=4000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

