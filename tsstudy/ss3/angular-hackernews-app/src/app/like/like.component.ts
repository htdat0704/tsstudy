import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() index?: number;
  @Input() like?: number;
 
  @Output() likeArticle = new EventEmitter<number>();
  addLike = (index: any) => {
    this.likeArticle.emit(index);
  }
  
  constructor() {
  }

  ngOnInit() {
  }

}
