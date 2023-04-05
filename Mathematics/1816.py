N=int(input())
S,max=[int(input()) for _ in range(N)],10**6+1
A,pNums=[1]*max,[]
for i in range(2,max):
    if A[i]==1: pNums.append(i)
    for j in range(i*2,max,i):A[j]=0
for x in S:
    if all(x%y > 0 for y in pNums): print('YES')
    else: print('NO')