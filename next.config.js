/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
/* const runtimeCaching = require('next-pwa/cache') */

const nextConfig = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		mode: 'production',
		disable: false,
		/*     runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/], */
	},
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
})

module.exports = nextConfig
