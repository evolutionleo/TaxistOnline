/// @desc

draw_set_font(fTimer)
draw_set_halign(fa_left)
draw_set_valign(fa_top)
draw_set_color(c_white)
draw_set_alpha(1)

time_string = string(timer div 60) + ":" + string(timer % 60)

draw_text(30, 30, string(time_string))