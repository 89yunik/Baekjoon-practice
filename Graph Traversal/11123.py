T=int(input())
for _ in range(T):
    H,W=map(int, input().split())
    I,V,o=[input() for _ in range(H)],[[1]*W for _ in range(H)],0
    for i in range(H):
        for j in range(W):
            if V[i][j] and I[i][j]=='#':
                V[i][j]=0
                o+=1
                S=[[i,j]]
                while S:
                    x,y=S.pop()
                    for nx,ny in [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]:
                        if 0<=nx<H and 0<=ny<W and V[nx][ny] and I[nx][ny]=='#': V[nx][ny]=0; S.append([nx,ny])
    print(o)