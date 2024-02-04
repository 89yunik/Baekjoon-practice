import sys
input = sys.stdin.readline
N=int(input())
S=[]
for _ in range(N):
    R=input().split()
    if R[0]=='1':S.append(R[1])
    if R[0]=='2':print(S.pop() if len(S) else -1)
    if R[0]=='3':print(len(S))
    if R[0]=='4':print(0 if len(S) else 1)
    if R[0]=='5':
        l=len(S)-1
        print(S[l] if l>=0 else -1)