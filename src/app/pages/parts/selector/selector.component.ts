import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.sass'
})
export class SelectorComponent implements OnInit {
  parts: Array<any> = [{name: "Memóriák", value: environment.memoryCollection},
  {name: "Alaplapok", value: environment.motherboardCollection}, 
  {name: "Tápegységek", value: environment.powersupplyCollection}, 
  {name: "Processzorok", value: environment.processorCollection},
  {name: "Videókártyák", value: environment.videocardCollection},];

  partname: string = environment.videocardCollection;
  currentpart?: string;
  currentpage: string = "0";
  
  @Output() catalogEmitter: EventEmitter<[string, number]> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
    this.currentpart = this.partname;
    this.getParts();
  }

  getParts() {
    this.currentpart = this.partname;
    this.currentpage = "0";
    this.goPage({pageIndex: 0});
  }

  goPage($event: any) {
    this.currentpage = $event.pageIndex;
    var page: number = +this.currentpage;
    this.catalogEmitter.emit([this.currentpart ?? environment.videocardCollection, page]);
  }
}
