import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-default-node',
  templateUrl: './default-node.component.html',
  styleUrls: ['./default-node.component.scss'],
})
export class DefaultNodeComponent implements OnInit {
  @Input() title: string = 'Node';

  constructor() {}

  ngOnInit(): void {}
}
