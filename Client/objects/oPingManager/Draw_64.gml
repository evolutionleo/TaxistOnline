/// @desc Draw ping

draw_set_font(fPing)
draw_set_halign(fa_right)
draw_set_valign(fa_top)
//if (room == rMenu)
	draw_text(display_get_gui_width() - 20, 25, "ping: " + string(global.ping) + "ms")