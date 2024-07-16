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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9uSHV4UVg4YzJ3bWRLM2tWRlAxcHBFUjZnYnRiQThHUGRyd1VRd1FIRFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODc3MzIwNDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMyRUFDNTZBRTI1MDdENkFDRDE5N0I5OUQwQjM3Rjc3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE0MzUwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmbVRHVjc2eFJsdXFzcVJLZi1zUTNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxZWI4YjVhLTg5MzEtNDVjYS04MDgzLWU1ZDRhMTUxMDdmOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICA4MSxcbiAgICAgIDExNSxcbiAgICAgIDIxMixcbiAgICAgIDEzOSxcbiAgICAgIDIyNixcbiAgICAgIDc3LFxuICAgICAgMjM3LFxuICAgICAgOTcsXG4gICAgICAxODksXG4gICAgICAxMzYsXG4gICAgICAxMzksXG4gICAgICA3MyxcbiAgICAgIDEwNixcbiAgICAgIDIxMyxcbiAgICAgIDE2OCxcbiAgICAgIDIyNSxcbiAgICAgIDI0NSxcbiAgICAgIDMyLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgOTQsXG4gICAgICA2LFxuICAgICAgMzMsXG4gICAgICAxNzcsXG4gICAgICAyMjAsXG4gICAgICAzNyxcbiAgICAgIDU2LFxuICAgICAgMTE0LFxuICAgICAgMjM3LFxuICAgICAgMjMyLFxuICAgICAgMTE2LFxuICAgICAgMjM3LFxuICAgICAgMTk5LFxuICAgICAgMTQ5LFxuICAgICAgMjAxLFxuICAgICAgMTg4LFxuICAgICAgODIsXG4gICAgICAxMyxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGMU0zVFRYRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODc3MzIwNDA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTE1MzY5MzI0NjA3OjMxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFrYXNoIFNpdGh1bVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tPRHVBOFF4YUhhdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmM2Q0tDdFJpN3ZNWDFia1d4cFRJWmVhZ0cxUUZmcThNZXVQcWxCeFVubz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCd1dvVE1PV3d3d2lsdDdLN0pucVkzZWtDN2l5dk0yYS9HVldCVjk2YmRoQWQxQ3NtYmU5aHJqLzNUTVNUMGJzYkNHMEFkNmRTR2tHWnFUZFVJeHRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvMXFwNG1JTzgwNGRmNTdvci9IQ3dPMWhkSmExUmFmUmMyYVJYZzIySUZUcHZ6TDZIYXZURWx6bUp0UlBFejFaSkJlb0d6U1VhNGhaR09HTWppUGlDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NzczMjA0MDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExNDM0OTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNm1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc2bS5qc29uIjogIntcImtleURhdGFcIjpcIkdDcDBCWjFram1RblNWekpoV2FsY2tncDAva21nU2E5NFA2eDREOGJsUHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
