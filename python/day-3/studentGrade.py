gradeA_count=gradeB_count=gradeC_count=0

for studentNumber in range(1,11):
    marks=eval(input("Enter The Marks:--"))
    if marks>=80:
        gradeA_count+=1
    elif marks>=60:
        gradeB_count+=1
    else:
       gradeC_count+=1

print("Grade A Count",gradeA_count)
print("Grade B Count",gradeB_count)
print("Grade C Count",gradeC_count)