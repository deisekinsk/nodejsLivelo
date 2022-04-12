import chalk from 'chalk';
import getFileAsync from   './index.js';
import urlCheck from './http-validacao.js';


const path = process.argv;

async function fileProcess(pathFile) {
    const result = await getFileAsync(pathFile[2]);
    if (path[3] === 'validar') {
      console.log(chalk.yellow('links validados'), 
      await urlCheck(result));
    } else {
      console.log(chalk.yellow('lista de links'), result);
    }
  }

fileProcess(path);