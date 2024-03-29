import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate('600ms', style({ opacity: 1 }))])]);
