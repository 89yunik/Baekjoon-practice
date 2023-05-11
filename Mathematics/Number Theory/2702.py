T=int(input())
def gcd(a,b): 
    if not b%a: return a
    return gcd(b%a, a)
for _ in range(T):
    a,b=sorted(map(int,input().split()))
    x=gcd(a,b)
    print(int(a*b/x), x)