# Given Input: 
keys = ["name", "age", "city"] 
values = ["Bob", 25, "London"]

# Expected Output: {'name': 'Bob', 'age': 25, 'city': 'London'}

d={}
for value1,value2 in zip(keys,values):
    d[value1]=value2
print(d)