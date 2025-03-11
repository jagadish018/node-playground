
class Calculator {
   
    add(a: number, b: number): number {
    return a + b;
    }

    subtract(a: number, b: number): number {
    return a - b;
    }

    multiply(a: number, b: number): number {
    return a * b;
    }

    divide(a: number, b: number): number |null{
        return b === 0 ? null : a / b;
    }
}


 export default Calculator;