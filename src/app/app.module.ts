import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherComponent } from './components/weather/weather.component';
import { BtcComponent } from './components/btc/btc.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from './reducers/card.reducer';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        BtcComponent,
        EditComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({
            card: cardReducer
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
