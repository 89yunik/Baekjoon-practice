from collections import deque
N=int(input())
I=[*map(int,input().split())]
a,b=map(lambda x: int(x)-1,input().split())
Q,V,l,cnt=deque([a]),[-1]*N,0,1
V[a]=0
while Q:
    c=Q.popleft()
    cnt-=1
    if cnt<0:cnt=len(Q);l+=1
    for n in range(c%I[c],N,I[c]): 
        if V[n]<0 or V[n]>l+1:V[n]=l+1;Q.append(n)
print(V[b])