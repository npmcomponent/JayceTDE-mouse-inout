
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
