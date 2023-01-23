// selecting elem

const gallery = document.querySelectorAll('.image');
previewBox = document.querySelector('.preview-box')
previewImg = previewBox.querySelector('img')
closeIcon = previewBox.querySelector('.icon')
currentImg = previewBox.querySelector('.current-img')
totalImg = previewBox.querySelector('.total-img')
shadow = document.querySelector('.shadow') 



window.onload =()=>{
    for (let i= 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i
        let clickImgIndex;
        gallery[i].onclick =()=>{
            
            clickImgIndex = newIndex;

            function preview(){
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector('img').src ;
                previewImg.src = selectedImgUrl
                
            };

            preview();

// prev and next 

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }

            preview();
            previewBox.classList.add('show');
            shadow.style.display = 'block';
            document.querySelector('body').style.overflow ='hidden'

            closeIcon.onclick =()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
                previewBox.classList.remove('show');
                shadow.style.display = 'none'
            }

        }
        
    }
}

