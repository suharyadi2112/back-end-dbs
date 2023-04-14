
/*
*
*
Inheritance (pewarisan) pada class di JavaScript memungkinkan sebuah class untuk mewarisi sifat atau properti dari class lainnya
*
*
*/

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender; 
  }
 
  sendMessage(message, receiver) { //method
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
 
// Subclass
class WhatsAppService extends MailService { //inheritance dari mail service
  
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);//method milik class MailService
    }
  }

}
 
// Subclass
class EmailService extends MailService { //inheritance dari mail service
 
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);//method milik class MailService
    }, delay);
  }

}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');


//bisa menggunakan method dari class MailService karena inheritance (sendMessage method milik MailService)
whatsapp.sendMessage('Hello', '+6289876543210'); 


whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
//bagian ini karena WhatsAppService tidak ada akses ke class EmailService
whatsapp.sendDelayedMessage(); // Error //comment code ini untuk di running


/*-----------------*/
//bisa menggunakan method dari class MailService karena inheritance (sendMessage method milik MailService)
email.sendMessage('Hello', 'john@doe.com');


email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
//bagian ini karena EmailService tidak ada akses ke class WhatsAppService
email.sendBroadcastMessage(); // Error //comment code ini untuk di running