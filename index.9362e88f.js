document.addEventListener("DOMContentLoaded",function(){var e=function(){var e=n.rows.length,s=n.rows[0].cells.length;t.disabled=e>=c,l.disabled=e<=d,o.disabled=s>=c,r.disabled=s<=d},n=document.querySelector("table"),t=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),c=10,d=2;t.addEventListener("click",function(){if(n.rows.length<c){for(var t=n.insertRow(),l=0;l<n.rows[0].cells.length;l++)t.insertCell();e()}}),l.addEventListener("click",function(){n.rows.length>d&&(n.deleteRow(-1),e())}),o.addEventListener("click",function(){if(n.rows[0].cells.length<c){for(var t=0;t<n.rows.length;t++)n.rows[t].insertCell();e()}}),r.addEventListener("click",function(){if(n.rows[0].cells.length>d){for(var t=0;t<n.rows.length;t++)n.rows[t].deleteCell(-1);e()}}),e()});
//# sourceMappingURL=index.9362e88f.js.map
