N=int(input())
o,cards=2**62+1,{}
for _ in range(N):
    card=int(input())
    if card in cards : cards[card]+=1
    else : cards[card]=1
    if o==2**62+1 or cards[card]==cards[o]: o=min(o,card)
    elif cards[card]>cards[o]:o=card
print(o)