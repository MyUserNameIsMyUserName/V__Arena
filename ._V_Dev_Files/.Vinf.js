/*jshint esversion: 6 */
const Vinfo = {
  title: "Var_v.0.1-57",
  description:
    "Trying to bring life to long dead project",
  authors: {
    "_.V._": "slavko.vuletic92@gmail.com",
    "<_S_>": "slavko_vuletic@hotmail.com",
  },
  folderInfo: {
    description: "Var_v.0.1-57 >> Root Folder.",
    folders: {
      "._V_Dev_Files" :   "DEV Folder.",
      ".vscode"       :   "vscode config folder",
      "app_src"       :   "Application source folder.",
      "helper_modules":   "general helper_modules",
      "PUBLIC"        :   "Serving folder.",
      "server"        :   "Start of the server"
    },
  },
  repository: {
    type: "git",
    url: "https://github.com/MyUserNameIsMyUserName/V__Arena.git",
  },
};

window.onload = function () {
  console.warn("_!.!_JS_OnPageLoad_RUN_!.!_");
  console.info(Vinfo);
  document.body.innerHTML = "<pre>" + JSON.stringify(Vinfo, true, 2) + "</pre>";
  console.warn(
    "_!.!_[ putting everything inside body into pre tag to print better ]_!.!_"
  );
};
