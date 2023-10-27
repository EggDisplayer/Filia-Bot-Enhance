const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'M3fAsTprq2' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6282389924037'] 
global.ownernomer = "6282389924037"
global.socialmedia = "IG: @XWBY"
global.yutub = "YT: Vynα Vαlerié."
global.lokasi = "Indonesia, Pekanbaru, Riau"
global.sakuraurl = 'https://shoplinks.to/vyna-store'
global.packgename = "by" 
global.author = "Vynα Vαlerié." 
global.title = 'SakuraMD'
global.body = 'Ytb Vynα Vαlerié.'
global.welcome = false //false mati true nyala
global.left = false //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})