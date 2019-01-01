<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->

<script type="text/javascript">
    jQuery(document).ready(function(){

        $("#field7753").bindPropertyChange(function () {
            settime();
            alert("开始日期");
        });
        $("#field6151").bindPropertyChange(function () {

            alert("开始时间");
        });
        $("#field7754").bindPropertyChange(function () {

            alert("结束日期");
        });
        $("#field6150").bindPropertyChange(function () {

            alert("结束日期");
        });
        function settime(){
            var overtimeDate=$("#field7753").val();      //加班开始日期
            var overtimeTime=$("#field6151").val();      //加班开始时间
            var enddate = $("#field7754").val();         //加班结束日期
            var endtime = $("#field6150").val();         //加班结束时间
            if (overtimeDate != '' && overtimeTime != '' && enddate != '' && endtime != '') {
                var endtempovertime = enddate+' '+endtime+':00';  //组合加班结束时间(日期+时间)
                var endovertime = new Date(endtempovertime.replace(/\-/g, "\/"));  //格式化加班结束时间
                endovertime.setHours(endovertime.getHours()-1);
                var hour=endovertime.getHours();
                var min=endovertime.getMinutes();
                if(hour.toString().length==1)
                {
                    hour='0'+hour;
                    //alert(hour);
                }
                if(min.toString().length==1)
                {
                    min='0'+min;
                    //alert(min);
                }
                var time=hour+':'+min;
                $("#field14493").val(time);
                $("#field14493").trigger("click");
                alert(time);

            }
        }
        //提交验证
        checkCustomize = function (){
            var overtimeDate=$("#field7753").val();  //加班开始日期
            var overtimeTime=$("#field6151").val();  //加班开始时间
            var enddate = $("#field7754").val();     //加班结束日期
            var endtime = $("#field6150").val();     //加班结束时间
            var manager= $("#field6155") .val();
            var projectM = $("#field6154") .val();
            var now = new Date($.ajax({async: false}).getResponseHeader("Date"));  //服务器当前时间
            var tempTime = overtimeDate+' '+overtimeTime+':00';  //组合加班时间(日期+时间)
            var overTime = new Date(tempTime.replace(/\-/g, "\/"));   //格式化加班时间
            var endtempovertime = enddate+' '+endtime+':00';  //组合加班结束时间(日期+时间)
            var endovertime = new Date(endtempovertime.replace(/\-/g, "\/"));  //格式化加班结束时间
            var gap=now-overTime;

            //判断开始时间和结束时间大小
            if(endovertime-overTime<=0){
                alert('结束时间必须大于开始时间');

                return false;      }
            //判断超时
            else if (gap>86400000 && manager=='' && projectM ==''){
                alert('您的加班申请已超过规定时限');

                return false;
            }

            else{
                return true;
            }
        }
    })




    </script>



//2.0
    <!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->

    <script type="text/javascript">
    jQuery(document).ready(function(){

        $("#field7753").bindPropertyChange(function () {
            settime();
            //alert("开始日期");
        });
        $("#field6151").bindPropertyChange(function () {
            settime();
            //alert("开始时间");
        });
        $("#field7754").bindPropertyChange(function () {
            settime();
            //alert("结束日期");
        });
        $("#field6150").bindPropertyChange(function () {
            settime();
            //alert("结束日期");
        });
        function settime(){
            var overtimeDate=$("#field7753").val();  //获取加班开始日期
            var overtimeTime=$("#field6151").val();      //获取加班开始时间
            var enddate = $("#field7754").val();  //获取加班结束日期
            var endtime = $("#field6150").val();  //获取加班结束时间
            var jblx=$("#field6148").val();
            var endtempovertime = enddate+' '+endtime+':00';  //组合加班结束时间(日期+时间)
            var endovertime = new Date(endtempovertime.replace(/\-/g, "\/"));  //格式化加班结束时间
            //endovertime.setHours(endovertime.getHours()-1);
            var hour=endovertime.getHours();
            var min=endovertime.getMinutes();

            if(jblx==3&&overtimeTime<'12:00'&&endtime>'13:00')
            {
                    hour=hour-1;

            }

            var time=hour+':'+min;
            $("#field14493").val(time);
            $("#field14493span").text(time);
            $("#field14493browser").trigger("click");
            alert(time);


            /*
            if (overtimeDate != '' && overtimeTime != '' && enddate != '' && endtime != '') {

                if(hour.toString().length==1)
                {
                    hour='0'+hour;
                    //alert(hour);
                }
                if(min.toString().length==1)
                {
                    min='0'+min;
                    //alert(min);
                }


            }*/
        }
        //提交验证
        checkCustomize = function (){
            var overtimeDate=$("#field7753").val();  //获取加班开始日期
            var overtimeTime=$("#field6151").val();      //获取加班开始时间
            var enddate = $("#field7754").val();  //获取加班结束日期
            var endtime = $("#field6150").val();  //获取加班结束时间
            var manager= $("#field6155") .val();
            var projectM = $("#field6154") .val();
            var now = new Date($.ajax({async: false}).getResponseHeader("Date"));  //获取服务器当前时间
            var tempTime = overtimeDate+' '+overtimeTime+':00';  //组合加班时间(日期+时间)
            var overTime = new Date(tempTime.replace(/\-/g, "\/"));   //格式化加班时间
            var endtempovertime = enddate+' '+endtime+':00';  //组合加班结束时间(日期+时间)
            var endovertime = new Date(endtempovertime.replace(/\-/g, "\/"));  //格式化加班结束时间
            var gap=now-overTime;

            //判断开始时间和结束时间大小
            if(endovertime-overTime<=0){
                alert('结束时间必须大于开始时间');

                return false;      }
            //判断超时
            else if (gap>86400000 && manager=='' && projectM ==''){
                alert('您的加班申请已超过规定时限');

                return false;
            }

            else{
                return true;
            }
        }
    })




    </script>



