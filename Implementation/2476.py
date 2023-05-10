N,O=int(input()),0
for _ in range(N):
    I=[*map(int,input().split())]
    S,o=set(I),0
    if len(S)==1:o=10000+I[0]*1000
    if len(S)==2:
        for x in S:
            if I.count(x)==2:o=1000+x*100
    if len(S)==3:o=max(I)*100
    O=max(O,o)
print(O)