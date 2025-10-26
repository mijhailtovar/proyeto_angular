import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;

  // SOLUCIÓN: Declara las propiedades faltantes para el compilador AOT
  public url: string; 
  public is_edit: boolean; // Se asume que es booleano para el modo edición

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = 'Crear articulo';

    // Asigna el valor de la URL aquí también, por si el HTML lo usa directamente
    this.url = Global.url; 
    
    // Inicializa la variable de edición, asumiendo que este componente es de "Creación"
    this.is_edit = false;
  }

  ngOnInit() {
    // Si este componente se reutiliza para edición, la lógica de this.is_edit
    // se establecería aquí, pero por ahora la inicializamos en false.
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          //alerta
          swal(
            'Articulo creado!!',
            'El articulo se ha creado correctamente',
            'success'
          );

          //console.log(this.article)
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data){
    /**
     * CUIDADO AQUI LA LINEA ORIGINAL USABA EL METODO JSON.PARSE
     * esto generaba un error pporque el backend ya mandaba un objeto JSON
     * pendiente mas adelante en el curso
     * la linea original era esta:
     * let image_data = JSON.parse(data.response);
     */
    //esta es la manera que funciona
    //console.log(data.body.image);
    let image_data = data.body.image;
    this.article.image = image_data;
  }

}
