import sys
sys.setrecursionlimit(10**6)
[n],*I=[list(map(int, x.split())) for x in [*open('./dev/stdin')]]
V=[[0]*n for _ in range(n)]
def dfs(x,y):
    if V[x][y]: return V[x][y]
    V[x][y]=1
    for nx,ny in [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]:
        if 0<=nx<n and 0<=ny<n and I[x][y]<I[nx][ny]: V[x][y]=max(V[x][y], dfs(nx,ny)+1)
    return V[x][y]
o=0
for i in range(n):
    for j in range(n):
        o=max(o,dfs(i,j))
print(o)