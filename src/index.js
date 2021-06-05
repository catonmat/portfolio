import _ from "lodash"
import "./style.css"

if (process.env.NODE_ENV !== 'production') {
  console.log('Webpack compiling in development mode.')
}

function hi() {
  console.log('hello world!!');

}

hi();
