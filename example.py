n,m=map(int, input().split())
I,O=[[*map(int, input().split())] for _ in range(n)],[0,0]
def dfs(sx,sy):
    stack,S=[],0
    I[sx][sy]=0
    stack.append([sx,sy])
    while(len(stack)>0):
        x,y=stack.pop()
        S+=1
        N=[[x-1,y],[x,y-1],[x,y+1],[x+1,y]]
        for nx,ny in N:
            if nx>=0 and nx<n and ny>=0 and ny<m and I[nx][ny]==1:
                I[nx][ny]=0 
                stack.append([nx,ny])
    return S
for i in range(n):
    for j in range(m): 
        if I[i][j]==1:
            O[0]+=1
            O[1]=max(O[1],dfs(i,j))
print(f'{O[0]}\n{O[1]}')