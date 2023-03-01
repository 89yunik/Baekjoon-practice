S1,S2,S3 = map(int,input().split())
a,b,c=[i+1 for i in range(S1)],[i+1 for i in range(S2)],[i+1 for i in range(S3)] 
s = {}
for x in a: 
    for y in b:
        for z in c:
            if s.get(x+y+z) : s[x+y+z]+=1
            else : s[x+y+z]=1
print(sorted(s.items(), key=lambda s: s[1], reverse=True)[0][0])