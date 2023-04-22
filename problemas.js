const producto = require('./producto.js');
const DAO = require('./DAO.js');
const fs = require('fs');

const texto = fs.readFileSync("./productos.txt", "utf-8");
const filas = texto.split("\n");
const Productos = filas.map((fila) => fila.split(", "));

const añadirProductos = () => {
	let productos = [];
	for(let p of Productos) {
		productos.push(DAO(p[0], p[1], p[2], p[3], p[4], p[5], p[6]));
	}
	return productos
}
async function x(){
	let productos = await añadirProductos();
	console.log(productos[0]);
}
x();
