/* Re-exportações para manter Building.js focado (evita ciclo) */
export {
  WALL_TEX, WALL_TEX_DMG, WALL_PALETTES, GLASS_TEX, signTex,
  geoBox, geoCyl, geoPlane, matLambert, matBasic, matTex,
} from '../world/Textures.js';
import { mulberry32 } from '../core/Util.js';

export function mulberrySeed(strId) {
  let h = 2166136261;
  for (let i = 0; i < strId.length; i++) {
    h ^= strId.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return mulberry32(h >>> 0);
}
