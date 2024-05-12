import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { PowersupplyService } from '../../../../shared/services/powersupply/powersupply.service';
import { Powersupply } from '../../../../shared/models/Powersupply';

@Component({
  selector: 'app-powersupply-editor',
  templateUrl: './powersupply-editor.component.html',
  styleUrl: './powersupply-editor.component.sass'
})
export class PowersupplyEditorComponent implements OnChanges {
  @Input() powersupply?: Powersupply;
  @Output() msgEmitter: EventEmitter<string> = new EventEmitter();

  powersupplyName?: string;
  powersupplyPrice?: number;
  powersupplyType?: string;
  powersupplyEfficency?: string;
  powersupplyWatt?: number;
  powersupplyMod?: string;

  constructor(private powersupplyService: PowersupplyService) {}

  ngOnChanges() {
    this.powersupplyName = this.powersupply?.name;
    this.powersupplyPrice = this.powersupply?.price;
    this.powersupplyType = this.powersupply?.type;
    this.powersupplyEfficency = this.powersupply?.efficiency;
    this.powersupplyWatt = this.powersupply?.wattage;
    this.powersupplyMod = this.powersupply?.modular;
  }

  UpdatePowersupply() {
    const newPowersupply: Powersupply = {
      id: this.powersupply?.id ?? '',
      name: this.powersupplyName ?? '',
      price: this.powersupplyPrice ?? 0,
      type: this.powersupplyType ?? '',
      efficiency: this.powersupplyEfficency ?? '',
      wattage: this.powersupplyWatt ?? 0,
      modular: this.powersupplyMod ?? ''
    }
    this.powersupplyService.updatePowersupply(newPowersupply).then(_ => {
      this.msgEmitter.emit("Tápegység adatai sikeresen frissítve!");
      console.log("tápegység sikeresen frissítve")
    }).catch(reason => {
      this.msgEmitter.emit("A memória adatainak frissítése közben hiba történt!")
    });
  }
}
