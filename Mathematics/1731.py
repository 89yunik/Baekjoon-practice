N=int(input())
I=[int(input()) for _ in range(N)]
if I[1]-I[0]==I[2]-I[1]:print(I[N-1]+I[1]-I[0])
if I[1]/I[0]==I[2]/I[1]:print(int(I[N-1]*I[1]/I[0]))