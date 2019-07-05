// Bounty Plan
$.getJSON( "https://api.lbtc.io/fontshowdatas?type=7", function(res, status) {
    if (res.error) {
        $("#bountyPlan").hide();
    } else {
      var htmlc = ""
      for (let i = 0; i < res.msg.length; i++) {
        const item = res.msg[i];
        let t_name = decodeURI(item.t_name);
        let t_desc = encodeURI(item.t_desc);
        let str = `
                    <div class="col-md-4 col-sm-6 mb30 box-hover">
                        <div class="box box-style2"> 
                            <span style="float: left; color: #0cb4ce;"><i class="ion-ios-calendar-outline size-3x"></i></span>
                            <div class="pl50">
                                <h4>${t_name}</h4>
                                <p></p>
                                <br>
                                <p><a class="bountyPlanLink" href="https://lbtc.io/bounty/dev.html?t_name=${t_name}&t_desc=${t_desc}">Claim it</a></p>
                            </div>
                        </div>                                 
                    </div>
                `;
        htmlc = htmlc + str;
      }
      $("#bountyPlanContent").html(htmlc);
      $("#bountyPlan").show();
    }
});

// In progress
$.getJSON( "https://api.lbtc.io/fontallshowdatas", function(res, status) {
    if (res.error) {
        $("#inProgress").hide();
    } else {
        var inProgressHtmlc = "";
        var inProgressLen = 0;
        for (let i = 0; i < res.msg.length; i++) {
            const item = res.msg[i];
            let pro_desc = decodeURI(item.pro_desc);
            let pro_name = decodeURI(item.pro_name);

            let str = `
                        <div class="col-md-4 col-sm-6 mb30 box-hover">
                            <div class="box box-style2"> 
                                <div class="pl20 pr20">
                                    <h4>${pro_desc}</h4>
                                    <br>
                                    <p style="text-align: right">by <strong>${pro_name}</strong></p>
                                </div>
                            </div>                                 
                        </div>
                    `;
            inProgressHtmlc = inProgressHtmlc + str;
            inProgressLen ++
        }
        if (inProgressLen) {
            $("#inProgressContent").html(inProgressHtmlc);
            $("#inProgress").show();
        } else {
            $("#inProgress").hide();
        }
    }
})

// Done
$.getJSON( "https://api.lbtc.io/showrewardtask", function(res, status) {
    if (res.error) {
        $("#done").hide();
    } else {
        var doneHtmlc = "";
        var doneLen = 0;
        for (let i = 0; i < res.msg.length; i++) {
            const item = res.msg[i];
            let re_desc = decodeURI(item.re_desc);
            let re_name = decodeURI(item.re_name);

            let str = `
                        <div class="col-md-4 col-sm-6 mb30 box-hover">
                            <div class="box box-style2"> 
                                <div class="pl20 pr20">
                                    <h4>${re_desc}</h4>
                                    <p style="text-align: right">by <strong>${re_name}</strong></p>
                                    <hr>
                                    <p style="text-align: center"><a target="_blank" href="${item.re_url}">See Result</a></p>
                                </div>
                            </div>                                 
                        </div>
                    `;
            doneHtmlc = doneHtmlc + str;
            doneLen ++
            
        }
        if (doneLen) {
            $("#doneContent").html(doneHtmlc);
            $("#done").show();
        } else {
            $("#done").hide();
        }
    }
})

