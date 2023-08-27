import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Group } from '../group.model';

@Component({
  selector: 'app-vizualizeaza-item',
  templateUrl: './vizualizeaza-item.component.html',
  styleUrls: ['./vizualizeaza-item.component.css']
})
export class VizualizeazaItemComponent implements OnInit {

  group!: Group;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const groupId = this.route.snapshot.params['id'];
    this.apiService.getGroupById(groupId).subscribe(data => {
      this.group = data;
    });
  }
}
