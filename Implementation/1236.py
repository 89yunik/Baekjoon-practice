N,M = map(int,input().split())
I = []
for _ in range(N) : I.append(input())
A,B = [],[]
for i in range(N) :  
    if all(x == '.' for x in I[i]) :
        A.append(i)
for j in range(M) :  
    for i in range(N) :
        if I[i][j] == 'X' : break
        if i == N - 1 :
            B.append(j)
print(max(len(A), len(B)))
# N,M=map(int, input().split())
# I=[input() for _ in range(N)]
# F=lambda x: not'X'in x
# c=sum(map(F, I))
# r=sum(map(F, zip(*I)))
# print(max(r, c))