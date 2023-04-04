N,C=map(int,input().split())
I=[0]*(C+1)
for _ in ' '*N:
    t=int(input())
    for i in range(t,C+1,t):I[i]=1
print(sum(I))