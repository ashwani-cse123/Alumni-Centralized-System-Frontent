import { Component, inject, OnInit } from '@angular/core';
import { LeftSidebarComponent } from "../home/left-sidebar/left-sidebar.component";
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-jobs-intrenships',
  imports: [LeftSidebarComponent],
  templateUrl: './jobs-intrenships.component.html',
  styleUrl: './jobs-intrenships.component.css'
})
export class JobsIntrenshipsComponent implements OnInit{
  ngOnInit(): void {
    this.getAllJobs();
  }
  mainService = inject(MainService);
  allJobObj:any =[];
  jobObjByid:any = [];

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

  getAllJobs(){
    this.mainService.getAllJobs().subscribe((res:any)=>{
      this.allJobObj =res;
    })
  }
  getFullDetail(id:any){
    this.mainService.getJobByJobId(id).subscribe((res:any)=>{
      this.jobObjByid = res;
    })
  }


}
