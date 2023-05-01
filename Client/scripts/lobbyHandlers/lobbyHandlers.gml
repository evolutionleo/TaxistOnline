addHandler("lobby list", function(data) {
	var lobbies = data.lobbies
	global.lobbies = lobbies
	
	trace("recevied lobbies: %", lobbies)
})

addHandler("lobby info", function(data) {
	var lobby = data.lobby
	for(var i = 0; i < array_length(global.lobbies); i++) {
		var _lobby = global.lobbies[i]
		if (_lobby.lobbyid == lobby.lobbyid) {
			global.lobbies[i] = lobby
		}
	}
})

addHandler("lobby join", function(data) {
	var lobby = data.lobby
	global.lobby = lobby
	
	sendRequestLobbies()
})

addHandler("lobby reject", function(data) {
	var lobby = data.lobby
	var reason = data.reason
	show_message_async("Failed to join the lobby! Reason: " + reason)
})

addHandler("lobby leave", function(data) {
	var lobby = data.lobby
	var reason = data.reason
	var forced = data.forced
	global.lobby = undefined
	global.playing = false
	if (forced)
		show_message_async("Kicked from the lobby! Reason: " + reason)
	else
		show_message_async("You left the lobby")
	
	sendRequestLobbies()
	
	// add your handle for lobby kick/leave logic here
	room_goto(rMenu)
})