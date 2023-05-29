# Excalidraw in Angular

Since it took my a bit of time to get this together in the simplest possible way, decided to record it here in case it helps!

https://github.com/excalidraw/excalidraw

Note importing React and Excalidraw in `angular.json`.

Had to define hacky types in `app.component.ts`. There's probably a better way, but importing the types directly from corresponding libraries won't work straight off.


```
ReactDOM.render(
      React.createElement(ExcalidrawLib.Excalidraw, {}, null),
      document.getElementById('root')
    );
```

<img src="https://github.com/nenuadrian/excalidraw-angular/raw/main/screen.jpg" alt="Demo" />
