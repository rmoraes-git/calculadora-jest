const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  calcular: (a, b, operacao) => ipcRenderer.invoke('calcular', { a, b, operacao })
});