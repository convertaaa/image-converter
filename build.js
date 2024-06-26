const esbuild = require('esbuild');

esbuild.build({
	entryPoints: ['src/modules.ts'],
	outfile: 'dist/bundle.ts',
	bundle: true,
	format: 'esm',
	platform: 'node',
}).catch(() => process.exit(1));
