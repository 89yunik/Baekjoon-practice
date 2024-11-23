T=int(input())
for _ in range(T):
    R,S=input().split()
    print(''.join([s*int(R) for s in S]))