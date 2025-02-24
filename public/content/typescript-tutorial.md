---
title: Complete TypeScript Guide
description: A comprehensive guide covering all basic and advanced concepts of TypeScript programming.
slug: typescript-tutorial
date: 25/2/2025
author: Priyam
image: /typescript.webp
---

## Introduction

TypeScript is a **strongly typed superset of JavaScript** that compiles to plain JavaScript. It enhances JavaScript by adding **static types, interfaces, and advanced features** to improve code quality and maintainability. This guide covers both **basic** and **advanced** TypeScript concepts.

---

## TypeScript Basics

### Installing TypeScript

Install TypeScript globally using npm:

```sh
npm install -g typescript
tsc --version  # Check installation
```

### Hello World

```ts
console.log("Hello, World!");
```

### Variables and Data Types

TypeScript supports **explicit types**, making the code more predictable.

```ts
let age: number = 25;
let name: string = "Priyam";
let isActive: boolean = true;
let hobbies: string[] = ["Reading", "Gaming"];
let person: { name: string; age: number } = { name: "Priyam", age: 20 };
```

---

## Data Types in Detail

### Primitive Types
- **number**: `let x: number = 10;`
- **string**: `let text: string = "Hello";`
- **boolean**: `let isTrue: boolean = true;`
- **null & undefined**: `let n: null = null; let u: undefined = undefined;`

### Complex Types
- **Array**: `let numbers: number[] = [1, 2, 3];`
- **Tuple**: `let person: [string, number] = ["Alice", 25];`
- **Enum**: 
  ```ts
  enum Color { Red, Green, Blue }
  let c: Color = Color.Green;
  ```
- **Any**: `let random: any = 5;`
- **Void**: Used in functions that do not return a value.

---

## TypeScript Built-in Functions

```ts
console.log(Math.max(1, 5, 3)); // maximum value
console.log(JSON.stringify({ name: "Priyam" })); // convert object to string
```

Other useful functions:
- `parseInt(str)`: Converts string to number.
- `toFixed(n)`: Formats a number with fixed decimals.
- `Object.keys(obj)`: Returns keys of an object.
- `Array.prototype.map(fn)`: Transforms array elements.

---

## Advanced TypeScript Concepts

### Interfaces

```ts
interface User {
  name: string;
  age: number;
}
let user: User = { name: "Priyam", age: 20 };
```

### Classes

```ts
class Person {
  constructor(public name: string, private age: number) {}
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
let p = new Person("Priyam", 20);
console.log(p.greet());
```

### Generics

```ts
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(5));
```

### Decorators

Decorators are **special functions** that modify classes, methods, or properties at runtime.

```ts
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("Logging function execution");
}

class Demo {
  @Log
  show() {
    console.log("Executing show method");
  }
}
```

### Modules

Modules help **organize code** by exporting and importing functionalities.

```ts
// module.ts
export const greeting = "Hello, TypeScript!";

// main.ts
import { greeting } from "./module";
console.log(greeting);
```

---

## Conclusion

TypeScript **enhances JavaScript** by adding static types, interfaces, and advanced features. It is widely used in **large-scale applications** for its maintainability and reliability. Keep practicing and build projects to master TypeScript! 🚀

