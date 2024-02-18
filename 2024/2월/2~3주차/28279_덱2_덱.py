import sys
from collections import deque
input=sys.stdin.readline
N=int(input());d=deque()
for _ in range(N):
    order=input();o=int(order[0])
    if o==1:x=int(order.split()[1]);d.appendleft(x)
    if o==2:x=int(order.split()[1]);d.append(x)
    if o==3:print(d.popleft() if d else -1)
    if o==4:print(d.pop() if d else -1)
    if o==5:print(len(d))
    if o==6:print(0 if d else 1)
    if o==7:print(d[0] if d else -1)
    if o==8:print(d[len(d)-1] if d else -1)