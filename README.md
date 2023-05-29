# Excalidraw in Angular

Note importing React and Excalidraw in `angular.json`.

Had to define hacky types in `app.component.ts`. There's probably a better way, but importing the types directly from corresponding libraries won't work straight off.


```
ReactDOM.render(
      React.createElement(ExcalidrawLib.Excalidraw, {}, null),
      document.getElementById('root')
    );
```