I = []
while (1) :
    x = input()
    if x == '0' : break
    I.append(x)
O = []
for n in I:
    l = len(n)
    o = l + 1
    for i in range(l):
        if n[i] == '0' : o += 4
        elif n[i] == '1' : o += 2
        else : o += 3
    O.append(o)
for o in O: print(o)