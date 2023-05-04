n=int(input())
for _ in range(n):
    Ti,*Nij=[*map(int,input().split())]
    Nij.sort()
    mid=Ti//2
    x=Nij[mid]
    print(x if Nij.count(x)>mid else 'SYJKGW')