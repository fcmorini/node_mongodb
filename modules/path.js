const path = require("path");

// Basename
console.log(path.basename(__filename));

// Diretorio do arquivo
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar um objeto path
console.log(path.parse(__filename));

// Criar caminhos
console.log(path.join(__dirname, "test", "test.html"));
