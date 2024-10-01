M,N=[*map(int,input().split())]
convert=['zero','one','two','three','four','five','six','seven','eight','nine']
O=[]
for i in range(M, N+1):
    num_str = str(i)
    converted_num = ' '.join([convert[int(num)] for num in num_str])
    O.append([i,converted_num])
O=[*map(lambda x:x[0], sorted(O, key=lambda x:x[1]))]

for i in range(0,len(O),10): print(*O[i:i+10])