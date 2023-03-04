N,M=map(int, input().split())
I=[input() for _ in range(N)]
F=lambda x: not'X'in x
c=sum(map(F, I))
r=sum(map(F, zip(*I)))
print(max(r, c))