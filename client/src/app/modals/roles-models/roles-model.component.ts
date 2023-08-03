import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-roles-models',
  templateUrl: './roles-model.component.html',
  styleUrls: ['./roles-model.component.css']
})
export class RolesModelsComponent implements OnInit{
  title ='';
  list:any;
  closeBtnName ='';

  constructor(public bsModalRef: BsModalRef){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
