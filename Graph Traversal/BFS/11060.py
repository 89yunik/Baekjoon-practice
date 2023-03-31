from collections import deque
N=int(input())
A,V=[int(i) for i in input().split()],[False]*N
queue,ans,tmp,cnt=deque([0]),-1,0,1
V[0]=True
while len(queue)>0 : 
    curr=queue.popleft()
    cnt-=1
    if cnt<0: 
        cnt=len(queue)
        tmp+=1
    if curr==N-1: 
        ans=tmp
        break
    if curr>=N: continue
    for i in range(1, A[curr]+1):
        next=curr+i
        if next<N and V[next]==False:
            V[next]=True 
            queue.append(next)
print(ans)