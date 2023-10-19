export function flattenFields(data) {
  const result = [];
  const errors = [];

  function flatten(item) {
    const flattenedItem = {
      FieldID: item.ID,
      Value: item.Value,
    };

    if (item.Type === "dynamic" && item.Childs.length > 0) {
      var res = [];
      item.Childs.forEach((child) => {
        res.push({ Code: child.Code, Label: child.Label, Value: child.Value });
      });

      result.push({ FieldID: item.ID, Value: JSON.stringify(res) });
    }

    if (flattenedItem.Value) {
      result.push(flattenedItem);
    } else {
      if (
        (item.Type === "radio" || item.Type == "file") &&
        item.IsRequired &&
        !item.IsFlush
      ) {
        errors.push({
          ID: item.ID,
          Message: "Field ini wajib diisi",
        });
      }
    }

    if (item.Childs && item.Childs.length > 0) {
      item.Childs.forEach((child) => {
        flatten(child);
      });
    }
  }

  data.forEach((item) => {
    flatten(item);
  });

  return {
    isValid: errors.length > 0 ? false : true,
    errors: errors,
    result: result,
  };
}

export function assignErrorsToFields(errors, fields) {
  for (const error of errors) {
    assignErrorToField(error, fields);
  }
  return fields;
}

export function assignErrorToField(error, fields) {
  for (const field of fields) {
    if (field.ID === error.ID) {
      field.Error = true;
      field.ErrorMessage = error.Message;
    } else if (field.Childs && field.Childs.length > 0) {
      assignErrorToField(error, field.Childs);
    }
  }
}

export function flushChilds(field) {
  if (field.Childs && field.Childs.length > 0) {
    for (const child of field.Childs) {
      delete child["Error"];
      delete child["ErrorMessage"];
      delete child["Value"];
      child.IsFlush = true;
      flushChilds(child);
    }
  }
}
