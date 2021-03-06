class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get getArea() {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle(4, 5);

// they have spelled height wrongly. That's why there will be no change in original property.
rect1.hieght = 50;

// and output will be 20 only...
console.log(rect1.getArea);
