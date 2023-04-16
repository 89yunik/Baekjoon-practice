M,N=map(int, input().split())
next=[[0,1],[1,0],[0,-1],[-1,0]]
V,stack,o=[[0 for _ in range(N)] for _ in range(M)],[[0,0,0]],0
while len(stack)>0:
    x,y,way=stack.pop()
    V[x][y]=1
    dx,dy=next[way]
    nx,ny=x+dx,y+dy
    if nx>=0 and nx<M and ny>=0 and ny<N and V[nx][ny]==0: stack.append([nx,ny,way])
    else: 
        way=(way+1)%4
        dx,dy=next[way]
        nx,ny=x+dx,y+dy
        if nx>=0 and nx<M and ny>=0 and ny<N and V[nx][ny]==0: 
            o+=1
            stack.append([nx,ny,way])
print(o)