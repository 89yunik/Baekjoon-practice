str,o,cnt=input(),1,0
for i in range(len(str)):
    if i>0 and str[i-1]==str[i]:cnt=1
    else:cnt=0
    if str[i]=='d':o*=10-cnt
    else:o*=26-cnt
print(o)