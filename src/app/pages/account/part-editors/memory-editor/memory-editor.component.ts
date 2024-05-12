import { Component, EventEmitter, Input, input, OnChanges, Output } from '@angular/core';
import { Memory } from '../../../../shared/models/Memory';
import { MemoryService } from '../../../../shared/services/memory/memory.service';

@Component({
  selector: 'app-memory-editor',
  templateUrl: './memory-editor.component.html',
  styleUrl: './memory-editor.component.sass'
})
export class MemoryEditorComponent implements OnChanges {
  @Input() memory?: Memory;
  @Output() msgEmitter: EventEmitter<string> = new EventEmitter();

  memoryName?: string;
  memoryPrice?: number;
  memoryModulenumber?: number;
  memoryModulesize?: number;
  memorySpeed?: number;
  memoryDdr?: number;
  memoryCas?: number;
  memoryFw?: number;

  constructor(private memoryService: MemoryService) {}

  ngOnChanges(): void {
    this.memoryName = this.memory?.name;
    this.memoryPrice = this.memory?.price;
    this.memoryModulenumber = this.memory?.module_number;
    this.memoryModulesize = this.memory?.module_size;
    this.memorySpeed = this.memory?.speed;
    this.memoryDdr = this.memory?.ddr;
    this.memoryCas = this.memory?.cas_latency;
    this.memoryFw = this.memory?.first_word_latency;
  }

  UpdateMemory() {
    const newMemory: Memory = {
      id: this.memory?.id ?? '',
      name: this.memoryName ?? '',
      price: this.memoryPrice ?? 0,
      module_number: this.memoryModulenumber ?? 0,
      module_size: this.memoryModulesize ?? 0,
      speed: this.memorySpeed ?? 0,
      ddr: this.memoryDdr ?? 0,
      cas_latency: this.memoryCas ?? 0,
      first_word_latency: this.memoryFw ?? 0
    }
    this.memoryService.updateMemory(newMemory).then(_ => {
      console.log("asd");
      this.msgEmitter.emit("Memória adatai sikeresen frissítve!")
    }).catch(reason => {
      this.msgEmitter.emit("A memória adatainak frissítése közben hiba történt!")
    });
  }
}
