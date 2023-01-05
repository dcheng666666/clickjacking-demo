const express = require('express');

const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

const app = express();
const port = 3002;

app.use(
  expressCspHeader({
    directives: {
      'frame-ancestors': [SELF, 'http://localhost:3001'],
    },
  })
);

app.use(express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
