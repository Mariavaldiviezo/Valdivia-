import * as Papa from "papaparse";
const getData = (url) => {
  let data = [];
  return new Promise((resolve) => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        data = results.data;
        console.log("incv", data);
        resolve(data);
      },
    });
  });
};

export const database = getData(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRm8iPJcKO73t-9kw3NrXzcVVr5J3DFkIeLqZSVf-ebl4G3NNlBj9UdJEWOsAkhhh-xvV9A6d0D4lqC/pub?output=csv"
);
