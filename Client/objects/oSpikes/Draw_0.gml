/// @desc

var _visible = true

var p = noone

with(oPlayer) {
	if (!remote) {
		p = self
	}
}

if (activated) {
	image_index = 1
}
else {
	image_index = 0
}


if (p != noone) {
	_visible = (p.name == owner_name) || (point_distance(x, y, p.x, p.y) <= reveal_distance)
}

if (_visible)
	draw_self()