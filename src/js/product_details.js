$(document).on('mouseover','#tools_box1',function(){
    $('#tools_message').show()
    $(document).on('mouseleave','#tools_box1',function(){
        $('#tools_message').hide()
    })
})

$(document).on('mouseover','#tools_message',function(){
    $('#tools_message').show()
    $(document).on('mouseleave','#tools_message',function(){
        $('#tools_message').hide()
    })
})

$(document).on('mouseover','#nav_line_box',function(){
    $('#nav_content').show();
    $(document).on('mouseleave','#nav_line_box',function(){
        $('#nav_content').hide();
    })
})

$(document).on('mouseover','#nav_content',function(){
    $('#nav_content').show()
    $(document).on('mouseleave','#nav_content',function(){
        $('#nav_content').hide()
    })
})
$(document).on('mouseover','#nav_content_ul',function(){
    $('#nav_subcats').show();
    $(document).on('mouseleave','#nav_content_ul',function(){
        $('#nav_subcats').hide()
    })
})







$(document).on('click','#tools_message_button',function(){
    location.href="./login.html";
})

if(getCookie('User_name')){
    var User_name=getCookie('User_name')
    $('#tools_line1').html(function(){
        return '您好,'+User_name
     })
     $('#nav_a a').first().html(function(){
         return User_name+'的亚马逊'
     })
     $('#no_login').hide()
     $('#tools_text').show()
}else{
    $('#no_login').show()
     $('#tools_text').hide()
}
$(document).on('click','.Exit_account',function(){
    removeCookie('User_name')
})

// 头部---------------------------------------

// 页面功能————————————————————————————————————————




$(document).on('mouseover','#content_left',function(){
  $('#content_right_shadow').show();
    $(document).on('mouseleave','#content_left',function(){
        $('#content_right_shadow').hide();
    })
})
$(document).on('mouseover','#content_left',function(){
    $('#content_left_shadow').show();
      $(document).on('mouseleave','#content_left',function(){
          $('#content_left_shadow').hide();
      })
  })








$(document).on('mousemove','#content_left',function(e){
    var l = e.pageX - $("#content_left").offset().left - ($("#content_left_shadow").width() / 2);
    var t = e.pageY - $("#content_left").offset().top - ($("#content_left_shadow").height() / 2);
    if (l < 0) {
        l = 0
    }
    if (l > $(this).width() - $("#content_left_shadow").width()) {
        l = $(this).width() - $("#content_left_shadow").width()
    }
    if (t < 0) {
        t = 0
    }
    if (t > $(this).height() - $("#content_left_shadow").height()) {
        t = $(this).height() - $("#content_left_shadow").height()
    }

    $("#content_left_shadow").css({
        "left": l,
        "top": t
    })
    var pX = l / ($("#content_left").width() - $("#content_left_shadow").width())
    var pY = t / ($("#content_left").height() - $("#content_left_shadow").height())
    $("#content_right_shadow img").css({
        "left": -pX * ($("#content_right_shadow img").width() - $("#content_right_shadow").width()),
        "top": -pY * ($("#content_right_shadow img").height() - $("#content_right_shadow").height())
    })
})


 

