N,score,P=map(int, input().split())
rank=[]
if N:rank=sorted([int(i) for i in input().split()], reverse=True)
o=-1
if N==0:o=1
elif N<P or (N==P and score>rank[N-1]):
    x=0
    while x<N and score<rank[x]:x+=1
    o=x+1
print(o)