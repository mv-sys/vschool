function clickHere() {
    var lightbulb = "off"
    if (lightbulb === 'on') {
        alert("The light is on")
    } else {
        alert("Its dark, can we please turn the light on!?")
    }
}

function clickHereNext() {
    var myArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

    for (var i = 0; i < myArray.length; i++) {
        console.log(i)
        console.log(myArray[i])
    }
}




//for (start; stop; howWeGetThere){ Code to be executed }

//Write a few loops based off numbers
//1. Loop from 99 - 207
for (var i = 99; i < 207; i++) {
    console.log(i)
}
//2. Loop from 1000 - 1200
for (var i = 1000; i < 1200; i++) {
    console.log(i)
}
//3. Loop backwards from 100 - 0
for (var i = 100; i > 25; i--) {
    console.log(i)
}


//Write a few arrays and loop through them
//1. ['a','b','c','d','e','f','g','h','i','j','k']
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
console.log(letters[0])

for (var i = 0; i < letters.length; i++) {
    console.log(letters[i])
}

//2. [1,2,3,4,5,6,7,8,9]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers[2])
for (var i = 0; i < numbers.length; i++) {
    [console.log(numbers[i])]
}

//3. ['gmc','toyota','jeep','subaru']
var carBrands = ['gmc', 'toyota', 'jeep', 'subaru']
console.log(carBrands[1][2])

for (var i = 0; i < carBrands.length; i++) {
    console.log(carBrands[i])
    if (carBrands[i] === 'jeep') {
        console.log('lets not flip over')
    } else if (carBrands[i] === 'toyota') {
        console.log('lets go up the canyon')
    } else if (carBrands[i] === 'suburu') {
        console.log('let me know so i can stay home')
    }
}
var number = 9
if (number % 3 === 0) {
    console.log("I have a remainder of 0 after being divided by 3")
}

var color = "yellow"
if (color === "yellow") {
    console.log("I am RED!")
} else if (color === "orange") {
    console.log("I'm blue")
}


//Create a few conditional statements

// var age
var age = 21

if (age <= 21) {
    console.log("more beer for me, sorry")
} else {

    console.log("SALUD")
}


// var animal
var animal = "llama"
if (animal === "dog") {
    console.log("THATS MY BESTFRIEND!")
} else if (animal === 'llama') {
    console.log("why do yo have a llama, named tina")
}

var person = {
    pets: ['goldfish', 'dog', 'dogtwo'],
    name: 'G'
}
console.log(person.pets[0])

//Loop through an array of names 3+ add a conditiool in that loop... Reference line #57-67

var names = ['Homer', 'Marge', 'Bart', 'Lisa']
for (var i = 0; i < names.length; i++) {
    console.log(names[i])
    if (names[i] === 'Bart') {
        console.log('eat my shorts')
    } else if (names[i] === 'Homer') {
        console.log('Doh')
    } else if (names[i] === 'Marge') {
        console.log('I dont think thats a very good idea')
    } else if (names[i] === 'Lisa') {
        console.log('If anyone wants me Ill be in my room')
    }

}


//Loop through an array of cities 3+

var cities = ['Buenos Aires', 'Madrid', 'Boston']
for (var i = 0; i < cities.length; i++) {
    console.log(cities[i])
    if (cities[i] === 'Buenos Aires') {
        console.log('drink fernet & eat empanadas in San Telmo')
    } else if (cities[i] === 'Madrid') {
        console.log('lets eat tapas & never leave')
    } else if (names[i] === 'Boston') {
        console.log('lets get korean bbq at Koreana')

    }

}



//Loop through an array of movie titles 3+

var movies = ['Nacho Libre', 'Donnie Darko', 'The Big Lebowski']

for (var i = 0; i < movies.length; i++) {
    console.log(movies[i])
    if (movies[i] === 'Big Lebowski') {
        console.log('The dude abides')
    } else if (movies[i] === 'Nacho Libre') {
        console.log('They dont think I know a buttload of crap about the Gospel, but I DO')
    } else if (movies[i] === 'Donnie Darko') {
        console.log('28 days, 6 hours, 42 minutes, & 12 seconds before the end of the world')
    }

}


// if Im feeling xtra put these into functions

function placeToLive(cities0, cities1) {
    console.log(cities0 + ', ' + cities1)
}
placeToLive('Salt Lake City', "Ogden")

function addTwoNumbersTogether (num1, num2){
    console.log(num1 + num2)
}
addTwoNumbersTogether(2,2)
addTwoNumbersTogether(8888,3425647589)