N,dp=int(input()),[0]
for i in range(1,N+1): dp+=[1+min(dp[i-j*j] for j in range(1,int(i**.5)+1))]
print(dp[N])