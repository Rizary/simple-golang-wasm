
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import '../wasm_exec.js';
import App from './App';

const projectRootDir = path.resolve(__dirname);
const wasm = path.resolve(projectRootDir, 'min.wasm');
const go = new Go();

WebAssembly.instantiateStreaming(fetch(wasm), go.importObject).then(result => {
  go.run(result.instance);
});

ReactDOM.render(<App />, document.getElementById('root'));