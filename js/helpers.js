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
export async function wait(time) {
  return new Promise((res, _) => setTimeout(res, time * 1000));
}
export async function AJAX(url, Data = undefined) {
  try {
    let response;
    if (Data)
      response = await Promise.race([
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Data),
        }),
        tirmAfter(TIMEOUT_LIMIT),
      ]);
    else {
      response = await Promise.race([fetch(url), tirmAfter(TIMEOUT_LIMIT)]);
    }

    console.log(response);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (err) {
    throw err;
  }
}
