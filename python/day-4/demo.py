w="Welcome"

print(w)

print(w[6])
print(w[-2])


print(w[2])
print(w[-5])

print(w[0:3])

w="Welcome"
print(w[1:])

print(w[-5:])
print(w[2:])

print(w[  :  : -1])

print(w[::2])

print(w[::-2])
print(w[4::-1])

w="hello world"

print(w[:-3])

w="welcome to ws"
t=len(w)
print(t)
print(w.upper())
print(w.lower())
print(w.capitalize())
print(w.title())
print(w.count("e")) #2

# w="helleows"
# print(w.find("z")) #-1
# print(w.index("z"))

# w="welcometows"

# print(w.startswith("l",2))

# print(w.endswith("s",4))


w="hello world "

print(w.islower())
print(w.isupper())
print(w.isalpha())
print(w.isalnum())
print(w.isdigit())
print(w.isspace())


w="welcome"
t=len(w) #7

for a in range(0,t):
    print(a,w[a])

for a in range(t-1,-1,-1):
    print(a,w[a])    


w="welcome"
replaceString=w.replace("el","-")  
print(replaceString)  

w="welcome"
for v in w:
    print(v)

rev=w[-1::-1]
print(rev)
for n in rev:
    print(n)