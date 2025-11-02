$(function () {
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#content li').length;

    let firstLi = $('#content li:first').clone();
    let lastLi = $('#content li:last').clone();

    $('#content').append(firstLi)
    $('#content').prepend(lastLi)
    
    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`);
    }
    $('#contentButton li:first').addClass('clicked');
    
    $('#content li').width(divWidth); 
    $('#content').width(divWidth * (imgCount + 2));
    $('#content').css('left', divWidth * (-1));    
    
    let index = 1 // 要從1開始 因為前面有複製一張
    let timer = setInterval(moveToNext, 5000)

    function updateButton(){
        let buttonIndex = index - 1;
        if(buttonIndex > imgCount - 1){
            buttonIndex = 0
        };

        if(buttonIndex < 0){
            buttonIndex = imgCount -1;
        }

        $(`#contentButton li:eq(${buttonIndex})`).addClass('clicked')
        $('#contentButton li').not(`:eq(${buttonIndex})`).removeClass('clicked')
    }

    $('#contentButton li').click(function(){
        clearInterval(timer); 

        let clickedIndex = $(this).index();
        index = clickedIndex + 1 // 前面有複製了最後一張
        // alert(index)

        $('#content').animate({
            left: divWidth * index * -1,
        }, 300)
            
        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext(){
        index++

        // 為了讓輪播看起來滑順 所以做成動畫
        $('#content').animate({
            left: divWidth * index * -1,
        },300, function(){
        // 當到達複製的第一張（最後一個位置）時，瞬間跳回真正的第一張
            if(index == imgCount + 1){
                $('#content').css('left', divWidth * -1) // 瞬間跳回的寫法
                index = 1
            }
        })
        updateButton();

    }

    $('.carousel-control-prev').click(function(){
        clearInterval(timer);

        index--;

        console.log('移到索引:', index);
        
        $('#content').animate({
            left: divWidth * index * -1,
        }, 300, function(){
            if(index == 0){
                $('#content').css('left', divWidth * imgCount * -1);
                index = imgCount; 
            }
        });
        updateButton();
        timer = setInterval(moveToNext, 5000);

    });

    $('.carousel-control-next').click(function(){
        clearInterval(timer);
        
        index++;
        
        $('#content').animate({
            left: divWidth * index * -1,
        }, 300, function(){
            // 如果移到複製的第一張
            if(index == imgCount + 1){ // 修正:使用變數而非硬編碼
                $('#content').css('left', divWidth * 1 * -1); // 瞬間跳回真實的第一張
                index = 1;
            }
        });
        
        console.log('移到索引:', index);
        updateButton();
        timer = setInterval(moveToNext, 5000);
    });

    $('#content').on('mouseover', function () { 
        clearInterval(timer);
    });
    $('#content').on('mouseleave', function () { 
        timer = setInterval(moveToNext, 5000); 
    });

});