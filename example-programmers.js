function solution(orders, course) {
  const [compare, l, answer] = [
    (a, b) => a.split``.filter(e => b.includes(e)).sort().join``,
    orders.length,
    [],
  ]
  for (let i = 0; i < l; i++)
    for (let j = i + 1; j < l; j++) {
      const x = compare(orders[i], orders[j])
      answer.push(x)
    }
  return answer
}
console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]),
)
