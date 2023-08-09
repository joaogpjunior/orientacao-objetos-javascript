import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

//const novoUser = new User('Davi', 'd@d', '2015-04-04', 'Estudante', true);
//console.log(novoUser.exibirInfos());

//const novoDocente = new Docente('Vitor', 'v@v', '2004-04-18', 'Docente', true);
//console.log(novoDocente.exibirInfos());

const novoUser = new User();

novoUser.nome = 'Junior';
novoUser.email = 'j@j';
novoUser.nascimento = '1976-03-10';
novoUser.role = 'Admin';
novoUser.ativo = true;

console.log(novoUser.exibirInfos());

console.log("");
console.log("----------------------------------------------");
console.log("");

const novoAdmin = new Admin();

novoAdmin.nome = 'Vitor';
novoAdmin.email = 'v@v.com';
novoAdmin.nascimento = '2004-04-18';
novoAdmin.role = 'Admin';
novoAdmin.ativo = true;

console.log(novoAdmin.exibirInfos());