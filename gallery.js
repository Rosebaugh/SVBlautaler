function loadGallery(){
    console.log('test 1');
    fetch("https://docs.google.com/spreadsheets/d/1FuFIqC-MCUkDuEvUdVnW-sywhTJJZp6Cb8JLNj6aE6s/gviz/tq?tqx=out:json&tq&gid=0")
        .then(response => response.text())
        .then(text => JSON.parse(text.substring(47).slice(0,-2)))
        .then(json => {
            console.log('Response:', json);
            loadImages(json);
        })
        .catch(error => console.error('Error:', error));
    console.log('test 2');
}

function loadImages(json){
    var rows = json.table.rows;
    var container = document.getElementById('images');
    var thumbnail = "https://drive.google.com/thumbnail?id="
    var source = "https://drive.google.com/file/d/"
    
    rows.forEach(row => {
        if(row?.c?.length < 2){
            return;
        }
        
        var image = row.c[1].v;
        
        if(image == null){
            return;
        }
        
        var imageID = image.replace(source, "").replace("/view", "");
           
        var newImage = document.createElement("figure");
        var pic = document.createElement("img");
        pic.setAttribute("src", thumbnail + imageID);
        pic.setAttribute("onclick", "window.open('" + image + "')");
        var caption = document.createElement("figcaption");
        caption.innerHTML = row?.c[0]?.v ?? "";
        newImage.appendChild(pic);
        newImage.appendChild(caption);
        
        container.appendChild(newImage);
    })
}