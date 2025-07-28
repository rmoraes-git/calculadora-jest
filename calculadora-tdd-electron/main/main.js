const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { somar, subtrair } = require('./operacoes');

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../renderer/renderer.js'),
      contextIsolation: true
    }
  });

  win.loadFile('renderer/index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('calcular', (_, { a, b, operacao }) => {
  if (operacao === 'soma') return somar(a, b);
  if (operacao === 'subtrai') return subtrair(a, b);
  return 0;
});