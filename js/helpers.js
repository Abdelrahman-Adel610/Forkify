import { TIMEOUT_LIMIT } from "./config";
async function tirmAfter(s) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(
        new Error(
          "Timeout ⏰: the request took longer than usual, please try again"
        )
      );
    }, s * 1000);
  });
}

export async function getJSON(url) {
  try {
    const response = await Promise.race([fetch(url), tirmAfter(TIMEOUT_LIMIT)]);
    const data = await response.json();    
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (err) {
    throw err;
  }
}
