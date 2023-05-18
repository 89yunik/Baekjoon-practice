from math import ceil
N,M,K=map(int,input().split())
x=min(N//2,M)
y=K-N-M+x*3
print(x-(ceil(y/3) if y>0 else 0))