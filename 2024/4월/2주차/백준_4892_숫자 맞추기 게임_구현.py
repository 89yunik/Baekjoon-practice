cnt=1
while 1:
    n=int(input())
    if n==0:exit()
    n1=3*n
    n4=3*((n1+1)//2)//9
    print(f'{cnt}. {"odd" if n1%2 else "even"} {n4}')
    cnt+=1