import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicos/heroes.service';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private  _heroesService: HeroesService ) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      //console.log(params['termino']);
      this.heroes = this._heroesService.buscarHeroes( params ['termino']);
      console.log(this.heroes);
    })
  }

}
