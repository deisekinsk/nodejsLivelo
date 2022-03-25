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

//lógica simples
function getFile(pathFile) {
    fs.readFile(pathFile,{encoding:'utf-8'}, (erro, texto) =>{

        if(erro){
            findErro(erro);
        }

        console.log(chalk.green(texto))
    })
}

getFilePro('./arquivos/texto1.md');
