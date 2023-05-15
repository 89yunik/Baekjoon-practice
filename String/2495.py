for _ in range(3):
    x,o,cnt=input(),1,1
    for i in range(1,len(x)): 
        if x[i]==x[i-1]: cnt+=1
        else: cnt=1
        if cnt>o:o=cnt
    print(o)