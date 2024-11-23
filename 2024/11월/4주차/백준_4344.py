C=int(input())
for _ in range(C):
    N,*scores=map(int,input().split())
    scores_over_avg=len([*filter(lambda score:score>sum(scores)/N,scores)])
    print("{:.3f}".format(scores_over_avg/N*100,3)+'%')