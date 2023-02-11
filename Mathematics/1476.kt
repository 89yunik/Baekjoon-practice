fun main() {
    var A = readln().split(' ').map({ it.toInt() })
    val B = intArrayOf(15, 28, 19)
    val x = A.indexOf(A.min())
    val m = A[x]
    A = A.map {it - m}
    var y = 0
    fun f(x: Int): Boolean{
        for(i in 0..2) if(x % B[i] != A[i]) return true
        return false
    }
    while(f(y)) y += B[x]
    print(y + m)
}