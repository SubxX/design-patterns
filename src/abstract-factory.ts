/*
    Name - Abstract Factory
    Type - Creational Patterns

    Description - The Abstract Factory provides an interface for creating families of related or dependent objects 
    without the need to specify their concrete classes. In the example below the ShapeFactory can be used to 
    create objects based on the String shapeType. So, we do not need to specify the concrete class, 
    but only need to pass the type string. This pattern uses inheritance to define the factories that create objects.
*/

interface Shape {
    name: string;
}

interface AbstractFactory<T> {
    get(name: string): T
}

// Shape factory

class Circle implements Shape {
    name = 'circle'
}

class Rectangle implements Shape {
    name = 'rectangle'
}

class Diamond implements Shape {
    name = 'diamond'
}

class ShapeFactory implements AbstractFactory<Shape> {
    get(name: string): Shape {
        if (name === 'circle') {
            return new Circle()
        } else if (name === 'rectangle') {
            return new Rectangle()
        } else if (name === 'diamond') {
            return new Diamond()
        }
        throw new Error(`Invalid shape name - ${name}`)
    }
}

const shapeFactory = new ShapeFactory()

const circleShape = shapeFactory.get('circle')
const rectangleShape = shapeFactory.get('rectangle')
const diamondShape = shapeFactory.get('diamond')

console.log(circleShape)
console.log(rectangleShape)
console.log(diamondShape)

// Invalid shape
console.log(shapeFactory.get('hexagone'))