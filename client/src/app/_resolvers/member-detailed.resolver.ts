import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MembersService } from '../_services/members.service';
import { Observable, of } from 'rxjs';
import { Member } from '../_models/members';

@Injectable({
  providedIn:'root'
})

export class MemberDetailedResolver implements Resolve<Member> {
  constructor(private memberService: MembersService){}

  resolve(route: ActivatedRouteSnapshot) :Observable<Member>{
    return this.memberService.getMember(route.paramMap.get('userName')!)
   }
}
