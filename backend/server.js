//server.js file
const http = require("http");
const app = require("./app");

//formats the port in number if possible
const normalizedPort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    }
    return false;
};

const port = normalizedPort(process.env.PORT || 8000);
app.set("port", port);

//handle server errors
const errorHandler = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port: " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges.");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use.");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

//create server
const server = http.createServer(app);

//server listen and error handlers
server.on("error", errorHandler);
server.on("listening", () => {
    const address = server.adress;
    const bind = typeof address === "string" ? "pipe " + address : "port " + port;
    console.log("Listening on " + bind);
});

server.listen(port);
