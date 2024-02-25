nA,nB=[*map(int,input().split())]
A,B=[*map(int,input().split())],[*map(int,input().split())]
C=[str(x) for x in sorted([*set(A)-set(B)])]
l=len(C)
print(l)
if l: print(' '.join(C))