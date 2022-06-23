// Öklid algoritması kullanarak iki sayının en büyük ortak bölenini hesaplayan fonksiyon   
const gcd = (num1,num2) => {
    while (num2 != 0) {
          let result = num1 % num2;
          num1 = num2;
          num2 = result;
        }
        return num1;
};

// İki sayının en küçük ortak katını hesaplayan fonksiyon
const lcm = (num1, num2) => {
    return ((num1) / gcd(num1, num2)) * num2;
}

/* Belirlemiş olduğumuz değere kadar devam edecek olan for döngümüzle beraber ikişerli şekilde ekok hesaplayarak 
ve bulduğumuz sonucu bir sonraki iterasyona devrederek sürekli büyüyen bir sonuç elde ediyoruz. n değerine ulaştığımızda da 
artık elimizde n değerine kadar olan sayıların en küçük ortak katı bulunuyor.
*/
const smallestMultiple = n => {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = lcm(result, i);
        }
        return result;
}

console.log(smallestMultiple(20));
