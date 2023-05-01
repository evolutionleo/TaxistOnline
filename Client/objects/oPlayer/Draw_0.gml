//draw_self()

draw_set_halign(fa_center)

//draw_arrow(x, y, x + lengthdir_x(80, spd_dir), y + lengthdir_y(80, spd_dir), 5)

if (!remote) {
	
	var dest = undefined
	if (boarded) {
		var dest = destination
		var arr = arrow_ped
	
		draw_set_color(c_blue)
		draw_set_alpha(.3)
		draw_circle(dest.x, dest.y, 56, false)
	}
	else {
		var p = instance_nearest(x, y, oPassenger)
		dest = p
	
		arr = arrow_stop
	
		if (p != noone) {
			draw_set_color(c_lime)
			draw_set_alpha(.3)
			draw_circle(p.x, p.y, 56, false)
		}
	}


	draw_sprite_ext(sprite_index, 0, x, y, image_xscale, image_yscale, dir, image_blend, image_alpha)
}
else {
	draw_sprite_ext(sprite_index, 0, x, y, image_xscale, image_yscale, dir, image_blend, image_alpha)
}


draw_set_alpha(1)
draw_set_color(c_white)

//draw_set_color(c_white)
//draw_rectangle(coll.minX, coll.minY, coll.maxX, coll.maxY, true)
