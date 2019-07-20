# react-scroll-to-first-error

> A react hook for doing scroll to an invalid input on onSubmit. Works with any standard form and with other libraries like material-ui

[![NPM](https://img.shields.io/npm/v/react-scroll-to-first-error.svg)](https://www.npmjs.com/package/react-scroll-to-first-error) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scroll-to-first-error
```

## Usage

```jsx
      import React, { useRef } from 'react'
      import useScrollToError from 'react-scroll-to-error'

      function App() {
        const formEl = useRef(null);

        useScrollToError(formEl);

        return (
          <div>
            <form ref={formEl} noValidate>
              <input type="text" name="name" id="name" required />
              <input type="text" name="phone" id="name" />
              {/* we force height here for testing purposes */}
              <div style={{ height: "100vh" }} />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
        }
```

## License

GPL-3.0 © [dieguezz](https://github.com/dieguezz)
