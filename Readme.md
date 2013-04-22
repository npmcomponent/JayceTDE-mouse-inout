
# comengo (Come-n-go)

  mouseenter and mouseleave events on top of component/event

## Installation

    $ component install JayceTDE/comengo

## API

```javascript
var comengo = require('comengo');

comengo.bind(el, 'mouseenter', function (e) {
  console.log('mouseenter');
});

comengo.bind(el, 'mouseleave', function (e) {
  console.log('mouseleave');
});
```

## License

  MIT
