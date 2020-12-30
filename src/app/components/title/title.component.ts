import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-title',
  template: `<h3 class="card-title"> {{label}}</h3>`,
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TitleComponent implements OnInit {

  @Input() public label = 'teste';

  constructor() { }

  ngOnInit(): void {
  }

}
