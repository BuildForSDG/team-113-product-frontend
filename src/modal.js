

// Get the modal
const modal = document.getElementById('id01');
 const button = document. getElementById('btn');
 const clear = document.getElementById('cancel');

 button.onclick = () => {
            modal.style.display = "block";
   };
 
   clear.onclick = () => {
            modal.style.display = "none";
   };


// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}


