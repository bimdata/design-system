<template>
  <main class="article markup">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">BEM Naming</BIMDataText>
      <BIMDataText margin="5px 0"
        >BEM is one of the methods of naming components — block, element,
        modifier.</BIMDataText
      >
      <BIMDataText margin="5px 0"
        >If you’re comfortable with BEM, move down to the “Where we diverge from
        BEM” section.</BIMDataText
      >
      <BIMDataText margin="5px 0"
        >For those unfamiliar or who need a quick refresh, let’s briefly look at
        how BEM works. As an example, we'll build a button
        component.</BIMDataText
      >
      <BIMDataText component="h3" color="color-primary">Block</BIMDataText>
      <BIMDataText margin="5px 0"
        >A block represents the main component name. In our example, if you were
        building a button component, the class name would be
        <code>.button</code>. All of the properties you want included for all
        buttons would be included in the base <code>.button</code> class. A
        block is an independent entity which must be able to be moved without
        affecting its appearance or its functioning.</BIMDataText
      >
      <BIMDataText component="h3" color="color-primary">Element</BIMDataText>
      <BIMDataText component="h3" color="color-primary">Modifier</BIMDataText>
    </div>
  </main>
</template>
