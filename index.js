// OOP

const lightCar = {
    weight: 1000,
    height: 2,
    speed: function (){
        console.log('100km/h');
    }
}

const nexia = Object.create(lightCar)
const matiz = Object.create(lightCar)

console.log(nexia.weight)
console.log(matiz.height)
