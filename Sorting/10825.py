N = int(input())
I = sorted([input().split() for _ in range(N)], key=lambda x:(-int(x[1]), int(x[2]), -int(x[3]), x[0]))
for i in I : print(i[0])