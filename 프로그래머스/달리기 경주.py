def solution(players, callings):
    positions,l={},len(players)
    for i in range(l): positions[players[i]]=i
    for c in callings: 
        i=positions[c]
        p=players[i-1]
        players[i],players[i-1]=players[i-1],players[i]
        positions[c]-=1
        positions[p]+=1
    answer=players
    return answer
print(solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"]))