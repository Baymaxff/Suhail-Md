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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI4LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ3RXMDkrUUUzSFNBcEI0ZGxXa2NSbjQzcjBuajI5NzFOZ1RocC9PNlI1OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1ODg1Mzg3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFRjBFRDZFQUVFN0RCODJERkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2ODE0NTQ1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklMQmxfcUdHVElTOHN0SFE0NUNPMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjI4OTZiMzItNDA0YS00YzQwLWExOTQtYTRjMDIwNWU5Yzg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDEsXG4gICAgICAxNDAsXG4gICAgICAzMCxcbiAgICAgIDE5MixcbiAgICAgIDIwNSxcbiAgICAgIDIxNCxcbiAgICAgIDExMyxcbiAgICAgIDM2LFxuICAgICAgMTksXG4gICAgICAyMSxcbiAgICAgIDExOCxcbiAgICAgIDExNixcbiAgICAgIDQwLFxuICAgICAgMjA1LFxuICAgICAgMjE0LFxuICAgICAgODQsXG4gICAgICA0MyxcbiAgICAgIDcsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgNDAsXG4gICAgICAyMDUsXG4gICAgICAzOSxcbiAgICAgIDE3NixcbiAgICAgIDQyLFxuICAgICAgNzMsXG4gICAgICAyNDksXG4gICAgICA4OCxcbiAgICAgIDI0LFxuICAgICAgNjYsXG4gICAgICAyMjgsXG4gICAgICAyNDEsXG4gICAgICA5OSxcbiAgICAgIDIzMyxcbiAgICAgIDE3MixcbiAgICAgIDY3LFxuICAgICAgMTg5LFxuICAgICAgODQsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3N1JaTlFSTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTg4NTM4NzI6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQYXNpICBfXCIsXG4gICAgXCJsaWRcIjogXCIxNjA3MjIwMzg4MjcwODoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS2ZwOWNHRU1lRjBySUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5GZkxHK3RBeDNVQW5lQlpTTnFmYi9PVmpydjJXM0xYQjJzenZVNmwybE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiREwybE0xUzU3QXk5Vk1LNXJrRkRzQjhLbXp6eW1zcDRvOWpzLzhqbjdoclZmcGpWOGhHNUdwdHRyRGExdlRlQ0NxNlVQZklEb2dSNFd5bkpDRjlaQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYnVBblBiUFFIQlNrYUxLOEU4SDBxSlNYZVI1ajZudy9JTll3b2xNdityUldkTHhydHA3ZVNhL0llRTFPQnJpMXVjb1A4UHFIVTQxNk93U3FjdVloQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTg4NTM4NzI6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODE0NTM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTdpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBN2kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3TTVyV3JleXJjVXlHT0pod0VOUnhleGMrclgzWFlpYzFlbmVCeEw0T1RNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTM3MDc5NTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjc5MzE3MjA4NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
