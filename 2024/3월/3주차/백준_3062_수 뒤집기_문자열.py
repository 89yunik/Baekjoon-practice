T=int(input())
for _ in range(T):
    n=input()
    n=str(int(n)+int(n[::-1]))
    print('YES' if n == n[::-1] else 'NO')