R,C,K=map(int, input().split())
I=[input() for _ in range(R)]
V=[[0 for _ in range(C)] for _ in range(R)]
def dfs(x,y,n):
    if x==0 and y==C-1 and n==K: return 1
    next,o=[[x-1,y],[x,y-1],[x,y+1],[x+1,y]],0
    for nx,ny in next:
        if nx>=0 and nx<R and ny>=0 and ny<C and I[nx][ny]=='.' and V[nx][ny]==0: 
            V[nx][ny]=1
            o+=dfs(nx,ny,n+1)
            V[nx][ny]=0
    return o
V[R-1][0]=1
print(dfs(R-1,0,1))