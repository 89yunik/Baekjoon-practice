n=int(input())
l,r=0,n
while l<r:
    m=int((l+r)/2)
    if m**2<n:l=m+1
    else:r=m
print(r)