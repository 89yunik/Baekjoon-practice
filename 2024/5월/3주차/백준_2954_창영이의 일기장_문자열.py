input_string,output_string,vowels,i = input(),'','aeiou',0
while i < len(input_string):
    output_string += input_string[i]
    i+=3 if input_string[i] in vowels else 1
print(output_string)