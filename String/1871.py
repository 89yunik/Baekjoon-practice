N=int(input())
for i in range(N):
    A,B=input().split('-')
    a,b,l=0,int(B),len(A)-1
    for i in range(l+1):
        a+=(ord(A[l-i])-65)*26**i
    if abs(a-b)>100: print('not nice')
    else: print('nice')