let row = prompt("Enter a row");
let column = prompt("enter a column");

for (i=0;i<column;i++) {
    document.write("*");
    for (j=1;j<row;j++){
        document.write("*");
    }
    document.write("<br>");
}