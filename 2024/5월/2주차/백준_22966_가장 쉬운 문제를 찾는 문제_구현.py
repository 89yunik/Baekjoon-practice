N=int(input())
I= sorted([input().split() for _ in range(N)], key=lambda x:int(x[1]))
print(I[0][0])