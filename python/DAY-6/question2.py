# Given Input: 

dict1 = {"a": 1, "b": 2} 
dict2 = {"b": 3, "c": 4}

dict1.update(dict2)
print(dict1)

d={ **dict1,**dict2 }
print(d)

# Expected Output: {'a': 1, 'b': 3, 'c': 4}