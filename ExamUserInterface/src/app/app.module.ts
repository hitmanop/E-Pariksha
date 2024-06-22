import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import{MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './components/signup/signup.component'
import {MatInputModule} from '@angular/material/input';
import{FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/admin/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProviders } from './services/authInterceptor';

import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { MatDividerModule } from '@angular/material/divider';
import { ViewQuizzesComponent } from './components/admin/view-quizzes/view-quizzes.component'; 
import { MatCardActions } from '@angular/material/card';
import { AddQuizzesComponent } from './components/admin/add-quizzes/add-quizzes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './components/admin/view-question/view-question.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './components/user/load-quiz/load-quiz.component';
import { InstructionComponent } from './components/user/instruction/instruction.component';
import { StartQuizComponent } from './components/user/start-quiz/start-quiz.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule} from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,

    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizzesComponent,
    UpdateQuizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionComponent,
    StartQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDivider,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatCardActions,
    MatSlideToggleModule,
    MatSelectModule ,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
