d={
   'name':"pradeep ws",
   "email":"pradeep@ws.com",
   "phone":7777777 
}

for key,value in d.items():
    print(key,value)

for v in d.values():
    print(v)
for k in d:
    print(k,d[k])

for key in d.keys():
    print(key,d[key])


# d["name"]=""

# d.update(
#     {
#         "name":"Pradeep rai",
#         "email":"pradeep.9997@gmail.com"
#     }
# )

# print(d)

# d.pop('phone')
# d.pop('email')
# del d
# d.clear()
# print(d)
# d.popitem() #last Element Delete
# d.popitem() #last Element Delete
# d.popitem() #last Element Delete


# d['address']="ws jodhpur"
# print(d)
# d["name"]="Pradeep Rai" #Update
# print(d)

# newDic=dict( name="pradeep",courseName="Full Stack" )
# print(newDic)
# print(d['email'])
# print(d.get('phone'))
# print(d.email)