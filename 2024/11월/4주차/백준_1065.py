N,cnt=int(input()),0
def isHansu(i):
    num=str(i)
    l=len(num)
    if l==1:return 1
    diff=int(num[1])-int(num[0])
    for i in range(l-1):
        if int(num[i+1])-int(num[i])!=diff:return 0
    return 1
for i in range(1,N+1):cnt+=isHansu(i)
print(cnt)