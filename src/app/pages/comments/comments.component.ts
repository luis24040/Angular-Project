import { Component, OnInit } from '@angular/core';
import { CommentsInfo, PostsInfo, Comments } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  postFound = false;
  post: PostsInfo[] = [];
  comments: CommentsInfo[] = [];

  constructor(private service: PostsService) {
    const postID = new URLSearchParams(window.location.search).get('id');
    // Get posts
    this.service.getofPosts().subscribe(({ data: postsD }) => {
      this.post = postsD.filter(({ id }) => Number(postID) === id);
      const DateNew = new Date(this.post[0].date);
      this.post[0].day = DateNew.getDate() || 1;
      this.post[0].month = DateNew.toLocaleString('default', {
        month: 'short',
      });

      if (this.post.length === 0) return;
      this.postFound = true;
      // Get comments
      this.service
        .getofComments()
        .subscribe(({ data: commentsD }: Comments) => {
          this.comments = commentsD.filter(
            ({ idpost }) => Number(postID) === idpost
          );
        });
    });
  }
  ngOnInit(): void {}
}
