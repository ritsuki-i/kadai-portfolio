const buttons = document.getElementsByClassName('qualification-responsive-name');
      for( let i=0; i<buttons.length; i++ ) {
        buttons[i].addEventListener('click', function() {
          const detail = this.nextElementSibling;
          if(detail.className == 'detail-hidden'){
            this.style.backgroundColor = "#00000036";
            detail.className = 'detail-show';
          }
          else{
            this.style.backgroundColor = "#FFFFFF";
            detail.className = 'detail-hidden';
          }
        });
      }