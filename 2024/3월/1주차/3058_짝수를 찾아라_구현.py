T=int(input())
for _ in range(T):
    enums=[*filter(lambda x: x%2==0,map(int,input().split()))]
    print(sum(enums), min(enums))