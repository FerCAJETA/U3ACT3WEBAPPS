let firstName = 'Fer'
let lastName = 'Caamal'
let country = 'México'
let city = 'Playa del Carmen'
let age = 20
let isMarried = false
let year = 2004

console.log("firstName:", typeof firstName)
console.log("lastName:", typeof lastName)
console.log("country:", typeof country)
console.log("city:", typeof city)
console.log("age:", typeof age)
console.log("isMarried:", typeof isMarried)
console.log("year:", typeof year)

//Check if type of '10' is equal to 10

console.log("'10' == 10:", typeof '10' === typeof 10)

//Check if parseInt('9.8') is equal to 10 
console.log("parseInt('9.8') == 10:", parseInt('9.8') === 10)

//Boolean value is either true or false.
console.log(!!1)
console.log(!!"hi!  x")
console.log(!!{})

console.log(!!0)
console.log(!!"")
console.log(!!null)

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() 
console.log("4 > 3:", 4 > 3)
console.log("4 >= 3:", 4 >= 3)
console.log("4 < 3:", 4 < 3)
console.log("4 <= 3:", 4 <= 3)
console.log("4 == 4:", 4 == 4)
console.log("4 === 4:", 4 === 4)
console.log("4 != 4:", 4 != 4)
console.log("4 !== 4:", 4 !== 4)
console.log("4 != '4':", 4 != '4')
console.log("4 == '4':", 4 == '4')
console.log("4 === '4':", 4 === '4')

//6 Use the Date object to do the following activities 
let now = new Date();
console.log("Estamos en el año:", now.getFullYear())
console.log("Mes actual en número:", now.getMonth() + 1) // El conteo empieza desde 0
console.log("La fecha de hoy es:", now.getDate())
console.log("Hoy es el día (en número):", now.getDay())
console.log("Hora exacta en este momento:", now.getHours())
console.log("Minutos actuales:", now.getMinutes())
console.log("Segundos transcurridos desde el 1 de enero de 1970:", Math.floor(Date.now() / 1000))

// Script to calculate the area of a triangle
let base = prompt("Por favor, ingresa la longitud de la base del triángulo:")
let height = prompt("Ahora ingresa la altura del triángulo:")
let area = 0.5 * base * height
console.log(`El área calculada del triángulo es: ${area}`)

// Script to calculate the perimeter of a triangle
let sideA = parseFloat(prompt("Introduce la medida del lado A del triángulo:"))
let sideB = parseFloat(prompt("Introduce la medida del lado B del triángulo:"))
let sideC = parseFloat(prompt("Introduce la medida del lado C del triángulo:"))
let perimeter = sideA + sideB + sideC
console.log(`El perímetro total del triángulo es: ${perimeter}`)
