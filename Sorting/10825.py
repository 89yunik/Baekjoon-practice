N = int(input())
print(*[i[0] for i in sorted([input().split() for _ in range(N)], key=lambda x:(-int(x[1]), int(x[2]), -int(x[3]), x[0]))])