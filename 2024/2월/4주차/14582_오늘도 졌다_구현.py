A,B=[*map(int,input().split())],[*map(int,input().split())]
x,y,o=0,0,'No'
for a,b in zip(A,B):
    x+=a
    if x>y:o='Yes';break
    y+=b
print(o)