X,*I=open('./dev/stdin').read().split('\n')
N,M=map(int,X.split())
W,B,V=0,0,[[1]*N for _ in range(M)]
for i in range(M):
    for j in range(N):
        if V[i][j]:
            S,o,V[i][j]=[[i,j]],0,0
            while S:
                x,y=S.pop()
                o+=1
                for nx,ny in [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]:
                    if 0<=nx<M and 0<=ny<N and V[nx][ny] and I[nx][ny]==I[i][j]: V[nx][ny]=0; S.append([nx,ny])
            if I[i][j]=='W':W+=o*o
            else:B+=o*o
print(W,B)