function evenPowersOf2(input){

    let n = Number(input[0]);
    let num =1;

    for (int i=0 ; i<=n ; i+=2 ){
        console.log(num); num= num *2*2;
    }
}


evenPowersOf2 (["7"])


//Да се напише функция, която получава число n
// и печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n.