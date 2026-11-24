import math
import random
import calculator

print(math.ceil(20.5)) #21
math.floor(30.7) #30
print(math.sqrt(25))
 
print(math.pow(10,3))


print(random.randint(1,100))


colors = ["red", "blue", "green", "yellow"]

rColor= random.choice(colors)
print(rColor)

random.shuffle(colors)

print(colors)

print(calculator.sumData(30,77))

print(calculator.mulData(55,66))