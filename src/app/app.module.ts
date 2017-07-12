import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { UploadPhotoComponent } from './uploadPhoto/uploadPhoto.component';
import { LoginComponent } from "app/Login/login.component";
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthService } from "app/Login/auth.service";
import { AuthGuard } from "app/guards";

const appRoutes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'uploadPhoto',  component: UploadPhotoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  // Liste des services à utiliser dans mon module
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
