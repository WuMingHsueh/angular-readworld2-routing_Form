import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;

  constructor(private routerActive: ActivatedRoute) { }

  ngOnInit() {
    // this.routerActive.snapshot.paramMap.get('id');
    this.routerActive.params.subscribe(
      response => {
        this.id = response['id'];
      }
    )
  }

}
