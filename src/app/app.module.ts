import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { Test } from '../pages/test/test';

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    Test
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    Test
  ],
  providers: []
})
export class AppModule {}
