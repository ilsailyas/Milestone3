var me = document.getElementById("Candinate-Form");
var resumeDisplayElement = document.getElementById("Candinate-display");
me.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var Fname = document.getElementById("Fname").value;
    var Mname = document.getElementById("Mname").value;
    var cnic = document.getElementById("cnic").value;
    var birth = document.getElementById("birth").value;
    var no = document.getElementById("no").value;
    var hno = document.getElementById("hno").value;
    var company = document.getElementById("company").value;
    var field = document.getElementById("field").value;
    var exp = document.getElementById("exp").value;
    var doc = document.getElementById("doc").value;
    var copy = document.getElementById("copy").value;
    var cv = document.getElementById("cv").value;
    var sig = document.getElementById("sig").value;
    var one = document.getElementById("one").value;
    var resumeHTML = "\n     <h2><b> Editable Resume</b></h2>\n     <h3>Candinate Information</h3>\n     <p><b>name:</b><span contenteditale=\"true\">".concat(name, "</span></p>\n      <p><b>Fname:</b><span contenteditale=\"true\">").concat(Fname, "</span></p> \n       <p><b>Mname:</b><span contenteditale=\"true\">").concat(Mname, "</span></p>  \n       <p><b>cnic:</b><span contenteditale=\"true\">").concat(cnic, "</span></p>\n    <p><b>hno:</b>").concat(hno, "</p>\n         <h3>Company Details</h3>\n         <p><b>company:</b><span contenteditale=\"true\">").concat(company, "</span></p>\n         <p><b>field:</b><span contenteditale=\"true\">").concat(field, "</span></p>\n         <p><b>exp:</b><span contenteditale=\"true\">").concat(exp, "</span></p>\n         <h3>Inter Marksheet Photocopy</h3>\n         <p><b>doc:</b><span contenteditale=\"true\">").concat(doc, "</span></p>\n         <h3>Matric Marksheet Photocopy</h3>\n         <p><b>copy:</b><span contenteditale=\"true\">").concat(copy, "</span></p>\n         <h3>CV</h3\n         <p><b>cv:</b><span contenteditale=\"true\">").concat(cv, "</span></p>\n         <h3>Candinate Signature</h3>\n         <p><b>sig:</b><span contenteditale=\"true\">").concat(sig, "</span></p>\n         <h3>>Manager Signature</h3>\n         <p><b>one:</b><span contenteditale=\"true\">").concat(one, "</span></p>\n         ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("It is missing");
    }
});
