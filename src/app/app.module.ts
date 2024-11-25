import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseurlInterceptor } from './core/Interceptors/baseurl.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LayoutModule } from './layout/layout.module';
import { ErrorInterceptor } from './core/Interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseurlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
