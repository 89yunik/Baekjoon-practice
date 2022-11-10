fun main()=with(System.out.bufferedWriter()) {
    val M = readLine()!!.toInt()
    val S = mutableSetOf<String>()
    for(i in 0..M-1) {
        val input = readLine()!!.split(' ')
        when(input[0]) {
            "add" -> S.add(input[1])
            "remove" -> S.remove(input[1])
            "check" -> if(S.contains(input[1])) write("1\n") else write("0\n")
            "toggle" -> if(S.contains(input[1])) S.remove(input[1]) else S.add(input[1])
            "all" -> {
                S.clear() 
                for(j in 1..20) S.add(j.toString())
            }
            "empty" -> S.clear()
        }
    }
    close()
}