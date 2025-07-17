import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public name: string = 'John Doe';
  public email: string = 'john.doe@example.com';
  public phone: string = '123-456-7890';
  public isDarkMode: boolean = false;

  public notifications = {
    email: true,
    sms: false,
  };

  public language: string = 'en';

  public saveSettings(): void {
    const settings = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      isDarkMode: this.isDarkMode,
      notifications: this.notifications,
      language: this.language,
    };
    alert('Settings saved successfully!');
  }
}
