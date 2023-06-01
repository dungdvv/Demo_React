function myFunc (vari){
    console.log(vari + `hello`)
}
function myCallb(e){
    console.log(e)
}

myFunc(myCallb('Hello'))