I = list(map(lambda x: x.split(), open('./dev/stdin').read().split('\n')))
i, n = 0, 1
while I[i][0] != '0' : 
    o,w = map(int, I[i])
    while I[i][0] != '#': 
        i+=1
        if w > 0 : 
            x = int(I[i][1])
            if I[i][0] == 'E': w-=x
            else: w+=x
    if w > o/2 and w < 2*o : print(f'{n} :-)')
    elif w <= 0 : print(f'{n} RIP')
    else : print(f'{n} :-(')
    i+=1
    n+=1