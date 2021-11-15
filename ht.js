const serv =require('http')
const se = serv.createServer((req,res)=>{

if(req.url === '/'){
	//res.write('')
	res.end('<h1><a href="www.google.com">welcome to page</a></h1>')
}
else{
	res.end('<html>nothing<a href="/">goo</a></html>')
}
})
se.listen(5544)