N,x,*I=map(int, open('./dev/stdin'))
o=0
while I and x<=max(I):i=I.index(max(I));x+=1;I[i]-=1;o+=1
print(o)