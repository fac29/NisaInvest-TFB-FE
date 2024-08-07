import fs from 'fs';
import path from 'path';

const filePath = path.resolve(
	'node_modules/@stripe/react-stripe-js/dist/react-stripe.d.ts'
);
const tsNoCheckLine = '// @ts-nocheck\n';

fs.readFile(filePath, 'utf8', (err, data) => {
	if (err) {
		console.error(`Error reading file: ${err}`);
		process.exit(1);
	}

	if (!data.startsWith(tsNoCheckLine)) {
		const fixedData = tsNoCheckLine + data;
		fs.writeFile(filePath, fixedData, 'utf8', (err) => {
			if (err) {
				console.error(`Error writing file: ${err}`);
				process.exit(1);
			}
			console.log(`Successfully added // @ts-nocheck to ${filePath}`);
		});
	} else {
		console.log(`// @ts-nocheck already present in ${filePath}`);
	}
});
