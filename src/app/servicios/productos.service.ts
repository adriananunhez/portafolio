import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean = true;

  constructor(private http:Http) {

      this.cargarProductos();

  }

  public buscar_producto( termino:string ){

    if( this.productos.length === 0 ){
      this.cargarProductos().then( ()=> {
        //el then indica que ya termino la carga.
          this.filtrar_productos(termino);
      });
    }else{
      this.filtrar_productos(termino);
    }

  }

  private filtrar_productos(termino:string){
    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach( prod => {
      if( prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
        this.productos_filtrado.push( prod );
      }
    })
  }

  public cargar_producto( cod:string ){
    return this.http.get(`https://pagina-web-9dfdb.firebaseio.com/productos/${ cod }.json`);
  }

  public cargarProductos(){

    let promesa = new Promise( (resolve, reject )=>{

      this.cargando = true;
          this.http.get('https://pagina-web-9dfdb.firebaseio.com/productos_idx.json')
              .subscribe( res => {
                this.cargando = false;
                this.productos = res.json();
                resolve();
              })

    })
    return promesa;

  }
}
