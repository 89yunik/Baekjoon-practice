from collections import deque
n,m=map(int,input().split())
I=[[*map(int,input().split())] for _ in range(n)]
Q,V=deque(),[[-1]*m for _ in range(n)]
for i in range(n): 
    for j in range(m):
        if I[i][j]==2:V[i][j]=0;Q.append([i,j])
        if I[i][j]==0:V[i][j]=0
while Q:
    x,y=Q.popleft()
    for [nx,ny] in [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]:
        if 0<=nx<n and 0<=ny<m and I[nx][ny] and V[nx][ny]==-1:V[nx][ny]=V[x][y]+1;Q.append([nx,ny])
for row in V: print(' '.join(str(x) for x in row))