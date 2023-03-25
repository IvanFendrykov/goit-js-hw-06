const allList = document.querySelectorAll(".item");
const listLength = allList.length;
console.log(`Number of categories: ${listLength}`);

let categorAll = "";
allList.forEach((ell) => {
  // console.log(ell);
  const titleEl = ell.querySelector("h2").textContent;
  const elements = ell.querySelectorAll(".item>ul>li");
  categorAll += `
    Category: ${titleEl} 
    Elements: ${elements.length}`;
});
console.log(categorAll);
