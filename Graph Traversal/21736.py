N,M=map(int,input().split())
I,S,V,o=[],[],[[1]*M for _ in range(N)],0
for i in range(N):
    x=input()
    I.append(x)
    for j in range(M): 
        if x[j]=='I':S.append([i,j]);V[i][j]=0
while S:
    x,y=S.pop()
    if I[x][y]=='P': o+=1
    for nx,ny in [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]:
        if 0<=nx<N and 0<=ny<M and V[nx][ny] and I[nx][ny]!='X':V[nx][ny]=0;S.append([nx,ny])
if o==0:o='TT'
print(o)