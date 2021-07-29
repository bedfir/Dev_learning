
const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    //select the elements
    const message = document.querySelector('#message');
    const rbs = document.querySelectorAll('input[name="gridRadios"]');
    const age = document.querySelector('#inputAge3');
    //Declare boolean variable
    let c1;
    let c2;
    //extract the data form Radios
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    //initialize boolean
    c1 = selectedValue == 'masculin' && age.value > 20;
    c2 = selectedValue == 'feminin' && (age.value > 18 && age.value < 35);
    // condition if the personne are Imposable, or not  
    if (c1 || c2) {
        message.classList = 'alert alert-success text-center';
        message.textContent = 'Vous êtes Imposable.';
    } else {
        message.classList = 'alert alert-danger text-center';
        message.textContent = 'Vous êtes Non Imposable.';
    }
    //does not refresh the page 
    e.preventDefault();
})