import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-roles-models',
  templateUrl: './roles-model.component.html',
  styleUrls: ['./roles-model.component.css']
})
export class RolesModelsComponent implements OnInit{
  userName = '';
  availableRoles: any[] = [];
  selectedRoles: string[] =[];

  constructor(public bsModalRef: BsModalRef){}

  ngOnInit(): void {
  }

  updateChecked(checkedValue: string){
    const index = this.selectedRoles.indexOf(checkedValue);
    index !== -1 ? this.selectedRoles.splice(index,1) : this.selectedRoles.push(checkedValue);
  }

}
