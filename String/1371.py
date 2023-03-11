import sys
s = sys.stdin.read()
A = [0]*26
for i in s: 
    if i.islower():A[ord(i)-97]+=1
o = ''
for i in range(26): 
    if(A[i] == max(A)) :o+=chr(i+97)
print(o)