import chalk from 'chalk';
import getFileAsync from   './index.js';
import checkURLs from './http-validacao.js';


const path = process.argv;

async function processFile(pathFile) {
    const result = await getFileAsync(pathFile[2]);
    if(path[3] === 'validate'){
        console.log(chalk.green('Lista | Links Validados'), checkURLs(result));
    }else{
        console.log(chalk.yellow('Lista | Links'), result);
    }
    
}

processFile(path);