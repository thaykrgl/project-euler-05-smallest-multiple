// Öklid algoritması kullanarak iki sayının en büyük ortak bölenini hesaplayan fonksiyon   
const ebob = (sayi1,sayi2) => {
    while (sayi2 != 0) {
          let sonuc = sayi1 % sayi2;
          sayi1 = sayi2;
          sayi2 = sonuc;
        }
        return sayi1;
};

// İki sayının en küçük ortak katını hesaplayan fonksiyon
const ekok = (sayi1, sayi2) => {
    return ((sayi1) / ebob(sayi1, sayi2)) * sayi2;
}

// Belirlemiş olduğumuz değere kadar devam edecek olan for döngümüzle beraber ikişerli şekilde ekok hesaplayarak 
ve bulduğumuz sonucu bir sonraki iterasyona devrederek sürekli büyüyen bir sonuç elde ediyoruz. n değerine ulaştığımızda da 
artık elimizde n değerine kadar olan sayıların en küçük ortak katı bulunuyor.
const smallestMultiple = n => {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = ekok(result, i);
        }
        return result;
}

console.log(smallestMultiple(20));
