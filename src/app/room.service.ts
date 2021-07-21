import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl= 'http://localhost:8080/api/v1/rooms';

  constructor(private httpClient: HttpClient) { }

  getRoom(id:  number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createRoom(room: Object): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, room);
  }

  updateRoom(id:  number, value: any): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRoom(id:  number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getRoomList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }
}
