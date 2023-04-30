/// @description initialize some constants

// Inherit the parent event
event_inherited();


name = ""

// controls
kright	= false
kleft	= false
kup		= false
kdown	= false

kjump		= false
kjump_rel	= false
kjump_press = false

kinteract = false

move_x = 0
move_y = 0

dir = 0
spd_dir = 0

boarded = false
gold = 0
reward = -1
destination = {x: 0, y: 0}


progress = 0
max_progress = 1


coll = {
	minX: 0,
	minY: 0,
	maxX: 0,
	maxY: 0
}


spd_val = 0