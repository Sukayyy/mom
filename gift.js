
var to = 'My Mom!';
var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';
var gift_image_url = 'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.18169-9/13769514_1714683638792437_1415862937633831487_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=-LDhqby-gBUAX8cOPdw&_nc_ht=scontent.fhan17-1.fna&oh=00_AfA_ppNy7CwURuON5FXV03IAIw1gl-3V0CHf98oC9tZ5wg&oe=642F90B0';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

