import re
N=int(input())
o=N
while len(re.sub('[47]','',str(o))) > 0 : o-=1
print(o)