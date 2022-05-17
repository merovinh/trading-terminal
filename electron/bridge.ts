import { contextBridge, ipcRenderer } from 'electron'
import { globalConfig } from './global_config'
import fs from 'fs';

const pathToJSON = "exchanges_API_Info.json";

export const api = {
  globalConfig:globalConfig,

  editExchange:(exchange:any)=>{
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));

        const editExchange = exchanges.filter((el:any) => el.id === exchange.id)[0];
        editExchange.name = exchange.name;
        editExchange.apiKey = exchange.apikey;
        editExchange.secret = exchange.secret;
        if (editExchange.password) editExchange.password = exchange.password;

        try { 
          fs.writeFileSync(pathToJSON, JSON.stringify(exchanges, null, 4), 'utf-8'); 
          return 'Exchange saved, Success!';
         }
        catch (e) { console.log('Failed to save the file !'); }
    }
  },

  deleteExchange:(exchangeId:string)=>{
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));

        const resultExchanges = exchanges.filter((el:any) => el.id !== exchangeId);

        try { fs.writeFileSync(pathToJSON, JSON.stringify(resultExchanges, null, 4), 'utf-8'); }
        catch (e) { console.log('Failed to save the file !'); }
    }
    return `Exchange deleted`;
  },

  addExchange:(newExchange:any)=>{
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));
        exchanges.push(newExchange);
        try { fs.writeFileSync(pathToJSON, JSON.stringify(exchanges, null, 4), 'utf-8'); }
        catch (e) { console.log('Failed to save the file !'); }

    }
    else {
        try {
            fs.writeFileSync(pathToJSON, JSON.stringify([newExchange], null, 4), 'utf-8');
            exchanges = [newExchange];
        }
        catch (e) { console.log('Failed to save the file !'); }

    }

    return exchanges;
  },

  getExchanges:()=> {
    let exchanges = [];
    if (fs.existsSync(pathToJSON)) {
        exchanges = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));
    }
    return exchanges;
  },

   /* 
   The function below can accessed using `window.Main.sendMessage`
   */
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Main', api)
