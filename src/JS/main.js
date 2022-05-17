var listAPI = "http://localhost:3000/ListFilm";
var listChair = "http://localhost:3000/listChair";
var listTime = "http://localhost:3000/listTime";
var listCombo = "http://localhost:3000/combo";

var arrChooseChair = [];
var filmName = "";
var idListChair = 0;
var totalPrice = 0;
const onShowDDL = () => {
    if(document.querySelector('.cinestar__dropdown__user').className.includes("showDDL")){
      document.querySelector('.cinestar__dropdown__user').classList.remove("showDDL");
    }
    else{
      document.querySelector('.cinestar__dropdown__user').classList.add("showDDL");
    }
  };
  document.body.onclick = () => {
    if(!document.querySelector('.cinestar__dropdown__user').className.includes("showDDL"))
    {
      document.querySelector('.cinestar__dropdown__user').classList.add("showDDL");
    }
  }
  var listItemSideBar = document.querySelectorAll(".cinestar__sidebar-item");
  for (var i = 0; i < listItemSideBar.length; i++) {
    listItemSideBar[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-sidebar");
    current[0].className = current[0].className.replace(" active-sidebar", "");
    this.className += " active-sidebar";
    });
  }
  var listViewContent = document.querySelectorAll(".cinestar__content__item");
  const goHomePage = () => {
    for(var i = 0; i < listViewContent.length; i++){
      if(listViewContent[i].className.includes("!block")){
        listViewContent[i].classList.remove("!block");
      }
    }
    document.getElementById("homepage").classList.add("!block");
  }
  const goPrice = () => {
    for(var i = 0; i < listViewContent.length; i++){
      if(listViewContent[i].className.includes("!block")){
        listViewContent[i].classList.remove("!block");
      }
    }
    document.getElementById("price").classList.add("!block");
  }
  const goTicket = () => {
    for(var i = 0; i < listViewContent.length; i++){
      if(listViewContent[i].className.includes("!block")){
        listViewContent[i].classList.remove("!block");
      }
    }
    document.getElementById("ticket").classList.add("!block");
  }
  const goNews = () => {
    for(var i = 0; i < listViewContent.length; i++){
      if(listViewContent[i].className.includes("!block")){
        listViewContent[i].classList.remove("!block");
      }
    }
    document.getElementById("news").classList.add("!block");
  }
  const goIntro = () => {
    for(var i = 0; i < listViewContent.length; i++){
      if(listViewContent[i].className.includes("!block")){
        listViewContent[i].classList.remove("!block");
      }
    }
    document.getElementById("intro").classList.add("!block");
  }


