// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".reviews");
//const product = urlParams.get('product')

// 2️⃣ Get the stored VALUE for the reviewsCount-ls KEY in localStorage if it exists. If the reviewsCount KEY is missing, then assign 0 to the reviewsCount variable.
let reviewsCount = Number(window.localStorage.getItem("reviewsCount-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (reviewsCount !== 0) {
    visitsDisplay.textContent = reviewsCount;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
reviewsCount++;

// 5️⃣ store the new visit total into localStorage, key=reviewsCount-ls
localStorage.setItem("reviewsCount-ls", reviewsCount);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
