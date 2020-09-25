import '../css/styles.css';

const contactFrom = document.querySelector('.contactFrom');
const contactform__cta = document.querySelector('.contactform__cta');
const email = document.querySelector('.email');

contactFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    contactform__cta.innerHTML = `<h3>This form has been submitted.</h3>`;
})

email.addEventListener( 'input' , (e) => {
    const emailReg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(e.target.value)
   if(e.target.value.match(emailReg)) {
        email.classList.remove("invalid");
        email.classList.add("valid");
   }  else {
        email.classList.remove("valid");
        email.classList.add("invalid");
   } 
})

