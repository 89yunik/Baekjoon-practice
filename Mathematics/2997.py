I=sorted([*map(int,input().split())])
a,b,o=I[1]-I[0],I[2]-I[1],0
if a==b: o=I[2]+a
elif a*2==b:o=I[1]+a
else:o=I[0]+b
print(o)