I=[[*map(int,input().split())] for _ in range(2)]
def gcd(a,b):
    if a<b:a,b=b,a
    if a%b==0:return b
    return gcd(b,a%b)
def lcm(a,b): return int((a*b)/gcd(a,b))
y=lcm(I[0][1], I[1][1])
x=int(I[0][0]*y/I[0][1]+I[1][0]*y/I[1][1])
z=gcd(x,y)
print(int(x/z), int(y/z))