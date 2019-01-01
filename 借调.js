<script type="text/javascript">
    $(function(){

        $("#zdjssj").append("<input title='取消' class='e8_btn_top_first' style='align: center;'  " +
            "type='button' value='自动计算'  id= 'but_gxsj' >");

        $("#but_gxsj").click(function(){

            zdjs();
            //alert(123456);
        });

        function zdjs(){
            var obj = document.getElementsByName("check_node_0");
            var objLen = obj.length;
            for(i=0;i<objLen;i++){
                //alert(i);
                var star = $("#field11578_"+i).val(); //alert(star);
                var end = $("#field11579_"+i).val(); //alert(end);
                if(star <='12:00'&&end>='18:30'){
                    //alert('1');
                    var gz=  $("#field12015_"+i).val();
                    var sjc= $("#field12066_"+i).val();
                    $("#field12110_"+i).val(sjc-2.5);
                    $("#field12046_"+i).val((sjc-2.5)/8);
                    $("#field12047_"+i).val((sjc-2.5)/8*gz);
                }
                else if(star <='12:00'&&end<='17:30'&&end>='13:30'){
                    // alert('2');
                    var gz=  $("#field12015_"+i).val();
                    var sjc= $("#field12066_"+i).val();
                    $("#field12110_"+i).val(sjc-1.5);
                    $("#field12046_"+i).val((sjc-1.5)/8);
                    $("#field12047_"+i).val((sjc-1.5)/8*gz);
                }
                else if(star <='17:30'&&star >='13:30'&&end>='18:30'){
                    // alert('3');
                    var gz=  $("#field12015_"+i).val();
                    var sjc= $("#field12066_"+i).val();
                    $("#field12110_"+i).val(sjc-1);
                    $("#field12046_"+i).val((sjc-1)/8);
                    $("#field12047_"+i).val((sjc-1)/8*gz);
                }
                else {
                    //   alert('4');
                    var gz=  $("#field12015_"+i).val();
                    var sjc= $("#field12066_"+i).val();
                    //alert(sjc);
                    $("#field12110_"+i).val(sjc);
                    $("#field12046_"+i).val(sjc/8);
                    $("#field12047_"+i).val(sjc/8*gz);
                }
            }



        }




    });
</script>




