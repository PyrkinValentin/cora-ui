import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, '../build/styles/styles.css');

try {
	if (fs.existsSync(filePath)) {
		let cssContent = fs.readFileSync(filePath, 'utf8');

		cssContent = cssContent.replace(/\[([^\]]*?),\s+([^\]]*?)]/g, (match) => {
			return match.replace(/,\s+/g, ',');
		});

		fs.writeFileSync(filePath, cssContent, 'utf8');
		console.log('✨ [Cora UI] Successfully removed spaces after commas inside Tailwind arbitrary brackets.');
	} else {
		console.error(`❌ [Cora UI] Target CSS file not found at: ${filePath}`);
	}
} catch (error) {
	console.error('❌ [Cora UI] Error fixing spaces in CSS:', error);
}