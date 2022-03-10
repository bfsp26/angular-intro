import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironma', 'Hulk', 'Thor'];
  deletedHeroe: string = '';

  deleteHeroe(): void {
    this.deletedHeroe = this.heroes.pop() || '';
  }

}