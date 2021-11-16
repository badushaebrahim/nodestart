const express = require('express')
const app =express()


app.use(express.static('./public'))
app.get('/me',(res,req)=>{
	res.status(200).json({ok:"running",gr:"bro"})
	
})
app.get('/#section-contact',(res,req)=>{
	res.status(200).json({ok:"running",gr:"bro"})
}) 
app.listen(5544,()=>{
console.log("set")
})

