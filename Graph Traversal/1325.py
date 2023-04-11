N,M=map(int, input().split())
G,O=[[] for _ in range(N+1)],[0 for _ in range(N+1)]
for i in range(M):
    A,B=map(int, input().split())
    G[B].append(A)
def dfs(s):
    V,S,o=[0 for _ in range(N+1)],[s],1
    V[s]=1
    while len(S)>0:
        c=S.pop()
        for n in G[c]:
            if not V[n]: 
                S.append(n)
                V[n]=1
                o+=1
    return o
m=0
for i in range(1,N+1):
    O[i]=dfs(i)
    m=max(m,O[i])
for i in range(1,N+1):
    if O[i]==m: print(i,end=' ')