function solution(info, query) {
  info = info.map(inputs => inputs.split` `)
  query = query.map(condition => condition.replace(/and /g, '').split` `)
  const options = [
    ['cpp', 'java', 'python', '-'],
    ['backend', 'frontend', '-'],
    ['junior', 'senior', '-'],
    ['chicken', 'pizza', '-'],
  ]
  const [patterns, oPatterns] = [[], {}]
  function pInit(pattern) {
    if (pattern.length == 4 && patterns.push(pattern)) return
    for (let i = 0; i < 3; i++) pInit([...pattern, options[pattern.length][i]])
  }
  for (let i = 0; i < 4; i++) pInit([options[0][i]])
  patterns.forEach(pattern => {
    const scores = info
      .filter(conditions =>
        conditions
          .slice(0, 4)
          .every(
            (condition, i) => pattern[i] == '-' || condition == pattern[i],
          ),
      )
      .map(([, , , , score]) => +score)
      .sort((a, b) => a - b)
    oPatterns[pattern.join` `] = scores
  })
  const answer = query.map(condition => {
    const pScore = +condition.pop()
    const scores = oPatterns[condition.join` `]
    let [l, r] = [0, scores.length]
    while (l < r) {
      const mid = ~~((l + r) / 2)
      scores[mid] < pScore ? (l = mid + 1) : (r = mid)
    }
    return scores.length - l
  })
  return answer
}
console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 140',
      'python and frontend and senior and chicken 220',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ],
  ),
)
