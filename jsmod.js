var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://192.168.0.117:8000/recreq/", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    apikey: "x6gVYpggAwwy9ylynA37",
	appid: "T11A43P",
	websitename: "qwerty",
	req_type: "signup",
	username: true,
	phoneno: true,
	email: true,
	city: true,
	state: true,
	country: true
}));
xhr.onload = function() {
  //console.log("HELLO")
  console.log(this.responseText);
  var data = JSON.parse(this.responseText);
  //console.log(data);
}