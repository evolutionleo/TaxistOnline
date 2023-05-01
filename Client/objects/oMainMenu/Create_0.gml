/// @desc

global.canvas = new SUICanvas()

var btn_w = 192
var btn_h = 64
var offset_y = 50

txt_title = global.canvas.appendChild(new SUITitle(0, 90, "Taxist Online"))
txt_title.set("center", room_width/2)

playFunc = function() {
	sendName(tbox_name.get("text"))
	room_goto(rWaitingRoom)
}

//btn_lobbies = global.canvas.appendChild(new SUIButton(0, room_height/2-(btn_h+offset_y)/2, "Lobbies", function() { room_goto(rLobbiesList) }, {w: btn_w, h: btn_h}))
btn_play = global.canvas.appendChild(new SUIButton(0, room_height/2-(btn_h+offset_y)/2+100, "Play", playFunc, {w: btn_w, h: btn_h}))
//btn_login = global.canvas.appendChild(new SUIButton(0, room_height/2+(btn_h+offset_y)/2, "Login", function() { room_goto(rLogin) }, {w: btn_w, h: btn_h}))

tbox_name = global.canvas.appendChild(new SUITextInput(0, room_height/2-100, 384, 96, "Guest",  "name", { font: fUsernameForm, max_length: 12 }))


//btn_lobbies.set("center", room_width/2)
btn_play.set("center", room_width/2)
tbox_name.set("center", room_width/2)
//btn_login.set("center", room_width/2)