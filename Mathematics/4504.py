n,*I=[*map(int,open('./dev/stdin'))]
I.pop()
for x in I: 
    a=''
    if x%n: a='NOT '
    print(f'{x} is {a}a multiple of {n}.')