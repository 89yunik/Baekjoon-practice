N=int(input())
V,o=[0 for _ in range(101)],0
for i in [int(x) for x in input().split()]: 
    if V[i]==0:V[i]+=1
    else:o+=1
print(o)