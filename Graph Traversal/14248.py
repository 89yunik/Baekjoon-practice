n,Ai,s=int(input()),list(map(int, input().split())),int(input())
V,S=[0]*n,[s-1]
V[s-1]=1
while S:
    c=S.pop()
    l,r=c-Ai[c],c+Ai[c]
    for i in [l,r]:
        if 0<=i<n and not V[i]: V[i]=1;S.append(i)
print(sum(V))