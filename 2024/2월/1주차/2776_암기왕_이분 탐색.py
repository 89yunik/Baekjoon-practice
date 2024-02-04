T=int(input())
for _ in range(T):
    N=int(input())
    I1=sorted([*map(int,input().split())])
    M=int(input())
    I2=[*map(int,input().split())]
    for n in I2:
        l,r=0,N-1
        while l<r:
            m=(l+r)//2
            if n>I1[m]:l=m+1
            else:r=m
        print(1 if I1[l]==n else 0)