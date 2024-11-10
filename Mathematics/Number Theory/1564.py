N = int(input())
x,cnt2,cnt5 = 1,0,0
for i in range(2, N+1):
    n=i
    while n%2==0: n//=2; cnt2+=1
    while n%5==0: n//=5; cnt5+=1
    x*=n; x%=10**5
x=(x*2**(cnt2-cnt5))%10**5
print('{:05}'.format(x))