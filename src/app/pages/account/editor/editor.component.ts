import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { MemoryService } from '../../../shared/services/memory/memory.service';
import { MotherboardService } from '../../../shared/services/motherboard/motherboard.service';
import { PowersupplyService } from '../../../shared/services/powersupply/powersupply.service';
import { ProcessorService } from '../../../shared/services/processor/processor.service';
import { VideocardService } from '../../../shared/services/videocard/videocard.service';
import { Motherboard } from '../../../shared/models/Motherboard';
import { Memory } from '../../../shared/models/Memory';
import { Powersupply } from '../../../shared/models/Powersupply';
import { Processor } from '../../../shared/models/Processor';
import { Videocard } from '../../../shared/models/Videocard';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.sass'
})
export class EditorComponent {
  parts: Array<any> = [{name: "Memória", value: environment.memoryCollection},
    {name: "Alaplap", value: environment.motherboardCollection}, 
    {name: "Tápegység", value: environment.powersupplyCollection}, 
    {name: "Processzor", value: environment.processorCollection},
    {name: "Videókártya", value: environment.videocardCollection},];

  partname: string = environment.videocardCollection;
  partId?: string;

  selectedMotherboard?: Motherboard;
  selectedMemory?: Memory;
  selectedProcessor?: Processor;
  selectedVideocard?: Videocard;
  selectedPowersupply?: Powersupply;

  feedbackMsg?: string;

  constructor(private motherboardService: MotherboardService,
    private memoryService: MemoryService,
    private processorService: ProcessorService,
    private videocardService: VideocardService,
    private powersupplyService: PowersupplyService) {}

  SearchPart() {
    this.feedbackMsg = "";
    if (this.partId == undefined || this.partId == "") { return; }

    this.selectedMotherboard = undefined;
    this.selectedMemory = undefined;
    this.selectedPowersupply = undefined;
    this.selectedProcessor = undefined;
    this.selectedVideocard = undefined;

    if (this.partname == environment.memoryCollection) {
      this.memoryService.getMemoryById(this.partId).subscribe(memory => {
        this.selectedMemory = memory;
        if (memory == undefined) { this.feedbackMsg = "Memória ilyen azonosítóval nem található!" }
      });
    } else if (this.partname == environment.motherboardCollection) {
      this.motherboardService.getMotherboardById(this.partId).subscribe(motherboard => {
        this.selectedMotherboard = motherboard;
        if (motherboard == undefined) { this.feedbackMsg = "Alaplap ilyen azonosítóval nem található!" }
      })
    } else if (this.partname == environment.powersupplyCollection) {
      this.powersupplyService.getPowersupplyById(this.partId).subscribe(powersupply => {
        this.selectedPowersupply = powersupply;
        if (powersupply == undefined) { this.feedbackMsg = "Tápegység ilyen azonosítóval nem található!" }
      })
    } else if (this.partname == environment.processorCollection) {
      this.processorService.getProcessorById(this.partId).subscribe(processor => {
        this.selectedProcessor = processor;
        if (processor == undefined) { this.feedbackMsg = "Processzor ilyen azonosítóval nem található!" }
      })
    } else if (this.partname == environment.videocardCollection) {
      this.videocardService.getVideocardById(this.partId).subscribe(videocard => {
        this.selectedVideocard = videocard;
        if (videocard == undefined) { this.feedbackMsg = "Videókártya ilyen azonosítóval nem található!" }
      })
    }
  }

  UpdateFeedback(msg: string) {
    this.feedbackMsg = msg;
  }
}
