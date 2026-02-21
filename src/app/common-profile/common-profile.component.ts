import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-profile',
  imports: [FooterComponent,CommonModule,FormsModule],
  templateUrl: './common-profile.component.html',
  styleUrl: './common-profile.component.css'
})
export class CommonProfileComponent {

  isFollow:boolean = false

  showFollowers(){
    this.isFollow = false;
  }

  showFollowing(){
    this.isFollow = true;
  }
}
