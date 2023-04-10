N,M,K=map(int, input().split())
o=0
def num(N,M):
    dp=[[1]*(M+1) for _ in range(N)]
    for i in range(1,N):
        for j in range(1,M):
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
    return dp[N-1][M-1]
if K==0:o=num(N,M)
else : 
    r,c=K//M, K%M
    if c==0: c=K
    r+=1
    o=num(r,c)*num(N-r+1, M-c+1)
print(o)
