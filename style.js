
document.getElementById('searchButton').addEventListener('click',function(){
    const inputBox =document.getElementById('inputBox').value;
    // console.log(inputBox)
    fetch('https://api.lyrics.ovh/suggest/song-name?fbclid=IwAR3vkGkUOcX7iLoIzBggIWz0bURypvI0RbMGUgltJhj1lpbl9w34TaNxvEc')
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
        const user =data.data[0];
        const name =user.title;
        const songNames = `${name.title}`
        console.log(songNames)
        document.getElementById('lyricSongsShow').innerText=songNames
        // let songTitle = data.data.map(inputBox => inputBox.title);
        // console.log(songTitle)
        // for (let i = 0; i <songTitle.length; i++) {
        //     const title = songTitle[i];
        //     console.log(title)
        //     const li = document.createElement("li");
        //     li.innerText =title;
        //     const div =document.getElementById('lyricSongsShow');
        //     div.appendChild('li');


            
        // }
    })
})