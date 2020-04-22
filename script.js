var xmlhttp = new XMLHttpRequest();
var url = "data.json"; //your filename
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    //we do something here
    console.log(data);
	if (document.getElementById('index')) {
      buildIndex(data);
    }

 else {
      buildItem(data);
    
    buildIndex(data);
	}
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();



function buildIndex(data){
	//do something here
	//for each row of data
	for(i=0; i<data.length; i++)


  {

	



    var item = document.createElement("li");
    item.classList.add('items');
    // item.classList.add(data[i].Genre);
    // item.classList.add(data[i].Instrument[0]);
    // item.classList.add(data[i].Mood);
    // item.classList.add(data[i].SpecialAttribute);
    
    var instrument = data[i].Instrument;
	for (j = 0; j < data[i].Instrument.length; j++){
 	 item.classList.add(data[i].Instrument[j]);
	};
    
    var genre = data[i].Genre;
	for (f = 0; f < data[i].Genre.length; f++){
 	 item.classList.add(data[i].Genre[f]);
	};

	var specAttribute = data[i].SpecialAttribute;
	for (y = 0; y < data[i].SpecialAttribute.length; y++){
 	 item.classList.add(data[i].SpecialAttribute[y]);
	};

	var effects = data[i].Fx;
	for (o = 0; o < data[i].Fx.length; o++){
 	 item.classList.add(data[i].Fx[o]);
	};

	var mood = data[i].Mood;
	for (q = 0; q < data[i].Mood.length; q++){
 	 item.classList.add(data[i].Mood[q]);
	};





var elem2 = document.createElement("img");
 //    // elem.src= 'assets/' + data.img;
    elem2.src= data[i].CoverArtUrl 


    
    
    



    var elem3 = document.createElement("audio");
    // elem2.src= 'assets/' + data.mp3;
    elem3.type = 'audio/mpeg'
    elem3.src=data[i].SongUrl
    elem3.controls = 'controls'




    var elem = document.createElement("a"); 
    elem.innerText = data[i].SongName;
    // elem.style.color = data[i].color;
    elem.href = "item.html?id=" + i;
    // elem.src = data[i].CoverArtUrl

    item.appendChild(elem);
    item.appendChild(elem2);
    item.appendChild(elem3)
    document.querySelector('.result').appendChild(item);
  }
}

function buildItem(data) {


}



function buildItem(data){
  //get URL parameter "id"
  var queryString = window.location.search; 
  var urlParams = new URLSearchParams(queryString);
  var id = parseInt(urlParams.get('id'));
  console.log('currently seeing item ' + id);



document.querySelector('h1').innerText = data[id].SongName;
  document.querySelector('h1').style.color = data[id].color;
  document.querySelector('.artist-name').innerText = data[id].ArtistName;
  document.querySelector('.album').innerText = data[id].AlbumName + ", " + data[id].Date;
  document.querySelector('.song-genre').innerText = data[id].Genre;
  document.querySelector('.audio-track').src = data[id].SongUrl
  document.querySelector('#cover-art-item').src = data[id].CoverArtUrl




var nextId, prevId;
  if (id == data.length - 1) {
    nextId = 0;
  }
  else {
    nextId = id + 1;
  }
  if (id == 0) {
    prevId = data.length - 1;
  }
  else {
    prevId = id - 1;
  }
var nextId = id + 1;
  var prevId = id - 1;
  document.querySelector('.next').href = "item.html?id=" + nextId;
  document.querySelector('.prev').href = "item.html?id=" + prevId;


}

function show(target){

var items = document.querySelectorAll('.items');
  for (i = 0; i < items.length; i++){
    items[i].style.display = "none";
  }
  var selected = document.querySelectorAll(target);
  for (i = 0; i < selected.length; i++){
    selected[i].style.display = "inline-block";
  }

 var filters = document.querySelectorAll('.filters');
  for (i = 0; i < filters.length; i++){
    filters[i].classList.remove('selected');
  }

  if (target !== ".items"){
    event.target.classList.add('selected');
  }
  else if (target !==".items") {
  	event[i].target.classList.remove('selected')
  }


}


//check selection is true/false class highlighted/exists?
//how to filter in javascript 

//gather highlighted strings inside array, array of strings

//var filteredHihat = data.filter(function(a) {return highlighted.includes(a)});

//highlighted is the name of string

//filter function 

// url = url.replace(/^\s+|\s+$/g, "");
