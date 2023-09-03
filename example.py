T,*I = map(lambda x: x.split(), open('./dev/stdin').read().split('\n'))
A = {'kg': [2.2046, 'lb'], 'lb': [0.4536, 'kg'], 'l': [0.2642, 'g'], 'g': [3.7854, 'l']}
for x,y in I[:T]: print(f'{float(x)*A[y][0]:.4f} {A[y][1]}')