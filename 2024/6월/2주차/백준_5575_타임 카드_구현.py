from datetime import datetime
for _ in range(3):
    t=[*map(int, input().split())]
    start,end = datetime(2024,6,16,*t[:3]), datetime(2024,6,16,*t[3:])
    work_seconds = (end-start).total_seconds()
    hours,minutes,seconds = int(work_seconds//3600), int((work_seconds % 3600)//60), int(work_seconds%60)
    print(hours,minutes,seconds)