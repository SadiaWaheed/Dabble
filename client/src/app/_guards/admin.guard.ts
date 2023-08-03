import { Injectable } from "@angular/core";
import {  CanActivate   } from "@angular/router";
import { Observable, map } from "rxjs";
import { AccountService } from "../_services/account.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if(!user) return false;
        if(user.roles.includes('Admin') || user.roles.includes('Moderator')){
          return true;
        }else{
          this.toastr.error('You cannot enter this area');
          return false;
        }
      })
    )
  }
} 

/*import {  ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { User } from '../_models/user';
import { inject } from '@angular/core';
import { MembersService } from '../_services/members.service';
import { AccountService } from '../_services/account.service';

export const adminGuard: CanActivateFn = (route:ActivatedRouteSnapshot) => {
  const user: AccountService = inject(AccountService);

   if(!user) return false;
        if(user.roles.includes('Admin') || user.roles.includes('Moderator')){
          return true;
        }else{
          toastr.error('You cannot enter this area');
          return false;
        }
};*/
