N=int(input())
dp=[4,6]
for i in range(2,N): 
    l=len(dp)
    dp.append(dp[l-2]+dp[l-1])
print(dp[N-1])