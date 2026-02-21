import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-home',
  imports: [LeftSidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.getAllPost();
  }

  mainSevice = inject(MainService);

  allPostObj:any =[];

  getTimeAgo(dateTime: string): string {
  const postedTime = new Date(dateTime).getTime();
  const now = new Date().getTime();

  const diff = now - postedTime;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return `${days} days ago`;
  }
}

  shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
  getAllPost(){
    this.mainSevice.getAllPost().subscribe((res:any)=>{
      this.allPostObj = this.shuffleArray(res);
    })
  }


}
