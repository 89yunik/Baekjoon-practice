I=[[int(j) for j in i.split()] for i in open('./dev/stdin').read().split('\n')]
s=set()
def dfs(n, x, y):
    if len(n)==6: 
        s.add(n)
        return
    next=[[x-1,y],[x,y-1],[x,y+1],[x+1,y]]
    for nx,ny in next:
        if nx>=0 and nx<5 and ny>=0 and ny<5:
            dfs(n+str(I[nx][ny]),nx,ny)
for i in range(5):
    for j in range(5):
        dfs(str(I[i][j]),i,j)
print(len(s))