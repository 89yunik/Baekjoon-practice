from collections import deque
T=int(input())
def f(Q,cnt):
    while cnt:
        x,y=Q.popleft()
        next=[[x-1,y],[x,y-1],[x,y+1],[x+1,y]]
        for nx,ny in next:
            if 0<=nx<h and 0<=ny<w and I[nx][ny] not in '*#':
                I[nx][ny]='*'
                Q.append([nx,ny])
        cnt-=1
for _ in range(T):
    w,h=map(int,input().split())
    I=[[*input()] for _ in range(h)]
    F,L,t,end=deque(),deque(),1,0
    for i in range(h):
        for j in range(w):
            if I[i][j]=='*':F.append([i,j])
            if I[i][j]=='@':L.append([i,j])
    cnt=len(L)
    f(F,len(F))
    while L:
        x,y=L.popleft()
        if x in (0, h-1) or y in (0, w-1):
            end=1
            break
        next=[[x-1,y],[x,y-1],[x,y+1],[x+1,y]]
        for nx,ny in next:
            if 0<=nx<h and 0<=ny<w and I[nx][ny] not in '@*#':
                I[nx][ny]='@'
                L.append([nx,ny])
        cnt-=1
        if cnt==0:
            f(F,len(F))
            cnt=len(L)
            t+=1
    print(t if end else 'IMPOSSIBLE')