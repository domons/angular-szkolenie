import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDisplayNamePipe } from './pipes/user-display-name.pipe';

@NgModule({
  declarations: [
    UserDisplayNamePipe
  ],
  exports: [
    UserDisplayNamePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    {
      useClass: CacheInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    }
  ]
})
export class SharedModule { }
