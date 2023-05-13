M=1000001
V,A=[1]*M,set()
for i in range(2,M): 
    if V[i]:
        A.add(i)
        for j in range(2*i,M,i): V[j]=0
T=int(input())
for _ in range(T):
    N,o=int(input()),0
    for x in A: 
        if N-x in A:
            if x==N-x: o+=1
            else: o+=1/2
    print(int(o))