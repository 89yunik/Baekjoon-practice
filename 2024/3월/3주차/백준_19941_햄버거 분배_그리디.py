N,K=map(int, input().split())
S=input()
eaten,x=[0]*N,0
for i,s in enumerate(S):
    if s == 'P':
        for j in range(max(0,i-K),min(i+K+1,N)):
            if S[j] == 'H' and not eaten[j]: eaten[j]=1;x+=1;break
print(x)