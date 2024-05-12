import { Component, Input } from '@angular/core';
import { Config } from '../../../shared/models/Config';
import { Motherboard } from '../../../shared/models/Motherboard';
import { MotherboardService } from '../../../shared/services/motherboard/motherboard.service';
import { MemoryService } from '../../../shared/services/memory/memory.service';
import { ProcessorService } from '../../../shared/services/processor/processor.service';
import { VideocardService } from '../../../shared/services/videocard/videocard.service';
import { PowersupplyService } from '../../../shared/services/powersupply/powersupply.service';
import { Memory } from '../../../shared/models/Memory';
import { Processor } from '../../../shared/models/Processor';
import { Videocard } from '../../../shared/models/Videocard';
import { Powersupply } from '../../../shared/models/Powersupply';

@Component({
  selector: 'app-config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrl: './config-viewer.component.sass'
})
export class ConfigViewerComponent {
  @Input() configs: Array<Config> = [];
  selectedConfigId: string = '';
  selectedConfig?: Config | null;

  selectedMotherboard?: Motherboard;
  selectedMemory?: Memory;
  selectedProcessor?: Processor;
  selectedVideocard?: Videocard;
  selectedPowersupply?: Powersupply;

  constructor(private motherboardService: MotherboardService,
              private memoryService: MemoryService,
              private processorService: ProcessorService,
              private videocardService: VideocardService,
              private powersupplyService: PowersupplyService) {}
  
  getConfig() {
    for(let i = 0; i < this.configs.length; i++) {
      if (this.configs[i].id === this.selectedConfigId) {
        this.selectedConfig = this.configs[i];
        break;
      }
    }

    this.motherboardService.getMotherboardById(this.selectedConfig?.motherboardid as string).subscribe(motherboard => {
      this.selectedMotherboard = motherboard;
    })

    this.memoryService.getMemoryById(this.selectedConfig?.memoryid as string).subscribe(memory => {
      this.selectedMemory = memory;
    })

    this.processorService.getProcessorById(this.selectedConfig?.processorid as string).subscribe(processor => {
      this.selectedProcessor = processor;
    })

    this.videocardService.getVideocardById(this.selectedConfig?.videocardid as string).subscribe(videocard => {
      this.selectedVideocard = videocard;
    })

    this.powersupplyService.getPowersupplyById(this.selectedConfig?.powersupplyid as string).subscribe(powersupply => {
      this.selectedPowersupply = powersupply;
    })
  }
}
