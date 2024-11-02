fun main() {
    val N = readln().toInt()
    val Shortcuts:MutableSet<Char> = mutableSetOf()
    fun findShortcut(words:MutableList<String>, Shortcuts:MutableSet<Char>) {
        for ((j, word) in words.withIndex()) {
            if (word[0].uppercaseChar() !in Shortcuts){
                Shortcuts.add(word[0].uppercaseChar())
                words[j] = word.substring(0, 0) + "[${word[0]}]" + word.substring(1)
                return
            }
        }

        for ((j, word) in words.withIndex()){
            for (i in 1 until word.length){
                if (word[i].uppercaseChar() !in Shortcuts){
                    Shortcuts.add(word[i].uppercaseChar())
                    words[j] = word.substring(0, i) + "[${word[i]}]" + word.substring(i+1)
                    return
                }
            }
        }
    }

    repeat(N){
        val option = readln()
        val words = option.split(" ").toMutableList()
        findShortcut(words, Shortcuts)

        println(words.joinToString(" "))
    }
}