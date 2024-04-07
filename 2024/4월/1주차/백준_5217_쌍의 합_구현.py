t=int(input())
for _ in range(t):
    n=int(input())
    A=[]
    for i in range(1,n//2+1):
        if i != n-i: A.append(f'{i} {n-i}')
    print(f'Pairs for {n}:',', '.join(A))