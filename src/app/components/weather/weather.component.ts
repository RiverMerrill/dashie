import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    public static get info(): Card {
        return {title: 'Weather', description: 'Weather stuff', component: WeatherComponent};
    }

    constructor() {
    }

    ngOnInit() {
    }

}
