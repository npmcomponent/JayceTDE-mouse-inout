*This repository is a mirror of the [component](http://component.io) module [jaycetde/mouse-inout](http://github.com/jaycetde/mouse-inout). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jaycetde-mouse-inout`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# Mouse-InOut

  mouseenter and mouseleave events on top of component/event

## Installation

    $ component install JayceTDE/mouse-inout

## API

```javascript
var mouseInOut = require('mouse-inout');

mouseInOut.bind(el, 'mouseenter', function (e) {
  console.log('mouseenter');
});

mouseInOut.bind(el, 'mouseleave', function (e) {
  console.log('mouseleave');
});
```

## License

  MIT
