// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
    build: {
        rollupOptions: {
            input: 'index.html' // 루트 디렉토리에 있는 index.html을 진입점으로 지정
        }
    }
    // root: '.', // 이 부분에서 프로젝트의 루트 디렉토리를 지정합니다.
    // build: {
    //     rollupOptions: {
    //         input: 'dist/index.html' // 여기에서 진입 파일을 지정합니다.
    //     }
    // }
});
