/// @description platformer inputs logic

if (!remote) {
	kup = keyboard_check(ord("W")) || keyboard_check(vk_up)
	kleft = keyboard_check(ord("A")) || keyboard_check(vk_left)
	kdown = keyboard_check(ord("S")) || keyboard_check(vk_down)
	kright = keyboard_check(ord("D")) || keyboard_check(vk_right)
	
	kinteract = keyboard_check(ord("E")) || keyboard_check(ord("Z"))
	
	move_x = kright - kleft
	move_y = kdown - kup
	
	
	sendPlayerControls()
}

// Inherit the parent event
event_inherited();