import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../model/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomService: RoomService,
              private router: Router) { }

  ngOnInit(): void{
    this.reloadData();
  }

  reloadData(): void{
    this.roomService.getRoomList()
    .subscribe(data => {
      console.log('getRooms', data),
      this.rooms = data;
    });

  }

  deleteRoom(id : any){
    this.roomService.deleteRoom(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  roomDetails(id : number){
    this.router.navigate(['details', id]);
  }

  updateRoom(id:number){
    this.router.navigate(['update', id]);
  }

}
