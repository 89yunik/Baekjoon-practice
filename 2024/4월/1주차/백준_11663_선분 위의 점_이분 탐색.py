import sys
input = sys.stdin.readline

N,M=map(int, input().split())
I=sorted([*map(int, input().split())])
def search_start(x,arr):
    l,r=0,N-1
    while l<=r:
        m=(l+r)//2
        if arr[m]<x:l=m+1
        else:r=m-1
    return r+1
def search_end(x,arr):
    l,r=0,N-1
    while l<=r:
        m=(l+r)//2
        if arr[m]>x:r=m-1
        else:l=m+1
    return r
for _ in range(M):
    s,e=map(int, input().split())
    s_i,e_i=search_start(s,I),search_end(e,I)
    print(e_i-s_i+1)