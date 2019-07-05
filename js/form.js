var sendStatus = true;
var baseurl = "https://api.lbtc.io/";
var api = {
  testlbtcapply: 'testlbtcapply',
  bugsubmit: 'bugsubmit',
  getnewtask: 'getnewtask',
  proopt: 'proopt',
  document: 'document',
  document: 'document',
  video: 'video',
}

function sendForm(params, a) {
  if (sendStatus) {
    sendStatus = false;
    console.log(params);
    $.getJSON( baseurl + api[a], params, function(res, status) {
        console.log(res);
        console.log(status);
        if (res.error) {
            $("#warnAlertMsg").html(res.msg);
            $("#warnAlert").show(400);
            window.setTimeout( function(){
                $('#warnAlert').hide(400);
            }, 2000);
        } else {
            $("#successAlertMsg").html('Submitted successfully');
            $("#successAlert").show(400);
            $('#submitForm').data('bootstrapValidator').resetForm(true);
            datetimepickerinit();
            getcodeimg();
            window.setTimeout( function(){
                $("#successAlert").hide(400)
            }, 2000);
        }
        sendStatus = true;
        $('#send').button('reset');
    })
  }
};