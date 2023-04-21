M,N=map(int, input().split())
I,o=[list(map(int, input().split())) for _ in range(M)],0
for i in range(M):
    for j in range(N):
        if I[i][j]==1:
            I[i][j]=0
            o+=1
            S=[[i,j]]
            while S:
                x,y=S.pop()
                for nx,ny in [[x-1,y-1],[x-1,y],[x-1,y+1],[x,y-1],[x,y+1],[x+1,y-1],[x+1,y],[x+1,y+1]]:
                    if 0<=nx<M and 0<=ny<N and I[nx][ny]:I[nx][ny]=0; S.append([nx,ny])
print(o)