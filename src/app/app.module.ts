import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { reducers } from './Store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './Store/Effects/coffee.effects'
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomeComponent } from './home/home.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { RouterSerializer } from './Store/routerSerializer';

@NgModule({
  declarations: [AppComponent, CoffeeListComponent, HeaderComponent, FooterComponent, HomeComponent, CoffeeDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CoffeeEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
