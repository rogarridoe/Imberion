import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 3000;
const base = process.cwd();

const server = http.createServer((req, res) => {
  let filePath = path.join(base, req.url === '/' ? '/index.html' : req.url);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200);
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});