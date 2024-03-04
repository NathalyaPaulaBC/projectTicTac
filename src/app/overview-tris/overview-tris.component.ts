import { Component, OnInit } from '@angular/core';

import { Logictris } from '../logictris';

@Component({
  selector: 'app-overview-tris',
  templateUrl: './overview-tris.component.html',
  styleUrls: ['./overview-tris.component.scss']
})
export class OverviewTrisComponent  extends Logictris implements OnInit {

  constructor() {
    super() // To access the class Logictris
    this.startGame()
  }

  ngOnInit(): void {
  }

  startGame(): void {
    this.reset();
  }

  // Synchronization function, control if the game has already started and then return something.
  async clickSubfield(subfield: any): Promise<void> {
    this.setData(subfield, this.player)
    this.validation()
    this.changePlayer()
  }
}
