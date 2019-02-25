const btn=document.querySelector('.btn');

const item=document.querySelector('.item');

const img=document.querySelector('#img');


function getJokes( url ) {
    

const ajax=new XMLHttpRequest();

ajax.open('GET', url, true);

ajax.onload=function( ) {

    if (this.status==200) {

        const data=JSON.parse (this.responseText);
        console.log(data);
        

        item.textContent=data.value;
        img.src=data.icon_url;


        // const {value:Jokes, icon_url:image}=data;
        
        
    } else {

        console.log(this.responseText);
        
        
    };
    
};

ajax.onerror=function( ) {

    console.log("there is some error!");
    
    
}

ajax.send( );

};


btn.addEventListener('click', function( ) {

    getJokes('https://api.chucknorris.io/jokes/random');          
            
});

