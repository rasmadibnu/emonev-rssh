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

export function findItemById(array, searchArray) {
  searchArray.forEach((searchObj) => {
    const idToSearch = searchObj.Field.ID;
    const stack = [...array]; // Gunakan stack untuk menyimpan data

    while (stack.length > 0) {
      const current = stack.pop();

      if (
        searchObj.Field.Type === "dynamic" &&
        searchObj.Field.ID === current.ID
      ) {
        const temp = current.Childs.sort((a, b) => a.SortOrder - b.SortOrder);
        try {
          JSON.parse(searchObj.Value);
          const val = JSON.parse(searchObj.Value);
          current.Childs = [];
          if (val.length > 0) {
            val.forEach((e, idx) => {
              const find = temp.find((temp) => temp.Label == e.Label);
              console.log(find);
              current.Childs.push({
                ...find,
                Value: e.Value,
                SortOrder: idx,
              });
            });
          } else {
            current.Childs = temp;
          }
        } catch (e) {
          current.Childs = temp;

          current.Value = searchObj.Value; // Tambahkan nilai "value" ke objek yang ditemukan
        }
      } else {
        if (current.ID === idToSearch) {
          current.Value = searchObj.Value; // Tambahkan nilai "value" ke objek yang ditemukan
          break;
        }

        if (current.Childs) {
          stack.push(...current.Childs); // Tambahkan children ke dalam stack
        }
      }
    }
  });
}
