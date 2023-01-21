fun main() {
    val (n, k) = readLine()!!.split(' ').map({ it.toInt() })
    val I = IntArray(n) { readLine()!!.toInt() }
    val dp = IntArray(k+1)
    dp[0]++
    for(i in I) for(j in 1..k) if(j >= i) dp[j] += dp[j-i]
    print(dp[k])
}