const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log(req.socket.remoteAddress);

	res.end();
});

app.listen(3000, () => {
	console.log('App listen http://localhost:3000');
});
