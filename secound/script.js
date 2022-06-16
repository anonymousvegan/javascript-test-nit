const getMemes = async () => {
  let address = "https://api.imgflip.com/get_memes";
  try {
    const response = await fetch(address);
    const result = await response.json();
    return result.data.memes;
  } 
  catch (error) {
    console.log(error);
  }
};

const contentDiv = document.getElementById("content");

const createCardNode = (name, url) => {
  return `
    <div class="card">
      <div class="card-body">
        <h2 class="card-text"> ${name} </h2>
        <img src ="${url}"  alt ="meme"/>
      </div>
</div>`;
};


getMemes().then( value => {
  value.forEach( meme =>  {
    let div = document.createElement("DIV");
    div.innerHTML =  createCardNode(meme.name, meme.url);
    contentDiv.appendChild(div);
  })
})