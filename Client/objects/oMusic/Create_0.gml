/// @desc

mute = false

music_inst = undefined

playMusic = function(music) {
	if (!mute and !audio_is_playing(music)) {
		if (!is_undefined(music_inst))
			audio_stop_sound(music_inst)
		
		audio_play_sound(music, 0, true)
	}
	
	music_inst = music
}

Mute = function() {
	mute = !mute
	if (mute)
		audio_stop_all()
	if (!mute and !is_undefined(music_inst))
		playMusic(music_inst)
}