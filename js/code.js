function getcodeimg() {
  console.log('Get Code')
  $.ajax({
    type: "GET",
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    },
    dataType: 'blob',
    url: "https://api.lbtc.io/genvercode",
    success: function (data, status, res) {
      var reader = new window.FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = function () {
        $("#code").attr('src', reader.result);
        $("#code").attr('data-uid', res.getResponseHeader('Content-Type').split(",")[1]);
      }
    }
  })
};

$('#code').bind("click",function(){  
  getcodeimg();
});

getcodeimg();

