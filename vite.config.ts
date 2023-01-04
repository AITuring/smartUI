import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
// import Unocss from 'unocss/vite';
import Unocss from './config/unocss';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // }),
    Unocss(),
  ],

  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife'],
    },
  },
});
