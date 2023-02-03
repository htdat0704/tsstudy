import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  article : Article = {
    title: "GOOGLE",
    url: "https://www.google.com/",
    likes: 0
  }
  constructor() { }

  ngOnInit() {
  }

  @Output() newItemEvent = new EventEmitter<Article>();
  addNewItem(value: Article) {
    this.newItemEvent.emit(value);
  }
}

