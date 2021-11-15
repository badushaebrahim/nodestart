const os=require('os')
var lol=os.userInfo()
console.log(os.uptime())
const me ={
	nam:os.type(),
	free:os.freemem(),
	fr:os.release(),
	fre:os.totalmem(),

}
var used= me.fre-me.free
console.log(me,used)