var ProductNameInput=document.getElementById('ProductName');
var ProductPriInput=document.getElementById('ProductPri');
var ProductCateInput=document.getElementById('ProductCate');
var ProductDescInput=document.getElementById('productDesc');
var searchInput=document.getElementById('searchinp');
var Inputs=document.getElementsByClassName('inputs')
var AddBnt=document.getElementById('addBnt');
var currantindex=0;
var products=[];
if(JSON.parse(localStorage.getItem('productlist'))!=null)
{
products=JSON.parse(localStorage.getItem('productlist'))
displaydata()
}

AddBnt.onclick=function () {
  if (AddBnt.innerHTML=='Add Product') {
    addproduct(); 
  } 
  else {
   updateProdact()
  }
 displaydata();
 ResetForm()
}

function addproduct() {
    var product={
        name:ProductNameInput.value,
        price:ProductPriInput.value,
        category:ProductCateInput.value,
        describtion:ProductDescInput.value
      }
      products.push (product)
      localStorage.setItem('productlist',JSON.stringify(products))
}
function displaydata(){

    var cartona='';
    for (let i=0;i<products.length;i++) {
      // if(products[i].name.tolowerCase().includes(searchtext.tolowerCase())){}
       cartona+=
       `<tr>
       <td>${products[i].name}</td>
       <td>${products[i].price}</td>
       <td>${products[i].category}</td>
       <td>${products[i].describtion}</td>
       <td> <button onclick="getProductInfo(${i})"   class="btn btn-outline-warning">update</button></td>
       <td> <button onclick="deletproduct(${i})"  class="btn btn-outline-danger">delet</button></td>
       </tr>`
    }
  
    document.getElementById('tableBody').innerHTML=cartona
}


function ResetForm() {
for (var i=0 ;i<Inputs.length;i++) {
  Inputs[i].value=''
}
}
function deletproduct(e){
    products.splice(e,1)
    displaydata()
    localStorage.setItem('productlist',JSON.stringify(products))
}
function getProductInfo(e) {
  currantindex=e;
  var cartonaproduct=products[e];
  ProductNameInput.value=cartonaproduct.name
  ProductPriInput.value=cartonaproduct.price
  ProductCateInput.value=cartonaproduct.category
  ProductDescInput.value=cartonaproduct.describtion
  AddBnt.innerHTML=('update product')
}
function updateProdact(){
  var product={
    name:ProductNameInput.value,
    price:ProductPriInput.value,
    category:ProductCateInput.value,
    describtion:ProductDescInput.value
  }
  products[currantindex]=product;
  localStorage.setItem('productlist',JSON.stringify(products))
  AddBnt.innerHTML='Add Product'

}
function search(searchtext){
  
  var cartona='';
  for (let i=0;i<products.length;i++) {
    if(products[i].name.toLowerCase().includes(searchtext.toLowerCase())){
      cartona+=
      `<tr>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td>${products[i].describtion}</td>
      <td> <button onclick="getProductInfo(${i})"   class="btn btn-outline-warning">update</button></td>
      <td> <button onclick="deletproduct(${i})"  class="btn btn-outline-danger">delet</button></td>
      </tr>`
    }
    // if(products[i].name.tolowerCase().includes(searchtext.tolowerCase())){}
  }

  document.getElementById('tableBody').innerHTML=cartona

}
