n=int(input())
G={}
for _ in range(n):
    a,b=input().split(' is ')
    if a not in G:G[a]=[b]
    else:G[a].append(b)
m=int(input())
for _ in range(m):
    a,b=input().split(' is ')
    S,V,o=[a],set([a]),'F'
    while S:
        c=S.pop()
        if c==b:o='T'
        if c in G:
            for n in G[c]:
                if n not in V: V.add(n); S.append(n)
    print(o)