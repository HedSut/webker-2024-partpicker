import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MotherboardService } from '../../../../shared/services/motherboard/motherboard.service';
import { Motherboard } from '../../../../shared/models/Motherboard';

@Component({
  selector: 'app-motherboard-editor',
  templateUrl: './motherboard-editor.component.html',
  styleUrl: './motherboard-editor.component.sass'
})
export class MotherboardEditorComponent implements OnChanges {
  @Input() motherboard?: Motherboard;
  @Output() msgEmitter: EventEmitter<string> = new EventEmitter();

  motherboardName?: string;
  motherboardPrice?: number;
  motherboardSocket?: string;
  motherboardFormfactor?: string;
  motherboardMaxmem?: number;
  motherboardMemoryslots?: number;

  constructor(private motherboardService: MotherboardService) {}

  ngOnChanges(): void {
    this.motherboardName = this.motherboard?.name;
    this.motherboardPrice = this.motherboard?.price;
    this.motherboardSocket = this.motherboard?.socket;
    this.motherboardFormfactor = this.motherboard?.form_factor;
    this.motherboardMaxmem = this.motherboard?.max_memory;
    this.motherboardMemoryslots = this.motherboard?.memory_slots;
  }

  UpdateMotherboard() {
    const newMotherboard: Motherboard = {
      id: this.motherboard?.id ?? '',
      name: this.motherboardName ?? '',
      price: this.motherboardPrice ?? 0,
      socket: this.motherboardSocket ?? '',
      form_factor: this.motherboardFormfactor ?? '',
      max_memory: this.motherboardMaxmem ?? 0,
      memory_slots: this.motherboardMemoryslots ?? 0
    }
    this.motherboardService.updateMotherboard(newMotherboard).then(_ => {
      this.msgEmitter.emit("Alaplap adatai sikeresen frissítve!");
      console.log("motherboard updated")
    }).catch(reason => {
      this.msgEmitter.emit("A memória adatainak frissítése közben hiba történt!")
    });
  }

}
