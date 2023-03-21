K,S,N=input().split()
N=int(N)
k,s=[int(K[1]), ord(K[0])-64],[int(S[1]), ord(S[0])-64]
def F(a):
    if ('R' in comm and a[1]==8) or ('L' in comm and a[1]==1) or ('B' in comm and a[0]==1) or ('T' in comm and a[0]==8): 
        return False
    if 'R' in comm: a[1]+=1
    if 'L' in comm: a[1]-=1
    if 'B' in comm: a[0]-=1
    if 'T' in comm: a[0]+=1
    return True
for _ in range(N):
    comm=input()
    t=[k[0],k[1]]
    x=F(t)
    if x==False: continue
    if t[0]==s[0] and t[1]==s[1]: 
        y=F(s)
        if y==False: continue
    k[0]=t[0]
    k[1]=t[1]
print(chr(k[1]+64)+str(k[0]))
print(chr(s[1]+64)+str(s[0]))
