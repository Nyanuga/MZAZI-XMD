const _0x4f49b4=_0xb5ea;function _0x287d(){const _0x3678b9=['caption','user','from','getName','bind','subject','chalk','cache','default','Something\x20went\x20wrong','groupAcceptInvite','downloadAndSaveMediaMessage','Caught\x20exception:\x20','split','replace','utf-8','connection.update','getNumber','updateProfileStatus','loggedOut','./lib/mzaziexif.js','Connection\x20TimedOut,\x20Reconnecting...','get','status@broadcast','1954735JlwIli','join','messages.upsert','en-US','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session_id\x20and\x20Scan\x20Again.','child','public','./action/auth','concat','base64','setStatus','279021dXUJlR','5009373kOmYRW','packname','server','./lib/mzaziexif','readFileSync','string','readMessages','decodeJid','key','WhatsApp','timedOut','Update\x20','connectionClosed','message','green','Connection\x20closed,\x20reconnecting....','11419368ncVQWH','writeFileSync','fromMe','connectionReplaced','Congrats,\x20MZAZI-XMD\x20has\x20successfully\x20connected\x20to\x20this\x20server','verifiedName','3147528oZNlRO','awesome-phonenumber','pixel','close','document','@broadcast','sendMessage','red','91544aEXsgZ','categories','test','text','0@s.whatsapp.net','notify','participant','Follow\x20me\x20on\x20Instagram\x20as\x20Nick_hunter9','Africa/Nairobi','keyword','matchAll','groupMetadata','axios','badSession','fromObject','sendVideoAsSticker','endsWith','6CXUshe','alloc','name','using\x20WA\x20v','image/webp','output','redBright','cMod','unhandledRejection','@s.whatsapp.net','figlet','Text\x20the\x20bot\x20number\x20with\x20menu\x20to\x20check\x20my\x20command\x20list','log','>\x20𝗕𝗼𝘁\x20𝐢𝐬\x20𝗼𝗻𝗹𝗶𝗻𝗲【𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗】𝗶𝗳\x20𝘆𝗼𝘂\x20𝗻𝗲𝗲𝗱\x20𝗮𝗻𝘆\x20𝗵𝗲𝗹𝗽,\x20𝘁𝗲𝐱𝐭\x20𝗺𝗲\x20𝘁𝗵𝗿𝗼𝘂𝗴𝗵\x20+254741388986\x20𝗼𝗿\x20𝗮𝗻𝘆\x20𝗶𝘀𝘀𝘂𝗲\x20','Restart\x20Required,\x20Restarting...','lodash','query','author','fromBuffer','34518yClINr','serializeM','Unhandled\x20Rejection\x20at:','contacts.update','./mzazi','TRUE','connectionLost','sendImage','10TuRcEU','@whiskeysockets/baileys','silent','contacts','downloadMediaMessage','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','group-participants.update','asSticker','promises','mtype','international',',\x20isLatest:\x20','unlink','set','statusCode','5.1.7','/index.html','file-type','22kBBSXE','watchFile','Standard','textSync','messages','toLocaleString','video','store','G9Ac2ynbbdZLYKIjaxtBK2','sendText','rejectionHandled','399fWxwXr','./set.js','long','existsSync','msg','isBuffer','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot','exit','./action/events','@hapi/boom','./lib/mzazifunc','mimetype','14XqqesU','ephemeralMessage','map','sticker','keys','Safari','remoteJid'];_0x287d=function(){return _0x3678b9;};return _0x287d();}(function(_0x27688f,_0x32563d){const _0x29ace8=_0xb5ea,_0x1656c3=_0x27688f();while(!![]){try{const _0xf07d8c=parseInt(_0x29ace8(0x1d3))/0x1+-parseInt(_0x29ace8(0x166))/0x2*(parseInt(_0x29ace8(0x190))/0x3)+parseInt(_0x29ace8(0x1a7))/0x4+parseInt(_0x29ace8(0x185))/0x5*(-parseInt(_0x29ace8(0x1c0))/0x6)+parseInt(_0x29ace8(0x1f8))/0x7*(-parseInt(_0x29ace8(0x1af))/0x8)+-parseInt(_0x29ace8(0x191))/0x9*(parseInt(_0x29ace8(0x1db))/0xa)+parseInt(_0x29ace8(0x1ed))/0xb*(parseInt(_0x29ace8(0x1a1))/0xc);if(_0xf07d8c===_0x32563d)break;else _0x1656c3['push'](_0x1656c3['shift']());}catch(_0x473fd0){_0x1656c3['push'](_0x1656c3['shift']());}}}(_0x287d,0x73ab8));const {default:mzaziConnect,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,downloadContentFromMessage,jidDecode,proto,getContentType}=require(_0x4f49b4(0x1dc)),pino=require('pino'),{Boom}=require(_0x4f49b4(0x201)),fs=require('fs'),axios=require(_0x4f49b4(0x1bb)),express=require('express'),chalk=require(_0x4f49b4(0x173)),FileType=require(_0x4f49b4(0x1ec)),figlet=require(_0x4f49b4(0x1ca)),app=express(),_=require(_0x4f49b4(0x1cf)),event=require(_0x4f49b4(0x200)),authenticationn=require(_0x4f49b4(0x18c)),PhoneNumber=require(_0x4f49b4(0x1a8)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x4f49b4(0x194)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x4f49b4(0x202)),{sessionName,session,autobio,autolike,port,packname,autoviewstatus}=require(_0x4f49b4(0x1f9)),store=makeInMemoryStore({'logger':pino()[_0x4f49b4(0x18a)]({'level':_0x4f49b4(0x1dd),'stream':_0x4f49b4(0x1f4)})}),color=(_0xc19865,_0x4b507d)=>{const _0x272568=_0x4f49b4;return!_0x4b507d?chalk[_0x272568(0x19f)](_0xc19865):chalk[_0x272568(0x1b8)](_0x4b507d)(_0xc19865);};function _0xb5ea(_0x5f8de3,_0x58ff3d){const _0x287da5=_0x287d();return _0xb5ea=function(_0xb5ea5b,_0x53eb66){_0xb5ea5b=_0xb5ea5b-0x166;let _0x2d206=_0x287da5[_0xb5ea5b];return _0x2d206;},_0xb5ea(_0x5f8de3,_0x58ff3d);}async function startMzazi(){const _0x35b726=_0x4f49b4;await authenticationn();const {state:_0x4f9a9d,saveCreds:_0x21026b}=await useMultiFileAuthState('session'),{version:_0x90cdcf,isLatest:_0x3f5ffc}=await fetchLatestBaileysVersion();console[_0x35b726(0x1cc)](_0x35b726(0x1c3)+_0x90cdcf[_0x35b726(0x186)]('.')+_0x35b726(0x1e6)+_0x3f5ffc),console[_0x35b726(0x1cc)](color(figlet[_0x35b726(0x1f0)]('MZAZI',{'font':_0x35b726(0x1ef),'horizontalLayout':_0x35b726(0x175),'vertivalLayout':_0x35b726(0x175),'whitespaceBreak':![]}),_0x35b726(0x19f)));const _0xfc997=mzaziConnect({'logger':pino({'level':_0x35b726(0x1dd)}),'printQRInTerminal':!![],'browser':['MZAZI-XMD',_0x35b726(0x16b),_0x35b726(0x1ea)],'auth':_0x4f9a9d,'syncFullHistory':!![]});autobio===_0x35b726(0x1d8)&&setInterval(()=>{const _0x49e772=_0x35b726,_0x22074c=new Date();_0xfc997[_0x49e772(0x17f)](_0x22074c[_0x49e772(0x1f2)](_0x49e772(0x188),{'timeZone':_0x49e772(0x1b7)})+'\x20It\x27s\x20a\x20'+_0x22074c[_0x49e772(0x1f2)](_0x49e772(0x188),{'weekday':_0x49e772(0x1fa),'timeZone':_0x49e772(0x1b7)})+'.');},0xa*0x3e8);store[_0x35b726(0x171)](_0xfc997['ev']),_0xfc997['ev']['on'](_0x35b726(0x187),async _0x15c4ec=>{const _0x1dbfdd=_0x35b726;try{let _0x1397cd=_0x15c4ec[_0x1dbfdd(0x1f1)][0x0];if(!_0x1397cd[_0x1dbfdd(0x19e)])return;_0x1397cd['message']=Object[_0x1dbfdd(0x16a)](_0x1397cd[_0x1dbfdd(0x19e)])[0x0]==='ephemeralMessage'?_0x1397cd[_0x1dbfdd(0x19e)][_0x1dbfdd(0x167)][_0x1dbfdd(0x19e)]:_0x1397cd[_0x1dbfdd(0x19e)];autoviewstatus===_0x1dbfdd(0x1d8)&&_0x1397cd[_0x1dbfdd(0x199)]&&_0x1397cd[_0x1dbfdd(0x199)][_0x1dbfdd(0x16c)]===_0x1dbfdd(0x184)&&_0xfc997[_0x1dbfdd(0x197)]([_0x1397cd[_0x1dbfdd(0x199)]]);if(autolike===_0x1dbfdd(0x1d8)&&_0x1397cd['key']&&_0x1397cd[_0x1dbfdd(0x199)][_0x1dbfdd(0x16c)]==='status@broadcast'){const _0x1a0a10=await _0xfc997[_0x1dbfdd(0x198)](_0xfc997['user']['id']);await _0xfc997[_0x1dbfdd(0x1ad)](_0x1397cd[_0x1dbfdd(0x199)][_0x1dbfdd(0x16c)],{'react':{'key':_0x1397cd[_0x1dbfdd(0x199)],'text':'🎭'}},{'statusJidList':[_0x1397cd[_0x1dbfdd(0x199)][_0x1dbfdd(0x1b5)],_0x1a0a10]});}if(!_0xfc997[_0x1dbfdd(0x18b)]&&!_0x1397cd['key'][_0x1dbfdd(0x1a3)]&&_0x15c4ec['type']===_0x1dbfdd(0x1b4))return;let _0x23d1c5=smsg(_0xfc997,_0x1397cd,store);const _0x17d5ce=require(_0x1dbfdd(0x1d7));_0x17d5ce(_0xfc997,_0x23d1c5,_0x15c4ec,store);}catch(_0x254542){console[_0x1dbfdd(0x1cc)](_0x254542);}});const _0x57ada3=new Map();process['on'](_0x35b726(0x1c8),(_0x422bc2,_0x4b8a02)=>{const _0x585cbf=_0x35b726;_0x57ada3['set'](_0x4b8a02,_0x422bc2),console['log'](_0x585cbf(0x1d5),_0x4b8a02,'reason:',_0x422bc2);}),process['on'](_0x35b726(0x1f7),_0x2d0c35=>{_0x57ada3['delete'](_0x2d0c35);}),process['on'](_0x35b726(0x176),function(_0x1b48d9){const _0x41ed53=_0x35b726;console[_0x41ed53(0x1cc)](_0x41ed53(0x179),_0x1b48d9);}),_0xfc997[_0x35b726(0x198)]=_0x5de543=>{const _0x205b4d=_0x35b726;if(!_0x5de543)return _0x5de543;if(/:\d+@/gi[_0x205b4d(0x1b1)](_0x5de543)){let _0x2311ca=jidDecode(_0x5de543)||{};return _0x2311ca[_0x205b4d(0x16e)]&&_0x2311ca[_0x205b4d(0x193)]&&_0x2311ca[_0x205b4d(0x16e)]+'@'+_0x2311ca[_0x205b4d(0x193)]||_0x5de543;}else return _0x5de543;},_0xfc997['ev']['on'](_0x35b726(0x1d6),_0x39d394=>{const _0x2dcef6=_0x35b726;for(let _0x595280 of _0x39d394){let _0x52908c=_0xfc997[_0x2dcef6(0x198)](_0x595280['id']);if(store&&store[_0x2dcef6(0x1de)])store[_0x2dcef6(0x1de)][_0x52908c]={'id':_0x52908c,'name':_0x595280[_0x2dcef6(0x1b4)]};}}),_0xfc997['ev']['on'](_0x35b726(0x1e1),_0x2fffdb=>event(_0xfc997,_0x2fffdb)),_0xfc997[_0x35b726(0x170)]=(_0x158915,_0x486a4c=![])=>{const _0x5f52e1=_0x35b726;let _0x569b95=_0xfc997[_0x5f52e1(0x198)](_0x158915);_0x486a4c=_0xfc997['withoutContact']||_0x486a4c;let _0x226dac;if(_0x569b95[_0x5f52e1(0x1bf)]('@g.us'))return new Promise(async _0x41c9f6=>{const _0x5b8239=_0x5f52e1;_0x226dac=store[_0x5b8239(0x1de)][_0x569b95]||{};if(!(_0x226dac[_0x5b8239(0x1c2)]||_0x226dac['subject']))_0x226dac=_0xfc997[_0x5b8239(0x1ba)](_0x569b95)||{};_0x41c9f6(_0x226dac[_0x5b8239(0x1c2)]||_0x226dac[_0x5b8239(0x172)]||PhoneNumber('+'+_0x569b95[_0x5b8239(0x17b)]('@s.whatsapp.net',''))[_0x5b8239(0x17e)]('international'));});else _0x226dac=_0x569b95===_0x5f52e1(0x1b3)?{'id':_0x569b95,'name':_0x5f52e1(0x19a)}:_0x569b95===_0xfc997['decodeJid'](_0xfc997[_0x5f52e1(0x16e)]['id'])?_0xfc997[_0x5f52e1(0x16e)]:store[_0x5f52e1(0x1de)][_0x569b95]||{};return(_0x486a4c?'':_0x226dac[_0x5f52e1(0x1c2)])||_0x226dac[_0x5f52e1(0x172)]||_0x226dac[_0x5f52e1(0x1a6)]||PhoneNumber('+'+_0x158915['replace'](_0x5f52e1(0x1c9),''))['getNumber'](_0x5f52e1(0x1e5));},_0xfc997[_0x35b726(0x18f)]=_0x45c1b7=>{const _0x291e7b=_0x35b726;return _0xfc997[_0x291e7b(0x1d0)]({'tag':'iq','attrs':{'to':_0x291e7b(0x1c9),'type':_0x291e7b(0x1e8),'xmlns':'status'},'content':[{'tag':'status','attrs':{},'content':Buffer['from'](_0x45c1b7,_0x291e7b(0x17c))}]}),_0x45c1b7;},_0xfc997[_0x35b726(0x18b)]=!![],_0xfc997[_0x35b726(0x1d4)]=_0x2f7294=>smsg(_0xfc997,_0x2f7294,store),_0xfc997['ev']['on'](_0x35b726(0x17d),async _0x2ccfa5=>{const _0x343037=_0x35b726,{connection:_0x490b32,lastDisconnect:_0x1b9723}=_0x2ccfa5;if(_0x490b32===_0x343037(0x1aa)){let _0x3409d9=new Boom(_0x1b9723?.['error'])?.[_0x343037(0x1c5)][_0x343037(0x1e9)];if(_0x3409d9===DisconnectReason[_0x343037(0x1bc)])console[_0x343037(0x1cc)](_0x343037(0x1e0)),process[_0x343037(0x1ff)]();else{if(_0x3409d9===DisconnectReason[_0x343037(0x19d)])console['log'](_0x343037(0x1a0)),startMzazi();else{if(_0x3409d9===DisconnectReason[_0x343037(0x1d9)])console[_0x343037(0x1cc)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startMzazi();else{if(_0x3409d9===DisconnectReason[_0x343037(0x1a4)])console[_0x343037(0x1cc)](_0x343037(0x1fe)),process['exit']();else{if(_0x3409d9===DisconnectReason[_0x343037(0x180)])console[_0x343037(0x1cc)](_0x343037(0x189)),process['exit']();else{if(_0x3409d9===DisconnectReason['restartRequired'])console['log'](_0x343037(0x1ce)),startMzazi();else _0x3409d9===DisconnectReason[_0x343037(0x19b)]?(console[_0x343037(0x1cc)](_0x343037(0x182)),startMzazi()):(console[_0x343037(0x1cc)]('Unknown\x20DisconnectReason:\x20'+_0x3409d9+'|'+_0x490b32),startMzazi());}}}}}}else _0x490b32==='open'&&(await _0xfc997[_0x343037(0x177)](_0x343037(0x1f5)),console[_0x343037(0x1cc)](color(_0x343037(0x1a5),'green')),console[_0x343037(0x1cc)](color(_0x343037(0x1b6),_0x343037(0x1ae))),console[_0x343037(0x1cc)](color(_0x343037(0x1cb))),_0xfc997['sendMessage'](_0xfc997[_0x343037(0x16e)]['id'],{'text':_0x343037(0x1cd)}));}),_0xfc997['ev']['on']('creds.update',_0x21026b);const _0x34aff7=async(_0x10afd3,_0x1a38cc)=>{const _0x493edd=_0x35b726;try{_0x1a38cc?_0x1a38cc:{};const _0x513d88=await axios({'method':_0x493edd(0x183),'url':_0x10afd3,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x1a38cc,'responseType':'arraybuffer'});return _0x513d88['data'];}catch(_0x2e2011){return _0x2e2011;}};return _0xfc997[_0x35b726(0x1da)]=async(_0xb788b6,_0x4b0c47,_0x66f107='',_0x131b9b='',_0x2fd727)=>{const _0x506a9f=_0x35b726;let _0xd2b02=Buffer['isBuffer'](_0x4b0c47)?_0x4b0c47:/^data:.*?\/.*?;base64,/i[_0x506a9f(0x1b1)](_0x4b0c47)?Buffer[_0x506a9f(0x16f)](_0x4b0c47[_0x506a9f(0x17a)]`,`[0x1],'base64'):/^https?:\/\//[_0x506a9f(0x1b1)](_0x4b0c47)?await _0x34aff7(_0x4b0c47):fs[_0x506a9f(0x1fb)](_0x4b0c47)?fs[_0x506a9f(0x195)](_0x4b0c47):Buffer[_0x506a9f(0x1c1)](0x0);return await _0xfc997[_0x506a9f(0x1ad)](_0xb788b6,{'image':_0xd2b02,'caption':_0x66f107,..._0x2fd727},{'quoted':_0x131b9b});},_0xfc997['sendFile']=async(_0x306364,_0x1db726,_0x35ca39,_0x2d9610={},_0x17f2f8={})=>{const _0x41785e=_0x35b726;let _0x5f1553=await _0xfc997['getFile'](_0x1db726,!![]),{filename:_0x2de022,size:_0x1d6376,ext:_0xb6c6c9,mime:_0x28f522,data:_0x2d8a30}=_0x5f1553,_0x1812a9='',_0x459a4c=_0x28f522,_0x450846=_0x2de022;if(_0x17f2f8['asDocument'])_0x1812a9=_0x41785e(0x1ab);if(_0x17f2f8[_0x41785e(0x1e2)]||/webp/['test'](_0x28f522)){let {writeExif:_0x255c4f}=require(_0x41785e(0x181)),_0x465794={'mimetype':_0x28f522,'data':_0x2d8a30};_0x450846=await _0x255c4f(_0x465794,{'packname':packname,'author':packname,'categories':_0x17f2f8[_0x41785e(0x1b0)]?_0x17f2f8[_0x41785e(0x1b0)]:[]}),await fs[_0x41785e(0x1e3)][_0x41785e(0x1e7)](_0x2de022),_0x1812a9=_0x41785e(0x169),_0x459a4c=_0x41785e(0x1c4);}else{if(/image/[_0x41785e(0x1b1)](_0x28f522))_0x1812a9='image';else{if(/video/[_0x41785e(0x1b1)](_0x28f522))_0x1812a9=_0x41785e(0x1f3);else{if(/audio/[_0x41785e(0x1b1)](_0x28f522))_0x1812a9='audio';else _0x1812a9='document';}}}return await _0xfc997['sendMessage'](_0x306364,{[_0x1812a9]:{'url':_0x450846},'mimetype':_0x459a4c,'fileName':_0x35ca39,..._0x17f2f8},{'quoted':_0x2d9610,..._0x17f2f8}),fs['promises'][_0x41785e(0x1e7)](_0x450846);},_0xfc997['parseMention']=async _0x4ca1fd=>{const _0x545f3d=_0x35b726;return[..._0x4ca1fd[_0x545f3d(0x1b9)](/@([0-9]{5,16}|0)/g)][_0x545f3d(0x168)](_0x16f022=>_0x16f022[0x1]+_0x545f3d(0x1c9));},_0xfc997['sendImageAsSticker']=async(_0x163dd0,_0x1fcec8,_0x178db3,_0x49fdb8={})=>{const _0x43445c=_0x35b726;let _0x5b4b6d=Buffer[_0x43445c(0x1fd)](_0x1fcec8)?_0x1fcec8:/^data:.*?\/.*?;base64,/i[_0x43445c(0x1b1)](_0x1fcec8)?Buffer['from'](_0x1fcec8[_0x43445c(0x17a)]`,`[0x1],_0x43445c(0x18e)):/^https?:\/\//[_0x43445c(0x1b1)](_0x1fcec8)?await _0x34aff7(_0x1fcec8):fs['existsSync'](_0x1fcec8)?fs[_0x43445c(0x195)](_0x1fcec8):Buffer[_0x43445c(0x1c1)](0x0),_0x1ee5d9;return _0x49fdb8&&(_0x49fdb8[_0x43445c(0x192)]||_0x49fdb8[_0x43445c(0x1d1)])?_0x1ee5d9=await writeExifImg(_0x5b4b6d,_0x49fdb8):_0x1ee5d9=await imageToWebp(_0x5b4b6d),await _0xfc997['sendMessage'](_0x163dd0,{'sticker':{'url':_0x1ee5d9},..._0x49fdb8},{'quoted':_0x178db3}),_0x1ee5d9;},_0xfc997[_0x35b726(0x1be)]=async(_0x51a23d,_0x364deb,_0x245930,_0x34af87={})=>{const _0x44227b=_0x35b726;let _0x24bdea=Buffer[_0x44227b(0x1fd)](_0x364deb)?_0x364deb:/^data:.*?\/.*?;base64,/i[_0x44227b(0x1b1)](_0x364deb)?Buffer[_0x44227b(0x16f)](_0x364deb[_0x44227b(0x17a)]`,`[0x1],_0x44227b(0x18e)):/^https?:\/\//[_0x44227b(0x1b1)](_0x364deb)?await _0x34aff7(_0x364deb):fs[_0x44227b(0x1fb)](_0x364deb)?fs[_0x44227b(0x195)](_0x364deb):Buffer[_0x44227b(0x1c1)](0x0),_0x3a04cd;return _0x34af87&&(_0x34af87[_0x44227b(0x192)]||_0x34af87[_0x44227b(0x1d1)])?_0x3a04cd=await writeExifVid(_0x24bdea,_0x34af87):_0x3a04cd=await videoToWebp(_0x24bdea),await _0xfc997[_0x44227b(0x1ad)](_0x51a23d,{'sticker':{'url':_0x3a04cd},..._0x34af87},{'quoted':_0x245930}),_0x3a04cd;},_0xfc997[_0x35b726(0x1df)]=async _0x56065a=>{const _0xdecee=_0x35b726;let _0x55eaf6=(_0x56065a[_0xdecee(0x1fc)]||_0x56065a)[_0xdecee(0x203)]||'',_0xcc3ff3=_0x56065a[_0xdecee(0x1e4)]?_0x56065a['mtype'][_0xdecee(0x17b)](/Message/gi,''):_0x55eaf6[_0xdecee(0x17a)]('/')[0x0];const _0xf1beee=await downloadContentFromMessage(_0x56065a,_0xcc3ff3);let _0xa8e860=Buffer[_0xdecee(0x16f)]([]);for await(const _0x16b287 of _0xf1beee){_0xa8e860=Buffer[_0xdecee(0x18d)]([_0xa8e860,_0x16b287]);}return _0xa8e860;},_0xfc997[_0x35b726(0x178)]=async(_0x45fcf0,_0x2f3116,_0x237519=!![])=>{const _0x2566e4=_0x35b726;let _0x543f47=_0x45fcf0[_0x2566e4(0x1fc)]?_0x45fcf0[_0x2566e4(0x1fc)]:_0x45fcf0,_0x6d38a4=(_0x45fcf0['msg']||_0x45fcf0)['mimetype']||'',_0x4d0330=_0x45fcf0[_0x2566e4(0x1e4)]?_0x45fcf0[_0x2566e4(0x1e4)]['replace'](/Message/gi,''):_0x6d38a4[_0x2566e4(0x17a)]('/')[0x0];const _0x3acd58=await downloadContentFromMessage(_0x543f47,_0x4d0330);let _0x38846b=Buffer[_0x2566e4(0x16f)]([]);for await(const _0x3abd97 of _0x3acd58){_0x38846b=Buffer[_0x2566e4(0x18d)]([_0x38846b,_0x3abd97]);}let _0x136011=await FileType[_0x2566e4(0x1d2)](_0x38846b);return trueFileName=_0x237519?_0x2f3116+'.'+_0x136011['ext']:_0x2f3116,await fs[_0x2566e4(0x1a2)](trueFileName,_0x38846b),trueFileName;},_0xfc997[_0x35b726(0x1f6)]=(_0x3b02ba,_0x4a0a4d,_0x20f858='',_0x4b91cc)=>_0xfc997[_0x35b726(0x1ad)](_0x3b02ba,{'text':_0x4a0a4d,..._0x4b91cc},{'quoted':_0x20f858}),_0xfc997[_0x35b726(0x1c7)]=(_0x207b41,_0x13c702,_0x30c1c5='',_0x23f8a8=_0xfc997[_0x35b726(0x16e)]['id'],_0x263b47={})=>{const _0x4c09b9=_0x35b726;let _0x37cbf0=Object[_0x4c09b9(0x16a)](_0x13c702[_0x4c09b9(0x19e)])[0x0],_0x848f34=_0x37cbf0===_0x4c09b9(0x167);_0x848f34&&(_0x37cbf0=Object[_0x4c09b9(0x16a)](_0x13c702[_0x4c09b9(0x19e)][_0x4c09b9(0x167)][_0x4c09b9(0x19e)])[0x0]);let _0x5122ae=_0x848f34?_0x13c702[_0x4c09b9(0x19e)][_0x4c09b9(0x167)]['message']:_0x13c702[_0x4c09b9(0x19e)],_0x10948a=_0x5122ae[_0x37cbf0];if(typeof _0x10948a===_0x4c09b9(0x196))_0x5122ae[_0x37cbf0]=_0x30c1c5||_0x10948a;else{if(_0x10948a[_0x4c09b9(0x16d)])_0x10948a[_0x4c09b9(0x16d)]=_0x30c1c5||_0x10948a[_0x4c09b9(0x16d)];else{if(_0x10948a[_0x4c09b9(0x1b2)])_0x10948a[_0x4c09b9(0x1b2)]=_0x30c1c5||_0x10948a['text'];}}if(typeof _0x10948a!=='string')_0x5122ae[_0x37cbf0]={..._0x10948a,..._0x263b47};if(_0x13c702['key'][_0x4c09b9(0x1b5)])_0x23f8a8=_0x13c702['key'][_0x4c09b9(0x1b5)]=_0x23f8a8||_0x13c702['key'][_0x4c09b9(0x1b5)];else{if(_0x13c702['key'][_0x4c09b9(0x1b5)])_0x23f8a8=_0x13c702[_0x4c09b9(0x199)][_0x4c09b9(0x1b5)]=_0x23f8a8||_0x13c702[_0x4c09b9(0x199)]['participant'];}if(_0x13c702['key'][_0x4c09b9(0x16c)]['includes'](_0x4c09b9(0x1c9)))_0x23f8a8=_0x23f8a8||_0x13c702[_0x4c09b9(0x199)][_0x4c09b9(0x16c)];else{if(_0x13c702[_0x4c09b9(0x199)][_0x4c09b9(0x16c)]['includes'](_0x4c09b9(0x1ac)))_0x23f8a8=_0x23f8a8||_0x13c702[_0x4c09b9(0x199)][_0x4c09b9(0x16c)];}return _0x13c702[_0x4c09b9(0x199)][_0x4c09b9(0x16c)]=_0x207b41,_0x13c702[_0x4c09b9(0x199)][_0x4c09b9(0x1a3)]=_0x23f8a8===_0xfc997[_0x4c09b9(0x16e)]['id'],proto['WebMessageInfo'][_0x4c09b9(0x1bd)](_0x13c702);},_0xfc997;}app['use'](express['static'](_0x4f49b4(0x1a9))),app['get']('/',(_0x1220b9,_0x384010)=>_0x384010['sendFile'](__dirname+_0x4f49b4(0x1eb))),app['listen'](port,()=>console[_0x4f49b4(0x1cc)]('Server\x20listening\x20on\x20port\x20http://localhost:'+port)),startMzazi();let file=require['resolve'](__filename);fs[_0x4f49b4(0x1ee)](file,()=>{const _0x3bfac4=_0x4f49b4;fs['unwatchFile'](file),console['log'](chalk[_0x3bfac4(0x1c6)](_0x3bfac4(0x19c)+__filename)),delete require[_0x3bfac4(0x174)][file],require(file);});