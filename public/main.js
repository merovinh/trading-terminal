const { app, BrowserWindow } = require('electron');



function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    //load the index.html from a url
    win.loadURL('http://localhost:3000');

    // Open the DevTools.
    win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

const fs = require('fs');
// try { fs.writeFileSync('myfile.txt', 'the text to write in the file', 'utf-8'); }
// catch (e) { alert('Failed to save the file !'); }

// const http = require('http');

// const server = http.listen(3000, 'localhost', () => {
//     console.log("ConneCted");
// })

// const net = require("net");

// Create a simple server
// var server = net.createServer(function (conn) {
//     console.log("Server: Client connected");

//     // If connection is closed
//     conn.on("end", function () {
//         console.log('Server: Client disconnected');
//         // Close the server
//         server.close();
//         // End the process
//         process.exit(0);
//     });

//     // Handle data from client
//     conn.on("data", function (data) {
//         data = JSON.parse(data);
//         console.log("Response from client: %s", data.response);
//     });

//     // Let's response with a hello message
//     conn.write(
//         JSON.stringify(
//             { response: "Hey there client!" }
//         )
//     );
// });

// // Listen for connections
// server.listen(3000, "localhost", function () {
//     console.log("Server: Listening");
// });



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const express = require('express');
const serv = express();
const bodyParser = require("body-parser");
const router = express.Router();


const http = require("http");


const host = 'localhost';
const port = 9191;


serv.use(bodyParser.urlencoded({ extended: false }));
serv.use(bodyParser.json());

// const requestListener = function (req, res) {
//     res.setHeader("My-Response", req);

//     // res.json({ a: 1 });

//     res.writeHead(200);
//     // res.end(`{"message": "This is a JSON response"}`);
// };

serv.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    res.header("Access-Control-Allow-Headers", "Content-Type, access-control-allow-origin");
    next();
});

const pathToJSON = "exchanges_API_Info.json";

serv.get("/exchanges", function (req, res) {
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));
    }
    res.json(exchanges);
});

serv.post("/add", function (req, res) {
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));
        exchanges.push(req.body);
        try { fs.writeFileSync(pathToJSON, JSON.stringify(exchanges), 'utf-8'); }
        catch (e) { console.log('Failed to save the file !'); }

    }
    else {
        try {
            fs.writeFileSync(pathToJSON, JSON.stringify([req.body]), 'utf-8');
            exchanges = [req.body];
        }
        catch (e) { console.log('Failed to save the file !'); }

    }

    res.json(exchanges);
});





const server = http.createServer(serv);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port} ABRA KADABRA`);

});