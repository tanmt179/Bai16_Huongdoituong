class Rectangle {
    height;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }

    perimeter() {
        return (this.height + this.width) * 2;
    }


    getHeight() {
        return this.height;
    }

    setHeight(value) {
        this.height = value;
    }

    getWidth() {
        return this.width;
    }

    setWidth(value) {
        this.width = value;
    }
}


