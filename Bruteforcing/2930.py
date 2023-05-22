R=int(input())
A=input()
N=int(input())
B=[input() for _ in range(N)]
def score(x,y): 
    C={'S':0,'R':1,'P':2}
    if x==y: return 1
    if (C[x]+1)%3==C[y]: return 0
    else: return 2
sum,mSum=0,0
for i in range(R):
    C,M=['S','R','P'],0
    for x in C:
        m=0
        for j in range(N):
            sum+=score(A[i],B[j][i])
            m+=score(x,B[j][i])
        M=max(M,m)
    mSum+=M
print(sum//3,mSum)