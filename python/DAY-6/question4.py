# Given Input: keys = ["math", "science", "english", "history"] and default = 0

# Expected Output: {'math': 0, 'science': 0, 'english': 0, 'history': 0}


keys = ["math", "science", "english", "history"] 

default = 0
finalDic={}
for v in keys:
    finalDic[v]=default
print(finalDic)   