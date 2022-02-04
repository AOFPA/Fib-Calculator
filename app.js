function showName(){
    alert("Mr.Chokchai Jamnoi")
}

function fibCal(num){
    if(num < 2){
        return num
    }
    return fibCal(num-1) + fibCal(num-2)
}

function Fib(num){
    document.getElementById("result").innerHTML = fibCal(num)
}