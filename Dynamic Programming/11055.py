N=int(input())
A=[int(i) for i in input().split()]
dp=[0]*N
for i in range(N):
    for j in range(i):
        if A[j] < A[i] : dp[i]=max(dp[i], dp[j])
    dp[i]+=A[i]
print(max(dp))