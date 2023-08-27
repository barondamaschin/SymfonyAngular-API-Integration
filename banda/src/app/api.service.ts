import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group, GroupResponse } from './group.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  private baseUrl = 'http://127.0.0.1:8000/api/feuil1s';
  constructor(private http: HttpClient)  { }

  createGroup(group: Group): Observable<any> {
    return this.http.post<any>(this.baseUrl, group);
  }

  getGroups(): Observable<GroupResponse>  {
    return this.http.get<GroupResponse>(this.baseUrl);
  }

  updateGroup(id: number, group: any): Observable<Group> {
    return this.http.put<Group>(`${this.baseUrl}`, group);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  


  getGroupById(groupId: number): Observable<any> {
    const url = `${this.baseUrl}/${groupId}`;
    return this.http.get<any>(url);
  }
  
  
}
