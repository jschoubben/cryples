import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-switch',
    styleUrls: ['./switch.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    template: `
    <label class="theme-switch">
      <span class="option1">{{options.option1}}</span>
      <div class="switch">
        <input type="checkbox" [checked]="isSelected" (change)="isSelected = !isSelected; toggleOption()" />
        <span class="slider"></span>
      </div>
      <span class="option2">{{options.option2}}</span>
    </label>
  `,
})
export class SwitchComponent implements OnInit {
    @Input() options: SwitchOptions;
    @Input() storageKey: string;
    @Input() selectedOption: any;
    @Output() selectionChanged = new EventEmitter<string>();
    isSelected: boolean;

    constructor() {
        this.isSelected = true;
    }

    ngOnInit() {
        this.isSelected = this.selectedOption !== this.options.option1;
    }

    toggleOption() {
        this.selectedOption = this.isSelected ? this.options.option2 : this.options.option1;
        localStorage.setItem(this.storageKey, this.selectedOption);
        if (this.selectionChanged) {
            this.selectionChanged.emit(this.selectedOption);
        }
    }
}

export class SwitchOptions {
    option1: string;
    option2: string;
}
