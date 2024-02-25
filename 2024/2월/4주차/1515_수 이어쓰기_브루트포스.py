import sys
x,N,i=sys.stdin.readline().rstrip(),0,0
while i<len(x):
    N+=1
    for n in str(N):
        if i<len(x) and x[i]==n:i+=1
print(N)