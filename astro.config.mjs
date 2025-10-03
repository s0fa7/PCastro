// @ts-check
import { defineConfig } from 'astro/config';
 import icon from "astro-icon";

// https://astro.build/config
// export default defineConfig({
//   integrations: [icon()],
// });


export default defineConfig({
  integrations: [icon()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Configure asset file names
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.names[0].split(".").at(1);

            console.log(extType)

            if (extType !== undefined) {
              if (/png|jpe?g|svg|gif|webp|tiff|bmp|ico/i.test(extType)) {
                extType = "img";
              } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
                extType = "fonts";
              } else if (/css/i.test(extType)) {
                extType = "css";
              }
            }

            return `assets/${extType}/[name][extname]`;
          }
        }
      }
    }
  }
});