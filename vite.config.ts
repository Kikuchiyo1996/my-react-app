import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	/**
	 * ! 项目别名
	 */
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
	},
	/**
	 * ! 开发服务器
	 */
	server: {
		port: 5173,
		open: true,
		host: true,
		proxy: {
			'/usapi': {
				target: '',
				changeOrigin: true,
				rewrite: (servePath) => servePath.replace(/^\/usapi/, ''),
			},
		},
	},
})
