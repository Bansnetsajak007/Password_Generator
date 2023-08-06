//gona see this tommorow comlete this anuhow
//lot of erros fix them tommorow

const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const small_case = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#}>$%[&<(:|+~';

const passwordLength = document.getElementById('total-char');
// const passwordLen = document.getElementById('total-char');


const show_password = document.getElementById('value');
const button = document.getElementById('generate');
const Strength = document.getElementById('Strength');


const generateRandom = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}


const Custamize_password = (Length) => {

    let password = '';
    const datasets = [capital,small_case,number,symbol];

    while(password.length < Length){
        const randomdataset =datasets[Math.floor(Math.random() * datasets.length)];

        password += generateRandom(randomdataset);
}

return password
}

button.addEventListener('click', () =>{

    show_password.value = Custamize_password(passwordLength.value);
    
});