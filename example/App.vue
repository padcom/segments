<template>
  <div>
    <Panel style="background-color: lightred">
      <Column style="background-color: red" width="30%">Column 1</Column>
      <Column style="background-color: blue">Column 2</Column>
    </Panel>
    <br/>
    <Row style="background-color: lightred">
      <Column style="background-color: red">Column 1</Column>
      <Column style="background-color: green">
        <Column style="background-color: orange">Column A</Column>
        <Column style="background-color: white">Column B</Column>
      </Column>
      <Column style="background-color: blue">
        <Column style="background-color: yellow">Column X</Column>
        <Column style="background-color: pink">Column Y</Column>
      </Column>
    </Row>
  </div>
</template>

<style>
:root {
  --segments-gap: 4px;
}
</style>
