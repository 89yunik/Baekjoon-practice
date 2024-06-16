from datetime import datetime
month,day=int(input()),int(input())
print('Before' if datetime(2015,month,day) < datetime(2015,2,18) else 'After' if datetime(2015,month,day) > datetime(2015,2,18) else 'Special')