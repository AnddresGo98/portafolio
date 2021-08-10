import { animate, animation, group, keyframes, query, state, style, transition, trigger } from "@angular/animations";

export const entradaLeftRightSvg = trigger('entradaSvg', [
    state('open', style({
        transform: "translateX(0)",
    })),
    state('closed', style({
        transform: "translateX(-100%)"
    })),
    transition('* <=> *', [
        animate('0.8s')
    ])
]);
export const entradaLeftRightTexto = trigger('entradaTexto', [
    state('open', style({
        opacity: 1,
    })),
    state('closed', style({
        opacity: 0
    })),
    transition('* <=> *', [
        animate('1s 1.2s')
    ])
]);
export const entradaAumento = trigger('entradaAumento', [
    state('open', style({
        transform: "scale(0.9)",
    })),
    state('closed', style({
        transform: "scale(0)",
    })),
    transition('* => open', [
        animate('1s 3s', keyframes([
            style({transform: "scale(0)"}),
            style({transform: "scale(1)"}),
            style({transform: "scale(0.9)"})
        ]))
    ])
]);