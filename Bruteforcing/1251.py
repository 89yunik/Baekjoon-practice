x=input()
l,O=len(x),[]
for i in range(1,l-1):
    for j in range(i+1,l):
        O.append(x[:i][::-1]+x[i:j][::-1]+x[j:][::-1])
print(sorted(O)[0])