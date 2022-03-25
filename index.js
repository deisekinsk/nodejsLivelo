//how to read files in nodejs
//fs file system | promises

import chalk from 'chalk';
import * as fs from 'fs';

function findErro(erro){
    throw new Error(chalk.red(erro.code, 'Sem arquivo.'));
}

//função que pegar arquivos robustos
function getFilePro(pathFile){
    fs.promises.readFile(pathFile, {encoding:'utf-8'})
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => findErro(erro))
}



getFilePro('./arquivos/texto1.md');
