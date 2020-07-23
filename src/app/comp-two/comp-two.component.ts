import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { PersonService } from 'src/app/person.service';


@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

	person: Person;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  	this.getPerson();
  }

  getPerson(): void {
  	this.personService.getPerson();
  }

}
