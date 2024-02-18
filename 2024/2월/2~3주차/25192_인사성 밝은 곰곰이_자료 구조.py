N,*I=open('./dev/stdin').read().split()
I.append('ENTER')
o,O=0,set()
for x in I:
    if x=='ENTER':o+=len(O);O.clear()
    else:O.add(x)
print(o)