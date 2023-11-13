import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-item-navegacao',
    templateUrl: './item-navegacao.component.html'
})
export class ItemNavegacaoComponent {

    @Input('link') link: string;

    @Input('icone') icone: string;

    @Input('titulo') titulo: string;

    constructor() {
        
    }
}