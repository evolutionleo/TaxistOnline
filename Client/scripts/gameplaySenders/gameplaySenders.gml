function sendPlayerControls() {
	send({
		cmd: "player controls",
		move: {
			x: move_x,
			y: move_y
		},
		kright: kright,
		kleft: kleft,
		kup: kup,
		kdown: kdown,
		
		kinteract: kinteract
	})
}