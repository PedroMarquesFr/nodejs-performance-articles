const net = require('net');

const server = net.createServer((socket) => {
    socket.write('Hello! You are connected to the server.\\n');
    socket.write('Please type something and press enter...\\n');

    // Quando recebemos dados do cliente, escrevemos os mesmos dados de volta para o cliente
    socket.on('data', (data) => {
        console.log(`Data received from client: ${data.toString()}`);
        socket.write(`You typed: ${data}`);
    });

    // Quando a conexão é fechada
    socket.on('end', () => console.log('Client disconnected'));
});

server.listen(8000, () => console.log('Server started on port 8000'));
