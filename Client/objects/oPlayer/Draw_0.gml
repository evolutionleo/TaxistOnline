
draw_sprite_ext(sprite_index, 0, x, y, image_xscale, image_yscale, dir, image_blend, image_alpha)
//draw_self()

draw_set_halign(fa_center)
draw_set_color(c_yellow)

//draw_arrow(x, y, x + lengthdir_x(80, spd_dir), y + lengthdir_y(80, spd_dir), 5)

//if (!remote)
draw_text((bbox_right + bbox_left) / 2, bbox_top - 35, self.name + string(self.gold))

var dest = undefined
if (boarded) {
	var dest = destination
	var arr = arrow_ped
	
	draw_set_color(c_blue)
	draw_circle(dest.x, dest.y, 56, true)
	
	progress_img = lerp(0, 11, progress/max_progress)
	draw_sprite(progress_orb, progress_img, dest.x + 30, dest.y - 30)
}
else {
	var p = instance_nearest(x, y, oPassenger)
	dest = p
	
	arr = arrow_stop
	
	if (p != noone) {
		draw_set_color(c_lime)
		draw_circle(p.x, p.y, 56, true)
	
		progress_img = lerp(0, 11, progress/max_progress)
		draw_sprite(progress_orb, progress_img, p.x + 30, p.y - 30)
	}
}

if (is_struct(dest) or instance_exists(dest)) {
	var dest_dir = point_direction(x, y, dest.x, dest.y)
	var dest_dist = point_distance(x, y, dest.x, dest.y)
	
	var arr_len = dest_dist < 300 ? lerp(10, 80, dest_dist/300) : 80
	
	var dx = lengthdir_x(arr_len, dest_dir)
	var dy = lengthdir_y(arr_len, dest_dir)

	draw_sprite_ext(arr, 0, x + dx, y + dy, 1, 1, dest_dir-90, c_white, .9)
}

//draw_set_color(c_white)
//draw_rectangle(coll.minX, coll.minY, coll.maxX, coll.maxY, true)