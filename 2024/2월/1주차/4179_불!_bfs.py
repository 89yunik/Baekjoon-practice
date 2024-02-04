from collections import deque
R,C,*I = open(0).read().split()
R,C=int(R),int(C)
I=[[*row] for row in I]
Q,Q2,V,F=deque(),deque(),[[0 for _ in range(C)] for _ in range(R)],[[0 for _ in range(C)] for _ in range(R)]
for i in range(R):
    for j in range(C):
        if I[i][j]=='J':
            Q.append([i,j])
            V[i][j]=1
        if I[i][j]=='F':
            Q2.append([i,j])
            F[i][j]=1
min,cnt,end=1,1,0
def S():
    cnt=len(Q2)
    while(cnt):
        x,y=Q2.popleft()
        next=[[x-1,y], [x,y-1],[x,y+1],[x+1,y]]
        for nx,ny in next:
            if 0<=nx<R and 0<=ny<C and I[nx][ny]!='#' and I[nx][ny]!='F' and not F[nx][ny]: 
                Q2.append([nx,ny])
                I[nx][ny]='F'
                F[nx][ny]=1
        cnt-=1
    cnt=len(Q2)
S()
while(len(Q)):
    x,y=Q.popleft()
    if x==0 or x==R-1 or y==0 or y==C-1:
        end=1
        break
    next=[[x-1,y], [x,y-1],[x,y+1],[x+1,y]]
    for nx,ny in next:
        if 0<=nx<R and 0<=ny<C and I[nx][ny]!='#' and I[nx][ny]!='F' and not V[nx][ny]: 
            Q.append([nx,ny])
            V[nx][ny]=1
    cnt-=1
    if cnt==0:
        S()
        min+=1
        cnt=len(Q)
print(min if end else 'IMPOSSIBLE')