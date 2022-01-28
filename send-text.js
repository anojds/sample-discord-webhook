const webhookurl = ""
  
const msg = {
  "username": "",
  "avatar_url": "",
  "content": "",
}
  
fetch(webhookurl, { 
   "method":"post",
   "header" : {
   "content-type": "application/json"
   },
   "body": JSON.stringify(msg)
})
	
