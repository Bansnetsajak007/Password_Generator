const input_field = document.querySelector('#value');
const copy_button = document.querySelector('#copy');

const copy_to_clipboard = (input) => {
    if(input.trim() !== ''){
        const text = input_field.value;
        return navigator.clipboard.writeText(text);
    }

    else{
        // throw new Error("Could not copy text to clip board");
        console.log("Couldn't copy to clip board");
    }
}

copy_button.addEventListener('click', () => {
    copy_to_clipboard(input_field.value);

});