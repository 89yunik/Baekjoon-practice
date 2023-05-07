n,*x=map(int,open('./dev/stdin').read().split())
print(sum(abs(xi-xj) for xi in x for xj in x))