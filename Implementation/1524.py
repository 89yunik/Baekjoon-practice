T=int(input())
O=[]
for _ in range(T): 
    input()
    input()
    a=max([int(i) for i in input().split()])
    b=max([int(i) for i in input().split()])
    if a < b : O.append('B')
    else : O.append('S')
print('\n'.join(O))