def solution(h1, m1, s1, h2, m2, s2):
    alarm_cnt = 0
    start_time = h1*3600+m1*60+s1
    end_time = h2*3600+m2*60+s2
    if start_time == 0 or start_time == 12 * 3600: alarm_cnt += 1
    for curr_time in range(start_time, end_time):
        h_curr = curr_time/120%360
        m_curr = curr_time/10%360
        s_curr = curr_time*6%360
        h_next = (curr_time + 1)/120%360
        m_next = (curr_time + 1)/10%360
        s_next = (curr_time + 1)*6%360
        if h_next == 0: h_next = 360
        if m_next == 0: m_next = 360
        if s_next == 0: s_next = 360
        if s_curr < h_curr and s_next >= h_next: alarm_cnt += 1
        if s_curr < m_curr and s_next >= m_next: alarm_cnt += 1
        if s_next == h_next and s_next == m_next: alarm_cnt -= 1
    return alarm_cnt