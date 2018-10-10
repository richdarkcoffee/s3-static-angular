import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.message = 'Hello';
    this.title.setTitle('Hello World');
    this.meta.updateTag({ name: 'description', content: 'Hello World description!' });
  }
}
