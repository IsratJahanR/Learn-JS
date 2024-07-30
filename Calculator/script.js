
function print_num(num){
    var ans = document.querySelector("#result").value
   document.querySelector("#result").value=ans+num;

}
function Clear()
{
    document.querySelector("#result").value="";
}
function calculate()
{
    var ans = document.querySelector("#result").value
    var res=0;
   /* var tmp="";
    var sign ="";
   
    for(var i=0;i<ans.length;i++)
    {
        if(ans[i]>='0' && ans[i]<='9')
        {
            tmp+=ans[i];
            // console.log(ans[i]);
        }
        else 
        {

            sign=ans[i];
            res+=parseInt(tmp, 10);
            tmp=""
        }
     
    }
    tmp=parseInt(tmp, 10);
    if(sign=='+')res+=tmp;
    else if(sign=='-')res-=tmp;
    else if(sign=='*')res*=tmp;
    else if(sign=='/')res/=tmp;
    // console.log(res)*/
     
    res = eval(ans);

    document.querySelector("#result").value=res
}
function removeLast()
{
    var val=document.querySelector("#result").value;
    if(val!='')val = val.slice(0, -1);
    document.querySelector("#result").value=val;
}