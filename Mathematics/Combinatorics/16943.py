from itertools import permutations
A,B=map(int, input().split())
A=list(map(int, str(A)))
o=-1
for num in sorted(permutations(A,len(A))):
    if num[0]==0:continue
    x=int(''.join(map(str,num)))
    if x<B:o=x
    else:break
print(o)