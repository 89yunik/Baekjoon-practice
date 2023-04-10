N,M,K=map(int, input().split())
o=0
dp=[[1]*M for _ in range(N)]
for i in range(1,N):
    for j in range(1,M):
        dp[i][j]=dp[i-1][j]+dp[i][j-1]
if K==0:o=dp[N-1][M-1]
else : 
    r,c=(K-1)//M, K%M-1
    if c==-1:c+=M
    o=dp[r][c]*dp[N-1-r][M-1-c]
print(o)
