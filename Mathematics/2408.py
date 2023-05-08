N,*I=open('./dev/stdin').read().split()
print(eval(''.join(I).replace('/','//')))