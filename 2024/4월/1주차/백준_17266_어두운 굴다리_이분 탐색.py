N,M=int(input()),int(input())
x=[*map(int,input().split())]
l,r=1,N
def f(m,x):
    last=0
    for point in x: 
        if last<point-m:return 0
        last=point+m
    return 1 if last>=N else 0
while l<=r:
    m=(l+r)//2
    if f(m,x): r=m-1
    else: l=m+1
print(l)