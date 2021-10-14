
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
// import '../wasm_exec.js';
import App from './App';

const projectRootDir = path.resolve(__dirname);
const wasm = fetch(path.resolve(projectRootDir, 'min.wasm'));
const go = new Go();

wasm.then(response =>
    response.arrayBuffer()
).then(function(bytes) {
    var valid = WebAssembly.validate(bytes);
    console.log("The given bytes are "
      + (valid ? "" : "not ") + "a valid wasm module");
});

WebAssembly.instantiateStreaming(wasm, go.importObject).then(result => {
  go.run(result.instance);
});

ReactDOM.render(<App />, document.getElementById('root'));