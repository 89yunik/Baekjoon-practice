N,M,K=map(int, input().split())
I,o=[[0]*M for _ in range(N)],0
for _ in range(K): r,c=map(int, input().split()); I[r-1][c-1]=1
for i in range(N):
    for j in range(M):
        if I[i][j]:
            n,S=1,[[i,j]]; I[i][j]=0
            while S:
                x,y=S.pop()
                for nx,ny in [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]:
                    if 0<=nx<N and 0<=ny<M and I[nx][ny]: I[nx][ny]=0; n+=1; S.append([nx,ny]) 
            o=max(o,n)
print(o)