function queryString(name) {
    var search = location.search; 
    search = search.replace('?', ''); 
    var arr = search.split('&'); 
  
    var list = [];
  
    arr.forEach(item => {
      var [key, value] = item.split('=');
      list.push(
        {
          key,
          value
        }
      );
    });
  
    // console.log(list);
  
    var obj = list.filter(item => item.key === name)[0];
  
    // console.log(obj.value);
  
    return obj.value;
  }




  var id=queryString('id');

    $.ajax({
        url: `//${location.hostname}/Amazon/product_details.php`,
        data: {
            id
        },
        dataType:'json',
        success: data => {
            
            var html=''
            
            if (data.code != 1) {
                layer.msg('获取商品列表失败');
            }
            if (data.code == 1) {
                data.data.forEach(({commodity_id,commodity_img,commodity_name,commodity_price,commodity_Details_L1,commodity_Details_L2,commodity_Details_L3,commodity_Details_L4})=>{
                    html+=`
                    
                    <div id="content_left">
                
                    <div id="content_left_shadow"></div>
                    <img src="../img/product_details/${commodity_img}/01.jpg" alt="">
                </div>
                <div id="content_right_shadow">
                    <img src="../img/product_details/${commodity_img}/01.jpg" alt="">
                </div>
                <div id="content_right">
                    <div id="detail">
                        <span id="detail_line1" commodity_id="${commodity_id}">${commodity_name}</span>
                        <div id="detail_share"> 
                            <div id="detail_share_star"></div><a> 386 条商品评论</a>
                            <div id="detail_share_ico1"></div>
                            <div id="detail_share_ico2"></div>
                            <div id="detail_share_ico3"></div>
                            <div id="detail_share_ico4"></div>
    
                        </div>
                        <p id="detail_line2">价格:<span id="detail_line2_span">￥${commodity_price}</span></a></p>
                        <span id="detail_line3">大小</span>
                        <div id="detail_line4">
                            <select name="" id="">
                            <option value="">2XL</option>
                            <option value="">3XL</option>
                            <option value="">4XL</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                        <a id="detail_line4_span">尺码对照表</a>
                        </div>
    
                    <p id="detail_line5">颜色:</p>
                    <div id="small_img">
                        <div id="small_img_1"><img src="../img/product_details/${commodity_img}/01_small.jpg" alt=""></div>
                        <div id="small_img_2"><img src="../img/product_details/${commodity_img}/02_small.jpg" alt=""></div>
                        
                    </div>
                    <ul id="detail_line6">
                        <li>${commodity_Details_L1}</li>
                        <li>${commodity_Details_L2}</li>
                        <li>${commodity_Details_L3}</li>
                        <li>${commodity_Details_L4}</li>
                        
                    </ul>
                    </div>
                    <div id="buy">
                        <span>数量</span>
                        <select name="" id="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                        <div id="car_Total" price="${commodity_price}">￥${commodity_price}</div>
                        <button id="add">加入购物车</button>
                        <button id="buy_now">现在购买</button>
                    </div>
                </div>
    
                
                    `
                    $('#content').html(html)

                })
            }
        }
    })






    $(document).on('click','#small_img_1',function(){
        var html=''
        var html2=''
        html+=`
        <div id="content_left_shadow"></div>
                <img src="../img/product_details/${id}/01.jpg" alt="">
   
        `
        html2+=`<img src="../img/product_details/${id}/01.jpg" alt="">
        `
        $('#content_left').html(html);
        $('#content_right_shadow').html(html2);
    })

    $(document).on('click','#small_img_2',function(){
        var html=''
        var html2=''
        html+=`
        <div id="content_left_shadow"></div>
                <img src="../img/product_details/${id}/02.jpg" alt="">
   
        `
        html2+=`<img src="../img/product_details/${id}/02.jpg" alt="">
        `
        $('#content_left').html(html);
        $('#content_right_shadow').html(html2);
    })






   $(document).on('change','#select',function(){
    var value =$('#car_Total').attr("price")*1
    console.log(value)
    var num=$(this).val()*1;
    console.log(num)
    $('#car_Total').html(function(){
       
       return '￥'+value*num
    })
   })



    $(document).on('click','#add',function(){
        console.log(11)
        var user_id = getCookie('User_name');
        var commodity_price =$('#car_Total').attr("price");
        var commodity_id =$('#detail_line1').attr("commodity_id");
        var commodity_num =$('#select').val();
        var commodity_name =$('#detail_line1').html();

        if(getCookie('User_name')){
            $.ajax({
                url: `//${location.hostname}/Amazon/Add.php`,
                data: {
                    user_id,
                    commodity_price,
                    commodity_id,
                    commodity_num,
                    commodity_name
                },
                dataType:'json',
                success: data => {
                    layer.msg(data.msg)
                }

                })

        }else{
            location.href="../html/login.html"
        }
        
    })


    $(document).on('click','#buy_now',function(){
        var user_id = getCookie('User_name');
        var commodity_price =$('#car_Total').attr("price");
        var commodity_id =$('#detail_line1').attr("commodity_id");
        var commodity_num =$('#select').val();
        var commodity_name =$('#detail_line1').html();

        if(getCookie('User_name')){
            $.ajax({
                url: `//${location.hostname}/Amazon/Add.php`,
                data: {
                    user_id,
                    commodity_price,
                    commodity_id,
                    commodity_num,
                    commodity_name
                    
                },
                dataType:'json',
                success: data => {
                   if(data.code==1){
                       location.href='./Settlement.html'
                   }else{
                    layer.msg(data.msg)
                   }
                }

                })

        }else{
            location.href="../html/login.html"
        }
        
    })












// $(document).on('click','#small_img_1',function(){
//     var id=queryString('id');
//     var img1='';
//     var img2='';
//      img2+=`<div id="content_left_shadow"></div>
//              <img src="../img/product_details/${id}/01.jpg" alt="">`
//      img1 +=` <img src="../img/product_details/${id}/01.jpg" alt="">`;

//     $('#content_left').html(img2);
//     $('#content_right_shadow').html(img1);
// })

// $(document).on('click','#small_img_2',function(){
//     var id=queryString('id');
//     var img1='';
//     var img2='';
//      img2+=`<div id="content_left_shadow"></div>
//              <img src="../img/product_details/${id}/02.jpg" alt="">`
//      img1 +=` <img src="../img/product_details/${id}/02.jpg" alt="">`;

//     $('#content_left').html(img2);
//     $('#content_right_shadow').html(img1);
// })















