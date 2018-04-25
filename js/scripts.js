jQuery(document).ready(function(){
  // tell js to check html doc after finishing to load the page.
    jQuery("h1").click(function() {
    alert("This is a header.");
  });
  // js selects the h1 and click method creats and event listener that reacts after the header is clicked
  // after clicking the alert is called.

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});
