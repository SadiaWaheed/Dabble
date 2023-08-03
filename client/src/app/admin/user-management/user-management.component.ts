import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { User } from 'src/app/_models/user';
import { AdminService } from 'src/app/_services/admin.service';
import { RolesModelsComponent } from 'src/app/modals/roles-models/roles-model.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit{
  users: User[]=[];
  bsModalRef: BsModalRef<RolesModelsComponent> = new BsModalRef<RolesModelsComponent>();

  constructor(private adminService: AdminService, private modalService: BsModalService){}

  ngOnInit(): void { 
    this.getUsersWithRoles();
  }

  getUsersWithRoles(){
    this.adminService.getUserWithRoles().subscribe({
      next: users => this.users = users
    })
  }

  openRolesModal(){
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Do thing',
          'Another thing',
          'Something else'
        ],
        title: 'Test modal'
      }
    }
    this.bsModalRef = this.modalService.show(RolesModelsComponent, initialState);
    this.bsModalRef.content!.closeBtnName = 'Close';
  }
}
