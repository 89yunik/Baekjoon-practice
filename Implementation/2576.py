odd=[]
for _ in range(7) : 
    x=int(input())
    if x%2==1: odd.append(x)
if odd: print(sum(odd), min(odd))
else: print(-1)