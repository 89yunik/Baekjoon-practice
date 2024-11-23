A,B=int(input()),input()
C = [A*int(b) for b in B[::-1]]
for c in C:print(c)
print(A*int(B))