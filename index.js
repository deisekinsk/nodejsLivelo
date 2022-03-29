//how to read files in nodejs
//fs file system | promises

import chalk from 'chalk';
import * as fs from 'fs';


function extractLinks(textFile){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const result = [];
    let cont;

    while((cont = regex.exec(textFile)) !== null){
        result.push({ [cont[1]]: cont[2]})
    }

    return result;
}

function findErro(erro){
    throw new Error(chalk.red(erro.code, 'Sem arquivo.'));
}

//função async
async function getFileAsync(pathFile){
    try {
    const textFile = await fs.promises.readFile(pathFile,{encoding:'utf-8'})
    console.log(extractLinks(textFile))
    
    } catch(erro){
        findErro(erro);
    } finally{
    
        console.log(chalk.yellow('Operação finalizada'));
    }
}

getFileAsync('./arquivos/texto1.md');
