import re
I=open('./dev/stdin').read().split()
I.pop()
p=re.compile('[aeiou]')
for s in I: 
    x,l='',len(s)
    if p.search(s)==None: x='not '
    for i in range(l):
        if i<l-2:
            c1,c2,c3=p.match(s[i]),p.match(s[i+1]),p.match(s[i+2])
            if c1==c2==c3==None or (c1!=None and c2!=None and c3!=None):x='not '
        if i<l-1 and s[i]==s[i+1] and (s[i]!='e' and s[i]!='o'): x='not '
    print(f'<{s}> is {x}acceptable.')