var host;
const Broadband = {
    getData: function() {
        $.ajax({
            url: 'http://localhost:8000/list-all-broadband',
            method:'POST'
        }).done(function(data){
            for (var i = 0; i < data.length; i++) {
                var template = $('.card-template').clone();
                template.removeClass('card-template');
                template.find('.box-itens-title').text(data[i].name);
                template.find('.bundle-price').text("R$ "+ data[i].price + ",00");
                $('.container').append(template);
            }
        });
    }
};

$(document).ready(function(){
    Broadband.getData();
});