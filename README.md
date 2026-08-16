# CIDADE EM GUERRA

Jogo de exploração e sobrevivência urbana — **Three.js + pixel art + top-down**.
Você é o Sobrevivente-07: acorda na Base Águia e precisa vasculhar uma cidade
em ruínas atrás de comida, medicamentos e materiais.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço exibido (geralmente `http://localhost:5173`).
O Vite serve o projeto via HTTP — **não abra o `index.html` direto via `file://`**,
pois ES Modules e assets gerados podem ser bloqueados pelo navegador.

### Testando o build de produção

```bash
npm run build
npm run preview
```

Ou sirva a pasta `dist/` com qualquer servidor estático:

```bash
cd dist && python -m http.server 8000
# acesse http://localhost:8000
```

## Controles

| Tecla | Ação |
|-------|------|
| `W A S D` / setas | mover (8 direções, diagonal normalizada) |
| `E` | interagir (vasculhar, abrir, examinar) |
| `I` | inventário (abre/fecha) |
| `ESC` | pausa / fechar painéis |
| `scroll` | zoom da câmera |

## Checklist de teste do MVP

1. **Novo Jogo** → você nasce na Base Águia, perto da fogueira.
2. Caminhe pela cidade — o setor atual muda no HUD (Residencial, Centro,
   Comercial, Industrial, Zona Abandonada).
3. Aproxime-se de caixas, geladeiras, carros e entulho → aparece `[E]`.
   Vasculhe alguns; o loot entra nos suprimentos (toast + HUD).
4. Abra o inventário (`I`) e use comida/medicamentos para curar.
5. Na Zona Abandonada a vida drena — se zerar, você desmaia e volta à base.
6. Durma na cama da base → vida cheia + save automático. Também dá para
   salvar pela pausa (`ESC` → SALVAR JOGO).
7. Feche a aba, reabra, clique em **Continuar** → posição, vida,
   inventário e objetos já saqueados são restaurados.

## Arquitetura

```
src/game/
├── main.js            ← entrada: cria o Game e inicia o loop
├── core/              Game · Renderer · CameraRig · Input · Time · Util
├── world/             World · CityMap · Collision · Textures · Particles
├── entities/          Entity → Building · Vehicle · Tree · Prop
├── player/            Player · PlayerController
├── systems/           Interaction · Inventory · Loot · Save
├── ui/                UIManager · HUD · InventoryUI · MainMenu · PauseMenu
├── audio/             AudioManager (Web Audio procedural)
└── data/              items/loot tables · layout da cidade
```

- Câmera `OrthographicCamera` a 90° com suavização, zoom e limites de mapa.
- Estética pixel: resolução interna reduzida + upscale, `NearestFilter`
  em todas as texturas, dithering, paletas limitadas.
- Texturas 100% procedurais via Canvas (paredes, telhados, carros, barris…).
- `InstancedMesh` para postes, grama e entulho; geometrias/materiais
  compartilhados; shadow camera seguindo o jogador.
- Save em `localStorage` (posição, vida, inventário, objetos saqueados).

## Expansões futuras (arquitetura preparada)

NPCs, facções, combate, crafting, veículos dirigíveis, clima e ciclo dia/noite
podem crescer sobre `Entity`, `InteractionSystem`, `InventorySystem` e o
sistema de distritos sem reescrever o núcleo.
