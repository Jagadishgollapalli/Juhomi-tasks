var word=prompt("enter your word")
word=word.toUpperCase();
console.log(word);
var alphabets={
    A:2,
    B:1,
    c:1,
    D:4,
    E:2,
    F:7,
    G:4,
    H:7,
    I:10,
    J:8,
    K:5,
    L:2,
    M:1,
    N:5,
    O:2,
    P:1,
    Q:10,
    R:7,
    S:8,
    T:2,
    U:2,
    V:7,
    W:7,
    X:8,
    Y:7,
    Z:10
}
var add=0;
for(i=0;i<word.length;i++){
    var total=word[i];
    add=add+alphabets[total];
}
document.write(add);