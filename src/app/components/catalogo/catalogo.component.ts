import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Capturar parámetros de URL de forma Síncrona
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    console.log('categoryId', categoryId);

    // Capturar parámetros de URL de forma Asíncrona
    this.route.paramMap
      .subscribe((params: Params) => {
        const categoryId = params.get('categoryId');
        console.log(categoryId);
      });

    // Captura de parámetros opcionales
    this.route.queryParams
      .subscribe((params: Params) => {
        console.log(params.category);
      });
  }

}
