import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-network',
  imports: [CommonModule,FormsModule],
  templateUrl: './my-network.component.html',
  styleUrl: './my-network.component.css'
})
export class MyNetworkComponent implements OnInit{
  ngOnInit(): void {
    this.getAllUsers();
  }
  mainService = inject(MainService);
  userObj:any =[];

  getAllUsers(){
    this.mainService.getAllUsers().subscribe((res:any)=>{
      this.userObj = res;
    })
  }

}
