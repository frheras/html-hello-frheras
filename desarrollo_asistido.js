const ahora = new Date();
const hora = ahora.getHours();
const saludo = hora < 12 ? 'Buenos días' : hora < 18 ? 'Buenas tardes' : 'Buenas noches';
const fecha = ahora.toLocaleDateString('es-ES');

console.log(`${saludo}, Ingeniero de IA. Mi nombre es Félix. Fecha: ${fecha}.`);
