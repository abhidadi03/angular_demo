import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StartPointComponent } from './private/start-point/entry-point/start-point.component';
import { UsersComponent } from './private/users/users.component';
import { ProfileComponent } from './private/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptors';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http:HttpClient){
   return new TranslateHttpLoader();
}

@NgModule({
  declarations: [
    AppComponent,
    // StartPointComponent
    // LoginComponent,
    // StartPointComponent,
    // UsersComponent,
    // ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicModule,
    PrivateModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
      TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory
      }
    })
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
      {
     provide: TRANSLATE_HTTP_LOADER_CONFIG,
     useValue: {
       prefix: './assets/i18n/',
       suffix: '.json'
     }
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
