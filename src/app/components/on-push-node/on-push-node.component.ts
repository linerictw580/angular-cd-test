import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-node',
  templateUrl: './on-push-node.component.html',
  styleUrls: ['./on-push-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushNodeComponent implements OnInit {
  @Input() title: string = 'Node';

  constructor() {}

  ngOnInit(): void {}
}
