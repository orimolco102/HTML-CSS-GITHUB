const gridcont = document.getElementById("gc")


for(let i = 1; i<=40; i++){
gridcont.innerHTML += `
    <div class="griditems">
      <p>Git Images</p>
      <img src="https://picsum.photos/350/250?random=${i}">
    </div>
`
}