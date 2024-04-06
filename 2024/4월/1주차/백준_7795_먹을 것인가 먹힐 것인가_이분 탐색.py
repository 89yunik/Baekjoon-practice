T=int(input())
for _ in range(T):
    N,M=map(int,input().split())
    A,B=[*map(int,input().split())],sorted([*map(int,input().split())])
    x=0
    for a in A:
        l,r=0,M-1
        while l<=r:
            m=(l+r)//2
            if a>B[m]:l=m+1
            else:r=m-1
        x+=l
    print(x)