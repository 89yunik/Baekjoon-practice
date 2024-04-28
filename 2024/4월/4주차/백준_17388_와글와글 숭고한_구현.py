I,U=[*map(int,input().split())],['Soongsil','Korea','Hanyang']
i=I.index(min(I))
print(U[i] if sum(I) < 100 else 'OK')