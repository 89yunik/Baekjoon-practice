N=int(input())
I,score,cnt=map(int,input().split()),0,0
for i in I: 
    if i:cnt+=1;score+=cnt
    else:cnt=0
print(score)