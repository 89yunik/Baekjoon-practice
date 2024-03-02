N,M=map(int,input().split())
levels=[input().split() for _ in range(N)]
levels=sorted([(level, int(stat))for level, stat in levels], key=lambda x:x[1])
stats = [int(input()) for _ in range(M)]
for stat in stats:
    l,r=0,N
    while l<r:
        m=int((l+r)/2)
        if stat<=levels[m][1]:r=m  
        else:l=m+1
    print(levels[l][0])