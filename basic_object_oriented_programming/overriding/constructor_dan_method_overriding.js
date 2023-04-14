class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}
 
class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender)
    this.sender = sender;
    this.isBusiness = isBusiness;
  }
}
 
const whatsapp = new WhatsAppService('+6281234567890', true);
 
/**
* jika tidak diberikan "super()"
* Output:
* ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
*/