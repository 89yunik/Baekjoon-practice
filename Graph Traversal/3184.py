import sys
sys.setrecursionlimit(10**5)
A,*I=open('./dev/stdin').read().split('\n')
R,C=map(int, A.split())
V=[[0 for _ in range(C)] for _ in range(R)]
O=[0,0]
for i in range(R):
    for j in range(C):
        if V[i][j]==0 and I[i][j]!='#': 
            o,v=0,0
            def dfs(x,y) :
                global o,v
                V[x][y]+=1
                if I[x][y]=='o':o+=1
                if I[x][y]=='v':v+=1
                next=[[x-1,y],[x,y-1],[x,y+1],[x+1,y]]
                for nx,ny in next:
                    if nx>=0 and nx<R and ny>=0 and ny<C and V[nx][ny]==0 and I[nx][ny]!='#': dfs(nx,ny)
            dfs(i,j)
            if o>v:O[0]+=o
            else:O[1]+=v
print(O[0],O[1])