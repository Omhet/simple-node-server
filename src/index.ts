import http from 'http';
import 'dotenv/config.js';

const port = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
    const data = req.headers;
    
    res.end(JSON.stringify(data, null, 2))
});

server.listen(port, () => {
    console.log(`Server started. Listening on ${port}`)
});
