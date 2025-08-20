//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkV3K1J0NStNVVdIYXFMTndvbSsrTFNwWVpBM0FCaitqN0w3Slp2Q2NGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dvN2J2WTE0cjV0WHdxcDZNQWg5VnlaVXMrTExjYTVIT2N5TWdQQytDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUDNWazFQd2xkTXpyMmVaTWZVUTNLVG4vVS82TFgwS2ExeXRqYUQ3WVZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwbXRuUDJVbFhLSUNzNGQzL2lIRm9NeXB2SVhTc29LdkN5bldOOUhGOEJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCVWE3Nk9MK1NYb29JbXpUZTVJQWtyZktsTlUvUk5SdGlnSmpwSElJRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklSczRUZ1BJZzl5SUhyVVByd0VKNGlUV1RYOVlLcGhiSnBEZEJ2YkJxbEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RLdG5JTnUwQVprNXh2VXZCYXp5dVlnV2ZwM0Exd1dVd2RQeW9rWEpVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1k1VmpDNkM1Y0NnVHJ0YUZBcmlDM0ZKdFVNMzhBN01Zdkc5UG1aOXVTaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXcWdjNkh4WTd1bUNmdGlTb01LTSszQ0dhU3IvSnhqZUVCRnNQTWRzT1JuL3l2OVhXdURqTFlpUGRuNmtlRVNTTUNvTHBvZXpMQTlxbWI5bTFCYkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlF1QTFRL254ZDN2TWNLdXVieCtFVk5YY0hHQ1dWdUtzQUY2UWtsRit0R3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQ0NDAwMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzg2ODk3MzM2MDNCNkQwODUzQjYxN0MwRjY3MEE1QUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTcwMTcxMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQ0NDAwMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkIzMUIyNUY3MUI5RDE2MEE1ODE3QUM1QUUyRDhFRDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTcwMTcxMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQ0NDAwMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODA1QTNBQ0VGNEI1QUFCODFGM0UxNjMwRjI1QjhDQkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTcwMTcxNH1dLCJuZXh0UHJlS2V5SWQiOjMyLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzIsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLVZmVlVTOWJSWC1iVEpCcG45QU90ZyIsInBob25lSWQiOiIxNGQ3OTA1Mi1kNGMyLTQyNGYtYTQwMy01NTMyNmMwMDc2OTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN5dmUvZllFTFRuYTc2U2preDFzVTBLeHBjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKU1MvT0tUODFkRnpCblM5dzdzd2svTW5zST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSQTFDNTJBMSIsIm1lIjp7ImlkIjoiOTQ3ODQ0NDAwMjA6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzMDY5NjIxNTk2MTY4Mzo1QGxpZCIsIm5hbWUiOiLwn5ia8J+YmiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjJVeGRnQkVNTERsOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiLzBvdWowU2J1aURWMXNKZjk3TW1wb2xlblROVmFlUy9TMGRGSFhoOGRrZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicEQ1TEhmN3lzak9iR1drWFl1QXUrZFBHc04xUlkvNUxST0s0Sm1LM1lhQkJlb3lsa3dLN05aYkJoSnB1UnBsUkRwUTJpcnpURHlzTnRWeEliZVB0RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkJGQVc5cnMrVjZuYStlaWg2SkhBRld0eURZT0NUS3AwUHFtNVAyY3pCSXZIWjBrM0hqaTUwaUc3YkhPQlJ3aDVKYzhDeURyOG9iMmNtQnU1eXZrYkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQ0NDAwMjA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmOUtMbzlFbTdvZzFkYkNYL2V6SnFhSlhwMHpWV25rdjB0SFJSMTRmSFpJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3MDE3MTAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ0ZHIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784440020",
  PASSWORD: 
    process.env.PASSWORD || "123456789",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(".")
    : ["94784440020", "94784440020"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
