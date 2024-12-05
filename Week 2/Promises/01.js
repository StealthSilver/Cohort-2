class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log(`Painting with color ${this.color}`)
    }
}


const rect1 = new Rectangle(2, 4, "red"); // creating a new object of the rectangle class
const area = rect1.area();
console.log(area)
rect1.paint()