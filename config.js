global.owner = ['6281380311018']  
global.mods = ['6281380311018'] 
global.prems = ['6281380311018']
global.nameowner = 'Hishino Suka tobrut'
global.numberowner = '6281380311018' 
global.mail = 'syamdims22@gmail.com' 
global.gc = 'https://chat.whatsapp.com/KRpv06Ntc9OGIovISYSodE'
global.instagram = 'https://instagram.com/peddle.pop_'
global.wm = '© Hishino himaru'
global.wait = '_*Sabar Tod lgi di prosies*_'
global.eror = '_*Server Error awokawok*_'
global.stiker_wait = '*⫹⫺ Stiker lagi di buat os sabar*'
global.packname = 'Made With'
global.author = 'Hishino himaru'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'yahngentotdhmauabis' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'NyolongApikey'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'yahngentotdhmauabis' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
