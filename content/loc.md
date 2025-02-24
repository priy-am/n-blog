---
title: Logic and Organization of Computers (LOC)
description: A comprehensive guide covering fundamental and advanced concepts of computer architecture and organization.
slug: loc
date: 25/2/2025
author: Priyam
image: /loc.webp
---

# Logic and Organization of Computers (LOC)

## UNIT-I: Functional Blocks of a Computer

### 1. CPU, Memory, Input-Output Subsystems, Control Unit
- **Central Processing Unit (CPU)**: The brain of the computer that processes instructions.
- **Memory**: Stores data and instructions.
- **Input/Output Subsystems**: Interfaces that allow communication between the computer and external devices.
- **Control Unit**: Directs operations of the CPU and coordinates data flow.

### 2. Instruction Set Architecture (ISA)
- **Registers**: Small storage locations in CPU (e.g., accumulator, program counter, instruction register).
- **Instruction Execution Cycle**:
  1. Fetch: Retrieve instruction from memory.
  2. Decode: Interpret the instruction.
  3. Execute: Perform the instruction.
- **RTL (Register Transfer Level) Interpretation**:
  - Example: `ADD R1, R2` → `R1 ← R1 + R2`
- **Addressing Modes**:
  - Immediate, Direct, Indirect, Indexed, Register.
- **Case Study**: x86 and ARM instruction sets.


## Data Representation

### Signed Number Representation
Signed numbers are used to represent both positive and negative integers. There are three common ways to represent signed numbers in binary:
1. **Signed Magnitude Representation**
2. **One's Complement Representation**
3. **Two's Complement Representation**

#### 1. Signed Magnitude Representation
- The leftmost bit (MSB) is the sign bit (0 for positive, 1 for negative).
- Example:
  - `+5` in 4-bit signed magnitude: `0101`
  - `-5` in 4-bit signed magnitude: `1101`

#### 2. One’s Complement Representation
- Negative numbers are obtained by inverting all bits of their positive counterpart.
- Example:
  - `+5` in 4-bit one's complement: `0101`
  - `-5` in 4-bit one's complement: `1010`

#### 3. Two’s Complement Representation
- Negative numbers are obtained by inverting all bits and adding `1`.
- Example:
  - `+5` in 4-bit two's complement: `0101`
  - `-5` in 4-bit two's complement: `1011`

### Fixed Point Representation
- Used to represent integers and fractional numbers with a fixed decimal point.
- Example: `101.11` in binary represents `5.75` in decimal.

### Floating Point Representation
- Uses **mantissa** and **exponent** to represent real numbers.
- IEEE 754 standard is used.
- Example (Single Precision, 32-bit):
  - `(-1)^S * 1.M * 2^(E-127)`
  - `01000000101000000000000000000000` represents `5.0`

### Character Representation
- **ASCII (7-bit/8-bit)**: Example `A = 01000001`
- **Unicode (UTF-8, UTF-16)**: Used for global character representation

---

## Computer Arithmetic

### Integer Addition and Subtraction
- **Addition Example:** `5 (0101) + 3 (0011) = 8 (1000)`
- **Subtraction using Two’s Complement:** `5 - 3` → `5 + (-3)`

### Ripple Carry Adder
- Adds binary numbers by propagating carry bit from one full adder to the next.

### Carry Look-Ahead Adder
- Faster addition by precomputing carry signals.

### Multiplication
#### 1. Shift-and-Add Multiplication
- Example: `3 * 2`
  - `3 (0011) * 2 (0010) → 0110 (6)`

#### 2. Booth’s Multiplication Algorithm
- Reduces number of addition/subtraction operations.

#### 3. Carry-Save Multiplier
- Speeds up multiplication using intermediate sum and carry.

### Division
#### 1. Restoring Division
- Step-by-step binary division with restoration of remainder.

#### 2. Non-Restoring Division
- Faster method where remainder is not restored after unsuccessful subtraction.

### Floating Point Arithmetic
- Addition, subtraction, multiplication, and division follow IEEE 754 rules.

---

## UNIT-II: Introduction to x86 Architecture

### 1. CPU Control Unit Design
- **Hardwired Control**: Uses combinational circuits.
- **Microprogrammed Control**: Uses stored instructions (microinstructions).
- **Case Study**: Design of a simple hypothetical CPU.

### 2. Memory System Design
- **Semiconductor Memory Technologies**: SRAM, DRAM.
- **Memory Organization**: Hierarchical structure.

### 3. Peripheral Devices & I/O Systems
- **I/O Interfaces**: USB, SCSI.
- **I/O Transfers**:
  - Program Controlled
  - Interrupt Driven
  - DMA (Direct Memory Access)
- **Interrupts & Process State Transitions**
  - Privileged vs. Non-Privileged Instructions.
- **Software Interrupts & Exceptions**

## UNIT-III: Pipelining

### 1. Basics of Pipelining
- **Pipeline Stages**: Fetch, Decode, Execute, Memory Access, Write Back.
- **Speedup**: Increases instruction throughput.
- **Hazards**:
  - **Structural** (Hardware conflict)
  - **Data** (Data dependency)
  - **Control** (Branch prediction failure)

### 2. Parallel Processors
- **Introduction to Parallel Processing**
- **Concurrent Memory Access & Cache Coherency**

## UNIT-IV: Memory Organization

### 1. Memory Interleaving
- **Concept**: Splitting memory into modules to increase speed.
- Increases memory access speed by splitting memory into banks.

### 2. Hierarchical Memory Organization
- Registers → Cache → Main Memory → Secondary Storage
- **Cache Memory**: Faster memory between CPU and RAM.
- **Size vs Block Size Trade-off**: Large cache reduces misses but increases access time.
  - **Mapping Functions**:
    - Direct Mapping
    - Associative Mapping
    - Set-Associative Mapping
  - **Replacement Algorithms**:
    - FIFO (First-In-First-Out)
    - LRU (Least Recently Used)
  - **Write Policies**:
    - **Write-Through**: Data written to cache and main memory simultaneously.
    - **Write-Back**: Data written to main memory only when replaced.

---
This document provides a fundamental understanding of Computer Architecture and Organization, focusing on numerical examples and conceptual explanations for beginners. Flowcharts are included for better comprehension.


