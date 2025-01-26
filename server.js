const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;

    console.log("Got request for " + pathName);

    if (pathName === "/login") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Login successful");
    }
    else if (pathName === "/version") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("2.1.1");
    }
    else if (pathName === "/catalog") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("test,retro");
    }
    else if (pathName === "/loadsong") {
        const song = parsedUrl.query.song;

        if (!song) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end("Missing 'song' parameter");
            return;
        }

        const filePath = path.join(__dirname, song); // Resolve to prevent directory traversal

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("Failed to load song file");
                console.error("Error reading file:", err.message);
            } else {
                res.writeHead(200, { 'Content-Type': 'audio/mpeg' }); // Assuming audio file
                res.end(data);
            }
        });
    }
    else if (pathName === "/content")
    {
        const code = parsedUrl.query.code;

        if (!code)
        {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end();
        }
        else {
            fs.readFile(code, (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end("Failed to load song file");
                    console.error("Error reading file:", err.message);
                } else {
                    res.writeHead(200, { 'Content-Type': 'audio/mpeg' }); // Assuming audio file
                    res.end(data);
                }

            });
        }
    }
    else if (pathName === "/redeemcode")
    {
        const code = parsedUrl.query.code;
        if (!code)
        {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end();
        }
        else {
            if (code == "rnvj-jfn-erhcf-htop")
            {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write("idk");
                res.end();
            }
        }
    }
    else if (pathName === "/logout")
    {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        console.warn("URL Not Found: " + req.url);
        res.end("Not Found");
    }
});

server.listen(9090, () => {
    console.log('Server running at port 9090');
});
