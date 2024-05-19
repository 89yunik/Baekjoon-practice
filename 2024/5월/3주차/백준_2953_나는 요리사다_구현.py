score,idx = max([(sum, i+1) for i, sum in enumerate([sum(map(int,input().split())) for _ in range(5)])])
print(idx, score)