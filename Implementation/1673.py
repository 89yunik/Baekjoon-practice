I=[int(i) for i in open('./dev/stdin').read().split()]
o=[]
for i in range(len(I)//2) : 
    n,k=I[2*i],I[2*i+1]
    x=n
    while n//k>0:
        x+=n//k
        n=n//k+n%k
    o.append(str(x))
print('\n'.join(o))