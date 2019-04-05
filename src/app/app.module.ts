import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';

import { NgxsModule } from '@ngxs/store';
import { CardState } from './state/card.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { WeatherComponent } from './components/weather/weather.component';
import { BtcComponent } from './components/btc/btc.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EditComponent,
        WeatherComponent,
        BtcComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        NgxsModule.forRoot([
            CardState
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
