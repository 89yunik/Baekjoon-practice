x,y=map(int, input().split())
month,O=[31,28,31,30,31,30,31,31,30,31,30,31],['SUN','MON','TUE','WED','THU','FRI','SAT']
for i in range(x-1):y+=month[i]
print(O[y%7])