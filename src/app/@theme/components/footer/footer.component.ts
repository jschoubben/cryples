import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ngx-footer',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    template: `
    <span class="created-by">Created by <b>me</b> 2017</span>
    <div class="socials">
    </div>
  `,
})
export class FooterComponent {
}
