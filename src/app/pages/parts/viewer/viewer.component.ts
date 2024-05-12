import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PagerService } from '../../../shared/services/pager/pager.service';
import { environment } from '../../../../environments/environment.development';
import { Videocard } from '../../../shared/models/Videocard';
import { Memory } from '../../../shared/models/Memory';
import { Motherboard } from '../../../shared/models/Motherboard';
import { Powersupply } from '../../../shared/models/Powersupply';
import { Processor } from '../../../shared/models/Processor';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.sass', 
})
export class ViewerComponent implements OnChanges, OnInit {
  partname?: string;
  pagenum?: number;
  @Input() catalog: [string, number] = ["videocard", 0];

  memories: Array<Memory> = [];
  motherboards: Array<Motherboard> = [];
  powersupplies: Array<Powersupply> = [];
  processors: Array<Processor> = [];
  videocards: Array<Videocard> = [];

  constructor(private pagerService: PagerService) {}

  ngOnInit(): void {
    this.pagerService.getFirstPage(environment.memoryCollection).subscribe((data: any) => {
      this.memories = data;
    });

    this.pagerService.getFirstPage(environment.motherboardCollection).subscribe((data: any) => {
      this.motherboards = data;
    });

    this.pagerService.getFirstPage(environment.powersupplyCollection).subscribe((data: any) => {
      this.powersupplies = data;
    });

    this.pagerService.getFirstPage(environment.processorCollection).subscribe((data: any) => {
      this.processors = data;
    });

    this.pagerService.getFirstPage(environment.videocardCollection).subscribe((data: any) => {
      this.videocards = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.partname = this.catalog[0];
    this.pagenum = this.catalog[1];

    if (this.partname === environment.memoryCollection) {
      this.pagerService.getMemoryPage(this.pagenum).subscribe((data: Array<Memory>) => {
        const lastrowid = data[data.length - 1].id;
        this.memories = data;
        this.pagerService.addPage(this.partname ?? '', lastrowid);
      })
    }
    else if (this.partname === environment.motherboardCollection) {
      this.pagerService.getMotherboardPage(this.pagenum).subscribe((data: Array<Motherboard>) => {
        const lastrowid = data[data.length - 1].id;
        this.motherboards = data;
        this.pagerService.addPage(this.partname ?? '', lastrowid);
      })
    }
    else if (this.partname === environment.powersupplyCollection) {
      this.pagerService.getPowersupplyPage(this.pagenum).subscribe((data: Array<Powersupply>) => {
        const lastrowid = data[data.length - 1].id;
        this.powersupplies = data;
        this.pagerService.addPage(this.partname ?? '', lastrowid);
      })
    }
    else if (this.partname === environment.processorCollection) {
      this.pagerService.getProcessorPage(this.pagenum).subscribe((data: Array<Processor>) => {
        const lastrowid = data[data.length - 1].id;
        this.processors = data;
        this.pagerService.addPage(this.partname ?? '', lastrowid);
      })
    }
    else if (this.partname === environment.videocardCollection) {
      this.pagerService.getVideocardPage(this.pagenum).subscribe((data: Array<Videocard>) => {
        const lastrowid = data[data.length - 1].id;
        this.videocards = data;
        this.pagerService.addPage(this.partname ?? '', lastrowid);
      })
    }

  }
}
