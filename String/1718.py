A,B,C=input(),input(),''
for i in range(len(A)):
    a=ord(A[i])
    if a==32: C+=A[i]
    else: 
        b=ord(B[i%len(B)])-96
        if a-b<97:a+=26-b
        else:a-=b
        C+=chr(a)
print(C)