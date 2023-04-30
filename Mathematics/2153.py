word=input()
num=0
for x in word: 
    n=ord(x)
    if n<97: n-=38
    else: n-=96
    num+=n
o=''
for i in range(2, num): 
    if num%i==0: o='not '
print(f'It is {o}a prime word.')