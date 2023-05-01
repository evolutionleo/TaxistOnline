/// @desc Draw ping

draw_set_font(fPing)
draw_set_halign(fa_right)
draw_set_valign(fa_top)
draw_set_alpha(1)
draw_set_color(c_white)
//if (room == rMenu)
	draw_text(display_get_gui_width() - 20, 25,  string("ping: {0}ms", global.ping))
	//draw_text(display_get_gui_width() - 20, 25,  string(""))