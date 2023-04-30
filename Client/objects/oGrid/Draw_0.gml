/// @desc

var cw = 256, ch = 256

draw_set_color(c_white)
draw_set_alpha(.4)
for(var _x = 0; _x < room_width; _x += cw) {
	for(var _y = 0; _y < room_height; _y += ch) {
		draw_rectangle(_x, _y, _x + cw, _y + ch, true)
	}
}

draw_set_alpha(1)