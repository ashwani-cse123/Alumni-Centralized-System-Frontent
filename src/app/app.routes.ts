import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { AlumniComponent } from './alumni/alumni.component';
import { ApprovedPageComponent } from './admin/approved-page/approved-page.component';
import { ListComponent } from './admin/list/list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardAlumniComponent } from './alumni/dashboard-alumni/dashboard-alumni.component';
import { FollowRequestComponent } from './alumni/follow-request/follow-request.component';
import { FollowersFollowingComponent } from './alumni/followers-following/followers-following.component';
import { JobIntrenshipsComponent } from './alumni/job-intrenships/job-intrenships.component';
import { NotificationComponent } from './alumni/notification/notification.component';
import { AlumniPostComponent } from './alumni/alumni-post/alumni-post.component';
import { UpdateProfileComponent } from './alumni/dashboard-alumni/update-profile/update-profile.component';
import { MyNetworkComponent } from './my-network/my-network.component';
import { JobsIntrenshipsComponent } from './jobs-intrenships/jobs-intrenships.component';
import { NotifyComponent } from './notify/notify.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentPostComponent } from './student/student-post/student-post.component';
import { StudentfollowRequestComponent } from './student/studentfollow-request/studentfollow-request.component';
import { StudentfollowerFollowingComponent } from './student/studentfollower-following/studentfollower-following.component';
import { UpdateStudentProfileComponent } from './student/student-dashboard/update-student-profile/update-student-profile.component';
import { CommonProfileComponent } from './common-profile/common-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: RegistarComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'notify',
        component: NotifyComponent,
      },
      {
        path: 'myNetwork',
        component: MyNetworkComponent,
      },
      {
        path:'commonProfile',
        component:CommonProfileComponent
      },
      {
        path: 'jobIntrenhips',
        component: JobsIntrenshipsComponent,
      },
      {
        path: 'student',
        component: StudentComponent,
        children:[
            {
                path:'',
                component:StudentDashboardComponent
            },
            {
               path:'dashboard',
                component:StudentDashboardComponent,
            },
            {
              path:'studentupdateProfile',
              component:UpdateStudentProfileComponent
            },
            {
              path:'student-post',
              component:StudentPostComponent
            },
            {
              path:'studentfollow-request',
              component:StudentfollowRequestComponent
            },
            {
              path:'studentfollower-following',
              component:StudentfollowerFollowingComponent
            },
        ]
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'approved',
            component: ApprovedPageComponent,
          },
          {
            path: 'list',
            component: ListComponent,
          },
          {
            path: '',
            component: DashboardComponent,
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'alumni',
        component: AlumniComponent,
        children: [
          {
            path: '',
            component: DashboardAlumniComponent,
            pathMatch: 'full',
          },
           {
            path: 'dashboard',
            component: DashboardAlumniComponent,
          },
          {
            path: 'post',
            component: AlumniPostComponent,
          },
          {
            path: 'followRequest',
            component: FollowRequestComponent,
          },
          {
            path: 'followers-following',
            component: FollowersFollowingComponent,
          },
          {
            path: 'update-profile',
            component: UpdateProfileComponent,
          },
          {
            path: 'job-intrenships',
            component: JobIntrenshipsComponent,
          },
          {
            path: 'notification',
            component: NotificationComponent,
          },
        ],
      },
    ],
  },
];