//3.0
    <!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->

    <script type="text/javascript">
    jQuery(document).ready(function(){

        $("#field7753").bindPropertyChange(function () {
            settime();
            //alert("开始日期");
        });
        $("#field6151").bindPropertyChange(function () {
            settime();
            //alert("开始时间");
        });
        $("#field7754").bindPropertyChange(function () {
            settime();
            //alert("结束日期");
        });
        $("#field6150").bindPropertyChange(function () {
            settime();
            //alert("结束日期");
        });
        function settime(){
            var overtimeDate=$("#field7753").val();  //获取加班开始日期
            var overtimeTime=$("#field6151").val();      //获取加班开始时间
            var enddate = $("#field7754").val();  //获取加班结束日期
            var endtime = $("#field6150").val();  //获取加班结束时间
            if (overtimeDate != '' && overtimeTime != '' && enddate != '' && endtime != '') {
                var endtempovertime = enddate+' '+endtime+':00';  //组合加班结束时间(日期+时间)
                var endovertime = new Date(endtempovertime.replace(/\-/g, "\/"));  //格式化加班结束时间
                endovertime.setHours(endovertime.getHours()-1);
                var hour=endovertime.getHours();
                var min=endovertime.getMinutes();
                if(hour.toString().length==1)
                {
                    hour='0'+hour;
                    //alert(hour);
                }
                if(min.toString().length==1)
                {
                    min='0'+min;
                    //alert(min);
                }
                var time=hour+':'+min;
                $("#field14493").val(time);
                $("#field14493span").text(time);
                $("#field14493browser").trigger("click");
                alert(time);

            }
        }
        //提交验证
        checkCustomize = function (){
            var overtimeDate=$("#field7753").val();  //获取加班开始日期
            var overtimeTime=$("#field6151").val();      //获取加班开始时间
            var enddate = $("#field7754").val();  //获取加班结束日期
            var endtime = $("#field6150").val();  //获取加班结束时间
            var manager= $("#field6155") .val();
            var projectM = $("#field6154") .val();
            var now = new Date($.ajax({async: false}).getResponseHeader("Date"));  //获取服务器当前时间
            var tempTime = overtimeDate+' '+overtimeTime+':00';  //组合加班时间(日期+时间)
            var overTime = new Date(tempTime.replace(/\-/g, "\/"));   //格式化加班时间
            var endtempovertime = enddate+' '+endtime+':00';  //组合加班结束时间(日期+时间)
            var endovertime = new Date(endtempovertime.replace(/\-/g, "\/"));  //格式化加班结束时间
            var gap=now-overTime;

            //判断开始时间和结束时间大小
            if(endovertime-overTime<=0){
                alert('结束时间必须大于开始时间');

                return false;      }
            //判断超时
            else if (gap>86400000 && manager=='' && projectM ==''){
                alert('您的加班申请已超过规定时限');

                return false;
            }

            else{
                return true;
            }
        }
    })




    </script>

















