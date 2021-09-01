// function merhabafunc() {
//     return "Merhaba"
// }

// const merhaba=function(name) {
//     console.log("Merhaba "+name);
// }
// merhaba("Caner")

// Immediately Invoked Function Expression (IIFE)

// (function(name) {
//     console.log("Merhaba "+ name);
// })("Caner");


const database = {
    host:"localhost",
    add:function() {
        console.log("eklendi.");
    },
    get:function() {
        console.log("alındı.");
    },
    update:function(id) {
        console.log(`Id:${id} Güncellendi.`);
    },
    delete:function(id) {
        console.log(`Id:${id} Silindi.`);
    }
    
}
console.log(database.host);
database.add();
database.update(10);