N=int(input())
o=0
while N>0:
    K=0
    while (K+1)*(K+2)/2 <= N : K+=1
    N-=K*(K+1)/2
    o+=K
print(o)