/* function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
};

// Write your code below here
Shape.prototype.calcPerimeter = function () {
    let perimeter;
    perimeter = this.sides * this.sideLength;
    console.log("The perimeter of " + this.name + ' is ' + perimeter);
};

let square = new Shape('square', 4, 5);
let triangle = new Shape('Triangle', 3, 3);

square.calcPerimeter();
triangle.calcPerimeter();

 */









// Create a class Shape
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    };
    
    calcPerimeter() {
        let perimeter = this.sides * this.sideLength;
        console.log("The perimeter of " + this.name + ' is ' + perimeter);
    };
}

let square = new Shape('square', 4, 5);
let triangle = new Shape('Triangle', 3, 3);

square.calcPerimeter();
triangle.calcPerimeter();


//create a class square who inherit from Shape
class Square extends Shape {
    constructor(name, sides, sideLength) {
        super(name, sides, sideLength);
        
        this.name = 'Square';
        this.sides = 4;
    }
    calcArea() {

    }
}