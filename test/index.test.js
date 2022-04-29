import getFileAsync from   '../index.js';
import { expect, test } from "@jest/globals";

//node v v14.19.1

const arrayResult =[
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe ('getFileAsync::', () => {
  it('deve ser uma função', () => {
    expect(typeof getFileAsync).toBe('function');
  })
  it('deve ser array de resultado', async () => {
    const result = await getFileAsync( './test/arquivo/texto1.md')
    expect(result).toEqual(arrayResult)
  })
  it('deve ser "Não há links"', async () =>{
    const result = await getFileAsync('./test/arquivo/texto2.md')
    expect(result).toBe('Não há links')
  })
  //criar um teste throw()

})