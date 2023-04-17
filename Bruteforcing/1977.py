M,N=int(input()),int(input())
I,i=[],0
while i**2<M:i+=1
while i**2<=N: I.append(i**2); i+=1
if len(I)<1: print(-1)
else: print(f'{sum(I)}\n{I[0]}')