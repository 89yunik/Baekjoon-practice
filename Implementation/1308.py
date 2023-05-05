from datetime import date
A,B=[date(*map(int, input().split())) for _ in range(2)]
print(['gg',f'D-{(B-A).days}'][B<date(A.year+1000,A.month,A.day)])