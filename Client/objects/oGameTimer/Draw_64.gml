/// @desc

draw_set_alpha(1)


if (countdown > -1) {
	draw_set_halign(fa_middle)
	draw_set_valign(fa_center)
	draw_set_font(fCountdown)
	draw_set_color(c_white)
	
	var cd_str = ""
	if (countdown < 0) {
		cd_str = "GO!"
	}
	else {
		cd_str = string(ceil(countdown))
	}
	
	draw_text_transformed(display_get_gui_width()/2, display_get_gui_height()/2, cd_str, 2, 2, 0)
}
//else
{
	draw_set_font(fTimer)
	draw_set_halign(fa_left)
	draw_set_valign(fa_top)
	draw_set_color(c_white)

	var mins = string(timer div 60)
	var secs = string(timer % 60)

	if string_length(mins) == 1
		mins = "0" + mins
	
	if real(mins) > 0
		secs = string(floor(real(secs)))
	
	if real(secs) < 10
		secs = "0" + secs

	time_string = mins + ":" + secs

	draw_text(30, 30, string(time_string))
}