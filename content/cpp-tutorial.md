---
title: Complete C++ Guide
description: A comprehensive guide covering all basic and advanced concepts of C++ programming.
slug: cpp-tutorial
date: 25/2/2025
author: Priyam
image: /cpp.webp
---

## Introduction

C++ is a powerful, high-performance programming language widely used in **system programming, game development, competitive programming, and embedded systems**. This guide covers **basic** and **advanced** C++ concepts, helping developers gain a strong understanding of the language.

---

## C++ Basics

### Installing C++

To run C++ programs, install a compiler like **GCC** (via MinGW for Windows) or use an **IDE** like Code::Blocks, CLion, or Visual Studio.

Verify installation:

```sh
g++ --version
```

### Hello World

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

### Variables and Data Types

```cpp
int x = 10;           // Integer
float y = 3.14;       // Floating-point number
double z = 2.71828;   // Double precision float
char letter = 'A';    // Character
bool isValid = true;  // Boolean
string name = "Priyam"; // String
```

---

## Data Types in Detail

### Fundamental Types
- **Integer (`int`)**: Stores whole numbers. Example: `int a = 10;`
- **Floating-Point (`float`, `double`)**: Stores decimal numbers. Example: `double pi = 3.14159;`
- **Character (`char`)**: Stores a single character. Example: `char letter = 'P';`
- **Boolean (`bool`)**: Stores `true` or `false`. Example: `bool flag = true;`

### Derived Types
- **Array (`int arr[5]`)**: Collection of elements. Example: `int arr[] = {1, 2, 3, 4, 5};`
- **Pointer (`int* ptr`)**: Stores memory addresses. Example: `int* ptr = &x;`
- **Reference (`int& ref = x`)**: An alias for another variable.

### User-Defined Types
- **Structs**: Similar to classes but default to public members.
- **Classes**: Encapsulate data and behavior.
- **Enums**: Define a set of named integral constants.

---

## C++ Built-in Functions

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << max(10, 20) << endl;   // Maximum
    cout << min(10, 20) << endl;   // Minimum
    cout << sqrt(16) << endl;      // Square root
    cout << abs(-5) << endl;       // Absolute value
    return 0;
}
```

---

## Advanced C++ Concepts

### Object-Oriented Programming (OOP)
C++ supports **Encapsulation, Inheritance, Polymorphism, and Abstraction**.

```cpp
class Car {
public:
    string brand;
    Car(string b) { brand = b; }
    void display() { cout << "Car: " << brand << endl; }
};

int main() {
    Car myCar("Tesla");
    myCar.display();
    return 0;
}
```

### Exception Handling

```cpp
try {
    int a = 10, b = 0;
    if (b == 0) throw "Cannot divide by zero";
    cout << a / b;
} catch (const char* msg) {
    cout << msg;
}
```

### Lambda Functions

```cpp
#include <iostream>
using namespace std;

int main() {
    auto square = [](int x) { return x * x; };
    cout << square(5) << endl;
    return 0;
}
```

### Templates (Generics)

```cpp
template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << add(5, 10) << endl;
    cout << add(3.14, 2.71) << endl;
    return 0;
}
```

### Multithreading

```cpp
#include <iostream>
#include <thread>
using namespace std;

void printNumbers() {
    for (int i = 1; i <= 5; i++) {
        cout << i << endl;
    }
}

int main() {
    thread t1(printNumbers);
    t1.join();
    return 0;
}
```

---

## Conclusion

This guide covers **basic to advanced** C++ concepts like OOP, exception handling, templates, and multithreading. Mastering these topics will make you proficient in C++ programming. Keep practicing and building projects! 🚀

