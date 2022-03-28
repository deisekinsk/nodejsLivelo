//how to read files in nodejs
//fs file system | promises

import chalk from 'chalk';
import * as fs from 'fs';

const consulta = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'



function extractLinks(textFile){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const result = textFile.match(regex);
    console.log(result);
}
extractLinks(consulta);

function findErro(erro){
    throw new Error(chalk.red(erro.code, 'Sem arquivo.'));
}

//função async
async function getFileAsync(pathFile){
    try {
    const textFile = await fs.promises
    .readFile(pathFile,{encoding:'utf-8'})
    console.log(chalk.green(textFile))
    } catch(erro){
        findErro(erro);
    } finally{
    console.log(chalk.yellow('Operação finalizada'));
    }
}

getFileAsync('./arquivos/texto1.md');
