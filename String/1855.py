K,str=int(input()),input()
row=int(len(str)/K)
arr=[['' for _ in range(K)] for _ in range(row)]
x,y=0,0
for char in str:
    arr[x][y]=char
    if x%2==0:
        if y<K-1: y+=1
        else: x+=1
    else:
        if y>0: y-=1
        else: x+=1
o=''
for j in range(K):
    for i in range(row):
        o+=arr[i][j]
print(o)
