/**
 * Patch to mitigate errors in wikiJS v2 on 18.x
 * author: Patrick Igiraneza
 * Date: 20222-05-06
 */

/******************************************************
 * Remove `exports` property in package.json of `node_modules/extract-files`
 * 
 * The module exports of the package caused an error in node version >16.x
 * This patch removes the `exports` property in the package.json file
 *****************************************************/
const fs = require('fs');

try{
  const package = fs.readFileSync('./node_modules/extract-files/package.json', 'utf8');
  const packageJson = JSON.parse(package);
  
  delete packageJson.exports;
  
  fs.writeFileSync('./node_modules/extract-files/package.json', JSON.stringify(packageJson, null, 2), 'utf8');
}catch(err){
  console.error(err);
}

console.log("✅ Patch applied successfully!")