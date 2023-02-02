fun main() {
    val N = readln().toInt()
    val I = Array(N) { readln().split(' ').map({ it.toInt() }) }
    val dp1 = intArrayOf(0, 0, 0)
    val dp2 = intArrayOf(0, 0, 0)
    for(i in I) {
        val A = maxOf(dp1[0], dp1[1])
        val B = dp1.max()
        val C = maxOf(dp1[1], dp1[2])
        dp1[0] = A + i[0]
        dp1[1] = B + i[1]
        dp1[2] = C + i[2]
        val a = minOf(dp2[0], dp2[1])
        val b = dp2.min()
        val c = minOf(dp2[1], dp2[2])
        dp2[0] = a + i[0]
        dp2[1] = b + i[1]
        dp2[2] = c + i[2]
    }
    print("${dp1.max()} ${dp2.min()}")
}