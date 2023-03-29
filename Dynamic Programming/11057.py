N=int(input())
dp=[1]*10
for _ in range(N-1):
    temp=[*dp]
    for i in range(10):
        for j in range(i+1,10): temp[i]+=dp[j]
        temp[i]%=10007
    dp=[*temp]
print(sum(dp)%10007)