o='%.250f'%2**-int(input())
i=len(o)-1
while o[i]=='0': i-=1
print(o[:i+1])