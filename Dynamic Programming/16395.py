n,k=map(int, input().split())
dp=[[1 for _ in range(i+1)] for i in range(n)]
for i in range(2,n):
    for j in range(i+1):
        if i>0 and j>0 and j<i:
            dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
print(dp[n-1][k-1])