function solution(orders, course) {
  function comb(arr, r) {
    if (r == 1) return arr.map(e => [e])
    const results = []
    for (const i in arr)
      results.push(...comb(arr.slice(+i + 1), r - 1).map(e => [arr[i], ...e]))
    return results
  }
  const answers = [...Array(11)].map(_ => new Object())
  orders.forEach(order =>
    course.forEach(r => {
      comb(order.split``.sort(), r).forEach(candidate => {
        const str = candidate.join``
        const cnt = orders.reduce(
          (a, order) =>
            a + +candidate.sort().every(food => order.includes(food)),
          0,
        )
        if (!answers[r][str] && cnt > 1) answers[r][str] = cnt
      })
    }),
  )
  return answers
    .map(answer => {
      answer = Object.entries(answer)
      return answer
        .sort((a, b) => b[1] - a[1])
        .filter(([, cnt]) => cnt == answer[0][1])
        .map(([e]) => e)
    })
    .flat()
    .sort()
}
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]))
