setInterval(() => {
  PushInfo();
}, 60000);

function GetInfo() {
  let tempList = [];
  selects = document.querySelectorAll(
    "pre.content.ng-pristine.ng-untouched.ng-valid.ng-not-empty"
  );
  if (selects != null) {
    selects.forEach((i) => console.log(tempList.push(i.innerText)));
  }
  return tempList;
}

function PushInfo() {
  fetch("http://localhost:5000/streaminfo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(GetInfo()),
  });
}
