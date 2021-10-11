import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
    plugins: [
        reactRefresh(),
        viteCommonjs(),
    ],
    build: {
        outDir: 'dist',
        minify: false,
    },
    server: {
        port: 3000,
    },
})