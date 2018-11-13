var mydata = data;
$('body').append('<table/>')
$("<tr/>", {
  "class":"head"
}).appendTo('table');
$("<tr/>", {
  "class":"body"
}).appendTo('table');
for (var i = 0; i < mydata.length; i++) {
$("<td/>", {
    "class":"ggfhgf",
    "text":mydata[i].status
  }).appendTo('tr.head');
$("<td/>", {
    "class":mydata[i].myclass,
    "text":" "
  }).appendTo('tr.body');for (var j = 0;
  j < mydata[i].tasks.length; j++) {brahamghkjdsf(mydata[
  i].tasks[j].name, mydata[i].myclass);
  }
}
function brahamghkjdsf(taskName, colClassName) {
  var taskDiv = $("<div/>").appendTo('td.'+colClassName);
  var taskTable = $("<table/>",{
    "class":"task-table"
  }).appendTo(taskDiv);
  var rowTaskNum = $("<tr/>",{
    "class":"task-number"
  }).appendTo(taskTable);
  var rowTaskText = $("<tr/>",{
    "class":"task-text"
  }).appendTo(taskTable);
  $("<td/>",{
    "text":"17"
  }).appendTo(rowTaskNum)
  $("<td/>",{
    "text":taskName
  }).appendTo(rowTaskText)


// $("<div/>", {
//     "text":taskName
//   }).appendTo('td.'+colClassName)

}
