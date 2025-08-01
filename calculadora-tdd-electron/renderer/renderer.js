const { contextBridge, ipcRenderer } = require('electron');



contextBridge.exposeInMainWorld('api', {
  calcular: (valor, operacao) => ipcRenderer.invoke('calcular', { valor, operacao }),
  calcularFrete:(valor, operacao) => ipcRenderer.invoke('calcular', {valor, operacao}),
  calcularDesconto:(valor, operacao) => ipcRenderer.invoke('calcular', {valor, operacao}),
  avaliarTemperatura:(valor, operacao) => ipcRenderer.invoke('calcular', {valor, operacao}),
});