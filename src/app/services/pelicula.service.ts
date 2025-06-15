import { Injectable } from "@angular/core";
import { pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas: pelicula[];

    constructor(){
        this.peliculas = [
            new pelicula('Spiderman 4', 2025, 'https://media.urgente24.com/p/5b565ae98f3e3fd6133c1a062fd60eb4/adjuntos/319/imagenes/002/946/0002946140/spider-man-4.png'),
            new pelicula('El niño y la garza', 2024, 'https://www.laprensagrafica.com/__export/1704344540116/sites/prensagrafica/img/2024/01/03/ffam04012024xxgarza262.jpg_423682103.jpg'),
            new pelicula('Los Vengadores EndGame', 2020, 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7b350a2f-0b3e-4033-8125-34c4d67e3bbe/compose?aspectRatio=1.78&format=webp&width=1200'),
            new pelicula('Batman vs Superman', 2016, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPHsAg9qO7fesLRuks53bVvl7TYLrhmmxhg&s'),
          ];
    }

    holaMundo(){
        return 'hola mundo desde un servicio de Angular !!!';
    }

    getPeliculas(){
        return this.peliculas;
    }
}