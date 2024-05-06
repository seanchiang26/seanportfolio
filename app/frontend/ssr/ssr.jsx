import { renderToString as renderPage } from "react-dom/server";

import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";

import { AppWrapper } from "../components/providers/AppWrapper";
import Layout from "../layouts/Layout";

import "../stylesheets/main.css";

const pages = import.meta.glob("../pages/*.jsx", { eager: true });

console.log(pages);
// const parsePageImports = (
//   imports
// ) => {
//   return mapKeys(imports, (file, path) => {
//     const nameWithExtension = path.split(/[\\/]/).pop();
//     return nameWithExtension.split(".").shift();
//   });
// };

// // == Pages
// const pageImports = import.meta.glob(
//   "../pages/*.jsx",
//   { import: "default", eager: true },
// );
// const pages = parsePageImports(pageImports);

// == Emails
// const emailImports = import.meta.glob(
//   "~/emails/**/*.jsx",
//   { import: "default", eager: true },
// );
// const emails = parsePageImports(emailImports);

// == Entrypoint
// const port = process.env.INERTIA_PORT
//   ? parseInt(process.env.INERTIA_PORT)
//   : 13714;
createServer(async page => {
  // const type = resolvePageType(page.component);
  return createInertiaApp({
    page,
    render: page => {
      return renderPage(page);
      // switch (type) {
      //   case PageType.Page: {
      //     return renderPage(page);
      //   }
      //   // case PageType.Email: {
      //   //   if (!isValidElement(page)) {
      //   //     throw new Error("Page is not a valid element");
      //   //   }
      //   //   return renderEmail(page);
      //   // }
      // }
    },
    resolve: name => {
      const page = pages[`../pages/${name}.jsx`].default;
      page.layout = page.layout || Layout;

      return page;
      // switch (type) {
      //   case PageType.Page: {
      //     const page = pages[name];
      //     if (!page) {
      //       throw new Error(`Missing page '${name}'`);
      //     }
      //     preparePage(page, type);
      //     return page;
      //   }
      // case PageType.Email: {
      //   const email = emails[name];
      //   if (!email) {
      //     throw new Error(`Missing email '${name}'`);
      //   }
      //   preparePage(email, type);
      //   return email;
      // }
      // }
    },
    setup({ App, props }) {
      return (
        <AppWrapper>
          <App {...props} />
        </AppWrapper>
      );
    },
  });
});
