import { Component } from '@angular/core';
import { OnExit } from '../../../shared/guards/exit.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnExit {

  onExit() {
    const exit = confirm('¿Seguro desea salir?');
    return exit;
  }

}
