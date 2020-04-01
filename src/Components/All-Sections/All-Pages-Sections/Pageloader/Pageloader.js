import React from 'react'
import './Page;oader.scss';
import $ from 'jquery'
export default function Pageloader() {
    $(document).ready(function() {
 
        // Fakes the loading setting a timeout
          setTimeout(function() {
              $('body').addClass('loaded');
          }, 5000);
       
      });
    return (
        <div>
            <div id="loader-wrapper">
  <div id="loader"></div>
  
  <div class="loader-section section-left"></div>
  <div class="loader-section section-right"></div>
  
</div>
        </div>
    )
}
