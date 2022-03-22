fetch(
	'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init'
)
	.then((data) => {
		//console.log(data);
		return data.json();
	})
	.then((completedata) => {
		//console.log(completedata.list[0].name);

		let data1 = '';
		completedata.list.map((values) => {
			if (values.categories)
				data1 += `<div  class="card"   >
                
            <a class="click" href="${values.url}">
            
            <img  class="images" src=${values.thumbnail[0].url} alt="">
            <h1 class="title">${values.name}</h1>
            <p>${values.branding}</p>
			<p class="category">  ${values.categories}</p>
            
            </a>
            
        </div>`;
			else
				data1 += `<div  class="card"   >
            <a class="click" href="${values.url}">
            <img  class="images" src=${values.thumbnail[0].url} alt="">
            <h1 class="title">${values.name}</h1>
            <p>${values.branding}</p>
			
            
            </a>
            
        </div>`;
		});
		document.getElementById('cards').innerHTML = data1;
	})
	.catch((err) => {
		console.log(err);
	});
