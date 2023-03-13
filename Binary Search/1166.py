N,L,W,H=map(int, open('./dev/stdin').read().split())
l,r=0,max(L,W,H)
for _ in range(10000):
    m = (l+r)/2
    x = (L//m)*(W//m)*(H//m)
    if x<N:r=m
    else:l=m
print(l)