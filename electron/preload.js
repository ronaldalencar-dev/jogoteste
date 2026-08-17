import { contextBridge, ipcRenderer } from 'electron';

// Expor APIs seguras para o renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Informações do ambiente
  getPlatform: () => ipcRenderer.invoke('get-platform'),
  isElectron: () => ipcRenderer.invoke('is-electron'),
  
  // Controle da janela
  closeWindow: () => ipcRenderer.send('close-window'),
  toggleFullscreen: () => ipcRenderer.send('toggle-fullscreen')
});
