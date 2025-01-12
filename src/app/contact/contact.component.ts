import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-contact',
  imports: [ FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  userAge !: number ;



}
