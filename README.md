# Vue Segments

Vue Segments is a very small library providing basic building blocks for creating panels/rows with columns.

## Installation

To install the library issue the following command:

```
$ npm install --save-dev vue-segments
```

## Usage

After installing, using the library is pretty simple. The library exports the standard Vue's plugin interface and can be installed in any application easily:

```language:javascript
import { createApp } from 'vue'

import 'vue-segments/dist/style.css'
import segments from 'vue-segments'

import App from './App.vue'

createApp(App)
  .use(segments)
  .mount('#app')
```

Then you can use the provided `Panel` and `Column` components like this:

```
<Panel style="background-color: lightred">
  <Column style="background-color: red">Column 1</Column>
  <Column style="background-color: blue">Column 2</Column>
</Panel>
```

You can also use the "Row/Column" syntax:

```
<Row style="background-color: lightred">
  <Column style="background-color: red" width="30%">Column 1</Column>
  <Column style="background-color: green">
    <Column style="background-color: orange">Column A</Column>
    <Column style="background-color: white">Column B</Column>
  </Column>
  <Column style="background-color: blue">
    <Column style="background-color: yellow">Column X</Column>
    <Column style="background-color: pink">Column Y</Column>
  </Column>
</Row>
```

Please note, that any given column can either have an auto-calculated width or a given one, as shown with `Column 1`. The value of `width` prop needs to be a valid CSS size expression.

## Changing the gap between columns

The standard gap between columns is `12px`. To change it overwrite the `segments-gap` CSS variable like so:

```
<style>
:root {
  --segments-gap: 0px; /* new gap width */
}
</style>
```

## Using just the styles

It is also possible to use just the styles from this library. It is pretty simple, there are 5 classes to choose from:

`.row` / `.panel` - a horizontal block, can contain `.column`s.
`.column` - a vertical block (you nest those under `.row` or `.panel`
`.full-width` - the `.column` becomes a `.row`/`.column`
`.fixed-width` - the `.column` will have the defined `width` (must set the `width` property!)
