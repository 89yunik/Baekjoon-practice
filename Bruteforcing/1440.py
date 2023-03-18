T=[int(i) for i in sorted(input().split(':'))]
o=0
if T[0]<13 and T[2]<60:
    for t in T:
        if t!=0 and t<=12:o+=2
print(o)