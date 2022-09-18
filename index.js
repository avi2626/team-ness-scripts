#!/usr/bin/env node
const piniaCrud = require('./scripts/piniaCrud.js');

const [, , ...args] = process.argv;

switch (args[0]) {
	case 'piniaCrud': {
		piniaCrud(args);
		break;
	}
	case 'help': {
		console.log('All Commands');
	}
	default: {
		console.log(
			`${
				args[0] ? 'Command not found' : 'No command found'
			}. Type 'ness help' to get all available commands`
		);
	}
}
