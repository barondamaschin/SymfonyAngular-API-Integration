import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Group } from '../group.model';
import { GroupResponse } from '../group.model';


@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {
  

  groups: Group[] = [];
  selectedGroup: Group | null = null;
  static id: number;
  static selectedGroup: any;
  



  constructor(private apiService: ApiService) { 
    

  }

  ngOnInit(): void {
    this.apiService.getGroups().subscribe(data => {
      this.groups = data['hydra:member'];
      console.log(this.groups);
    });
  }

  deleteGroup(group: Group): void {
    if (!group) {
      console.error('Group is undefined.');
      return;
    }
  
    const index = this.groups.indexOf(group);
  
    if (index !== -1) {
    this.groups.splice(index, 1);
    } else {
      console.error('Group not found in the array.');
    }
  
    this.apiService.deleteGroup(index).subscribe(data => {
      this.groups = data['hydra:member'];
      console.log(this.groups);
    });
  }
  
  


}

