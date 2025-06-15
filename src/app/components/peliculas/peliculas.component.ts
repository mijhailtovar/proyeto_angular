import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: pelicula[];
  public favorita: pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = 'Componente peliculas'; 
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2025, 4, 25);
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log('Componente Iniciado!!!');
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(): void {
    console.log('DOCHECK LANZADO');
  }

  cambiarTitulo(){
    this.titulo = "El titulo a sido cambiado";
  }

  ngOnDestroy(): void {
    console.log('EL COMPONENTE SE VA A ELIMINAR');
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