const getListFilm = async (url) => {
  const res = await fetch(url);
  var data= await res.json();
  showData(data);
  applySlider();
}
getListFilm(listAPI);
const applySlider = () => {
  $(document).ready(function(){
    $('.cinestar__listfilm').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed : 5000,
        prevArrow:"<button type='button' class='slick-prev pull-left h-[40px] text-[28px]'><i class='fa-solid fa-arrow-left-long'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right h-[40px] text-[28px]'><i class='fa-solid fa-arrow-right-long'></i></button>",
    }
    );
});
}
const showData = (data) => {
  for(let item of data){
    document.getElementById("listfilm").innerHTML += `
    <div class="cinestar__film__item" id="item-${item.id}">
      <div class="cinestar__film" onmouseover="handleHoverOver(${item.id})">
        <img src="${item.url}" alt=""  class="h-[340px] w-[235px] object-cover rounded-[20px]">
      </div>
      <div class="h-[340px] w-[235px] rounded-[20px] cinestar__film__overlay">
        
      </div>
      <div id="detail-${item.id}" class="cinestar__film__detail bg-yellow-400 h-full w-[400px] absolute bottom-0 left-[245px] p-[15px] rounded-tl-[30px] rounded-br-[30px]">
        <div class="cinestar__film__name w-full text-center mb-[12px] text-[24px] font-semibold">
          ${item.name}
        </div>
        <div class="cinestar__film__startdate flex items-center mb-[12px]">
          <div class="cinestar__film__nameField mr-[30px]">
            Khởi chiếu :
          </div>
          <div class="cinestar__film__field italic">
            ${item.startDate}
          </div>
        </div>
        <div class="cinestar__film__startdate flex items-center mb-[12px]">
          <div class="cinestar__film__nameField mr-[30px]">
            Thể loại :
          </div>
          <div class="cinestar__film__field italic">
            ${item.category}
          </div>
        </div>
        <div class="cinestar__film__startdate flex items-center mb-[12px]">
          <div class="cinestar__film__nameField mr-[30px]">
            Diễn viên :
          </div>
          <div class="cinestar__film__field italic textCustom">
            ${item.actor}
          </div>
        </div>
        <div class="cinestar__film__startdate flex items-center mb-[12px]">
          <div class="cinestar__film__nameField mr-[30px]">
            Đạo diễn :
          </div>
          <div class="cinestar__film__field italic">
            ${item.director}
          </div>
        </div>
        <div class="cinestar__film__desc break-words mb-[12px] textCustomDesc italic">
          ${item.description}
        </div>
        <div class="cinestar__film__footer flex items-center gap-x-[20px] justify-end">
          <div class="cinestar__film__footer--trailer flex gap-x-[4px] text-[20px] w-[100px] px-[10px] py-[5px] bg-[#444444] rounded-tl-[10px] rounded-br-[10px]">
            <div>
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div>
              <a href="${item.trailer}">Trailer</a>
            </div>
          </div>
          <div class="cinestar__film__footer--ticket text-[20px] w-[100px] px-[10px] py-[5px] text-center rounded-tl-[10px] rounded-br-[10px] bg-[#EE118B]">
            <div onclick="onClickShowTicket(${item.id})">
              Đặt Vé
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
var urlImg = '';
const onClickShowTicket = async (id) => {
  filmName = "";
  arrChooseChair = [];
  const res1 = await fetch(listAPI + "/" + id);
  var detail = await res1.json();
  filmName = detail.name;
  urlImg = detail.url;
  const res = await fetch(listChair);
  var data= await res.json();
  const arr = data.filter(item => item.filmId === id);

  const responsive = await fetch(listTime);
  var times = await responsive.json();
  

  document.getElementById("ticketModal").classList.add("!block");
  document.getElementById("detailImage").innerHTML = `
    <img src="${detail.url}" alt="" class="h-[450px] mt-[20px] ml-[20px] rounded-[10px]">
  `
  document.getElementById("detailName").innerHTML = `
    ${detail.name}
  `
  for(let item of times){
    for(let a of arr){
      if(item.id == a.timeId){
        document.getElementById("listTime").innerHTML += `
        <div class="modal__body__time-item h-[40px] w-[80px] rounded-[5px] bg-[#ccc] flex items-center justify-center" onclick="handleClickTime(${item.id},${detail.id})">
          ${item.time}
        </div>
        `
      }
    }
  }
}

const handleClickTime = async (timeId,detailId) => {
  arrChooseChair = [];
  document.getElementById("listChair").innerHTML = ``;
  document.getElementById("listChoose").innerHTML = ``;
  const res = await fetch(listChair);
  var data= await res.json();
  console.log(data);
  for(let item of data) {
    if(item.timeId == timeId && item.filmId == detailId){
      idListChair = item.id;
      // document.querySelector(".modal__body__listchair").classList.add("!block")
      for(let i of item.list){
        if(i.category == 'vip' && i.isActive != true){
          document.getElementById("listChair").innerHTML += `
            <div id="chair-${i.id}" class="h-[40px] w-[40px] text-[#FFBB00] cursor-pointer flex items-center justify-center text-[24px]" onclick="handleChooseChair(${i.id})">
              <i class="fa-solid fa-couch"></i>
            </div>
          `
        }
        else if(i.isActive == true) {
          document.getElementById("listChair").innerHTML += `
            <div id="chair-${i.id}" class="h-[40px] w-[40px] text-[red] cursor-not-allowed flex items-center justify-center text-[24px]">
              <i class="fa-solid fa-couch"></i>
            </div>
          `
        }
        else{
          document.getElementById("listChair").innerHTML += `
            <div id="chair-${i.id}" name="${i.name}" class="h-[40px] w-[40px] cursor-pointer flex items-center justify-center text-[24px]" onclick="handleChooseChair(${i.id})">
              <i class="fa-solid fa-couch"></i>
            </div>
          `
        }
      }
    }
  }
}
const handleHoverOver = (id) => {
  const arr = document.querySelectorAll(".cinestar__film__detail");
  const element = document.getElementById(`item-${id}`);
  let {left , right} = element.getBoundingClientRect();
  arr.forEach((e) => {
    if(e.className.includes("!left-[-400px]")){
      e.classList.remove("!left-[-400px]");
    }
  });
  if(left + 650 > window.innerWidth)
  {
    document.getElementById(`detail-${id}`).classList.add("!left-[-400px]");
  }
}
const closeModalConfirm = () => {
  totalPrice = 0;
  comboValue ='Không',
  urlImg = '',
  arrChooseChair = [];
  idListChair = 0;
  document.getElementById("ticketModal").classList.remove("!block");
  document.getElementById("listTime").innerHTML = ``;
  document.getElementById("listChair").innerHTML = ``;
  document.getElementById("listChoose").innerHTML = ``;
  document.getElementById("detailBefore").classList.remove("hidden");
  document.getElementById("detailAfter").classList.remove("!block");
  document.getElementById("tableChoose").innerHTML = ``;
  document.getElementById("priceCombo").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
  document.getElementById("combo").value = 0;
  document.getElementById("total").innerHTML = ``;
  document.getElementById("confirm").classList.remove("!block");
}
const closeModal = () => {
  totalPrice = 0,
  comboValue = 'Không',
  urlImg = '',
  arrChooseChair = [];
  idListChair = 0;
  document.getElementById("ticketModal").classList.remove("!block");
  document.getElementById("listTime").innerHTML = ``;
  document.getElementById("listChair").innerHTML = ``;
  document.getElementById("listChoose").innerHTML = ``;
  document.getElementById("detailBefore").classList.remove("hidden");
  document.getElementById("detailAfter").classList.remove("!block");
  document.getElementById("tableChoose").innerHTML = ``;
  document.getElementById("priceCombo").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
  document.getElementById("combo").value = 0;
  document.getElementById("total").innerHTML = ``;
}
const handleChooseChair = async (id) => {
  const res = await fetch(listChair);
  var data= await res.json();
  let name = '';
  let category = '';
  let price = 0;
  for(let item of data){
    for(let i of item.list){
      if(i.id === id){
        name = i.name;
        category = i.category;
        price = i.price;
      }
    }
  }
  let obj = {
    id : id,
    name : name,
    category : category,
    price :price
  }
  document.getElementById("listChoose").innerHTML = ``;
  if(arrChooseChair.length === 0){
    arrChooseChair.push(obj);
    document.getElementById(`chair-${id}`).classList.add("!text-[#208DEC]")
  }
  else{
    let count = 0;
    for(let i = 0 ; i < arrChooseChair.length ; i++){
      if(arrChooseChair[i].id === id){
        count = 0;
        arrChooseChair.splice(i,1);
        document.getElementById(`chair-${id}`).classList.remove("!text-[#208DEC]")
      }
      else{
        count++;
      }
    }
    if(count !== 0){
      arrChooseChair.push(obj);
      document.getElementById(`chair-${id}`).classList.add("!text-[#208DEC]")
    }
  }
  for(let item of arrChooseChair){
    if(item.category == 'vip'){
      document.getElementById("listChoose").innerHTML += `
        <div class="ticket__choose__item w-[80px] h-[50px] bg-[#FFFFFF] rounded-[5px] flex flex-col items-center justify-center font-bold">
          <div class="id__ticket-choose">
            ${item.name}
          </div>
          <div class="price__ticket-choose text-[#EE118B]">
            ${item.price}<sup>đ</sup>
          </div>
        </div>
      `;
    }
    else{
      document.getElementById("listChoose").innerHTML += `
        <div class="ticket__choose__item w-[80px] h-[50px] bg-[#FFFFFF] rounded-[5px] flex flex-col items-center justify-center font-bold">
          <div class="id__ticket-choose">
            ${item.name}
          </div>
          <div class="price__ticket-choose text-[#EE118B]">
            ${item.price}<sup>đ</sup>
          </div>
        </div>
      `;
    }
  }
}

const handleClickBefore = () => {
  if(arrChooseChair.length > 0){
    totalPrice = 0;
    for(let i of arrChooseChair){
      totalPrice += i.price;
    }
    document.getElementById("detailBefore").classList.add("hidden");
    document.getElementById("detailAfter").classList.add("!block");
    for(let item of arrChooseChair){
      document.getElementById("tableChoose").innerHTML += `
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            ${filmName}
        </th>
        <td class="px-6 py-4">
            ${item.name}
        </td>
        <td class="px-6 py-4">
            ${item.category}
        </td>
        <td class="px-6 py-4">
            ${item.price}
        </td>
      </tr>
      `
    }
    document.getElementById("total").innerHTML = `
      <div class="block mb-2 text-[20px]  text-gray-900 dark:text-gray-400 font-bold">
        <h1>Tổng tiền : ${totalPrice}<sup>đ</sup></h1>
      </div>
    `
  }
  else{
    document.getElementById("detailBefore").classList.remove("hidden");
    document.getElementById("detailAfter").classList.remove("!block");
  }
}
var priceCombo = 0;
var comboValue = 'Không';
const pickCombo = async () => {
  const res = await fetch(listCombo);
  var data= await res.json();
  var x = document.getElementById("combo").value;
  if(x == 1){
    comboValue = 'Bắp Rang Bơ x Pepsi';
  }
  else if (x == 2){
    comboValue = 'Bắp Pho Mai x Pepsi';
  }
  else if (x==3){
    comboValue = 'Khoai Lang Lắc  x Pepsi';
  }
  else {
    comboValue = 'Không';
  }
  totalPrice = 0;
  for(let item of data){
    if(item.id == x){
      priceCombo = item.price;
    }
  }
  for(let i of arrChooseChair){
    totalPrice += i.price;
  }
  document.getElementById("priceCombo").innerHTML = `
    <div class="block mb-2 text-[20px]  text-gray-900 dark:text-gray-400 font-bold">
      Giá :
    </div>
    <div class="combo__price__input bg-[#FFFFFF] w-[350px] h-[35px] rounded-[5px] flex items-center pl-[10px]">
      <p>${priceCombo}</p>
    </div>
  `
  document.getElementById("total").innerHTML = `
    <div class="block mb-2 text-[20px]  text-gray-900 dark:text-gray-400 font-bold">
      <h1>Tổng tiền : ${totalPrice + priceCombo}<sup>đ</sup></h1>
    </div>
  `
}

const backToDetail = () =>{
  totalPrice = 0,
  comboValue = 'Không',
  urlImg = '',
  idListChair = 0;
  arrChooseChair = [];
  document.getElementById("detailBefore").classList.remove("hidden");
  document.getElementById("detailAfter").classList.remove("!block");
  document.getElementById("listChair").innerHTML = ``;
  document.getElementById("listChoose").innerHTML = ``;
  document.getElementById("tableChoose").innerHTML = ``;
  document.getElementById("priceCombo").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
  document.getElementById("combo").value = 0;
  document.getElementById("total").innerHTML = ``;
}

const showConfirm = () => {
  document.getElementById("ticketModal").classList.remove("!block");
  document.getElementById("confirm").classList.add("!block");
}


const handleConfirm = async  () => {
  const res = await fetch(listChair + "/" + idListChair );
  const data = await res.json();
  let arrTemp = data.list;
  let nameListChair = '';
  for(let item of arrTemp){
    for(let choose of arrChooseChair){
      if(item.id === choose.id){
        nameListChair += choose.name + ',';
      }
    }
  }
  nameListChair = nameListChair.slice(0,-1);
  document.getElementById("infomationTicket").classList.add("!block");
  document.getElementById("confirm").classList.remove("!block");

  document.getElementById("imgInfo").innerHTML = `
    <img src="${urlImg}" alt="" class="h-[450px] mt-[20px] ml-[20px] mb-[20px] rounded-[10px]">
  `
  document.getElementById("ticketInfo").innerHTML = `
            <div>
              Ghế Ngồi : x${arrChooseChair.length} (${nameListChair})
            </div>
            <div>
              Combo : ${comboValue}
            </div>
            <div>
              Thời gian phim : 120 phút
            </div>
            <div>
              Tổng tiền : ${totalPrice + priceCombo} <sup>đ</sup>
            </div>
  `
  // const response = await fetch(listChair + "/" + idListChair, {
  //     method: 'PUT', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(putData)
  //   });
  // const dataAfter = await response.json();
}

const handleGoBack = async () => {
  const res = await fetch(listChair + "/" + idListChair );
  const data = await res.json();
  let arrTemp = data.list;
  for(let item of arrTemp){
    for(let choose of arrChooseChair){
      if(item.id === choose.id){
        item.id = choose.id;
        item.category = choose.category;
        item.isActive = true;
        item.name = choose.name;
        item.price = choose.price;
      }
    }
  }
  const putData = {
    id : data.id,
    filmId : data.filmId,
    timeId : data.timeId,
    list : arrTemp
  }
  const response = await fetch(listChair + "/" + idListChair, {
       method: 'PUT', 
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(putData)
      });
   const dataAfter = await response.json();
}