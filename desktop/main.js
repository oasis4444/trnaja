const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 650,
    icon: path.join(__dirname, 'build', 'icon.png'),
    title: 'TR Naja — Gestion',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Retire le menu par défaut (Fichier / Edition / Affichage...) pour un rendu "logiciel" plus propre.
  Menu.setApplicationMenu(null);

  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  // Décommentez la ligne suivante pour ouvrir les outils de développement (debug) :
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
