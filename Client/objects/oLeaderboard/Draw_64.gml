/// @desc

draw_set_halign(fa_left)
draw_set_valign(fa_top)
draw_set_font(fLeaderboard)
draw_set_color(c_white)
draw_set_alpha(1)


var name_scores = []
var longest_name = 0
with(oPlayer) {
	longest_name = max(string_width(name), longest_name)
	array_push(name_scores, { local: !remote, score: gold, name: name })
}

array_sort(name_scores, function(a, b) { return a.score - b.score })

var _x = display_get_gui_width() - 120 - longest_name
var _y = 100

draw_set_alpha(.2)
draw_set_color(c_black)

draw_rectangle(_x - 20, _y - 20, display_get_gui_width() - 30, _y + 200, false)

draw_set_color(c_white)
draw_set_alpha(1)


draw_text(_x, _y, "Scores:")



_y += 60

for(var i = 0; i < array_length(name_scores); i++) {
	var ns = name_scores[i]
	
	if (ns.local) {
		draw_set_color(c_lime)
	}
	else {
		draw_set_color(c_white)
	}
	
	s = string("{2}) {0} - {1}", ns.name, ns.score, i+1)
	draw_text(_x, _y, s)
	
	_y += 35
}