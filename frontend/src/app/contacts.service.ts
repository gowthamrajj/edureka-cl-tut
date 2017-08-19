import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Contacts } from './contacts/contacts';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private _http: Http) { }

  //getting contacts through express rest api
  getContacts(){
    return this._http.get('http://localhost:3000/api/contacts')
      .map(res => res.json());
  }

  //adding contact using express rest api
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    return this._http.post('http://localhost:3000/api/contacts', newContact, { headers : headers})
      .map(res => res.json());
  }

    //deleting contact using express rest api
    deleteContact(id){
      return this._http.delete('http://localhost:3000/api/contact/'+id)
        .map(res => res.json());
    }

}
