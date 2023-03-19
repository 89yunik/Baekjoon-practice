N,K=map(int, input().split())
A=[int(i) for i in input().split(',')]
for _ in range(K):
    B=[]
    for i in range(len(A)-1): B.append(A[i+1]-A[i])
    A=B
print(','.join([str(i) for i in A]))