from collections import deque
N,O=int(input()),[]
B=deque(enumerate(map(int,input().split())))
while B:
    i,move=B.popleft()
    O.append(i+1)
    B.rotate(1-move) if move>0 else B.rotate(-move)
print(' '.join(map(str,O)))