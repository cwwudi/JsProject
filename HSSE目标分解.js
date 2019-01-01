<script type="text/javascript">
    $(function(){
            checkCustomize=function () {
                var len=$(".celiangzhi").length;
                for(var i=0;i<=len-1;i++){
                    var clz=$(".celiangzhi").eq(i).children().eq(0).val();
                    var cs=$(".cuoshi").eq(i).children().eq(0).val();
                    if(clz<1&&cs=='')
                    {
                       alert("第"+(i+1)+"行请填写改进措施！");
                       break;

                    }
                    if (i==7)
                    {return true;}

                }


            }




    })
    </script>