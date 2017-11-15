import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeLineComponent } from './time-line.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TimeLineComponent
    ],
    declarations: [
        TimeLineComponent
    ]
})
export class TimeLineModule {
}
