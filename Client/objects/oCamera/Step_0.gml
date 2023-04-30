/// @desc


target = noone
with(oPlayer) {
	if (!remote)
		other.target = self
}

if (instance_exists(target)) {
	var speedscale = lerp(min_speescale, max_speedscale, target.spd_val / max_spd_val)
	
	camera_set_view_size(cam, base_w * speedscale, base_h * speedscale)
	var w = camera_get_view_width(cam)
	var h = camera_get_view_height(cam)
	
	camera_set_view_pos(cam, target.x - w/2, target.y - h/2)
}