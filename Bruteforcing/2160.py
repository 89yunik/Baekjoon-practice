N=int(input())
def comp(a,b):
    o=0
    for i in range(5):
        for j in range(7):
            if a[i][j]!=b[i][j]:o+=1
    return o
I=[]
for _ in range(N):I.append([input() for _ in range(5)])
l,num,o=len(I),36,''
for i in range(l):
    for j in range(i+1,l):
        cnt=comp(I[i],I[j])
        if cnt<num:num=cnt;o=f'{i+1} {j+1}'
print(o)