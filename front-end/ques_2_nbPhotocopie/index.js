const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    const inputNb = document.querySelector('#inputAge3').value;
    const message = document.querySelector('#message');
    let price;
    e.preventDefault();

    if (inputNb == false) {
            message.classList = 'alert alert-danger';
            message.textContent = 'Veuillez entrez un nombre !';
    } else {
        if (inputNb <= 10) {
            price = inputNb * 0.1;
        } else if (inputNb <= 30) {
            price = 10 * 0.1 + (inputNb - 10) * 0.09;
        } else {
            price = 10 * 0.1 + 20 * 0.09 + (inputNb - 30) * 0.08;
        }
        message.classList = 'alert alert-success';
        message.textContent = 'le prix total est : ' + price.toFixed(2);
    }
})

/*

                0,10 € les dix premières photocopies.

                0,09 € les vingt suivantes.

                Et 0,08 € au-delà.

                Écrivez un programme en JavaScript  qui demande à l'utilisateur le nombre de photocopies qu'il souhaite effectuer et qui affiche par la suite la facture correspondante.


    Create input type number and button
    Create div message
    Add event to the button
        declare variable price
        Select the input value
        Select the div message
        if the input Value is less or equal 10 then 
            price store the iValue time 0.1
            Else If iValue is less or equal 30 then
                price store 10*0,1 + (iValue - 10 ) * 0.09
                    Else 
                    price store 10*0,1 + 20*0.09 + (iValue - 30) * 0.08
    print the message with the variable Price

    

*/