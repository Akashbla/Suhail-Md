const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_47_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTksXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlCWmtZVnh2a3NybnFvdHorMk9BR2xFcHU0L1ZIdU1iUFdBVkxnYTJ1aGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImMwbXctNHRRUm82QmRNTUE1VWxjVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmUxNmZkMWEtOGU5YS00ZGY4LWE2Y2MtN2RiZDUzYTBjM2Q4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDIwMixcbiAgICAgIDIyMixcbiAgICAgIDE3OCxcbiAgICAgIDE5OSxcbiAgICAgIDIzOCxcbiAgICAgIDkyLFxuICAgICAgNjUsXG4gICAgICAyNSxcbiAgICAgIDQwLFxuICAgICAgMjM1LFxuICAgICAgMTQxLFxuICAgICAgNyxcbiAgICAgIDEyNixcbiAgICAgIDExMSxcbiAgICAgIDIwMixcbiAgICAgIDI1MixcbiAgICAgIDI0NSxcbiAgICAgIDYxLFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgMjQ0LFxuICAgICAgMjIsXG4gICAgICAyMDQsXG4gICAgICAxMjQsXG4gICAgICAyNTQsXG4gICAgICAxMTAsXG4gICAgICAyMyxcbiAgICAgIDY3LFxuICAgICAgMTU5LFxuICAgICAgMTk0LFxuICAgICAgMTIxLFxuICAgICAgMjA5LFxuICAgICAgODYsXG4gICAgICA4OSxcbiAgICAgIDM2LFxuICAgICAgOTEsXG4gICAgICAxNzMsXG4gICAgICAxMDEsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLR0R1QThRdEpySnRBWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJjNkNLQ3RSaTd2TVgxYmtXeHBUSVplYWdHMVFGZnE4TWV1UHFsQnhVbm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOTNoQVhsNkNRUlpTWkJldk5KUTgyRTRzUFJwdGhJWlpROTM0d0lJOWFZN2RsaWJ1cXV5Z0Y4YWhIblo2ZXgxMUozZ3VFYlFtZGM2OGxjbStmdnpBQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib29ONGZnUEJXd1VtSnBJZVpObFp4aTRjdjAzakd0TlVpRWFTSzdsQThCWmwwR2RjNisyZlBGN1hjcmlsWlNEdDA1amJaQmR2ZEo4WHVoMzhKaHY3Q0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NzczMjA0MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI5MTUzNjkzMjQ2MDc6MjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NzczMjA0MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NjQwNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGVjNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZWMi5qc29uIjogIntcImtleURhdGFcIjpcImk2K3FPalYyRWFqWnkyeUUvazV6SjM0UXVjeHkxcUZqRGFpV2tRc05wdUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZWMy5qc29uIjogIntcImtleURhdGFcIjpcIitCb1F3VXhvaWtCb3hNaDhCMWJSWjRHM0VFaVM1ZkxTUk9JUnIwdG96VGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlY0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiN2RHOFBiM3crcGRZbWRKV3N2YWtJVDNMazFHaFpMWVpiMTZmQjlaMXlFdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjM3NTIwMSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwODY0MDQwNTcwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
