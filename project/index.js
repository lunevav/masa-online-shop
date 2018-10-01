document.getElementsByTagName('input').value = "";

class Shoe{
    constructor(name, list){
        this.name=name;
        this.list = list;
      

    }

    displayShoe(inputValue = ""){
        var divContentWrapper = document.getElementById('wrapper1');
        var myNode = document.getElementById('wrapper1');
        console.log(myNode)
        console.log(inputValue)

        while (myNode.firstChild) 
            myNode.removeChild(myNode.firstChild);

        this.list && this.list.length > 0 ? this.list
        .filter((item) => item.name
            .toLowerCase()
            .indexOf(inputValue) > -1)
        .map((item, index) => {

            //console.log(inputValue)
            /// REMOVE ALL CHILDS
            
            // console.log(index);
            // console.log(item);
            // console.log(item.name);
            // console.log(item.img);  
            var divContentContainer = document.createElement('div');
            var divContentContainerA = document.createElement('a');
            var divContentContainerAImg = document.createElement('img');
            var divContentContainerP = document.createElement('p');
            divContentContainer.id = item.name;
            divContentContainer.className = 'content-container';
            divContentContainerA.href = item.link;
            divContentContainerAImg.src = item.img;
            divContentContainerP.innerHTML = item.name;
            divContentWrapper.appendChild(divContentContainer);
            divContentContainer.appendChild(divContentContainerA);
            divContentContainer.appendChild(divContentContainerP);
            divContentContainerA.appendChild(divContentContainerAImg);
        }) : [];
    }
}

class Item  {
    constructor(name, price, link, img) {
        this.name = name;
        this.price = price;
        this.link = link;
        this.img = img;
    }   
}


// var shoe1 = new Shoe("Adidas", 2000, "goods1.html", "pictures/pic1.jpg");
// var shoe2 = new Shoe("Nike", 3000, "goods2.html", "pictures/pic2.jpg");
// var shoe3 = new Shoe("Asics", 4000, "goods3.html", "pictures/pic3.jpg");
// var shoe4 = new Shoe("New Balance", 5000, "goods4.html", "pictures/pic4.jpg");

var MY_SHOES = [
    new Item("Adidas", 2000, "goods1.html", "pictures/pic1.jpg"),
    new Item("Nike", 3000, "goods2.html", "pictures/pic2.jpg"),
    new Item("Asics", 4000, "goods3.html", "pictures/pic3.jpg"),
    new Item("New Balance", 5000, "goods4.html", "pictures/pic4.jpg")
]

// for (var i = 0; i < 4; i++) {
//     MY_SHOES.push(new Item("Adidas", 200, "asdasd",  "pictures/pic1.jpg"))
// }



var shoe = new Shoe("Shop", MY_SHOES)
shoe.displayShoe()

function test() {
    console.log('asdasd')
}