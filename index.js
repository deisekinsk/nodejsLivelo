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

    return result.length === 0? 'Não há links': result;
}

function findErro(erro){
    throw new Error(chalk.red(erro.code, 'Sem arquivo.'));
}

//função async
export default async function getFileAsync(pathFile){
    try {
    const textFile = await fs.promises.readFile(pathFile,{encoding:'utf-8'})
    return extractLinks(textFile);
    
    } catch(erro){
        findErro(erro);
    }
}