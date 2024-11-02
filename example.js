// let [[a1, a0], [c], [n0]] = `${require('fs').readFileSync(
//   './dev/stdin',
// )}`.trim().split`\r\n`.map(e => e.split` `.map(Number))
// a1*n+a0<=c*
async function f() {
  gameId = '161936'
  const response = await fetch(
    // `https://boardgamegeek.com//xmlapi2/search?query=${gameId}&type=boardgame`,
    `https://boardgamegeek.com/xmlapi2/thing?id=${gameId}&stats=1`,
  )
  const text = await response.text()
  //   const parser = new DOMParser()
  //   const xml = parser.parseFromString(text, 'application/xml')
  //   const imageUrl = xml.querySelector('image')?.textContent
  console.log(text)
}
f()
