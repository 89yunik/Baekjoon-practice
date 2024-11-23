T=int(input())
for _ in range(T):
    OX=input()
    cnt,score=0,0
    for ox in OX:
        if ox=='O': cnt+=1; score+=cnt
        else: cnt=0
    print(score)