T=int(input())
for _ in range(T):
    N=input()
    M=str(int(N)**2)
    M=M[len(M)-len(N):len(M)]
    if N==M: print('YES')
    else: print('NO')