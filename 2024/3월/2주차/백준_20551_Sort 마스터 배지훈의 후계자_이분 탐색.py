N,M=map(int,input().split())
B,D=sorted([int(input()) for _ in range(N)]), [int(input()) for _ in range(M)]
for d in D:
    l,r=0,N-1
    while l<r:
        m=(l+r)//2
        if B[m]<d:l=m+1
        else:r=m
    print(r if B[r]==d else -1)