// babel-polyfill needed for generator functions in the saga
import 'babel-polyfill';

// ima.js-babel6-polyfill for IE10 and Babel6 to correctly implement class extend
import 'ima.js-babel6-polyfill';

// Intl isn't in IE10, so it needs this manually requiring
if (typeof(Intl) === 'undefined') {
  require('intl');
}
