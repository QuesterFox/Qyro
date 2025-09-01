// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on('connection', ws => {
    ws.on('message', message => {
        // Рассылаем всем
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    ws.send("Добро пожаловать в чат!");
});
