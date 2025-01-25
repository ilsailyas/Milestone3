const me = document.getElementById("Candinate-Form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("Candinate-display") as HTMLDivElement;


me.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById ("name") as HTMLInputElement).value
    const Fname =(document.getElementById("Fname")as HTMLInputElement).value
    const Mname = (document.getElementById("Mname")as HTMLInputElement).value
    
    const cnic = (document.getElementById ("cnic") as HTMLInputElement).value
    
    const birth = (document.getElementById ("birth") as HTMLInputElement).value
    
    const no = (document.getElementById ("no") as HTMLInputElement).value
    const hno = (document.getElementById ("hno") as HTMLInputElement).value
    
    const company = (document.getElementById ("company") as HTMLInputElement).value
    const field = (document.getElementById ("field") as HTMLInputElement).value
    const exp = (document.getElementById ("exp") as HTMLInputElement).value
    const doc = (document.getElementById ("doc") as HTMLInputElement).value
    const copy = (document.getElementById ("copy") as HTMLInputElement).value
    const cv = (document.getElementById ("cv") as HTMLInputElement).value
    const sig = (document.getElementById ("sig") as HTMLInputElement).value
    const one = (document.getElementById ("one") as HTMLInputElement).value




     const resumeHTML = `
     <h2><b> Editable Resume</b></h2>
     <h3>Candinate Information</h3>
     <p><b>name:</b><span contenteditale="true">${name}</span></p>
      <p><b>Fname:</b><span contenteditale="true">${Fname}</span></p> 
       <p><b>Mname:</b><span contenteditale="true">${Mname}</span></p>  
       <p><b>cnic:</b><span contenteditale="true">${cnic}</span></p>
    <p><b>hno:</b>${hno}</p>
         <h3>Company Details</h3>
         <p><b>company:</b><span contenteditale="true">${company}</span></p>
         <p><b>field:</b><span contenteditale="true">${field}</span></p>
         <p><b>exp:</b><span contenteditale="true">${exp}</span></p>
         <h3>Inter Marksheet Photocopy</h3>
         <p><b>doc:</b><span contenteditale="true">${doc}</span></p>
         <h3>Matric Marksheet Photocopy</h3>
         <p><b>copy:</b><span contenteditale="true">${copy}</span></p>
         <h3>CV</h3
         <p><b>cv:</b><span contenteditale="true">${cv}</span></p>
         <h3>Candinate Signature</h3>
         <p><b>sig:</b><span contenteditale="true">${sig}</span></p>
         <h3>>Manager Signature</h3>
         <p><b>one:</b><span contenteditale="true">${one}</span></p>
         `
if ( resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
}else {
    console.error("It is missing");
}
});