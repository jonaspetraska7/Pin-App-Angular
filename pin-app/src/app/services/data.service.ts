import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _theme = "https://jonpet6nodeapi.herokuapp.com/theme"
  private _user = "https://jonpet6nodeapi.herokuapp.com/user"

  constructor(private httpClient: HttpClient) { }

  public getThemes(){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.httpClient.get<any>(this._theme, {headers: reqHeader});
  }

  public addTheme(input: string){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.httpClient.post<any>(this._theme,{"name": input}, {headers: reqHeader});
  }

  public editTheme(id:string, name:string, featured:string){
    console.log(id, name, featured)
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.httpClient.put<any>(this._theme + '/' + id,{"name": name, "featured_pool_id:": featured}, {headers: reqHeader});
  }

  public removeTheme(id){
    console.log(id)
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.httpClient.delete<any>(this._theme + '/' + id,{headers: reqHeader})
  }

  public getUsers(){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.httpClient.get<any>(this._user);
  } 
}
