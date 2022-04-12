import fetch from 'node-fetch';
import * as fs from 'fs';

function findErro(erro){
  throw new Error (erro.message);

}


async function statusCheck(arrayURLs)
{
  try{
    const arrayStatus = await 
    Promise
    .all(arrayURLs
      .map(async url => {
        const res = await fetch(url);
        return res.status;
      }));
      return arrayStatus;  
  }catch(erro){
    findErro(erro);
  }
  
}

function makeArrayURLs (arrayLinks){
    return arrayLinks
      .map(objectLink => Object
      .values(objectLink)
      .join());
}

export default async function urlCheck(arrayLinks) {
  const links = makeArrayURLs(arrayLinks);
  const statusLinks = await statusCheck(links);
  
  const result = arrayLinks.map((object, i) => ({
    ...object,
    status: statusLinks[i]
  }))
  return result;
}