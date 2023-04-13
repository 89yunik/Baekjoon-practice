P,K=map(int,input().split())
o='GOOD'
for i in range(2,K):
    if not P%i: o=f'BAD {i}'; break
print(o)