import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FotoComponent } from '../foto/foto.component';
import { FotoService, MensagemCadastro } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;
    route: ActivatedRoute;
    mensagem: string = '';
    router: Router;

    constructor(service: FotoService, builder: FormBuilder, 
            route: ActivatedRoute, router: Router) {
        this.router = router;
        this.route = route;
        this.service = service;

        this.route.params.subscribe(params => {
            let id = params['id'];

            if (id) {
                this.service.buscaPorId(id)
                    .subscribe(
                        (foto) => this.foto = foto,
                        (erro) => console.log(erro)
                    );
            }            
        });

        this.meuForm = builder.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    /**
     * Envia cadastro de nova foto
     * @param {any} event Evento do Angular 
     */
    cadastrar(event): void {
        event.preventDefault();
        this.service.cadastra(this.foto)
            .subscribe((res: MensagemCadastro) => {
                this.mensagem = res.mensagem;
                this.foto = new FotoComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, (erro) => console.log(erro));
    }

    verificar(field: string): boolean {
        let controls = this.meuForm.controls;
        return !controls[field].pristine && controls[field].invalid;
    }
}