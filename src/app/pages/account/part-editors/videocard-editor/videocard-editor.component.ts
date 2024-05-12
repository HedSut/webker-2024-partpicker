import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { VideocardService } from '../../../../shared/services/videocard/videocard.service';
import { Videocard } from '../../../../shared/models/Videocard';

@Component({
  selector: 'app-videocard-editor',
  templateUrl: './videocard-editor.component.html',
  styleUrl: './videocard-editor.component.sass'
})
export class VideocardEditorComponent implements OnChanges {
  @Input() videocard?: Videocard;
  @Output() msgEmitter: EventEmitter<string> = new EventEmitter();

  videocardName?: string;
  videocardPrice?: number;
  videocardChipset?: string;
  videocardMemory?: number;
  videocardCore?: number;
  videocardBoost?: number;

  constructor(private videocardService: VideocardService) {}

  ngOnChanges(): void {
    this.videocardName = this.videocard?.name;
    this.videocardPrice = this.videocard?.price;
    this.videocardChipset = this.videocard?.chipset;
    this.videocardMemory = this.videocard?.memory;
    this.videocardCore = this.videocard?.core_clock;
    this.videocardBoost = this.videocard?.boost_clock;
  }

  UpdateVideocard() {
    const newVideocard: Videocard = {
      id: this.videocard?.id ?? '',
      name: this.videocardName ?? '',
      price: this.videocardPrice ?? 0,
      chipset: this.videocardChipset ?? '',
      memory: this.videocardMemory ?? 0,
      core_clock: this.videocardCore ?? 0,
      boost_clock: this.videocardBoost ?? 0,
    }
    this.videocardService.updateVideocard(newVideocard).then(_ => {
      this.msgEmitter.emit("Videókártya adatai sikeresen frissítve!");
      console.log("videókártya sikeresen frissítve")
    }).catch(reason => {
      this.msgEmitter.emit("A memória adatainak frissítése közben hiba történt!")
    });
  }
}
