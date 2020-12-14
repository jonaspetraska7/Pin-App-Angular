import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { DataService } from '../services/data.service';
export interface ConfirmModel {
  title:string;
  message:string;
  id:string;
}
@Component({
    selector: 'confirm',
    template: `
      <div class="modal-content">
        <div class="modal-header">
          <h5 >{{title || 'Confirm'}}</h5>
        </div>
        <div class="modal-header">
            <h4>{{message || 'Confirm'}}<</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" (click)="close()" >Cancel</button>
          <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        </div>
      </div>
    `
})
export class DeletethemeComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  id:string;
  constructor(private _dataService: DataService) {
    super();
  }
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this._dataService.removeTheme(this.id)
    .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    this.result = true
    this.close();
  }
}