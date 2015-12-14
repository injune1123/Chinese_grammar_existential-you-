//1桌子上有一本书,  2树上有只小松鼠，3街上有很多车，4冰箱里有牛奶，5, 我家门前有两棵树，6学校附近有很多饭馆

var exampleData = [{
        id:1,
          img: "./public/pics/resturant_near_school.png",
        English: "There are many resturants near his school.",
        Chinese: {
            place: "他的学校",
            preposition: "附近",
            You: "有",
            something: "很多餐馆"
        }

    },{
        id: 2,
        img: "./public/pics/book_on_a_table.gif",
        English: "There is a book on the table.",
        Chinese:{
            place: "桌子",
            preposition: "上",
            You: "有",
            something: "一本书"
        }
    }, {
        id:3,
             img: "./public/pics/squirrel_on_the_tree.png",
        English: "There is a squirrel on the tree.",
        Chinese: {
            place: "树",
            preposition: "上",
            You: "有",
            something: "只松鼠"
        }
       
    }, {
        id:4,
        img: "./public/pics/china-cars-on-street.png",
        English: "There are many cars on the street.",
        Chinese: {
            place: "街",
            preposition: "上",
            You: "有",
            something: "很多车"
        }

    }, {
        id:5,
         img: "./public/pics/milk_in_the_frige.jpg",
        English: "There is some milk in the frige.",
        Chinese: {
            place: "冰箱",
            preposition: "里",
            You: "有",
            something: "牛奶"
        }
    }, {
        id:6,
         img: "./public/pics/two_trees_in_fornt_of_my_house.jpg",
        English: "There are two trees in front of my house.",
        Chinese: {
            place: "我家",
            preposition: "门前",
            You: "有",
            something: "两棵树"
        }
    }
];



function createAnExample (exampleItemObj){
	var exampleItemTMP = "<div class='container'><div class= 'row'><div class='col-md-6' id='examplePic'></div><div class='col-md-6'><table id='exampleTable' class='well'><tr id='EnglishRow'><th>English:</th><td colspan='4'></td></tr><tr id='exampleRow'><th>Example:</th><td class='structurePlace'></td><td class='structureProposition'></td><td class='structureYou'></td><td class='structureThings'></td></tr><tr><th>Order:</th><td class='structurePlace'>Place</td><td class='structureProposition'>Preposition</td><td class='structureYou'><i>You</i></td><td class='structureThings'>something</td></tr></table></div> </div</div>";
	var $exampleItem = $(exampleItemTMP);
	$exampleItem.find('#examplePic').append("<img src=" + exampleItemObj.img +">");
	$exampleItem.find('#EnglishRow td').html(exampleItemObj.English);
	$exampleItem.find('#exampleRow .structurePlace').html(exampleItemObj.Chinese.place);
	$exampleItem.find('#exampleRow .structureProposition').html(exampleItemObj.Chinese.preposition);
	$exampleItem.find('#exampleRow .structureYou').html(exampleItemObj.Chinese.You);
	$exampleItem.find('#exampleRow .structureThings').html(exampleItemObj.Chinese.something);
	
	return $exampleItem;
}

var $exampleItemArr= exampleData.map(createAnExample)

var currentLastExampleNumber = 0;
$('#examples').prepend($exampleItemArr[currentLastExampleNumber]);

if (currentLastExampleNumber === 0){
	$('#previous').attr('disabled','disabled');
}



$(document).on('click','#next',function(){
	$('#previous').removeAttr('disabled');;

	currentLastExampleNumber ++;
	$('#examples').empty();
	$('#examples').append($exampleItemArr[currentLastExampleNumber]);
	if (currentLastExampleNumber === 5){
    $('#next').attr('disabled','disabled');
    $("#examplesPage .assessment h3").removeClass("hidden")
}

})

$(document).on('click','#previous',function(){
	$('#next').removeAttr('disabled');;

	currentLastExampleNumber --;
	$('#examples').empty();
	$('#examples').append($exampleItemArr[currentLastExampleNumber]);
	if (currentLastExampleNumber === 0){
    $('#previous').attr('disabled','disabled');
}

})




if (currentLastExampleNumber === 5){
    $('#next').attr('disabled','disabled');
}


// sort the structure
$("#sortStructure ol").sortable()

 $(document).on('click',"#examplesPage .assessment h3",function(){
        $('#examples').addClass("hide");
        $('#previous').addClass("hide")
        $('#exampleButtons').addClass("hide");

    $('#sortStructure').removeClass('hidden');
    $("#examplesPage .assessment h3").addClass('hidden');
 })

 $(document).on('click',"#sortStructure button",function(){
    $('.catFeedback').remove();
    var answer = $('#sortStructure li:nth-child(1)').html()+
    $('#sortStructure li:nth-child(2)').html()+
    $('#sortStructure li:nth-child(3)').html()+
    $('#sortStructure li:nth-child(4)').html()
    if(answer==="椅子上有一只猫"){
                $(this).after("<a href='#explanation'><p class='catFeedback'>Go to Next section</p></a>")

        $(this).after("<img src='./public/pics/correct.png' class='catFeedback'>");
    }
    else{
        $(this).after("<p class='catFeedback'>Keep Trying</p>")

        $(this).after("<img src='./public/pics/wrong.png' class='catFeedback'>");
    }

 })

// This is what the DOM of exampleItemTemp looks like
// var exampleItemTMP = "<div class='container'>
// 							<div class= 'row'>
// 									<div class='col-md-4' id='examplePic'></div>
// 									<div class='col-md-8'>
// 										<table id='exampleTable' class='well'>
// 											<tr id='EnglishRow'>
// 											 	<th>English:</th>
//                     							<td colspan='4'></td>
// 											</tr>
// 											<tr id='exampleRow'>
// 												<th>Example:</th>
// 												<td class='structurePlace'></td>
//                     							<td class='structureProposition'></td>
//                    							<td class='structureYou'></td>
//                     							<td class='structureThings'></td>											
// 											</tr>
// 											<tr>
//                     							<th>Order:</th>
//                     							<td class='structurePlace'>Place</td>
//                     							<td class='structureProposition'>Preposition</td>
//                    							<td class='structureYou'><i>You</i></td>
//                     							<td class='structureThings'>something</td>
// 											</tr>
// 										</table>
// 									</div> 
// 							</div>
// 						</div>";


// The heightlight effect
$("#homepage h1").hide().fadeIn(1000);
$("#homepage p").hide().fadeIn(1500);
$("#homepage p span").effect("highlight", {}, 2000);




