import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from '../../services/data.service';
import { SimpleModalService } from "ngx-simple-modal";
import { AddthemeComponent } from 'src/app/modals/addtheme.component';
import { EditthemeComponent } from 'src/app/modals/edittheme.component';
import { DeletethemeComponent } from 'src/app/modals/deletetheme.component';


@Component({
  selector: 'app-theme',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {

  isAdmin = null;

  themes = [];

  constructor(private _dataService: DataService, private _auth: AuthService, private MDS: SimpleModalService) { }

  ngOnInit(): void {
      this.isAdmin = this._auth.isAdmin();
      console.log(this.isAdmin);
      this._dataService.getPools()
      .subscribe(
        res => this.themes = res,
        err => console.log(err)
      )
  }

    add(){
      let disposable = this.MDS.addModal(AddthemeComponent, {
        title: 'Add a new Theme !',
        message: 'Confirm message'
      })
      .subscribe((isConfirmed)=>{
          //We get modal result
          if(isConfirmed) {
            this.ngOnInit();
          }
          else {
              this.ngOnInit();
          }
      });
  }

  edit(a, b, c){
    console.log(a, b ,c);
    let disposable = this.MDS.addModal(EditthemeComponent, {
      title: 'Edit Theme ID =' + a + ' !',
      id: a,
      name: b,
      featured_pool_id: c
    })
    .subscribe((isConfirmed)=>{
        //We get modal result
        if(isConfirmed) {
          this.ngOnInit();
        }
        else {
            this.ngOnInit();
        }
    });
  }

  remove(id){
    console.log(id);
    let disposable = this.MDS.addModal(DeletethemeComponent, {
      title: 'Edit Theme ID =' + id + ' !',
      id: id,
      message: 'Ar you sure you want to delete' + id + ' ?'
    })
    .subscribe((isConfirmed)=>{
        //We get modal result
        if(isConfirmed) {
          this.ngOnInit();
        }
        else {
            this.ngOnInit();
        }
    });
  }

}
