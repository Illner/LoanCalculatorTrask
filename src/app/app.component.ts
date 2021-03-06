import { Component } from '@angular/core';
import { GatewayService } from './services/gateway.service';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2>
          <a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">
            CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  public title = 'app';

  constructor(
    public gateway: GatewayService,
  ) {
    this.gateway.getDemoDemoEndPoint({}).subscribe((data) => {
      this.title = data.data;
    });
  }

}
