---
title: Complete Pandas Guide
description: A comprehensive guide covering all basic and advanced concepts of the Pandas library in Python.
slug: pandas-guide
date: 25/2/2025
author: Priyam
image: /pandas.webp
---

## Introduction

**Pandas** is a powerful Python library for data analysis and manipulation. It provides **data structures** like `DataFrame` and `Series`, which allow for efficient handling of structured data. Pandas is widely used in **data science, machine learning, and financial analysis**.

### Installing Pandas

To install Pandas, use the following command:

```sh
pip install pandas
```

To check the version:

```python
import pandas as pd
print(pd.__version__)
```

---

## Basics of Pandas

### 1. Creating Data Structures

#### **Series** (1D Data Structure)

A `Series` is a **one-dimensional array** with labeled indices.

```python
import pandas as pd

s = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])
print(s)
```

**Output:**
```
a    10
b    20
c    30
d    40
dtype: int64
```

#### **DataFrame** (2D Data Structure)

A `DataFrame` is a **two-dimensional table** with labeled columns and rows.

```python
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35],
    "Salary": [50000, 60000, 70000]
}
df = pd.DataFrame(data)
print(df)
```

**Output:**
```
    Name  Age  Salary
0  Alice   25  50000
1    Bob   30  60000
2 Charlie   35  70000
```

---

## Data Manipulation

### 1. Reading & Writing Data

#### Reading CSV Files

```python
df = pd.read_csv("data.csv")
print(df.head())  # Display first 5 rows
```

#### Writing to CSV Files

```python
df.to_csv("output.csv", index=False)
```

### 2. Selecting Data

```python
print(df["Name"])  # Selecting a column
print(df.iloc[1])   # Selecting a row by index
print(df.loc[1, "Age"])  # Selecting a specific value
```

### 3. Filtering Data

```python
filtered_df = df[df["Age"] > 25]
print(filtered_df)
```

### 4. Adding & Removing Columns

```python
df["Department"] = ["HR", "IT", "Finance"]  # Adding a new column
df.drop(columns=["Salary"], inplace=True)  # Removing a column
```

---

## Advanced Pandas Concepts

### 1. Grouping & Aggregation

```python
grouped_df = df.groupby("Department")["Age"].mean()
print(grouped_df)
```

### 2. Handling Missing Data

```python
df.fillna(0, inplace=True)  # Replace NaN values with 0
df.dropna(inplace=True)  # Remove rows with NaN values
```

### 3. Merging DataFrames

```python
df1 = pd.DataFrame({"ID": [1, 2], "Name": ["Alice", "Bob"]})
df2 = pd.DataFrame({"ID": [1, 2], "Salary": [50000, 60000]})
merged_df = pd.merge(df1, df2, on="ID")
print(merged_df)
```

### 4. Pivot Tables

```python
pivot_table = df.pivot_table(values="Salary", index="Department", aggfunc="mean")
print(pivot_table)
```

### 5. Time Series Analysis

```python
df["Date"] = pd.to_datetime(df["Date"])
df.set_index("Date", inplace=True)
print(df.resample("M").mean())  # Resampling by month
```

### 6. Data Visualization with Pandas

```python
import matplotlib.pyplot as plt

df["Age"].plot(kind="hist")
plt.show()
```

---

## Conclusion

Pandas is an essential tool for **data manipulation, analysis, and visualization**. It simplifies handling large datasets and is widely used in **data science and analytics**. Mastering Pandas will make working with structured data much easier!

🚀 Keep practicing and experimenting with real datasets to improve your skills!

