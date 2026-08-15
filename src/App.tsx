// @ts-nocheck
import { useEffect, useRef } from 'react';
import { startGame } from './game/main.js';

export default function App() {
  const hostRef = useRef(null);

  useEffect(() => {
    if (!hostRef.current) return;
    const game = startGame(hostRef.current);
    return () => game.dispose();
  }, []);

  return <div ref={hostRef} className="game-shell" />;
}
