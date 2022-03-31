import getFileAsync from   './index.js';
import chalk from 'chalk';

const path = process.argv;

async function processFile(pathFile) {
    const result = await getFileAsync(pathFile[2]);
    console.log(chalk.yellow('Lista de Links'), result)
}

processFile(path);