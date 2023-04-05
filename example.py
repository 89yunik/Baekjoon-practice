N=int(input())
for _ in range(N):
    x,o=int(input()),'YES'
    for i in range(2,1000001):
        if x%i==0: o='NO'; break
    print(o)