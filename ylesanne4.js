// Üldine kujundi klass
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    getArea() {
        throw new Error("getArea() peab olema alamklassis üle kirjutatud");
    }
}

// Ringi klass
class Circle extends Shape {
    constructor(color, radius) {
        super(color);  
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);  // PI * r^2
    }

    print() {
        return `Circle (r: ${this.radius}, color: ${this.getColor()})`;
    }
}

// Ruutu klass
class Square extends Shape {
    constructor(color, side) {
        super(color);  
        this.side = side;
    }

    getArea() {
        return Math.pow(this.side, 2);  // a^2
    }

    print() {
        return `Square (a: ${this.side}, color: ${this.getColor()})`;
    }
}

// Ristküliku klass
class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);  
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;  // l * w
    }

    print() {
        return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.getColor()})`;
    }
}

// Paint klass kujundite hoidmiseks ja haldamiseks
class Paint {
    constructor() {
        this.shapes = [];  
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    getShapes() {
        return this.shapes;
    }

    calculateTotalArea() {
        return this.shapes.reduce((totalArea, shape) => totalArea + shape.getArea(), 0);
    }

    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle);
    }

    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square);
    }

    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle);
    }
}

const paint = new Paint();
const circle = new Circle("red", 5);
const square = new Square("blue", 4);
const rectangle = new Rectangle("green", 6, 3);

paint.addShape(circle);
paint.addShape(square);
paint.addShape(rectangle);

console.log("Kõik kujundid:", paint.getShapes().map(shape => shape.print()));
console.log("Ringide pindala:", paint.getCircles().map(circle => circle.getArea()));
console.log("Ruutude pindala:", paint.getSquares().map(square => square.getArea()));
console.log("Ristkülikute pindala:", paint.getRectangles().map(rectangle => rectangle.getArea()));
console.log("Kogu pindala:", paint.calculateTotalArea());
