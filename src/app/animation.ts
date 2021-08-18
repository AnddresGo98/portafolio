import { animate, animateChild, animation, group, keyframes, query, state, style, transition, trigger } from "@angular/animations";

export const LeftRightSvg = trigger('LeftRightSvg', [
    state('void', style({
        transform: "translateX(-100%)"
    })),
    transition(':enter', [
        animate('500ms', style({
            transform: "translateX(0)"
        }))
    ])
]);

export const LeftRightTexto = trigger('LeftRightTexto', [
    state('void', style({
        opacity: 0
    })),
    transition(':enter', [
        animate('500ms 500ms', style({
            opacity: 1
        }))
    ])
]);

export const aumentoImg = trigger('aumentoImg', [
    state('void', style({
        transform: "scale(0)"
    })),
    transition(':enter', [
        animate('500ms 1000ms', keyframes([
            style({ transform: "scale(0)"}),
            style({ transform: "scale(1.2)"}),
            style({ transform: "scale(1)"})
        ]))
    ])
]);

export const svgCircle1 = trigger('svgCircle1', [
    state('void', style({
        r : "0%"
    })),
    transition(':enter', [
        animate('1500ms 1000ms', keyframes([
            style({ r : "0%"}),
            style({ r : "50%"}),
            style({ r : "36%"})
        ]))
    ])
]);
export const svgCircle2 = trigger('svgCircle2', [
    state('void', style({
        r : "0%"
    })),
    transition(':enter', [
        animate('1500ms 1200ms', keyframes([
            style({ r : "0%"}),
            style({ r : "50%"}),
            style({ r : "42%"})
        ]))
    ])
]);
export const svgCircle3 = trigger('svgCircle3', [
    state('void', style({
        r : "0%"
    })),
    transition(':enter', [
        animate('1500ms 1400ms', keyframes([
            style({ r : "0%"}),
            style({ r : "50%"}),
            style({ r : "48%"})
        ]))
    ])
]);