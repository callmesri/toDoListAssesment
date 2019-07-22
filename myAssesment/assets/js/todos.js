
window.onload = function(){
    var data;
    if(window.localStorage.getItem('items') == null){
        data = [
            {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
            {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
            {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
            {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
            {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
            {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
            {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
    ];
    window.localStorage.setItem('items', JSON.stringify(data));
    }
    else{
        data = JSON.parse(window.localStorage.getItem('items'));  
    }
    $.each(data,function(key,obj){
        $("ul").append("<li>"+ obj.name + "   " + obj.date+"   "+ obj.assigned+"</li>");
        
    })

    console.log(data);
}

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});



$('form').submit(printObj);

function printObj(e) {
   let name = $("#taskName1").val();
   let date = $("#date1").val();
   let assigned = $("#assignedTo1").val();
   e.preventDefault();
  var obj = {
    "name": name,
    "date": date,
    "assigned": assigned
  };

    var getlist = JSON.parse(window.localStorage.getItem('items'));
    getlist.push(obj);
  
    window.localStorage.setItem('items', JSON.stringify(getlist));
        $(this).val("");
         $("ul").append("<li>"+ obj.name + "   " + obj.date+"   "+ obj.assigned+"</li>");
}


var a = true;
$(".fa-check-circle").on("click",function(){
    if(a){$("input[type='text']").fadeOut();}
    else{
        $("input[type='text']").fadeIn();  
    }
    a = !a;    
})