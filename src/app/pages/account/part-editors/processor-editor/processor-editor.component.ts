import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Processor } from '../../../../shared/models/Processor';
import { ProcessorService } from '../../../../shared/services/processor/processor.service';
import { provideClientHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-processor-editor',
  templateUrl: './processor-editor.component.html',
  styleUrl: './processor-editor.component.sass'
})
export class ProcessorEditorComponent implements OnChanges {
  @Input() processor?: Processor;
  @Output() msgEmitter: EventEmitter<string> = new EventEmitter();

  processorName?: string;
  processorPrice?: number;
  processorCoreCount?: number;
  processorCoreClock?: number;
  processorBoost?: number;
  processorTdp?: number;
  processorGraphics?: string;

  constructor(private processorService: ProcessorService) {}

  ngOnChanges(): void {
    this.processorName = this.processor?.name;
    this.processorPrice = this.processor?.price;
    this.processorCoreClock = this.processor?.core_clock;
    this.processorCoreCount = this.processor?.core_count;
    this.processorBoost = this.processor?.boost_clock;
    this.processorTdp = this.processor?.tdp;
    this.processorGraphics = this.processor?.graphics;
  }

  UpdateProcessor() {
    const newProcessor: Processor = {
      id: this.processor?.id ?? '',
      name: this.processorName ?? '',
      price: this.processorPrice ?? 0,
      core_count: this.processorCoreCount ?? 0,
      core_clock: this.processorCoreClock ?? 0,
      boost_clock: this.processorBoost ?? 0,
      tdp: this.processorTdp ?? 0,
      graphics: this.processorGraphics ?? '',
    }
    this.processorService.updateProcessor(newProcessor).then(_ => {
      this.msgEmitter.emit("Processzor adatai sikeresen frissítve!");
      console.log("processzor sikeresen frissitve")
    }).catch(reason => {
      this.msgEmitter.emit("A memória adatainak frissítése közben hiba történt!")
    });
  }
}
