N,m,M,T,R = map(int,input().split())
n,x,o = 0,m,-1
if(m+T<=M):
    o=0
    while n<N:
        if x+T<=M:
            x+=T
            n+=1
            o+=1
        else :
            x= max(x-R, m)
            o+=1
print(o)