I=[*map(int,open('./dev/stdin').read().split())]
I=sorted([*enumerate(I)], key=lambda x:-x[1])[:5]
print(sum(map(lambda x:x[1],I)), ' '.join(sorted([*map(lambda x:str(x[0]+1),I)])))