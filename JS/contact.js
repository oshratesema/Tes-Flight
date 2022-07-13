class ContactUs{
    constructor(){
        this.sendEmailBtn = document.querySelector("#sendEmailBtn");
        this.adminMsgText = document.querySelector("#adminMsg");
        this.emailInput = document.querySelector(".emailInput");
        this.sendBtn = document.querySelector('#sendBtn');
        this.nameInput = document.querySelector('#name');
        this.emailInput = document.querySelector('#email');
        this.messInput = document.querySelector('#message');
        this.sendMsg = document.querySelector('#sendMsg');
        
        console.log(this.sendBtn);

    }
    adminMsg() {
        if (this.emailInput.value == "") {
          this.adminMsgText.innerHTML = "file not filed.";
        } else {
          this.adminMsgText.innerHTML = "Thank you, keep in touch!";
        }  
      }  
      //sending contact us form.
    formSend(){
        if( this.nameInput.value == '' ||this.emailInput.value == '' || this.messInput.value == ''){
            this.sendMsg.innerHTML = 'form not filed'
        }else{
            this.sendBtn.innerHTML = 'Form Send';
            this.sendBtn.style.cssText = 'background-color:green'
            this.nameInput.value = '';
            this.emailInput.value = '';
            this.messInput.value = '';
            this.sendMsg.innerHTML = '';

        }
    }
      
}
this.sendEmailBtn.addEventListener("click", function(){
    let contactUs = new ContactUs();
    contactUs.adminMsg()
});

this.sendBtn.addEventListener("click", function(){
    let contactUs = new ContactUs();
    contactUs.formSend();
});

  