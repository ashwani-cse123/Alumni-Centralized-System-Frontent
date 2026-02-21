import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterLink],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {

  authServie = inject(AuthService);

  userObj = this.authServie.getUser();

}
