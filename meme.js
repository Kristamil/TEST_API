fetch("https://meme-api.herokuapp.com/gimme")
.then(res=>res.json())
    .then(data => {
        let postLink=data.postLink;
        let subb=data.subreddit;
        let Title=data.title;
        let URL=data.url;
        let Nsfw=data.nsfw;
        let Spoil=data.spoiler;
        let Author=data.author;
        let UPS=data.ups;
        
        for (let i = 0; i < postLink.length; i++)
        {
            let post=postLink;
            
            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
            tableRow.innerHTML = '<td>' + post+ '</td>'+'<td>' + subb+ '</td>'+'<td>' + Title+ '</td>'+'<td>' + URL+ '</td>'+'<td>' + Nsfw+ '</td>'+'<td>' + Spoil+ '</td>'+'<td>' + Author+ '</td>'+'<td>' + UPS+ '</td>';
            table.appendChild(tableRow);
        }
        
    });
   function prev()
   {
        fetch("https://meme-api.herokuapp.com/gimme")
        .then(res=>res.json())
            .then(data => {
    
        let Preview = data.preview;


        for (let i = 0; i < Preview.length; i++)
        {
            
            let url = Preview[i];

            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
            tableRow.innerHTML = '<td>' + "<img src='" + url + "' class='image'>"+'</td>' ;
            table.appendChild(tableRow);
        }
        

    })
}

            