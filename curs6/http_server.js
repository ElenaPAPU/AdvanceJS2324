const http = required("http");
const port = 3001;
const host = 'localhost';

let server = http.createServer(function(req, res){
    res.writteHead(
        200,  
               {
            "Content-Type":"text/html",
            "Acces-Control-Allow-Origin":'*',
        },
    );

    res.write("Hello World!");
    res.end();

});
server.listen(port, host, () =>{
    console.log(`Server is running on http://${host}:${port}`);
});