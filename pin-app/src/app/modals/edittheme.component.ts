import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { DataService } from '../services/data.service';
export interface ConfirmModel {
  title:string;
  id:string;
  name:string;
  featured_pool_id:string;
}
@Component({
    selector: 'confirm',
    template: `
      <div class="modal-content">
        <div class="modal-header">
          <h5 >{{title || 'Confirm'}}</h5>
        </div>
        <div class="modal-header">
            <h4>Edit Theme Fields :</h4>
        </div>
        <input [(ngModel)]="name" type="text" class="form-control" placeholder="{{name}}">
        <input [(ngModel)]="featured_pool_id" type="text" class="form-control" placeholder="{{featured_pool_id}}">
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" (click)="close()" >Cancel</button>
          <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        </div>
      </div>
    `
})
export class EditthemeComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  newName:string;
  newFeatured: string;
  title:string;
  id:string;
  name:string;
  featured_pool_id:string;
  constructor(private _dataService: DataService) {
    super();
  }
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this._dataService.editTheme(this.id, this.name, this.featured_pool_id)
    .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    this.result = true
    this.close();
  }
}