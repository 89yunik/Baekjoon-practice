N=int(input())
I,dp,dp2=[*map(int,input().split())],[1]*N,[1]*N
for i in range(1,N):
    if I[i]>=I[i-1]:dp[i]=dp[i-1]+1
    if I[i]<=I[i-1]:dp2[i]=dp2[i-1]+1
print(max(max(dp),max(dp2)))