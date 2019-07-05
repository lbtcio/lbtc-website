function datetimepickerinit() {
  console.log('Datetimepicker init')
  var currentdate = new Date();
  $('#startDate').datetimepicker({
    format: 'yyyy-mm-dd',
    autoclose: true,
    startView: 2,
    minView: 2,
    pickerPosition: "bottom-left",
    startDate: currentdate,
    endDate: null
  }).on('changeDate', function (ev) {
    var sd = ev.date;
    var sdplue1 = new Date(sd.setDate(sd.getDate() + 1));
    if (ev.date) {
      $('#endDate').datetimepicker('setStartDate', moment(sdplue1).format('YYYY-MM-DD'))
    } else {
      $('#endDate').datetimepicker('setStartDate', new Date());
    }
  }).on('hide', function (ev) { 
    $('#submitForm').data('bootstrapValidator').updateStatus('start', 'NOT_VALIDATED').validateField('start');
  });

  $('#endDate').datetimepicker({
    format: 'yyyy-mm-dd',
    autoclose: true,
    startView: 2,
    minView: 2,
    pickerPosition: "bottom-left",
    startDate: new Date(currentdate.setDate(currentdate.getDate() + 1)),
    endDate: null
  }).on('changeDate', function (ev) {
    var ed = ev.date;
    var edsub1 = new Date(ed.setDate(ed.getDate() - 1));
    if (ev.date) {
      $('#startDate').datetimepicker('setEndDate', moment(edsub1).format('YYYY-MM-DD'))
    } else {
      $('#startDate').datetimepicker('setEndDate', new Date());
    }
  }).on('hide', function (ev) { 
    $('#submitForm').data('bootstrapValidator').updateStatus('end', 'NOT_VALIDATED').validateField('end');
  })
};

datetimepickerinit();