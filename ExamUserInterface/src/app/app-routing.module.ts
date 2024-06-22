import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/admin/home/home.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './components/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './components/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './components/admin/view-question/view-question.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { LoadQuizComponent } from './components/user/load-quiz/load-quiz.component';
import { InstructionComponent } from './components/user/instruction/instruction.component';
import { StartQuizComponent } from './components/user/start-quiz/start-quiz.component';


const routes: Routes = [{
  path:'signup',
  component:SignupComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'',
  component:LoginComponent
},
{
  path:'user-dashboard',
  component:UserDashboardComponent,
  canActivate:[userGuard],
  children:[{
    path:':cid',
    component:LoadQuizComponent
  },
  {
    path:'instructions/:qid',
    component:InstructionComponent
  },
]
},
{
  path:'startquiz/:qid',
  component:StartQuizComponent
}
,
{
  path:'admin-dashboard',
  component:DashboardComponent,
  canActivate:[adminGuard],

  children:[{
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'categories',
    component:ViewCategoriesComponent
  },
  {
    path:'add-category',
    component:AddCategoryComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'quizzes',
    component:ViewQuizzesComponent
  },
  {
    path:'add-quiz',
    component:AddQuizzesComponent
  },
  {
    path:'quiz/:qid',
    component:UpdateQuizComponent
  },
  {
    path: 'view-questions/:qid/:title',
    component: ViewQuestionComponent
  },
  {
    path: 'add-question/:qid/:title',
    component: AddQuestionComponent,
  },
]
  
  
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
