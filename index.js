// String methods

const text = 'Hello World';
const password = '    Password     ';

// Length is a property
console.log('Ma`lumot uzunligi:', text.length);
console.log('Ma`lumot uzunlig:', password.length);

//Methods

console.log('1# Aniq positsiyadagi indexni aniqlash:', text.charAt(2))
console.log('2# Aniq positsiyadagi indexni aniqlash:', text[1])
console.log('Xarflarni katta registerda qilish:', text.toUpperCase())
console.log('Xarflarni kichik registerda qilish:', text.toLowerCase())
console.log('1# Matnni bosh va oxiridan kesish:', text.slice(0, 4))
console.log('1# Matnni bosh va oxiridan kesish:', text.substring(0, 2))
console.log('Ikki tarafdan space olib tashlash', password.trim())
console.log('Bosh tarafdan space olib tashlash', password.trimStart())
console.log('Oxiridan space olib tashlash', password.trimEnd())


//Number methods

const number = 12.42
const width = '100.32px'

console.log('Sonni yaxlitlab beradi', Math.round(number))
console.log('Sonni butun qismini olib beradi', Math.floor(number))
console.log('String ma;lumot turidan butun sonni qaytarib beradi', parseInt(width))
console.log('String ma\'\lumot turidan sonni qaytarib beradi', parseFloat(width))

