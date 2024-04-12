A,B=sorted(map(int,input().split()))
C=[str(i) for i in range(A+1,B)]
l=len(C)
print(l)
if l:print(' '.join(C))