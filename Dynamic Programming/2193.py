N=int(input())
zero,one=0,1
for _ in range(N-1): 
    x,y=zero,one
    zero=x+y
    one=x
print(zero+one)