//code that checks Strength of password on the basis of the length 

const passwordLen = document.getElementById('total-char');

const check_stringth = () => {
    let len = Number(passwordLen.value);
    // console.log(typeof(len));
    // console.log("from strengthcheckerrr !!");

    if(len >= 2 && len <= 5){
        // Strength.innerText = `Very Weak!!😥`;
        return 'Very Weak!!😥';
    }
    
    if(len >= 5 && len <= 7){
        // Strength.innerText = `Moderate!!😐`;
        return 'Moderate!!😐';
    }
    
    if(len  >= 8 && len <= 30){
        // Strength.innerText = `Very Strong!! 😎`;
        return 'Very Strong!! 😎';
    }
}


button.addEventListener('click', () => {
    Strength.innerText = check_stringth();

    if(Strength.innerText === 'Very Weak!!😥' ){
        Strength.classList.remove('Moderate', 'strong');
        Strength.classList.add('Very-Weak')
    }
    
    if(Strength.innerText === 'Moderate!!😐' ){
        Strength.classList.remove('Very-Weak', 'strong');
        Strength.classList.add('Moderat')
    }
    
    if(Strength.innerText === 'Very Strong!! 😎' ){
        Strength.classList.remove('Moderate', 'Very-Weak');
        Strength.classList.add('strong')
    }
} );