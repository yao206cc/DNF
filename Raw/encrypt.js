const { log } = require('console')
const cryptoJs = require('crypto-js')
const fs = require('fs')
const path = require('path')

function encrypt() {
    const data = fs.readFileSync(path.join(__dirname, './a.txt'), { encoding: 'utf-8' })
    try {
        console.log(cryptoJs.AES.decrypt(data, "QWER").toString(cryptoJs.enc.Utf8))
    } catch (e) {
        log(e)
    }
}

encrypt()