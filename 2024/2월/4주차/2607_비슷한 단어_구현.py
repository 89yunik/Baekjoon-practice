N,X,o=int(input()),list(input()),0
for _ in range(N-1):
    x,cnt=[*X],0
    Y=input()
    for y in Y:
        if y in x:x.remove(y)
        else:cnt+=1
    if cnt<2 and len(x)<2:o+=1
print(o)
