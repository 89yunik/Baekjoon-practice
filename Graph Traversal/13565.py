M, N = map(int, input().split())
I = [list(map(int, list(input()))) for _ in range(M)]
V = [[0 for _ in range(N)] for _ in range(M)]
# def dfs(x, y):
    # V[x][y] = 1
    # next = [[x-1, y], [x, y-1], [x, y+1], [x+1, y]]
    # for nx, ny in next:
    #     if 0<=nx<M and 0<=ny<N and not I[nx][ny] and not V[nx][ny]:
    #         dfs(nx, ny)
# for i in range(N) : 
#     if not I[0][i]: dfs(0, i)
# print('YES' if any(V[M-1]) else 'NO')
S = []
for i in range(N):
    if not I[0][i]: S.append([0, i])
O = 0
while len(S):
    x, y = S.pop()
    V[x][y] = 1
    if x == M-1: 
        O = 1
        break
    next = [[x-1, y], [x, y-1], [x, y+1], [x+1, y]]
    for nx, ny in next:
        if 0<=nx<M and 0<=ny<N and not I[nx][ny] and not V[nx][ny]: S.append([nx, ny])
print('YES' if O else 'NO')