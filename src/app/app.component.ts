import { Component } from '@angular/core';

declare const ReactDOM: { render: (a: unknown, b: unknown) => unknown };
declare const React: {
  createElement: (a: unknown, b: unknown, c: unknown) => unknown;
};
declare const ExcalidrawLib: { Excalidraw: unknown };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  ngOnInit() {
    ReactDOM.render(
      React.createElement(ExcalidrawLib.Excalidraw, {}, null),
      document.getElementById('root')
    );
  }
}
