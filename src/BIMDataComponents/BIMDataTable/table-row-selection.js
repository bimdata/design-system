/* eslint-disable */

import { ref, watch } from "vue";

function useRowSelection(
  rows,
  selection,
  {
    rowSelectionUpdateEffect = () => {},
    rowSelectionToggleEffect = () => {},
    fullSelectionToggleEffect = () => {},
  } = {}
) {
  const rowSelection = ref(new Map());

  watch(
    rows,
    () => {
      rowSelection.value = new Map(
        rows.value
          .filter(({ key }) => selection.value.has(key))
          .map(({ key, data }) => [key, data])
      );
    },
    { immediate: true }
  );
  watch(
    selection,
    () => {
      rowSelection.value = selection.value;
    },
    { immediate: true }
  );
  watch(
    rowSelection,
    () => {
      rowSelectionUpdateEffect(rowSelection.value);
    }
  );

  const toggleRowSelection = ({ key, data }) => {
    const isSelected = () => rowSelection.value.has(key);
    if (isSelected()) {
      rowSelection.value.delete(key);
    } else {
      rowSelection.value.set(key, data);
    }
    rowSelection.value = new Map([...rowSelection.value.entries()]);
    rowSelectionToggleEffect(isSelected(), { key, data });
  };
  const toggleFullSelection = () => {
    const isSelected = () => rowSelection.value.size > 0;
    if (isSelected()) {
      rowSelection.value = new Map();
    } else {
      rowSelection.value = new Map(rows.value.map(({ key, data }) => [key, data]));
    }
    fullSelectionToggleEffect(isSelected());
  };

  return {
    rowSelection,
    toggleRowSelection,
    toggleFullSelection,
  };
}

export { useRowSelection };
