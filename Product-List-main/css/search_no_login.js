//Search
var arrayOfProduct = [
    {
    id: 1,
    name: 'Indonesia Coffee',
    price: '$30.00',
    priceCurrent:30,
    image: './img/product-img-10.png',
    link:'./html/Detail_ProductList.html',
    type:1
    },
    {
    id: 2,
    name: 'FRENCH PRESS',
    price: '$23.99',
    priceCurrent:23,
    image: './img/product-img-11.png',
    link: './html/Detail_FrenchPress.html',
    type:2
    },
    {
    id: 3,
    name: 'KENYA COFFEE',
    price: '$18.00',
    priceCurrent:18,
    image: './img/productList-img-3.png',
    link: './html/Detail_KenyaCoffee.html',
    type:3
    },
    {
    id: 4,
    name: 'DOLCE GUSTO',
    price: '$12.00',
    priceCurrent:12,
    image: './img/backgroundCopy_1.png',
    link: './html/Detail_DolceGusto.html',
    type:4
    },
    {
    id: 5,
    name: 'Columbia Coffee',
    price: '$21.00',
    priceCurrent:21,
    image: './img/productList-img-5.png',
    link:'./html/Detai_ColumbiaCoffee.html',
    type:3
    },
    {
    id: 6,
    name: 'Coffee Kettle',
    price: '$90.00',
    priceCurrent:90,
    image: './img/ProductList-img-6.png',
    link:'./html/Detail_CoffeeKettle.html',
    type:2
    },
    {
    id: 7,
    name: 'Measuring Coffee',
    price: '$16.00',
    priceCurrent:16,
    image: './img/ProductList-img-MeasuringCup.png',
    link:'./Detail_MeasuringCup.html',
    type:4
    },
    {
    id: 8,
    name: 'Guatemala Coffee',
    price: '$25.00',
    priceCurrent:25,
    image: './img/product-img-8.png',
    link:'./html/Detail_Guatemala.html',
    type:1
    },
    {
    id: 9,
    name: 'Filter handle',
    price: '$80.00',
    priceCurrent:80,
    image: './img/ProductList-img-9.png',
    link:'./html/Detail_FilterHandle.html',
    type:2,
    }
    ]
    var arrayTotalOfProduct = [
        {
        id: 1,
        name: 'ETHIOPIA COFFEE',
        price: '$15.99',
        priceCurrent:15,
        image: './img/productList-img-1.png',
        link:'./html/Detail_ProductList.html',
        type:1
        },
        {
        id: 2,
        name: 'FRENCH PRESS',
        price: '$23.99',
        priceCurrent:23,
        image: './img/productList-img-21.png',
        link: './html/Detail_FrenchPress.html',
        type:4
        },
        {
        id: 3,
        name: 'KENYA COFFEE',
        price: '$18.00',
        priceCurrent:18,
        image: './img/productList-img-3.png',
        link: './html/Detail_KenyaCoffee.html',
        type:3
        },
        {
        id: 4,
        name: 'DOLCE GUSTO',
        price: '$12.00',
        priceCurrent:12,
        image: './img/backgroundCopy_1.png',
        link: './html/Detail_DolceGusto.html',
        type:4
        },
        {
        id: 5,
        name: 'Columbia Coffee',
        price: '$21.00',
        priceCurrent:21,
        image: './img/productList-img-5.png',
        link:'./html/Detai_ColumbiaCoffee.html',
        type:6
        },
        {
        id: 6,
        name: 'Coffee Kettle',
        price: '$90.00',
        priceCurrent:90,
        image: './img/ProductList-img-6.png',
        link:'./html/Detail_CoffeeKettle.html',
        type:1
        },
        {
        id: 7,
        name: 'Espresso Machine',
        price: '$600.00',
        priceCurrent:600,
        image: './img/ProductList-img-7.png',
        link:'./html/Detail_EspressoMachine.html',
        type:5
        },
        {
        id: 8,
        name: 'Guatemala Coffee',
        price: '$25.00',
        priceCurrent:25,
        image: './img/product-img-8.png',
        link:'./html/Detail_Guatemala.html',
        type:3
        },
        {
        id: 9,
        name: 'Filter handle',
        price: '$80.00',
        priceCurrent:80,
        image: './img/ProductList-img-9.png',
        link:'./html/Detail_FilterHandle.html',
        type:4
        },
        {
        id: 10,
        name: 'Indonesia Coffee',
        price: '$30.00',
        priceCurrent: 30,
        image: './img/product-img-10.png',
        link: './Detail_IndonesiaCoffee.html',
        type: 3
        },
        {
        id: 11,
        name: 'Brazil Coffee',
        price: '$35.00',
        priceCurrent: 35,
        image: './img/product-img-11.png',
        link: './Detail_BrazilCoffee.html',
        type: 2
        },
        {
        id: 12,
        name: 'Mental Cup',
        price: '$23.00',
        priceCurrent: 23,
        image: './img/ProductList-img-MetalCup.png',
        link: './Detai_MeatlCup.html',
        type: 5
        },
        {
        id: 13,
        name: 'Dispensing Tray',
        price: '$30.00',
        priceCurrent: 30,
        image: './img/ProductList-img-DespensingTray.png',
        link: './Detail_DispensingTray.html',
        type: 1
        },
        {
        id: 14,
        name: 'Measuring Cup',
        price: '$16.00',
        priceCurrent: 16,
        image: './img/ProductList-img-MeasuringCup.png',
        link: './Detail_MeasuringCup.html',
        type: 3
        },
        {
        id: 15,
        name: 'Ceramic Cup',
        price: '$37.00',
        priceCurrent: 37,
        image: './img/Productlist-img-CeramicCup.png',
        link: './Detail_CeramicCup.html',
        type: 4
        },
        {
        id: 16,
        name: 'Coffee Capsule',
        price: '$12.00',
        priceCurrent: 12,
        image: './img/productList-img-CoffeeCapsule.png',
        link: './Detail_CoffeeCapsule.html',
        type: 6
        }
        ]
    
    //Lấy những id của product có tên trùng với tên nhập vào ô input
    var arrId = [];
    var inputvalue = document.querySelector('.search__input');
    var BtnSearch = document.querySelector('.price-filter');
    var productList = document.querySelector('.main-content');
    var valueProduct;
    var priceInput = document.querySelectorAll("#squaredcheck");
    var ValuePrice =[];
    function getPriceInput(priceInput,ValuePrice)
    {
        for (var i = 0; i<priceInput.length;i++)
        {
            ValuePrice.push(parseInt(priceInput[i].value));
        }
        console.log(ValuePrice)
    }
    
    function CheckProduct()
    {
        if(inputvalue.value == '')
        {
            arrayTotalOfProduct.forEach(function(idItem)
            {
                arrId.push(idItem.id)
            })
        }
        else
        {
            arrayTotalOfProduct.forEach(function(item)
            {
                if(item.name.toUpperCase().indexOf(inputvalue.value.toUpperCase()) > -1 )
                {
                    arrId.push(item.id)
                }
            })
        }
        checkOptionPrice(arrId,ValuePrice,arrayTotalOfProduct);
        checkOptionTypes(arrId,valueProduct,arrayTotalOfProduct);
    }
    function checkOptionTypes(arr,optionType,object)
    {
    
        var idWrong =[];
        if(optionType)
        {
            arr.forEach((item,index)=> {
                if(object[item-1].type != optionType)
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
        }
        else
            return;
        
    }
    function checkOptionPrice(arr,optionPrice,object)
    {
        getPriceInput(priceInput,ValuePrice);
        var idWrong =[];
        if(optionPrice.length != 0)
        {
            
           if(isNaN(optionPrice[0]) && optionPrice[1])
           {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent > optionPrice[1])
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
           }
           else if(isNaN(optionPrice[1]) && optionPrice[0])
           {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent < optionPrice[0])
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
           }
           else
           {
            arr.forEach((item,index)=> {
                if(object[item-1].priceCurrent < optionPrice[0] || object[item-1].priceCurrent > optionPrice[1])
                {
                    idWrong.push(index)
                }
            })
            for(let i = idWrong.length-1;i>=0;i--)
            {
                arr.splice(idWrong[i],1);
            }
           }
        }
        else
            return;
        
    }
    function clearArr(arrId)
    {
        arrId.splice(0,arrId.length)
    }
   //Nhấp nút filter thì bắt đầu render ra
    BtnSearch.onclick = () => {
       //reset lại vòng lặp mỗi lần click
        clearArr(arrId);
        clearArr(ValuePrice);
        CheckProduct();
       var htmls=[];
       var value;
       if(arrId.length == 0)
       {
            productList.innerHTML = `<div class="col-lg-12 no-find"> Couldn't find your product </div>`
            document.querySelector('.body__page-number-list').display ='none';
       }
       else
       {
       arrId.forEach((item)=>
       {
            arrayTotalOfProduct.forEach((product)=>{
               
                if(item == product.id)
                {
                    
                    value =
                    `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a class="body__product-img--modal-link">
                                <div class="body__product-button--modal" onclick="blockModal()">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product.name}</h2>
                        <h3 class="body__product-price">${product.price}</h3>
                    </div>
                </div>
               
                    `
                    htmls.push(value)
                }
            })
       })
        productList.innerHTML = htmls.join('')
        document.querySelector('.body__page-number-list').style.display ='none';
    }

    }
    //Bắt buộc phải đăng nhập mới đc add hàng
    
    function blockModal()
    {
        document.querySelector('.modal-login').style.display='block';
    }
    function closeModal()
    {
        document.querySelector('.js-close').onclick = () =>
        {
            document.querySelector('.modal-login').style.display='none';
        }
    }
   


    //hàm để render lại sản phẩm ban đầu
   function RenderFirst()
   {
    var firstpage =arrayOfProduct.map(function(product1)
    {
        return  `
                    <div class="body__product col-lg-4" data-aos="fade-up">
                    <div class="body__product-img-content">
                        <img src="${product1.image}" alt="Product image" class="body__product-img">
                        <div class="body__product-img--modal">
                            <a class="body__product-img--modal-link">
                                <div class="body__product-button--modal" onclick="blockModal()">
                                    <h2 class="body__product-button-text--modal">Add to cart</h2>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    <div class="body__product-text"> 
                        <h2 class="body__product-name">${product1.name}</h2>
                        <h3 class="body__product-price">${product1.price}</h3>
                    </div>
                </div>
               
                    `
    })
    productList.innerHTML = firstpage.join('');
   }
   
    //clear option
    var option_product = document.querySelectorAll('.phanloai');
    ClearOption();
    function ClearOption()
    {
        for(let i=0;i<priceInput.length;i++)
        priceInput[i].value = '';
        for(let i=0;i<option_product.length;i++)
            option_product[i].checked = false;
        inputvalue.value='';
        RenderFirst();
        document.querySelector('.body__page-number-list').style.display ='block';
    }
   
    function getOptionTypes()
    {
        
        for(let i=0;i<option_product.length;i++)
        {
        option_product[i].onclick = ()=>
        {
            valueProduct = parseInt(option_product[i].value);
        }
        }
    }
    // Chạy hàm lấy option type
    getOptionTypes();

    function setMin()
    {
        priceInput[1].min = priceInput[0].value;

    }