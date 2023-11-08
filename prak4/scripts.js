function ganjilgenap(){
    // deklarasi variabel mengambil element berdasarkan nama id
    let inputangka = document.getElementById('inputangka').value;
    let input = parseInt(inputangka);
    let ganjil = document.getElementById('ganjil');
    let genap = document.getElementById('genap');

    if (input > 0){
        // deklarasi variabel
        let outGanjil = 0;
        let outGenap = 0;
       
        for(let i = 1; i <= input; i++){
            if(i % 2 == 0){
                outGenap++
            }else{
                outGanjil++
            }
        }
        ganjil.textContent = outGanjil;
        genap.textContent = outGenap;
    }else{
        alert('Gagal');
    }
}
