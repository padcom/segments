# Vue Segments

Vue Segments is a very small library providing basic building blocks for creating panels with columns.

## Installation

To install the library issue the following command:

```
$ npm install --save-dev vue-segments
```

## Usage

After installing, using the library is pretty simple. The library exports the standard Vue's plugin interface and can be installed in any application easily:

```language:javascript
import { createApp } from 'vue'

import 'segments/dist/style.css'
import segments from 'segments'

import App from './App.vue'

createApp(App)
  .use(segments)
  .mount('#app')
```

Then you can use the provided `Panel` and `Column` components like this:

```
<Panel style="background-color: lightred">
  <Column style="background-color: red">Column 1</Column>
  <Column style="background-color: green">Column 2</Column>
  <Column style="background-color: blue">
    <Column style="background-color: yellow">Column X</Column>
    <Column style="background-color: pink">Column Y</Column>
  </Column>
</Panel>
```

## Changing the gap between columns

The standard gap between columns is `12px`. To change it overwrite the `segments-gap` CSS variable like so:

```
<style>
:root {
  --segments-gap: 0px; /* new gap width */
}
</style>
```
