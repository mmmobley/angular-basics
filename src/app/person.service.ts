import { Injectable } from '@angular/core';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

	person: Person;

  constructor() {
  	this.person.name = "Lindsay Lohan";
  	this.person.id = 11;
   }

   getPerson(){
   	return this.person.name + " " + this.person.id;
   }
}
