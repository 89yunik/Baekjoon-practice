N=int(input())
I=input()
O=[['Adrian',0],['Bruno',0],['Goran',0]]
pattern=[['A','B','C'],['B','A','B','C'],['C','C','A','A','B','B']]
for i in range(len(I)): 
    for j in range(3):
        if I[i] == pattern[j][i%len(pattern[j])]: O[j][1]+=1
O.sort(key=lambda x:-x[1])
print(O[0][1])
i=0
while i<3 and O[i][1]==O[0][1]:print(O[i][0]);i+=1
