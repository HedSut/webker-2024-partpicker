import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { MotherboardService } from '../../shared/services/motherboard/motherboard.service';
import { MemoryService } from '../../shared/services/memory/memory.service';
import { ProcessorService } from '../../shared/services/processor/processor.service';
import { VideocardService } from '../../shared/services/videocard/videocard.service';
import { PowersupplyService } from '../../shared/services/powersupply/powersupply.service';
import { Config } from '../../shared/models/Config';
import { UserService } from '../../shared/services/user/user.service';
import { Motherboard } from '../../shared/models/Motherboard';
import { Memory } from '../../shared/models/Memory';
import { Processor } from '../../shared/models/Processor';
import { Videocard } from '../../shared/models/Videocard';
import { Powersupply } from '../../shared/models/Powersupply';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrl: './picker.component.sass'
})
export class PickerComponent implements OnInit {
  configForm = new FormGroup({
    motherboard: new FormControl('', Validators.required),
    memory: new FormControl('', Validators.required),
    processor: new FormControl('', Validators.required),
    videocard: new FormControl('', Validators.required),
    powersupply: new FormControl('', Validators.required),
    configname: new FormControl('', Validators.required)
  });

  currentUser?: firebase.default.User | null = null;
  error: string | null = null;

  selectedMotherboard?: Motherboard;
  selectedMemory?: Memory;
  selectedProcessor?: Processor;
  selectedVideocard?: Videocard;
  selectedPowersupply?: Powersupply;

  constructor(private authService: AuthService, 
              private motherboardService: MotherboardService,
              private memoryService: MemoryService,
              private processorService: ProcessorService,
              private videocardService: VideocardService,
              private powersupplyService: PowersupplyService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.currentUser = user;
    })
  }

  updateForm() {
    this.motherboardService.getMotherboardById(this.configForm.get('motherboard')?.value as string).subscribe(motherboard => {
      this.selectedMotherboard = motherboard;
    })

    this.memoryService.getMemoryById(this.configForm.get('memory')?.value as string).subscribe(memory => {
      this.selectedMemory = memory;
    })

    this.processorService.getProcessorById(this.configForm.get('processor')?.value as string).subscribe(processor => {
      this.selectedProcessor = processor;
    })

    this.videocardService.getVideocardById(this.configForm.get('videocard')?.value as string).subscribe(videocard => {
      this.selectedVideocard = videocard;
    })

    this.powersupplyService.getPowersupplyById(this.configForm.get('powersupply')?.value as string).subscribe(powersupply => {
      this.selectedPowersupply = powersupply;
    })
  }

  submit() {
    this.updateForm();
    if (this.currentUser == null ) { return; }
    if (this.selectedMemory == null || this.selectedMotherboard == null || this.selectedPowersupply == null ||
      this.selectedProcessor == null || this.selectedVideocard == null) { return; }

    const config: Config = {
      id: '',
      name: this.configForm.get('configname')?.value as string,
      memoryid: this.selectedMemory.id,
      memoryname: this.selectedMemory.name,
      motherboardid: this.selectedMotherboard.id,
      motherboardname: this.selectedMotherboard.name,
      processorid: this.selectedProcessor.id,
      processorname: this.selectedProcessor.name,
      videocardid: this.selectedVideocard.id,
      videocardname: this.selectedVideocard.name,
      powersupplyid: this.selectedPowersupply.id,
      powersupplyname: this.selectedPowersupply.name
    }

    this.userService.createConfig(config, this.currentUser?.uid).then(_ => {
      console.log("Config created");
    })
  }
}
