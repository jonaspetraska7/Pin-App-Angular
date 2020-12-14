import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getThemes()
      .subscribe(
        res => this.users = res,
        err => console.log(err)
      )
  }

}
