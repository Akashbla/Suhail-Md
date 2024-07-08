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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_45_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGRXhXVHAxQlZOU3dHZDkrdjFYNk1GRW9OY2JOem9jKzc5eFZzTDhOT1ZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg3NzMyMDQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBOUE1NDIwRDRGNjQ0OEQ4RkQxRDJEODJDNjk3NEMyRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NDI3MDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVXY5a3Noa3hRTi1nd3FkUjlRcmYzZ1wiLFxuICBcInBob25lSWRcIjogXCJiMTVlYzBlZC02N2YxLTQxZjUtODQyNC02N2ZkMzM1YjQyMGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTg5LFxuICAgICAgMixcbiAgICAgIDY5LFxuICAgICAgMTY1LFxuICAgICAgMTA0LFxuICAgICAgNjYsXG4gICAgICA3MyxcbiAgICAgIDY4LFxuICAgICAgNzEsXG4gICAgICAyMjgsXG4gICAgICA0MSxcbiAgICAgIDk0LFxuICAgICAgMTY1LFxuICAgICAgMjAyLFxuICAgICAgMjI4LFxuICAgICAgMjA0LFxuICAgICAgMTQsXG4gICAgICAxMzAsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAxMzAsXG4gICAgICAxNjEsXG4gICAgICAxMTgsXG4gICAgICAxMTMsXG4gICAgICA5MSxcbiAgICAgIDIwNCxcbiAgICAgIDU1LFxuICAgICAgMjExLFxuICAgICAgNTMsXG4gICAgICAyNTMsXG4gICAgICAxNDcsXG4gICAgICAxMzMsXG4gICAgICAyLFxuICAgICAgMjAyLFxuICAgICAgMzYsXG4gICAgICAyNDEsXG4gICAgICAyMDMsXG4gICAgICAxNDEsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ0R1QThReUw2dnRBWVlEaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJjNkNLQ3RSaTd2TVgxYmtXeHBUSVplYWdHMVFGZnE4TWV1UHFsQnhVbm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVTBTbnBYZkJqRUdQZGZOcGdUcTNEaDYrcm5sTG5nelNwNWZUSmNxK2Q4NHVSeWpqYXlWVkRidCs5anVPbVB4RHBzR2xreU0rMU5HbnB1MG5jMk45Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQkZ1NmZ5VmZRbW1mZHZQVUZKZ1lpeVFwaHVZOUIyZ1U4RTBVN2Q4WG5pSWk5dVdacDZhSWxWb1hqV0pobThVOXphKzhHcG01UC9xdWtKS0ZOR3hyaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NzczMjA0MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI5MTUzNjkzMjQ2MDc6MTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NzczMjA0MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NDI2OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJR1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHVS5qc29uIjogIntcImtleURhdGFcIjpcInVMUW9FOS8ycGV1b2FESFgrWkdWL042NXhDMTVwUjR6UEZianpvQ1FuRjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHVi5qc29uIjogIntcImtleURhdGFcIjpcIlpWVGRqY3dGc2RYem44V2ZtM1VyUjd5ZmpWRENmQUhDZkZvUmRVWkovdTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIxNzIwMjQ2OTk2NzAzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdXLmpzb24iOiAie1wia2V5RGF0YVwiOlwidW5vN0JpVy92d2lVYWRLN3lkTzhLWURST1AzbmlCdmFvMXRiek10VWZyOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjM3NTIwMCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjQ3Mzg0MzE0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdYLmpzb24iOiAie1wia2V5RGF0YVwiOlwicjIzdlNkcnlLUCtvazREdkxoV2JTNS9RVWcrQUVla3hXQTlqL0ZhalQyTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjM3NTIwMCxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHWS5qc29uIjogIntcImtleURhdGFcIjpcIlFoM01EcWpoNUV3enlLOTZpZEpKNXlmVUVYVGkxT3RzeTVLZGhvU3dlWms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJR1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZU1JXd29udWJmOGdocVY2MEJZSDd4dVF5V0NyN0FibkNDTUR1V1ZrN1I4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMzc1MjAwLFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwxMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNDIwOTUwMjc3XCJ9Igp9"  // PUT your SESSION_ID 


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
