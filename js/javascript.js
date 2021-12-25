  AOS.init({
  duration: 1000,
})
/////////////script to create sticky header////////////// 

jQuery(function(){
    createSticky(jQuery("#sticky-wrap"));
});

function createSticky(sticky) {
    if (typeof sticky != "undefined") {

        var pos = sticky.offset().top + 150,
            win = jQuery(window);

        win.on("scroll", function() {

            if( win.scrollTop() > pos ) {
                sticky.addClass("stickyhead");
            } else {
                sticky.removeClass("stickyhead");
            }           
        });         
    }
}


////////////script to create toggle nav/////////////////



   const navbar = document.querySelector('.navbar');

navbar.querySelector('.toggle').addEventListener('click', () => {

  navbar.classList.toggle('collapsed');

});





///////////////script to create menu tab list///////////////


    $(function() {
  
  // Cache selectors
  var tabs = $('.tablist__tab'),
      tabPanels = $('.tablist__panel');
  
  tabs.on('click', function() {
  
    // Cache selectors
    var thisTab = $(this),
        thisTabPanelId = thisTab.attr('aria-controls'),
        thisTabPanel = $('#' + thisTabPanelId);

    // De-select all the tabs
    tabs.attr('aria-selected', 'false').removeClass('is-active');

    // Select this tab
    thisTab.attr('aria-selected', 'true').addClass('is-active');

    // Hide all the tab panels
    tabPanels.attr('aria-hidden', 'true').addClass('is-hidden');

    // Show this tab panel
    thisTabPanel.attr('aria-hidden', 'false').removeClass('is-hidden');

  });
  
  // Add enter key to the basic click event
  tabs.on('keydown', function(e) {
    
    var thisTab = $(this);
    
    if(e.which == 13) {
      thisTab.click();
    }
    
  });
  
});

///////////////datepicker///////////////


$( "#datepicker" ).datepicker({
  inline: true
});




























