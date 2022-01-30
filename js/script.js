
$('#btn1').on('click', function(){

    const randomRate = Math.ceil(Math.random() * 3);
    console.log(randomRate);


    if(randomRate === 1){
        const result = 'グー';
        $('#com').html(result);
        $('.result0').html('あいこ！もう一回')
    
    }else if(randomRate ===2){
        const result = 'チョキ';
        $('#com').html(result);
        $('.result0').html('あなたの勝ち')
    
    }else {
        const result = 'パー';
        $('#com').html(result);
        $('.result0').html('残念！コンピューターの勝ち')
    
    }

    
});




$('#btn2').on('click', function(){

    const randomRate = Math.ceil(Math.random() * 3);
    console.log(randomRate);


    if(randomRate === 1){
        const result = 'グー';
        $('#com').html(result);
        $('.result0').html('残念！コンピューターの勝ち')
    
    }else if(randomRate ===2){
        const result = 'チョキ';
        $('#com').html(result);
        $('.result0').html('あいこ！もう一回')
    
    }else {
        const result = 'パー';
        $('#com').html(result);
        $('.result0').html('あなたの勝ち')
    
    }

    
});


$('#btn3').on('click', function(){

    const randomRate = Math.ceil(Math.random() * 3);
    console.log(randomRate);


    if(randomRate === 1){
        const result = 'グー';
        $('#com').html(result);
        $('.result0').html('あなたの勝ち')
    
    }else if(randomRate ===2){
        const result = 'チョキ';
        $('#com').html(result);
        $('.result0').html('残念！コンピューターの勝ち')
    
    }else {
        const result = 'パー';
        $('#com').html(result);
        $('.result0').html('あいこ！もう一回')
    
    }

    
});


//文字の消えるからの登場、一回消してから  
$('h1').hide().fadeIn(9000);
