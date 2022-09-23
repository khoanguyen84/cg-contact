import axios from "axios";
import { CONTACT_URL } from './common';

class ContactService{
    static getContacts(){
        return axios.get(CONTACT_URL)
    }

    static deleteContact(contactId){
        return axios.delete(`${CONTACT_URL}/${contactId}`)
    }
}

export default ContactService;