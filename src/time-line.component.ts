import { Component, Input, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
    selector: 'ngc-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.css'],
})
export class TimeLineComponent implements OnInit {

    private _start: moment.Moment                  = null;
    private _end: moment.Moment                    = null;
    private _scales: moment.unitOfTime.Base[]      = [
        'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'
    ];

    @Input()
    set start(start: Date | moment.Moment) { this._start = moment(start); }

    @Input()
    set end(end: Date | moment.Moment) { this._end = moment(end); }

    @Input()
    set scales(scales: moment.unitOfTime.Base[]) { this._scales = scales; }

    constructor() { }

    ngOnInit() {
        this._start = moment().startOf('week');
        this._end = moment().startOf('week').add(1, 'week');
        console.log(this._calculateScale());

    }

    private _calculateScale(): moment.unitOfTime.Base {
        for (let i = 0; this._scales.length; i++) {
            if (this._end.diff(this._start, this._scales[i], true) >= 1) {
                return this._scales[i];
            }
        }
        return this._scales[0];
    }
}
