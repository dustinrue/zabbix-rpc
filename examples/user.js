const Zabbix = require('../Zabbix.js')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function test() {
	const z1 = new Zabbix('localhost', 'user', 'pass')

	z1.user.login()
	
	await sleep(1000)

	console.log("Auth hash:", z1.req.auth)

	z1.user.logout()

	await sleep(1000)

	z1.user.login('user2', 'pass')
	 	
	await sleep(1000)

	z1.user.check(z1.req.auth).then(data => console.log(data))
	
	z1.user.get({"output": "extend"}).then(data => console.log(data))	
}

test()