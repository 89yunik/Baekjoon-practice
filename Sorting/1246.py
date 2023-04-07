N,M=map(int, input().split())
P,price,sum=sorted([int(input()) for _ in range(M)], reverse=True),0,0
for i in range(min(N,len(P))):
    if sum < P[i]*(i+1):
        price=P[i]
        sum=P[i]*(i+1)
print(price, sum)