idx=1
while 1:
    n=int(input())
    if n==0:exit()
    messages,cnt=[input().split() for _ in range(n)],1
    
    print(f'Group {idx}')
    for i in range(n):
        for j in range(1,n):
            if messages[i][j]=='N':
                print(f'{messages[i-j][0]} was nasty about {messages[i][0]}')
                cnt=0
    if cnt: print('Nobody was nasty')
    print()
    idx+=1