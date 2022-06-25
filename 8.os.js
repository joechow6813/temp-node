const os = require("os")

const user = os.userInfo()
//console.log(user)

console.log(`the system uptime is 
${os.uptime()} second`)

const current={
    name:os.type(),
    release:os.release(),
    totlmen:os.totalmem(),
    freemem:os.freemem()
}
console.log(current)