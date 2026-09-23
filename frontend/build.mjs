// Generated distribution build; make changes in baoabaob/codlet-plugins
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildPlugin} from './build-plugin.mjs';
const base=dirname(fileURLToPath(import.meta.url)),root=resolve(base,'..');
const manifest=JSON.parse(await readFile(resolve(root,'codlet.json'),'utf8'));
const result=await buildPlugin(base,"src/desktop/entry.js");
const destination=resolve(root,manifest.renderer.entry);
await mkdir(dirname(destination),{recursive:true});
await writeFile(destination,result.code);
const {buildDesktopHost}=await import('./build-host.mjs');
await writeFile(resolve(root,manifest.host.entry),(await buildDesktopHost(base)).code);
