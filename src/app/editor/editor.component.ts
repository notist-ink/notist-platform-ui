import { Component, ElementRef, HostListener, OnInit, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators }                        from '@angular/forms';
import { ResizeEvent }                                               from 'angular-resizable-element';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: [ './editor.component.scss' ]
})
export class EditorComponent implements OnInit {

    @ViewChildren('#editor') private editorRef: ElementRef;

    public rightWidth: number = 300;
    public editorHeight: string = '300px';

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('', Validators.required),
        content: new FormControl(''),

    });

    public modules = {
        toolbar: [
            [ 'bold', 'italic', 'underline', 'strike' ],        // toggled buttons
            [ 'blockquote', 'code-block' ],

            [ { 'header': 1 }, { 'header': 2 } ],               // custom button values
            [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
            [ { 'script': 'sub' }, { 'script': 'super' } ],      // superscript/subscript
            [ { 'indent': '-1' }, { 'indent': '+1' } ],          // outdent/indent
            // [ { 'direction': 'rtl' } ],                         // text direction
            //
            // [ { 'size': [ 'small', false, 'large', 'huge' ] } ],  // custom dropdown
            // [ { 'header': [ 1, 2, 3, 4, 5, 6, false ] } ],

            [ { 'color': [] }, { 'background': [] } ],          // dropdown with defaults from theme
            [ { 'font': [] } ],
            [ { 'align': [] } ],

            [ 'clean' ],                                         // remove formatting button

            [ 'link', 'image', 'video' ]                         // link and image, video
        ]
    };

    public options = [];

    // public options = {
    //
    //     toolbar: [
    //
    //         [ 'bold', 'italic', 'underline', 'strike' ],        // toggled buttons
    //         [ 'blockquote', 'code-block' ],
    //
    //         [ { 'header': 1 }, { 'header': 2 } ],               // custom button values
    //         [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
    //         [ { 'script': 'sub' }, { 'script': 'super' } ],      // superscript/subscript
    //         [ { 'indent': '-1' }, { 'indent': '+1' } ],          // outdent/indent
    //         [ { 'direction': 'rtl' } ],                         // text direction
    //
    //         [ { 'size': [ 'small', false, 'large', 'huge' ] } ],  // custom dropdown
    //         [ { 'header': [ 1, 2, 3, 4, 5, 6, false ] } ],
    //
    //         [ { 'color': [] }, { 'background': [] } ],          // dropdown with defaults from theme
    //         [ { 'font': [] } ],
    //         [ { 'align': [] } ],
    //
    //         [ 'clean' ],                                         // remove formatting button
    //
    //         [ 'link', 'image', 'video' ]                         // link and image, video
    //
    //     ]
    //
    // };

    public constructor() {

    }

    public ngOnInit(): void {

        // Quill.register({
        //     'modules/toolbar': Toolbar,
        //     'themes/snow': Snow,
        //     'formats/bold': Bold,
        //     'formats/italic': Italic,
        //     'formats/header': Header
        // });
        //
        // console.log(this.editorRef);
        //
        // const quill = new Quill('#editor', {
        //
        //     modules: {
        //
        //         toolbar: true
        //
        //     },
        //
        //     theme: 'snow'
        //
        // });

        this.onResize();
        
    }


    @HostListener('window:resize', [ '$event' ])
    public onResize() {

        if (window.innerWidth > 1410) {

            this.editorHeight = '540px';

        } else if (window.innerWidth > 900) {

            this.editorHeight = '515px';

        } else {

            this.editorHeight = '465px';

        }

    }

    public onResizeEnd(event: ResizeEvent): void {

        const calc = this.rightWidth + (Number(event.edges.left) * -1);

        if (calc >= 200) {

            this.rightWidth = calc;

        } else {

            this.rightWidth = 300;

        }

    }

}
