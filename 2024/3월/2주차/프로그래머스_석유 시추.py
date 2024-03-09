def solution(land):
    n,m=len(land), len(land[0])
    v=[[0 for _ in range(m)] for _ in range(n)]
    def dfs(sx,sy,v):
        stack = [[sx,sy]]
        v[sx][sy] = 1
        min_y,max_y=sy,sy
        oil = 0
        while stack:
            x,y = stack.pop()
            min_y,max_y=min(min_y,y),max(max_y,y)
            next = [[x-1,y],[x,y-1],[x,y+1],[x+1,y]]
            oil += 1
            for nx,ny in next:
                if 0<=nx<n and 0<=ny<m and not v[nx][ny] and land[nx][ny]:
                    v[nx][ny]=1
                    stack.append([nx,ny])
        return oil,min_y,max_y
    lines = [0 for _ in range(m)]
    for j in range(m):
        for i in range(n):
            if land[i][j] == 1 and not v[i][j]: 
                oils,min_y,max_y = dfs(i,j,v)
                for k in range(min_y,max_y+1): lines[k] += oils
    return max(lines)