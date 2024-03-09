def solution(bandage, health, attacks):
    t,x,y = bandage
    hp = health
    last_attack_time = attacks[len(attacks)-1][0]
    success_length = 0
    j = 0
    for i in range(1, last_attack_time + 1):
        if i != attacks[j][0]:
            success_length += 1
            hp = min(hp+x, health)
            if success_length == t: 
                hp = min(hp+y, health)
                success_length = 0
        else:
            success_length = 0
            hp -= attacks[j][1]
            j += 1
            if hp <= 0 : hp = -1; break
    return hp