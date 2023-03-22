a,b=map(int, input().split())
c,d,e,f=a%4,b%4,a//4,b//4
if c==0:
    c=4
    e-=1
if d==0:
    d=4
    f-=1
print(abs(c-d)+abs(e-f))
print(~-100)