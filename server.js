import {PEERJS_API_KEY} from "./shared/constants"


var peer = new Peer("server", { key  : PEERJS_API_KEY });
	peer.on("open", (id) => {
		console.log(id)
	})

	peer.on("connection", (conn) => {
		conn.on("data", (data) => {
			console.log(data);
		})
	})