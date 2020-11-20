import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string-init',
  templateUrl: './string-init.component.html',
  styleUrls: ['./string-init.component.css']
})
export class StringInitComponent implements OnInit {

  @Input() prefix: string;

  constructor() { }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/