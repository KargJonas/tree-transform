# file-tree-transform

## A tool for recursively walking through a folder and modifying it's files using a transformer function.

```js
const transform = require("file-tree-transform");

function convertFileFunc({
  input,  // Content of the original file
  name    // Filename of the original file
}) {
  const newContent = `This file was converted!\n${input}`;
  const newName = `${name}.converted`;

  return {
    output: newContent, // Content of the new file
    name: newName       // Filename of the new file (optional)
  };
}

transform(
  "path/to/input-folder",   // Input folder path
  "path/to/output-folder",  // Output folder path
  convertFileFunc,          // Your converter function
  true                      // Convert file content to string [optional | default: true]
);
```

### Example
```
INPUT                                             |   OUTPUT
--------------------------------------------------|--------------------------------------------------
input-folder                                      |       output-folder
  ├── bar.txt                                     |         ├── bar.txt.converted
  ├── foo.txt                                     |         ├── foo.txt.converted
  └── other-file                                  |         └── other-file
      └── baz.txt                                 |             └── baz.txt.converted
                                                  |
(inside bar.txt)                                  |   (inside bar.txt)
                                                  |
content content content content content content   |   This file was converted!
content content content content content content   |   content content content content content content
                                                  |   content content content content content content
```

> See GH /example