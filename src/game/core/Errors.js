/* Errors — painel visível de falha de boot (nada de tela preta muda) */

let shown = false;

export function showFatal(err) {
  if (shown) return;
  shown = true;
  const msg = err && err.message ? err.message : String(err);
  const stack = err && err.stack ? String(err.stack).split('\n').slice(0, 6).join('\n') : '';
  console.error('[CIDADE EM GUERRA] falha no boot:', err);

  const el = document.createElement('div');
  el.style.cssText = `
    position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center;
    background: rgba(6,7,4,0.94); font-family: 'VT323', 'Courier New', monospace; color: #cdd3b8; padding: 20px;
  `;
  el.innerHTML = `
    <div style="max-width: 640px; width: 100%; background: #161a12; border: 3px solid #6a2a20; padding: 22px 26px;
                box-shadow: 6px 6px 0 rgba(0,0,0,0.6);">
      <div style="font-family: 'Press Start 2P', monospace; font-size: 14px; color: #e05a44; text-shadow: 2px 2px 0 #000; margin-bottom: 12px;">
        FALHA NA TRANSMISSÃO
      </div>
      <div style="font-size: 24px; line-height: 1.2; color: #f0b0a4; margin-bottom: 14px;">${escapeHtml(msg)}</div>
      ${stack ? `<pre style="font-size: 16px; color: #8b927a; background: #0d100a; border: 1px solid #3d4430; padding: 10px; overflow: auto; white-space: pre-wrap;">${escapeHtml(stack)}</pre>` : ''}
      <div style="font-size: 21px; color: #cdd3b8; margin-top: 14px; line-height: 1.4;">
        Como resolver:<br/>
        1. Rode <b style="color:#d8b430;">npm install</b> e depois <b style="color:#d8b430;">npm run dev</b>, abrindo o endereço que o terminal mostrar (ex.: http://localhost:5173).<br/>
        2. Para produção: <b style="color:#d8b430;">npm run build</b> e sirva a pasta <b style="color:#d8b430;">dist/</b> (ex.: <span style="color:#8b927a;">cd dist &amp;&amp; python -m http.server</span>).<br/>
        3. Não abra o index.html direto pelo explorador de arquivos (file://).<br/>
        4. Verifique se o navegador tem aceleração gráfica/WebGL habilitada.
      </div>
    </div>
  `;
  document.body.appendChild(el);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}
