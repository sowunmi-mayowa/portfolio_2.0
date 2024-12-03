import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY),
      'process.env.VITE_AUTH_DOMAIN': JSON.stringify(env.VITE_AUTH_DOMAIN),
      'process.env.VITE_PROJECT_ID': JSON.stringify(env.VITE_PROJECT_ID),
      'process.env.VITE_STORAGE_BUCKET': JSON.stringify(env.VITE_STORAGE_BUCKET),
      'process.env.VITE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_MESSAGING_SENDER_ID),
      'process.env.VITE_APP_ID': JSON.stringify(env.VITE_APP_ID),
      'process.env.VITE_MEASUREMEN_ID': JSON.stringify(env.VITE_MEASUREMEN_ID),
    },
    plugins: [react()],
  }
})