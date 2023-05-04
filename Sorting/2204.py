while True:
    n=int(input())
    if not n:break
    I=[]
    for i in range(n): I.append(input())
    I.sort(key=str.lower)
    print(I[0])