const nomesPessoas = ['Alberto','Pedro','Darquio','Rafa'];
const idades = [1,23,92,8,58,60,20,87,22,36];

// for (let index = 0; index < idades.length; index++) {
//     console.log(idades[index]);
// }



idades.forEach(function(value,index,idades) {
    console.log(value,index,idades);
})