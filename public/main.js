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
    win.setMenu(null)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
let mainWindow = null

app.whenReady(
).then(() => {
    const { screen } = require('electron')
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    mainWindow = new BrowserWindow({
        width, height, minHeight: height, minWidth: 730, webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    mainWindow.removeMenu()
    mainWindow.loadURL('http://localhost:3000');
    // createWindow()
})

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
        try { fs.writeFileSync(pathToJSON, JSON.stringify(exchanges, null, 4), 'utf-8'); }
        catch (e) { console.log('Failed to save the file !'); }

    }
    else {
        try {
            fs.writeFileSync(pathToJSON, JSON.stringify([req.body], null, 4), 'utf-8');
            exchanges = [req.body];
        }
        catch (e) { console.log('Failed to save the file !'); }

    }

    res.json(exchanges);
});

serv.post("/deleteExchange", function (req, res) {
    // {id:wewgr235235}
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));

        const resultExchanges = exchanges.filter(el => el.id !== req.body.id);

        try { fs.writeFileSync(pathToJSON, JSON.stringify(resultExchanges, null, 4), 'utf-8'); }
        catch (e) { console.log('Failed to save the file !'); }
    }
    res.send(`Exchange deleted`);
});

serv.post("/editExchange", function (req, res) {
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));

        const editExchange = exchanges.filter((el) => el.id === req.body.id)[0];
        editExchange.name = req.body.name;
        editExchange.apiKey = req.body.apikey;
        editExchange.secret = req.body.secret;
        if (editExchange.password) editExchange.password = req.body.password;

        try { fs.writeFileSync(pathToJSON, JSON.stringify(exchanges, null, 4), 'utf-8'); res.send('Exchange saved, Success!') }
        catch (e) { console.log('Failed to save the file !'); }

    }
})


const server = http.createServer(serv);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);

});