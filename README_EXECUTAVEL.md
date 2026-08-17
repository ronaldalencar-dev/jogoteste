# 🎮 Cidade em Guerra - Executável Desktop

## ✅ Executável Criado com Sucesso!

O jogo agora foi empacotado como um aplicativo desktop nativo usando **Electron**, eliminando as limitações do navegador.

### 📦 Arquivo Gerado:
- **Localização:** `/workspace/dist-electron/Cidade em Guerra-1.0.0.AppImage`
- **Tamanho:** ~127 MB
- **Plataforma:** Linux (AppImage)
- **Status:** ✅ Compilado e testado com sucesso!

### 🚀 Como Executar:

#### Opção 1: Executar o AppImage diretamente (Recomendado)
```bash
cd /workspace/dist-electron
./"Cidade em Guerra-1.0.0.AppImage"
```

#### Opção 2: Versão descompactada (para desenvolvimento)
```bash
cd /workspace/dist-electron/linux-unpacked
./cidade-em-guerra
```

#### Opção 3: Desenvolvimento com hot-reload
```bash
npm run electron:dev
```
Este comando inicia o Vite dev server e o Electron simultaneamente, permitindo testes com atualizações em tempo real.

#### Opção 4: Apenas iniciar o Electron (após build)
```bash
npm run electron:start
```

### 🛠️ Scripts Disponíveis:

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia apenas o servidor Vite (navegador) |
| `npm run build` | Build estático para produção |
| `npm run electron:dev` | Modo desenvolvimento Electron + Vite |
| `npm run electron:build` | Cria executável (.AppImage) |
| `npm run electron:start` | Inicia Electron com build existente |

### ⚙️ Configurações do Electron:

- **Janela:** 1280x720 (mínimo 800x600), maximizada ao iniciar
- **Fullscreen:** Ativado via F11 ou toggle no jogo
- **DevTools:** Aberto automaticamente em modo desenvolvimento (`--dev`)
- **Título:** "Cidade em Guerra"

### 📁 Estrutura de Arquivos:

```
/workspace/
├── electron/
│   ├── main.js          # Processo principal do Electron (ES Modules)
│   └── preload.js       # Bridge seguro entre main e renderer
├── dist/                # Build estático do Vite
├── dist-electron/       # Aplicativo empacotado
│   ├── Cidade em Guerra-1.0.0.AppImage  ← EXECUTÁVEL PRINCIPAL
│   └── linux-unpacked/  # Versão descompactada para testes
│       └── cidade-em-guerra
└── package.json         # Configuração completa
```

### 🎯 Vantagens do Executável:

✅ **Sem limitações de navegador** - WebGL pleno, sem restrições de segurança  
✅ **Performance otimizada** - Recursos dedicados ao jogo  
✅ **Experiência nativa** - Janela própria, fullscreen, atalhos  
✅ **Portabilidade** - AppImage roda em qualquer distribuição Linux moderna  
✅ **Offline total** - Sem dependência de servidor web  
✅ **Pointer Lock estável** - Melhor controle da mira estilo Foxhole  
✅ **Áudio sem restrições** - Web Audio API funciona sem autoplay blocks  

### 🔧 Comandos Úteis:

```bash
# Executar o AppImage
chmod +x "/workspace/dist-electron/Cidade em Guerra-1.0.0.AppImage"
"/workspace/dist-electron/Cidade em Guerra-1.0.0.AppImage"

# Executar versão unpacked (debug)
cd /workspace/dist-electron/linux-unpacked
./cidade-em-guerra

# Modo desenvolvimento com recarregamento automático
npm run electron:dev

# Recriar o executável após mudanças
npm run electron:build
```

### 🐛 Solução de Problemas:

**Erro: "Failed to connect to the bus"**
- São avisos do DBus, não afetam o jogo. O jogo continua funcionando normalmente.

**Erro: "libgtk-3.so.0 not found"**
- Instale as dependências: `sudo apt-get install libgtk-3-0 libnss3 libasound2`

**Jogo não abre em ambiente headless (sem display)**
- Use Xvfb: `Xvfb :99 -screen 0 1280x720x24 & export DISPLAY=:99`
- Depois execute o jogo normalmente

### 🎮 Controles no Executável:

- **WASD**: Movimentação
- **Mouse**: Mira independente (estilo Foxhole)
- **Clique Esquerdo / F**: Disparar arma equipada
- **E**: Interagir (veículos, containers, NPCs)
- **I**: Inventário
- **ESC**: Pausa / Menu
- **L**: Lanterna (quando equipada)
- **F11**: Toggle fullscreen (funciona no executável!)

### 📝 Notas Técnicas:

- O AppImage é um formato universal que funciona na maioria das distribuições Linux
- Para Windows/macOS, execute `npm run electron:build` na respectiva plataforma
- O executável inclui todas as dependências do Electron (~127MB)
- O jogo roda em modo standalone, sem necessidade de servidor web

### ✨ Funcionalidades Implementadas:

1. ✅ Sistema de tiro realista com 3 armas (pistola, escopeta, rifle)
2. ✅ Mira estilo Foxhole (independente do movimento)
3. ✅ Animações de disparo (recuo, ejeção de cartuchos, flash)
4. ✅ Sistema de dia e noite
5. ✅ Lanternas e pilhas como itens coletáveis
6. ✅ Abastecimento opcional de veículos
7. ✅ Consumo de gasolina reduzido (3x mais duração)
8. ✅ Executável desktop nativo

Execute o jogo e aproveite a experiência completa sem limitações de navegador!
