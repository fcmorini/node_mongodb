const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "test"), (error) => {
//   if (error) {
//     return console.log(`Erro: ${error}`);
//   }
//   console.log("Diretório criado.");
//   // Criar um arquivo
// });

// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Este é um teste",
//   (error) => {
//     if (error) {
//       return console.log(`Erro: ${error}`);
//     }
//     console.log("Arquivo criado.");
//     // Modificando o arquivo
//     fs.appendFile(
//       path.join(__dirname, "test", "test.txt"),
//       "\nAdicionando ao arquivo",
//       (error) => {
//         if (error) {
//           return console.log(`Erro: ${error}`);
//         }
//         console.log("Adicionado com sucesso!");
//       }
//     );
//   }
// );

fs.readFile(
  path.join(__dirname, "test", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log(`Erro: ${error}`);
    }
    console.log(data);
  }
);
