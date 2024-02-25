N,L=[*map(int,input().split())]
I=sorted([*map(int,input().split())])
for x in I:
    if L<x:break
    L+=1
print(L)