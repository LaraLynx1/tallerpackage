import 'dotenv/config';
import moment from 'moment';
import chalk from 'chalk';

const x = 0;
let y = 1;

let z = 3;

//require('dotenv').config();

console.log(process.env.URL);
console.log(process.env.EDAD);

moment().format();
let day = moment('2024-02-15');

console.log('Fecha', day);

console.log('Fecha', moment('12-25-1995', 'MM-DD-YYYY'));
console.log('Fecha', moment('12/25/1995', 'MM-DD-YYYY'));
console.log('Fecha', moment('12-25-1995', ['MM-DD-YYYY', 'YYYY-MM-DD']));

console.log('Hola Laura');

console.log('Valor x:', x);

if (process.env.AMBIENTE == 'DESARROLLO') {
	console.log('Ex1:', chalk.blue('Hello world!'));
	console.log('VEx2:', chalk.blue('Hello') + ' World' + chalk.red('!'));
} else {
	console.log('Ex1:', 'Hello world!');
	console.log('VEx2:', 'Hello' + ' World');
}

var sinvalor;

console.log(sinvalor2);
