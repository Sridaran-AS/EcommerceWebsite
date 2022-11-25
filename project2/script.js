let cartIcon = document.querySelector("#cart-icon");
let car=document.querySelector(".car");
                            let closeCart=document.querySelector("#close-cart");
                            
                            cartIcon.onclick=()=>{
                                car.classList.add("active");
                            };
                            closeCart.onclick=()=>{
                                car.classList.remove("active");
                            };
                            function removeItems(event){
                                var result=confirm("Are you sure you want to delete the items?");
                                if(result==true){
                                var existing=event.target.parentNode.parentNode;
                                existing.remove();
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            }
                            function orderItems(event){
                                var result=confirm("Are you sure you want to place the order?");
                                if(result==true){
                                    var exists=event.target;
                                    console.log(exists);
                                    exists.remove();
                                    return true;
                                }
                                else{
                                    return false;
                                }
                            }
$('.thumb a').click(function(e){
                         e.preventDefault();
                         $('.main-img img').attr("src", $(this).attr("href"))
                        });
                    
                       document.querySelectorAll('.main-img img').forEach(image =>{
                           image.onclick = () =>{
                               document.querySelector('.popup').style.display = 'block';
                               document.querySelector('.popup img').src = image.getAttribute('src'); 
                           }
                       });
                       document.querySelector('.popup .close').onclick = () =>{
                           document.querySelector('.popup').style.display = 'none';
                       }
let img=document.querySelector('.ind');
                        let arr=['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg'];
                        let i=0;

                        function prev(){
                          if(i<=0) i=arr.length;
                          i--;
                          return setImg();
                        }
 const decrease= document.querySelector('.decrease'), increase=document.querySelector('.increase'),value=document.querySelector('.value');
                                    let a=0;
                                    increase.addEventListener("click",()=>{
                                        a++;
                                        value.innerText=a;
                                    });
                                    decrease.addEventListener("click",()=>{
                                        if(a>0)
                                        {
                                            a--;
                                        }
                                        value.innerText=a;
                                    });
const cou=document.querySelector('.cou');
                                    const v=document.querySelector('.v');
                                    const price=document.querySelector('.price');
                                    document.querySelector('.product').addEventListener('click',event =>{
                                            cou.innerHTML=value.innerText;
                                            v.innerHTML=value.innerText;
                                            price.innerHTML='$'+(value.innerText*125).toFixed(2);
                                        
                                    })
                        function nextf(){
                          if(i>=arr.length-1) i=-1;
                          i++;
                          return setImg();
                        }
                        function setImg(){
                          return img.setAttribute('src', 'images/'+arr[i]);
                        }