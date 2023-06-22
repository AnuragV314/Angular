import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from "@angular/core";


@Component({
    selector: 'simple',
    template: `
        <h1 style="color: brown;">You Entered: {{simpleInput}}</h1>
    `
})
export class SimpleComponent implements OnChanges, OnDestroy {

    @Input()
    simpleInput !: string;

    constructor() {
        console.log('SimpleInput constructer Executed!');
    }


    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges executed on SimpleInput Property change');
        // console.log(typeof changes);
        // console.log(changes)

        for (let propertyName in changes) {
            const change = changes[propertyName];

            let previousValue = change.previousValue;
            let currentValue = change.currentValue;

            console.log(propertyName + " current value: " + currentValue + " previous value: " + previousValue);
        }
    }


    ngOnInit(){

    }

    ngOnDestroy(): void {
        console.log('AppComponent ngOnDestroy life cycle hook executed.');
    }



}