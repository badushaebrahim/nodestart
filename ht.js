const serv =require('http')
const se = serv.createServer((req,res)=>{

if(req.url === '/'){
	res.write('<h1><a href="/me">welcome to page</a></h1>')
	res.end('')
}
else{
	res.write('<html>nothing<a href="/">goo</a>but new</html>')
	res.end('')
}
})
se.listen(5544)