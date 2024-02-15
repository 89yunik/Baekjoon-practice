import sys, heapq
input = sys.stdin.readline
T=int(input())
def f(heap, v, pop=1):
    while heap and not v[heap[0][1]]: heapq.heappop(heap)
    if pop and heap: v[heap[0][1]]=0; heapq.heappop(heap)
for _ in range(T):
    maxheap,minheap,v=[],[],[0 for _ in range(10**6)]
    k=int(input())
    for i in range(k):
        op,n=input().split()
        n=int(n)
        if op=='I':
            heapq.heappush(minheap, (n,i))
            heapq.heappush(maxheap, (-n,i))
            v[i]=1
        if op=='D':
            if n==1: f(maxheap, v)
            if n==-1: f(minheap, v)
    f(maxheap, v, 0)
    f(minheap, v, 0)
    if maxheap and minheap: print(-maxheap[0][0], minheap[0][0])
    else: print('EMPTY')