const _0x542e39=_0x22a6;function _0x4b9a(){const _0xda1c9b=['block','say','slice','log','stdout','console','yellowBright','unwatchFile','3686816gupBEu','exit','1361889vfquYS','stdin','argv','center','line','11cPSBPD','blueBright','test','6YnOOnz','watchFile','magenta','yellow','fork','path','1423912uVqnkQ','342RluQIA','emit','apply','uptime','Zifabotz-MD\x0a\x20by.Rozi','3LeWiAk','message','env','send','join','14874204ZjuCbd','NODE_TLS_REJECT_UNAUTHORIZED','1652rTAobN','cluster','869393eErVoa','red','📡\x20Starting...','1887495nUZmoJ','10nsmGOv','[RECEIVED]','listenerCount','SUBSCRIBE\x20CHANNEL\x20ZIFABOTZ_OFFC1','cfonts','Exited\x20with\x20code:'];_0x4b9a=function(){return _0xda1c9b;};return _0x4b9a();}(function(_0x36a002,_0x37de30){const _0x4382d6=_0x22a6,_0x13c003=_0x36a002();while(!![]){try{const _0x296572=-parseInt(_0x4382d6(0xc5))/0x1*(parseInt(_0x4382d6(0xb9))/0x2)+-parseInt(_0x4382d6(0xbe))/0x3*(parseInt(_0x4382d6(0xb8))/0x4)+parseInt(_0x4382d6(0x99))/0x5+-parseInt(_0x4382d6(0xb2))/0x6*(parseInt(_0x4382d6(0x96))/0x7)+-parseInt(_0x4382d6(0xa8))/0x8+parseInt(_0x4382d6(0xaa))/0x9*(-parseInt(_0x4382d6(0x9a))/0xa)+-parseInt(_0x4382d6(0xaf))/0xb*(-parseInt(_0x4382d6(0xc3))/0xc);if(_0x296572===_0x37de30)break;else _0x13c003['push'](_0x13c003['shift']());}catch(_0x5d2763){_0x13c003['push'](_0x13c003['shift']());}}}(_0x4b9a,0x3b1fe),console[_0x542e39(0xa3)](_0x542e39(0x98)));function _0x22a6(_0x3fdbbb,_0x58b58b){const _0x4b9acb=_0x4b9a();return _0x22a6=function(_0x22a60d,_0x2307a2){_0x22a60d=_0x22a60d-0x96;let _0x15a274=_0x4b9acb[_0x22a60d];return _0x15a274;},_0x22a6(_0x3fdbbb,_0x58b58b);}let cluster=require(_0x542e39(0xc6)),path=require(_0x542e39(0xb7)),fs=require('fs'),package=require('./package.json');const CFonts=require(_0x542e39(0x9e)),Readline=require('readline'),yargs=require('yargs/yargs'),rl=Readline['createInterface'](process[_0x542e39(0xab)],process[_0x542e39(0xa4)]);process[_0x542e39(0xc0)][_0x542e39(0xc4)]='0',CFonts[_0x542e39(0xa1)](_0x542e39(0xbd),{'colors':[_0x542e39(0xb0),_0x542e39(0xa6)],'font':_0x542e39(0xa0),'align':_0x542e39(0xad)}),CFonts[_0x542e39(0xa1)](_0x542e39(0x9d),{'colors':[_0x542e39(0xb5)],'font':'console','align':_0x542e39(0xad)});var isRunning=![];function start(_0x4bba52){const _0x382740=_0x542e39;if(isRunning)return;isRunning=!![];let _0x2bb6a9=[path[_0x382740(0xc2)](__dirname,_0x4bba52),...process[_0x382740(0xac)][_0x382740(0xa2)](0x2)];CFonts[_0x382740(0xa1)]([process[_0x382740(0xac)][0x0],..._0x2bb6a9]['join']('\x20'),{'font':_0x382740(0xa5),'align':_0x382740(0xad),'gradient':[_0x382740(0x97),_0x382740(0xb4)]}),cluster['setupMaster']({'exec':path[_0x382740(0xc2)](__dirname,_0x4bba52),'args':_0x2bb6a9[_0x382740(0xa2)](0x1)});let _0x3c3287=cluster[_0x382740(0xb6)]();_0x3c3287['on'](_0x382740(0xbf),_0x4044f7=>{const _0x4ef7f4=_0x382740;console[_0x4ef7f4(0xa3)](_0x4ef7f4(0x9b),_0x4044f7);switch(_0x4044f7){case'reset':_0x3c3287['kill'](),isRunning=![],start[_0x4ef7f4(0xbb)](this,arguments);break;case _0x4ef7f4(0xbc):_0x3c3287[_0x4ef7f4(0xc1)](process['uptime']());break;}}),_0x3c3287['on'](_0x382740(0xa9),_0x52008a=>{const _0x48dfe7=_0x382740;isRunning=![],console['error'](_0x48dfe7(0x9f),_0x52008a);if(_0x52008a===0x0)return;fs[_0x48dfe7(0xb3)](_0x2bb6a9[0x0],()=>{const _0x23b39d=_0x48dfe7;fs[_0x23b39d(0xa7)](_0x2bb6a9[0x0]),start(_0x4bba52);});});let _0x526dce=new Object(yargs(process[_0x382740(0xac)][_0x382740(0xa2)](0x2))['exitProcess'](![])['parse']());if(!_0x526dce[_0x382740(0xb1)]){if(!rl[_0x382740(0x9c)]())rl['on'](_0x382740(0xae),_0x2778fa=>{const _0x7f4c8=_0x382740;_0x3c3287[_0x7f4c8(0xba)](_0x7f4c8(0xbf),_0x2778fa['trim']());});}}start('main.js');

console.log('📡 Starting...')
let cluster = require('cluster')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts = require('cfonts')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const rl = Readline.createInterface(process.stdin, process.stdout)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

CFonts.say('Zifabotz-MD\n by.Rozi', {
  colors: ['blueBright','yellowBright'],                                        font: 'block',
  align: 'center',
})
CFonts.say(`SUBSCRIBE CHANNEL ZIFABOTZ_OFFC1`, {                                            
colors: ['yellow'],                                                           
font: 'console',                                                              align: 'center',
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  cluster.setupMaster({
    exec: path.join(__dirname, file),
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('main.js')
