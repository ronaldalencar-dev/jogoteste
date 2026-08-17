import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

function createWindow() {
  // Criar janela em tela cheia para melhor experiência de jogo
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    fullscreen: false,
    fullscreenable: true,
    frame: true,
    backgroundColor: '#1a1a1a',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'icon.png'),
    title: 'Cidade em Guerra'
  });

  // Carregar o jogo
  const isDev = process.argv.includes('--dev');
  
  if (isDev) {
    // Em desenvolvimento, carrega do servidor Vite
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    // Em produção, carrega o build estático
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Maximizar ao iniciar
  mainWindow.maximize();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Aguarda o app estar pronto
app.whenReady().then(createWindow);

// Fecha todas as janelas ao sair (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recria a janela quando ativado no macOS
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers para funcionalidades nativas
ipcMain.handle('get-platform', () => {
  return process.platform;
});

ipcMain.handle('is-electron', () => {
  return true;
});

// Permite que o jogo feche a janela (para menu de sair)
ipcMain.on('close-window', () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

// Toggle fullscreen
ipcMain.on('toggle-fullscreen', () => {
  if (mainWindow) {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
  }
});
