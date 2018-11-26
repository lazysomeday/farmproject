import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {
  LyThemeModule,
  LY_THEME
} from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StorehouseComponent } from './storehouse/storehouse.component';
import { BeefgradingComponent } from './beefgrading/beefgrading.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { PageComponent } from './storehouse/page/page.component';
import { Menu1Component } from './storehouse/page/menu1/menu1.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { SignUpComponent } from './dashboard/sign-up/sign-up.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { firebaseConfig } from 'src/environments/firebase.config';
import { AuthService } from './auth.service';
import { Menu2Component } from './storehouse/page/menu2/menu2.component';
import { Menu3Component } from './storehouse/page/menu3/menu3.component';
import { Menu4Component } from './storehouse/page/menu4/menu4.component';
import { Menu5Component } from './storehouse/page/menu5/menu5.component';
import { PageRoutingModule, PageRoutingComponents } from './storehouse/page/page-routing.module';
import { ImportComponent } from './storehouse/page/menu1/import/import.component';
import { ImportT1Component } from './storehouse/page/menu1/import/import-t1/import-t1.component';
import { ImportT2Component } from './storehouse/page/menu1/import/import-t2/import-t2.component';
import { ImportT3Component } from './storehouse/page/menu1/import/import-t3/import-t3.component';
import { ImportT4Component } from './storehouse/page/menu1/import/import-t4/import-t4.component';
import { ImportT5Component } from './storehouse/page/menu1/import/import-t5/import-t5.component';
import { OrderComponent } from './storehouse/page/menu2/order/order.component';
import { OrderT1Component } from './storehouse/page/menu2/order/order-t1/order-t1.component';
import { OrderT2Component } from './storehouse/page/menu2/order/order-t2/order-t2.component';
import { OrderT3Component } from './storehouse/page/menu2/order/order-t3/order-t3.component';
import { OrderT4Component } from './storehouse/page/menu2/order/order-t4/order-t4.component';
import { OrderT5Component } from './storehouse/page/menu2/order/order-t5/order-t5.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StorehouseComponent,
    BeefgradingComponent,
    PageComponent,
    Menu1Component,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu5Component,
    PageRoutingComponents,
    ImportComponent,
    ImportT1Component,
    ImportT2Component,
    ImportT3Component,
    ImportT4Component,
    ImportT5Component,
    OrderComponent,
    OrderT1Component,
    OrderT2Component,
    OrderT3Component,
    OrderT4Component,
    OrderT5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    AppRoutingModule,
    DashboardRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    PageRoutingModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
