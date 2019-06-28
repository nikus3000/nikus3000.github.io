
function createModal(myModal, myImg, img0X, close){
    var modal = document.getElementById(myModal);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(myImg);
    var modalImg = document.getElementById(img0X);
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementById(close);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    } 
}

createModal("myModal1","myImg1","img01","close1");
createModal("myModal2","myImg2","img02","close2");
createModal("myModal3","myImg3","img03","close3");
createModal("myModal4","myImg4","img04","close4");
createModal("myModal5","myImg5","img05","close5");
createModal("myModal6","myImg6","img06","close6");
createModal("myModal7","myImg7","img07","close7");
createModal("myModal8","myImg8","img08","close8");
createModal("myModal9","myImg9","img09","close9");
createModal("myModal10","myImg10","img10","close10");
createModal("myModal11","myImg11","img11","close11");
createModal("myModal12","myImg12","img12","close12");
