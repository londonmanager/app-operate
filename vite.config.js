import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL =
  'http://londonmanager-frontend-operate.s3-website-sa-east-1.amazonaws.com'
const BASE_URL_LOCAL = 'http://localhost:5173'

export default defineConfig({
  plugins: [react()],
  base: BASE_URL
})
