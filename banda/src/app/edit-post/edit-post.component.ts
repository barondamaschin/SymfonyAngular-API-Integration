import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Group } from '../group.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postId!: number;
  post!: Group;
  Group: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id'];
    this.apiService.getGroupById(this.postId).subscribe(data => {
      this.post = data;
    });
  }

  saveChanges() {
    // Implement the logic to update the post details using ApiService
    this.apiService.updateGroup(this.postId, this.post).subscribe(
      response => {
        alert('Post updated successfully');
        this.router.navigate(['/']); // Redirect to the home page or post details page
      },
      error => {
        alert('An error occurred');
      }
    );
  }
}
