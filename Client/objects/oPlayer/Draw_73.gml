/// @desc


//if (!remote)
draw_set_font(fUsername)
draw_set_color(c_white)
draw_set_alpha(1)
//draw_set_color(c_yellow)
//draw_text((bbox_right + bbox_left) / 2, bbox_top - 35, string("{0} ({1})", self.name, self.gold))
draw_text((bbox_right + bbox_left) / 2, bbox_top - 35, self.name)


if (!remote) {
	var dest = undefined
	if (boarded) {
		var dest = destination
		var arr = arrow_ped
	}
	else {
		var p = instance_nearest(x, y, oPassenger)
		dest = p
	
		arr = arrow_stop
	}
	
	if (is_struct(dest) or instance_exists(dest)) {
		var dest_dir = point_direction(x, y, dest.x, dest.y)
		var dest_dist = point_distance(x, y, dest.x, dest.y)
	
		var arr_len = dest_dist < 300 ? lerp(10, 80, dest_dist/300) : 80
	
		var dx = lengthdir_x(arr_len, dest_dir)
		var dy = lengthdir_y(arr_len, dest_dir)

		draw_sprite_ext(arr, 0, x + dx, y + dy, 1, 1, dest_dir-90, c_white, .9)
		
		if (point_distance(x, y, dest.x, dest.y) <= 80) {
			progress_img = lerp(0, 11, progress/max_progress)
			draw_sprite_ext(progress_orb, progress_img, x + 40, bbox_bottom + 20, 1, 1, 0, c_white, 1)
		}
	}
}


