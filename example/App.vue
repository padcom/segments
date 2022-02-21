<template>
  <Panel style="background-color: lightred">
    <Column style="background-color: red">Column 1</Column>
    <Column style="background-color: green">Column 2</Column>
    <Column style="background-color: blue">
      <Column style="background-color: yellow">Column X</Column>
      <Column style="background-color: pink">Column Y</Column>
    </Column>
  </Panel>
</template>

<style>
:root {
  --segments-gap: 0px;
}
</style>
