I=[*open('./dev/stdin')][:-1]
for num in I :
    x=str(int(num))
    while len(x)>1:
        z=0
        for y in x: z+=int(y)
        x=str(z)
    print(x)