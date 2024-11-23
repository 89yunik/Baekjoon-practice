T=int(input())
primes=[1]*10001
for i in range(2,101):
    if primes[i]:
        for j in range(i*i,10001,i):primes[j]=0
for _ in range(T):
    n=int(input())
    for i in range(n//2,1,-1):
        if primes[i] and primes[n-i]:print(i,n-i);break