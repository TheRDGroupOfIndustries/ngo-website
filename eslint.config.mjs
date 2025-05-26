<<<<<<< HEAD
import studio from '@sanity/eslint-config-studio'

export default [...studio]
=======
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
>>>>>>> 9a5ae860723a8f6075e71c4860d5ed84f07d3ab0
