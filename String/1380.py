num=0
while n:=int(input()):
    num+=1
    name,O=[input() for _ in range(n)],set()
    for _ in range(2*n-1):
        j=int(input().split()[0])
        if j in O: O.remove(j)
        else: O.add(j)
    x=list(O)[0]
    print(num,name[x-1])