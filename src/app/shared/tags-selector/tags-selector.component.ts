import { COMMA, ENTER }                                                     from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild }                         from '@angular/core';
import { FormControl }                                                      from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable }                                                       from 'rxjs';
import { map, startWith }                                                   from 'rxjs/operators';
import { Tag }                                                              from '../../_lib/tag';

@Component({

    selector: 'tags-selector',
    templateUrl: './tags-selector.component.html',
    styleUrls: [ './tags-selector.component.scss' ]

})
export class TagsSelectorComponent implements OnInit {

    @ViewChild('input', { static: false }) input: ElementRef<HTMLInputElement>;
    @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

    public all: Array<Tag> = [ { name: 'one', color: 'rebeccapurple' }, { name: 'two', color: 'yellow' }, {
        name: 'three',
        color: 'darkgreen'
    }, { name: 'four' } ];
    public current: Array<Tag> = [ { name: 'one', color: 'rebeccapurple' } ];
    public filtered: Observable<Array<Tag>>;
    public control: FormControl = new FormControl();
    public separatorKeysCodes: number[] = [ ENTER, COMMA ];

    public constructor() {

        this.control.valueChanges.subscribe((value) => {

            console.log(value);

        });
        this.filtered = this.control.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.all.slice())
        );

    }

    public ngOnInit() {

    }

    public add(event: MatChipInputEvent): void {

        if (!this.matAutocomplete.isOpen) {

            const input = event.input;
            const value = event.value;

            // @ts-ignore
            if ((value || '').trim() && !this.current.find(tag => tag.name === event.option.value.name)) {

                // @ts-ignore
                this.current.push(value);

            }

            if (input) {

                input.value = '';

            }

            this.control.setValue(null);
            this.input.nativeElement.value = '';

        }

    }

    public remove(tag: Tag): void {

        const index = this.current.indexOf(tag);

        if (index >= 0) {

            this.current.splice(index, 1);

        }

    }

    public selected(event: MatAutocompleteSelectedEvent): void {

        console.log(this.current);
        console.log(event.option.value);
        console.log(this.current.find(tag => tag.name === event.option.value.name));

        // @ts-ignore
        if (!this.current.find(tag => tag.name === event.option.value.name)) {

            this.current.push(event.option.value);

        }

        this.input.nativeElement.value = '';
        this.input.nativeElement.blur();

        this.control.setValue(null);

    }

    private _filter(value: string): Array<Tag> {

        if (typeof value === 'string') {

            const filterValue = value.toLowerCase();

            return this.all.filter(tag => tag.name.toLowerCase().indexOf(filterValue) === 0);

        }

    }

}
