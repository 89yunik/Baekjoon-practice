R,C=map(int, input().split())
I,O,V=[input() for _ in range(R)],[0,0],[[1]*C for _ in range(R)]
for i in range(R):
    for j in range(C):
        if V[i][j] and I[i][j]!='#':
            S,v,k=[[i,j]],0,0
            V[i][j]=0
            while S:
                x,y=S.pop()
                if I[x][y]=='v':v+=1
                if I[x][y]=='k':k+=1
                for nx,ny in [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]:
                    if 0<=nx<R and 0<=ny<C and V[nx][ny] and I[nx][ny]!='#':V[nx][ny]=0; S.append([nx,ny])
            if k>v: O[0]+=k
            else: O[1]+=v
print(O[0], O[1])