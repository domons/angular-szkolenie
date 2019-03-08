import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userDisplayName'
})
export class UserDisplayNamePipe implements PipeTransform {

  transform(user: any): string {
    if ( ! user) {
      return '';
    }
    
    return user.person.name + ' ' + user.person.surname;
  }

}
