const path = require('path');
const fs = require('fs');
import inquirer from 'inquirer';
const yesNoQues = [
	{
		name: 'type',
		type: 'list',
		choices: [
			{
				name: 'yes',
			},
			{
				name: 'no',
			},
		],
	},
];
async function piniaCrud(args) {
	if (!args[1]) {
		console.log('Please provide a name for the pinia store');
		return;
	}
	const storeName = argv[1];
	const rootPath = path
		.dirname(require.main.filename)
		.split('/node_modules/team-ness-scripts')[0];
	const serverOnRootPath = `${rootPath}/server`;
	const serverOnParentPath = `${rootPath}/server`;
	let serverPath = false;
	if (fs.existsSync(serverOnRootPath)) serverPath = serverOnRootPath;
	else if (fs.existsSync(serverOnParentPath)) serverPath = serverOnParentPath;

	if (serverPath) {
		let isThereRoute = false;
		const { dirname } = require('path');
		function piniaCrud(argv) {
			if (!argv[1]) {
				console.log('Please provide a name for the pinia store');
				return;
			}
			console.log(dirname(require.main.filename));
		}

		module.exports = piniaCrud;

		fs.readdirSync(`${serverPath}/routes`).forEach((file) => {
			if (file.includes('Routes') && file.split('Routes')[0] === storeName)
				isThereRoute = true;
		});

		if (!isThereRoute) {
			const shuldStop = await inquirer.prompt(yesNoQues);
		}
	}
}

module.exports = piniaCrud;
