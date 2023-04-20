N=input()[::-1]
o,n='',0
for i in range(len(N)-1):
    x=int(N[i])
    if n>0: x+=1; n=0
    if x>4: n=1  
    o='0'+o
o=str(int(N[len(N)-1])+n)+o
print(o)