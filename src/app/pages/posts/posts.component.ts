import { Component, OnInit } from '@angular/core';
import { Posts, PostsInfo } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: PostsInfo[] = [];

  constructor(private service: PostsService) {
    this.service.getofPosts().subscribe(({ data: postsD }: Posts) => {
      postsD.forEach(({ date }, idx) => {
        const DateNew = new Date(date);
        postsD[idx].day = DateNew.getDate() || 1;
        postsD[idx].month = DateNew.toLocaleString('default', {
          month: 'short',
        });
      });

      this.posts = postsD;
    });
  }

  ngOnInit(): void {}
}
