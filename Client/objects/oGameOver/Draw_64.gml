/// @desc

draw_set_halign(fa_middle)
draw_set_valign(fa_center)
draw_set_font(fGameOver)
draw_set_color(c_white)

draw_text_transformed(display_get_gui_width()/2, display_get_gui_height()/2, global.gameover_string, 2, 2, 0)