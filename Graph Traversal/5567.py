[n],[m],*s=[[*map(int,l.split())] for l in open('./dev/stdin')]
G=[[] for _ in range(n+1)]
for a,b in s:
    G[a].append(b)
    G[b].append(a)
o=set(G[1])
for i in G[1]: o.update(G[i])
o.discard(1)
print(len(o))
# from collections import deque
# n, m = int(input()), int(input())
# friend_list = [set() for _ in range(n+1)]
# for i in range(m): 
#     a,b=map(int, input().split())
#     friend_list[a].add(b)
#     friend_list[b].add(a)
# visited, queue, level, cnt = [0]*(n+1), deque([1]), 0, 1
# visited[1]=1
# while(len(queue) and level<=1):
#     curr = queue.popleft()
#     for next in friend_list[curr]:
#         if not visited[next]: 
#             visited[next]=1
#             queue.append(next)
#     cnt-=1
#     if cnt==0:
#         level+=1
#         cnt=len(queue)
# print(visited.count(1)-1)