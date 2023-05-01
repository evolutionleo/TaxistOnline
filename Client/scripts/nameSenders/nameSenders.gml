function sendName(name) {
	send({ cmd: "set name", name: name })
}