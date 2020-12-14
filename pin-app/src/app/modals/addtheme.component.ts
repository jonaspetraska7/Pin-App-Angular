import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { DataService } from '../services/data.service';
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
    selector: 'confirm',
    template: `
      <div class="modal-content">
        <div class="modal-header">
          <h5 >{{title || 'Confirm'}}</h5>
        </div>
        <div class="modal-header">
            <h4>Enter Theme Name :</h4>
        </div>
        <input [(ngModel)]="themeName" type="text" class="form-control" id="reg_username" name="reg_username" placeholder="theme name here">
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" (click)="close()" >Cancel</button>
          <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        </div>
      </div>
    `
})
export class AddthemeComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  themeName: string;
  title: string;
  message: string;
  constructor(private _dataService: DataService) {
    super();
  }
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this._dataService.addTheme(this.themeName)
    .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    this.result = true
    this.close();
  }
}