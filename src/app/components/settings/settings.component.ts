import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  settings = {
    name: 'Joe',
    username: 'JoeKris',
    email: 'JoeKris@gmail.com',
    password: '',
  };

  public onSubmit(): void {
    alert('Your settings have been successfully updated!');
  }
}
