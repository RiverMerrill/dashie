import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatModule } from './mat.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragulaModule } from 'ng2-dragula';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { WeatherComponent } from './weather/weather.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    WeatherComponent,
    TimeComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    HttpClientModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TodoComponent, BitcoinComponent]
})
export class AppModule { }
