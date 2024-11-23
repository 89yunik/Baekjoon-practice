def is_prime_number(n):
    if n==1: return False
    for i in range(2,int(n**0.5)+1):
        if n%i==0: return False
    return True
N=int(input())
A=[n for n in input().split() if is_prime_number(int(n))]
print(len(A))