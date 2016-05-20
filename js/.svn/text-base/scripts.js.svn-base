// JavaScript Document
jQuery(document).ready(function($) {
  "use strict";
  
  //**************** ISOTOPE ******************************/
 $(window).load(function(){
     var $container = $('.wd_portfolio_isotop_content');
      // init
      $container.isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows',
        filter: '*',    
      });      
      
       $('#filters a').click(function(){
            $('#filters .current').removeClass('current');
            $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({ filter: selector });
      return false;
    });
 	});
    /*----------------------------*/
  
  //**************** Menu ******************************/
  /* Get browser */
  $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());  
  $.browser.androidChome = /Android.+Chrome|CrMo/.test(navigator.userAgent);
  var ismobile = false,
      alwaysDispalyMenu = ( themeParams.MenuStyle == 'fixed' ) ? true : false; 
    
  function closemeny(){
    if( !ismobile && !alwaysDispalyMenu){
      meny.close();
    }else{
      $('.meny.mobile').css('left', -250);
      $('.meny.mobile').css('display', 'none');
    }
    meny.close();
    $('.show-menu').removeClass('moved');     
    $('.show-menu i').removeClass('icon-double-angle-left');
    $('.show-menu i').addClass('icon-reorder');
  

  }   
   
  function openmeny(){
    //if( !ismobile ){
      meny.open();
    /*}else{
      $('.meny.mobile').css('left', 0);
      $('.meny.mobile').css('display', 'block');
    } */     
    $('.show-menu').addClass('moved');    
    $('.show-menu i').addClass('icon-double-angle-left');
    $('.show-menu i').removeClass('icon-reorder');
  }   
   
  function isMenyOpen(){
    if( ( !ismobile && meny.isOpen() ) || (  $('.meny.mobile').css('left') == '0px' ) ){
      return true;
    }else{
      return false;
    } 
  }
  
  if( $.browser.androidChome || isMobile ){
    ismobile = true;
  }
    
 var isFront = false,
     contentsElementTag = 'div.page';
 if ($('body').hasClass('home')) {
   isFront = true;
   //contentsElementTag = '.pt-perspective';
 }


    
  $('.show-meny').on( 'click', function(ev) { 
    if(isMenyOpen()){
      closemeny();
    }else{
      openmeny();
    } 
    ev.preventDefault(); 
  });


  if ( $('html').attr('dir') == 'rtl' ) {
     var meny = Meny.create({
      menuElement: document.querySelector( '.meny' ),
      contentsElement: document.querySelector( contentsElementTag ),
      position: 'right',
      height: 200,
      width: 240,
      overlap: -1,
      mouse: false,
      MenuStyle: themeParams.MenuStyle, 
      touch: true
    });
  } else {
       var meny = Meny.create({
      menuElement: document.querySelector( '.meny' ),
      contentsElement: document.querySelector( contentsElementTag ),
      position: 'left',
      height: 200,
      width: 240,
      overlap: -1,
      mouse: false,
      MenuStyle: themeParams.MenuStyle, 
      touch: true
    });
  }

  //if( !ismobile ){
    
    
    if( alwaysDispalyMenu && !ismobile ){
      meny.open();
    }
    
    window.onload = window.onresize = function () {
      $('.meny').css('height', $(document).height() - 8);
    };
      
    // add 'moved' class to 
    meny.addEventListener( 'open',  function() {    
      $('.show-menu').addClass('moved');    
      $('.show-menu i').addClass('fa-angle-double-left');
      $('.show-menu i').removeClass('fa-bars');  
    });
    meny.addEventListener( 'close', function() { 
      $('.show-menu').removeClass('moved');     
      $('.show-menu i').removeClass('fa-angle-double-left');
      $('.show-menu i').addClass('fa-bars'); 
    });  
  /*}else{
    $('.meny').addClass('mobile');
    $('body > .show-menu').addClass('mobile');
  }*/
  //**************** Homepage Slider ******************************/  
  
  var wd_play_slider = $('#slides').data('wd_play');
  var theSlider = $('#slides').superslides({
      animation: 'customSlide',
      play : wd_play_slider,
      inherit_width_from: document.getElementById('spaces-main')
    });  
  
  
       
  $(window).resize(function() {    
    $('.vega-nav').css('top', ($('section.home-page').height() / 2) );
  });
  
  $('.home-text h1 span').addClass('show');


  
  var $main = $( '#spaces-main' ),
  $pages = $main.children( 'section.page-section' ),
  $iterate = $( '#iterateEffects' ),
  animcursor = 1,
  pagesCount = $pages.length,
  current = 0,
  isAnimating = false,
  endCurrPage = false,
  endNextPage = false,
  animEndEventNames = {
    'WebkitAnimation' : 'webkitAnimationEnd',
    'OAnimation' : 'oAnimationEnd',
    'msAnimation' : 'MSAnimationEnd',
    'animation' : 'animationend'
  },
  // animation end event name
  animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
  // support css animations
  support = Modernizr.cssanimations;
  

  setTimeout(function() {
    if(window.location.hash && window.location.hash != '#home' && window.location.hash != '#Home') {
      locationHashChanged();
    }
   }, 1500);
  
  
  // add inline-list calss to Skills fields in project page
  $('.field-name-field-skills ul.links').addClass('inline-list');
  
  
  
  $('.portfolio-item-link').hover(function() {
        var $this = $(this);
        if(Modernizr.csstransitions) {
            $('.plus-icon', $this).addClass('animated');
            $('.plus-icon', $this).css('display', 'block');
            $('.plus-icon', $this).removeClass('rollOut'); 
            $('.plus-icon', $this).addClass('fadeInUp'); 
            
            $('figcaption h3', $this).addClass('animated');
            $('figcaption h3', $this).removeClass('fadeOutUp'); 
            $('figcaption h3', $this).addClass('fadeInUp'); 
        }else{
            $('.plus-icon', $this).stop(true, false).fadeIn('fast');
        }
    }, function() {
        var $this = $(this);
        if(Modernizr.csstransitions) {
            $('.plus-icon', $this).removeClass('fadeInUp'); 
            $('.plus-icon', $this).addClass('rollOut');
            $('.plus-icon', $this).css('display', 'none');
            $('.plus-icon', $this).removeClass('animated');
            
            $('figcaption h3', $this).removeClass('fadeInDown'); 
            $('figcaption h3', $this).addClass('fadeOutUp'); 
            $('.plus-icon', $this).removeClass('animated');
        }else{
            $('.plus-icon', $this).stop(true, false).fadeOut('fast');
        }
    });
  
  $("#blog-gallery").responsiveSlides({
           nav: true,
            prevText: "",
            nextText: "",
          });
  
  /**
   * Load new post when the link is clicked.
   */
  $('.portfolio-item').click(function(event) {
      var that = this;
      
      //$('body').css('cursor', 'wait');
      $(this).append('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
      
      var $post_id = $(this).data('id');
    
      // Show that we're working.
      $('.page-section-current #project-info').html('<div class="text-center"><div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div></div>');
      
      $('.page-section-current #project-info').load("?p=" + $post_id + ' #content',
        function() {
          
          $("html, body, .page-section-current").animate({ scrollTop: "0" },1000);
          $('.page-section-current #project-info').removeClass('hide');
          
          
          $('.page-section-current #project-info').css('display' , 'block');
          
          $('.page-section-current #project-info .project-images').addClass('animated');
          $('.page-section-current #project-info .project-images').addClass('flipInX'); 
          
          $('.page-section-current #project-info .project-title').addClass('animated');
          $('.page-section-current #project-info .project-title').addClass('zoomInDown'); 
          
          $('.page-section-current #project-info .project-content').addClass('animated');
          $('.page-section-current #project-info .project-content').addClass('flipInX'); 
          
          
          //$('body').css('cursor', 'auto');
          
          $(that).find('.ajax-progress-throbber').remove();
          

          $(".project-images ul").responsiveSlides({
            nav: true,
            prevText: "",
            nextText: "",
          });


        }
      );  
    return false;
  });    
 
  $('.portfolio-item .use-ajax').on( 'click', function() {  
    $('#project-info').removeClass('hide');  
    $('#project-info').html('<div class="text-center"><div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div></div>');
    $('.page-section.portfolio-page').animate({
        scrollTop: 0
      }, 800);
  });
  
   
  $(document).on("click", "#project-info .back", function(){ 
    $(this).parent().parent().hide(500);
    $(this).parent().html('<i class="fa fa-times back"></i>');
  }); 
  
  
  /**
   * Load new post when the link is clicked.
   */
  $( document ).on( "click", '.galleries-item', function() {
      var that = this;
      
      var $post_id = $(this).attr('data-id');
    
      // Show that we're working.
      //$('#project-info').html( loader_1 );
      

      $('#project-info').load("?p=" + $post_id + ' #content',
        function() {
          
          $("html, body, .page-section-current").animate({ scrollTop: "0" },1000);
          $('#project-info').removeClass('hide');
          
          
          $('#project-info').css('display' , 'block');
          
      
          // wait the popp to be ready then apply the slider 
           // Show that we're working.
          //$('#project-info').append( loader_1 );
          
          $('#slides').waitForImages({
            finished: function() {
              $('#slides').superslides({
                animation: 'customSlide'
              });
              $('#spinningSquaresG', '#project-info').remove();
            },
            each: function() {
              //alert('image loaded ..');
            },
            waitForAll: true
          });
  
          history.pushState( null, null, $('#permalink').val() );
        }
      );

    return false;
  });
  
  
   
      
  
  
  $('.vertical-menu').animate({width: [ "toggle", "linear" ] }, 80, "linear");
  
  
  /**  ------------ Maps -------------------
  **/
     function initializeMap() {
        var styles = [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -100
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -100
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -10
            }, {
                "lightness": 30
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }, {
                "lightness": 10
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }, {
                "lightness": 60
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": -100
            }, {
                "lightness": 60
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": -100
            }, {
                "lightness": 60
            }]
        }];

        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });

        var mapOptions = {
            scaleControl: true,
            scrollwheel: false,
            center: new google.maps.LatLng(latitude, longitude),
            zoom: wd_zoom,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }

        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        var image = window.location.origin + window.location.pathname + 'wp-content/themes/tita-3d/images/marker_icon.png';
        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            position: map.getCenter()
        });
        
        var infowindow = new google.maps.InfoWindow();
        if( companyname !=  ""){
          companyname = "<h4>" + companyname + "</h4>";
        }
        infowindow.setContent( "<div class='map-description'>" + companyname + " " + description + "</div>" );
        
        infowindow.open(map, marker);

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }
   if ($('#map-canvas').length > 0) {
    
    var latitude = $('#map-canvas').data('latitude'),
        longitude = $('#map-canvas').data('longitude'),
        wd_zoom = $('#map-canvas').data('zoom'),
        companyname = $('#map-canvas').data('companyname'),
        imagepath = $('#map-canvas').data('imagepath'),
        description = $('#map-canvas').data('decription');
    if (imagepath=="") {
        var image_markup = '';
    } else{
        var image_markup = '<div class="map-img"><img src="' + imagepath + '" alt="" width="320px"></div>';
    }



    google.maps.event.addDomListener(window, 'load', initializeMap);
  }
  
  
  
  // when hash on the URL changed
  function locationHashChanged() { 
    $('.vertical-menu').hide({width: [ "toggle", "linear" ] }, 80, "linear");
    var pagesClasses = new Array();
    $.each( $pages, function(ind, itm){
      var classList = itm.className.split(/\s+/);
      var sectionclass = classList[1].replace('-page','');
      pagesClasses.push( sectionclass );
    });
    
    var hash = 'home';
    if(window.location.hash) {
      hash = window.location.hash.substring(1);
    }  
    
    var wd_animcursor = parseInt( themeParams.pageTransition );
    var hashIndex = jQuery.inArray( hash, pagesClasses );     
    if( hashIndex !== -1 ) {
      animcursor = wd_animcursor;
      closemeny();
      nextPage( animcursor, hashIndex );
      
      // blog entries animation
      //if( hash == 'blog') {
        $(".blog-page.page-section-current li article").delay(220).queue(function(n) {
            $(this).addClass('animated bounceInRight');
            n();
            setTimeout(function() {
              $(".blog-page.page-section-current li article").removeClass('animated bounceInRight');
            }, 2000);
        });
      //}
    };
  }
  window.onhashchange = locationHashChanged;
  


  function init() {

    $pages.each( function() {
      var $page = $( this );
      $page.data( 'originalClassList', $page.attr( 'class' ) );
    } );

    $pages.eq( current ).addClass( 'page-section-current' );

    $iterate.on( 'click', function() {
      var $pageindex = 0;
      if( isAnimating ) {
        return false;
      }
      if( animcursor > 67 ) {
        animcursor = 1;
      }
      nextPage( animcursor );
      ++animcursor;
    } );
    
    $('.goto').on( 'click', function() {
      if( isAnimating ) {
        return false;
      }      
      $pageindex = $(this).data('pageindex');      
      if( current != $pageindex ){        
        nextPage( animcursor, $(this).data('pageindex') );
      }
      
      // add active class to active menu item
      $('.vertical-menu .menu-list li a').each(function(i,j){
        if( $pageindex == $(this).data('pageindex') ){
          $(this).addClass("active");
        }else{
          $(this).removeClass("active");
        }
      });
      
      // space animation
      if( $pageindex == 0 ) {        
        $('.space').queue(function(n) {
          $(this).addClass('animated bounceInRight');
          n();
          setTimeout(function() {
            $(".space").removeClass('animated bounceInRight');
          }, 200);
        });
      }
      
    } );    

  }

  function nextPage( animation, cur) {

    if( isAnimating ) {
      return false;
    }

    isAnimating = true;
    
    var $currPage = $pages.eq( current );
    
    if(typeof cur == 'undefined'){
      current = 0;
    }else{
      current = cur;
    }
    
    var $nextPage = $pages.eq( current ).addClass( 'page-section-current' );
    
    var outClass = '', inClass = '';

    switch( animation ) {

      case 1:
        outClass = 'pt-page-moveToLeft';
        inClass = 'pt-page-moveFromRight';
        break;
      case 2:
        outClass = 'pt-page-moveToRight';
        inClass = 'pt-page-moveFromLeft';
        break;
      case 3:
        outClass = 'pt-page-moveToTop';
        inClass = 'pt-page-moveFromBottom';
        break;
      case 4:
        outClass = 'pt-page-moveToBottom';
        inClass = 'pt-page-moveFromTop';
        break;
      case 5:
        outClass = 'pt-page-fade';
        inClass = 'pt-page-moveFromRight pt-page-ontop';
        break;
      case 6:
        outClass = 'pt-page-fade';
        inClass = 'pt-page-moveFromLeft pt-page-ontop';
        break;
      case 7:
        outClass = 'pt-page-fade';
        inClass = 'pt-page-moveFromBottom pt-page-ontop';
        break;
      case 8:
        outClass = 'pt-page-fade';
        inClass = 'pt-page-moveFromTop pt-page-ontop';
        break;
      case 9:
        outClass = 'pt-page-moveToLeftFade';
        inClass = 'pt-page-moveFromRightFade';
        break;
      case 10:
        outClass = 'pt-page-moveToRightFade';
        inClass = 'pt-page-moveFromLeftFade';
        break;
      case 11:
        outClass = 'pt-page-moveToTopFade';
        inClass = 'pt-page-moveFromBottomFade';
        break;
      case 12:
        outClass = 'pt-page-moveToBottomFade';
        inClass = 'pt-page-moveFromTopFade';
        break;
      case 13:
        outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
        inClass = 'pt-page-moveFromRight';
        break;
      case 14:
        outClass = 'pt-page-moveToRightEasing pt-page-ontop';
        inClass = 'pt-page-moveFromLeft';
        break;
      case 15:
        outClass = 'pt-page-moveToTopEasing pt-page-ontop';
        inClass = 'pt-page-moveFromBottom';
        break;
      case 16:
        outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
        inClass = 'pt-page-moveFromTop';
        break;
      case 17:
        outClass = 'pt-page-scaleDown';
        inClass = 'pt-page-moveFromRight pt-page-ontop';
        break;
      case 18:
        outClass = 'pt-page-scaleDown';
        inClass = 'pt-page-moveFromLeft pt-page-ontop';
        break;
      case 19:
        outClass = 'pt-page-scaleDown';
        inClass = 'pt-page-moveFromBottom pt-page-ontop';
        break;
      case 20:
        outClass = 'pt-page-scaleDown';
        inClass = 'pt-page-moveFromTop pt-page-ontop';
        break;
      case 21:
        outClass = 'pt-page-scaleDown';
        inClass = 'pt-page-scaleUpDown pt-page-delay300';
        break;
      case 22:
        outClass = 'pt-page-scaleDownUp';
        inClass = 'pt-page-scaleUp pt-page-delay300';
        break;
      case 23:
        outClass = 'pt-page-moveToLeft pt-page-ontop';
        inClass = 'pt-page-scaleUp';
        break;
      case 24:
        outClass = 'pt-page-moveToRight pt-page-ontop';
        inClass = 'pt-page-scaleUp';
        break;
      case 25:
        outClass = 'pt-page-moveToTop pt-page-ontop';
        inClass = 'pt-page-scaleUp';
        break;
      case 26:
        outClass = 'pt-page-moveToBottom pt-page-ontop';
        inClass = 'pt-page-scaleUp';
        break;
      case 27:
        outClass = 'pt-page-scaleDownCenter';
        inClass = 'pt-page-scaleUpCenter pt-page-delay400';
        break;
      case 28:
        outClass = 'pt-page-rotateRightSideFirst';
        inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
        break;
      case 29:
        outClass = 'pt-page-rotateLeftSideFirst';
        inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
        break;
      case 30:
        outClass = 'pt-page-rotateTopSideFirst';
        inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
        break;
      case 31:
        outClass = 'pt-page-rotateBottomSideFirst';
        inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
        break;
      case 32:
        outClass = 'pt-page-flipOutRight';
        inClass = 'pt-page-flipInLeft pt-page-delay500';
        break;
      case 33:
        outClass = 'pt-page-flipOutLeft';
        inClass = 'pt-page-flipInRight pt-page-delay500';
        break;
      case 34:
        outClass = 'pt-page-flipOutTop';
        inClass = 'pt-page-flipInBottom pt-page-delay500';
        break;
      case 35:
        outClass = 'pt-page-flipOutBottom';
        inClass = 'pt-page-flipInTop pt-page-delay500';
        break;
      case 36:
        outClass = 'pt-page-rotateFall pt-page-ontop';
        inClass = 'pt-page-scaleUp';
        break;
      case 37:
        outClass = 'pt-page-rotateOutNewspaper';
        inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
        break;
      case 38:
        outClass = 'pt-page-rotatePushLeft';
        inClass = 'pt-page-moveFromRight';
        break;
      case 39:
        outClass = 'pt-page-rotatePushRight';
        inClass = 'pt-page-moveFromLeft';
        break;
      case 40:
        outClass = 'pt-page-rotatePushTop';
        inClass = 'pt-page-moveFromBottom';
        break;
      case 41:
        outClass = 'pt-page-rotatePushBottom';
        inClass = 'pt-page-moveFromTop';
        break;
      case 42:
        outClass = 'pt-page-rotatePushLeft';
        inClass = 'pt-page-rotatePullRight pt-page-delay180';
        break;
      case 43:
        outClass = 'pt-page-rotatePushRight';
        inClass = 'pt-page-rotatePullLeft pt-page-delay180';
        break;
      case 44:
        outClass = 'pt-page-rotatePushTop';
        inClass = 'pt-page-rotatePullBottom pt-page-delay180';
        break;
      case 45:
        outClass = 'pt-page-rotatePushBottom';
        inClass = 'pt-page-rotatePullTop pt-page-delay180';
        break;
      case 46:
        outClass = 'pt-page-rotateFoldLeft';
        inClass = 'pt-page-moveFromRightFade';
        break;
      case 47:
        outClass = 'pt-page-rotateFoldRight';
        inClass = 'pt-page-moveFromLeftFade';
        break;
      case 48:
        outClass = 'pt-page-rotateFoldTop';
        inClass = 'pt-page-moveFromBottomFade';
        break;
      case 49:
        outClass = 'pt-page-rotateFoldBottom';
        inClass = 'pt-page-moveFromTopFade';
        break;
      case 50:
        outClass = 'pt-page-moveToRightFade';
        inClass = 'pt-page-rotateUnfoldLeft';
        break;
      case 51:
        outClass = 'pt-page-moveToLeftFade';
        inClass = 'pt-page-rotateUnfoldRight';
        break;
      case 52:
        outClass = 'pt-page-moveToBottomFade';
        inClass = 'pt-page-rotateUnfoldTop';
        break;
      case 53:
        outClass = 'pt-page-moveToTopFade';
        inClass = 'pt-page-rotateUnfoldBottom';
        break;
      case 54:
        outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
        inClass = 'pt-page-rotateRoomLeftIn';
        break;
      case 55:
        outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
        inClass = 'pt-page-rotateRoomRightIn';
        break;
      case 56:
        outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
        inClass = 'pt-page-rotateRoomTopIn';
        break;
      case 57:
        outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
        inClass = 'pt-page-rotateRoomBottomIn';
        break;
      case 58:
        outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
        inClass = 'pt-page-rotateCubeLeftIn';
        break;
      case 59:
        outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
        inClass = 'pt-page-rotateCubeRightIn';
        break;
      case 60:
        outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
        inClass = 'pt-page-rotateCubeTopIn';
        break;
      case 61:
        outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
        inClass = 'pt-page-rotateCubeBottomIn';
        break;
      case 62:
        outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
        inClass = 'pt-page-rotateCarouselLeftIn';
        break;
      case 63:
        outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
        inClass = 'pt-page-rotateCarouselRightIn';
        break;
      case 64:
        outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
        inClass = 'pt-page-rotateCarouselTopIn';
        break;
      case 65:
        outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
        inClass = 'pt-page-rotateCarouselBottomIn';
        break;
      case 66:
        outClass = 'pt-page-rotateSidesOut';
        inClass = 'pt-page-rotateSidesIn pt-page-delay200';
        break;
      case 67:
        outClass = 'pt-page-rotateSlideOut';
        inClass = 'pt-page-rotateSlideIn';
        break;

    }

    $currPage.addClass( outClass ).on( animEndEventName, function() {
      $currPage.off( animEndEventName );
      endCurrPage = true;
      if( endNextPage ) {
        onEndAnimation( $currPage, $nextPage );
      }
    } );

    $nextPage.addClass( inClass ).on( animEndEventName, function() {
      $nextPage.off( animEndEventName );
      endNextPage = true;
      if( endCurrPage ) {
        onEndAnimation( $currPage, $nextPage );
      }
    } );

    if( !support ) {
      onEndAnimation( $currPage, $nextPage );
    }

  }

  function onEndAnimation( $outpage, $inpage ) {
    endCurrPage = false;
    endNextPage = false;
    resetPage( $outpage, $inpage );
    isAnimating = false;
  }

  function resetPage( $outpage, $inpage ) {
    $outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
    $inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' page-section-current' );
  }

  init();

  return { init : init };

//})();


});