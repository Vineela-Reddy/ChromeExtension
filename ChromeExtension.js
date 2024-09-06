//chrome://extensions/
let myleads = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
let inputbtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsfromlocalStorage = JSON.parse(localStorage.getItem("myleads"))
const tabbtn = document.getElementById("tab-btn")
const tab = [{ url: "https://www.google.com" }]
console.log(leadsfromlocalStorage)
if (leadsfromlocalStorage) {
    myleads = leadsfromlocalStorage
    render(myleads)
}
deleteBtn.addEventListener('click', function () {
    localStorage.clear()
    myleads = []
    render(myleads)
})
tabbtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tab[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        render(myleads)

    })

})
inputbtn.addEventListener('click', function () {
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)

})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myleads[i]
        // ulEl.append(li) 
        // listItems += "<li><a target='_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
        listItems += `<li>
        <a target='_blank' href=" ${leads[i]}">  ${leads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems

}




