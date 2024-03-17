T=int(input())
for _ in range(T):
    S,o = set([s for s in input()]),2015
    for s in S: o-=ord(s)
    print(o)