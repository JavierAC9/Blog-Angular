import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

public titulo: string;
public peliculas: Pelicula[];
public favorita: Pelicula;
public fecha: any;

  constructor(private _peliculaService: PeliculaService) {

    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020,5,22);

   }

  ngOnInit(): void {
    console.log("Componente iniciado!!!");
    console.log(this._peliculaService.holaMundo);
  }

  ngDoCheck(){
    console.log("DoCheck lanzado");
  }


  cambiarTitulo(){
    this.titulo = "El título ha sido cambiado!";
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }
}
