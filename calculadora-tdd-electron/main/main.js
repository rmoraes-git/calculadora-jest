const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const{calcularFrete, calcularDesconto, avaliarTemperatura} = require('./operacoes');

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

ipcMain.handle('calcular', (_, { valor, operacao }) => {
  if (operacao === 'calcularFrete') return calcularFrete(valor)
  if (operacao === 'calcularDesconto') return calcularDesconto(valor)
  if (operacao === 'avaliarTemperatura') return avaliarTemperatura(valor)
  
  return 0;
});