N=int(input())
o=5
for i in range(N-1): o+=((i+3)*3-2)%45678
print(o%45678)