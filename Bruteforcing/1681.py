N,L=map(int, input().split())
o,cnt=1,0
while cnt<N: 
    if str(L) not in str(o):cnt+=1
    if cnt==N:print(o)
    o+=1