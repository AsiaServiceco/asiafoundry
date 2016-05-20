// JavaScript Document
/*! Superslides - v0.6.2 - 2013-07-10
 * https://github.com/nicinabox/superslides
 * Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(e, t) {
  var n, r = "superslides";
  n = function(n, r) {
    function f(e) {
      e.addClass("show")
    }
    this.options = t.extend({
      play : false,
      animation_speed : 600,
      animation_easing : "swing",
      animation : "slide",
      inherit_width_from : e,
      inherit_height_from : e,
      pagination : true,
      hashchange : false,
      scrollable : true,
      elements : {
        preserve : ".preserve",
        nav : ".wd_nav_slider",
        container : ".slides-container",
        pagination : ".slides-pagination"
      }
    }, r);
    var i = this, s = t("<div>", {
      "class" : "slides-control"
    }), o = 1;
    this.$el = t(n);
    this.$container = this.$el.find(this.options.elements.container);
    var u = function() {
      o = i._findMultiplier();
      i.$el.on("click", i.options.elements.nav + " a", function(e) {
        e.preventDefault();
        i.stop();
        if (t(this).hasClass("next")) {
          i.animate("next", function() {
            i.start()
          })
        } else {
          i.animate("prev", function() {
            i.start()
          })
        }
        /*t(i.$container).find(".container.center").each(function(e) {
          t(this).css("left", "calc(50% - " + t(this).outerWidth() / 2 + "px)")
        })*/
      });
      t(document).on("keyup", function(e) {
        if (e.keyCode === 37) {
          i.animate("prev")
        }
        if (e.keyCode === 39) {
          i.animate("next")
        }
      });
      t(e).on("resize", function() {
        setTimeout(function() {
          var e = i.$container.children();
          i.width = i._findWidth();
          i.height = i._findHeight();
          e.css({
            width : i.width,
            left : i.width
          });
          i.css.containers();
          i.css.images()
        }, 10)
      });
      t(e).on("hashchange", function() {
        var e = i._parseHash(), t;
        if (e && !isNaN(e)) {
          t = i._upcomingSlide(e - 1)
        } else {
          t = i._upcomingSlide(e)
        }
        if (t >= 0 && t !== i.current) {
          i.animate(t)
        }
      });
      i.pagination._events();
      i.start();
      return i
    };
    var a = {
      containers : function() {
        if (i.init) {
          i.$el.css({
            height : i.height
          });
          i.$control.css({
            width : i.width * o,
            left : -i.width
          });
          i.$container.css({})
        } else {
          t("body").css({
            margin : 0
          });
          i.$el.css({
            position : "relative",
            overflow : "hidden",
            width : "100%",
            height : i.height
          });
          i.$control.css({
            position : "relative",
            transform : "translate3d(0)",
            height : "100%",
            width : i.width * o,
            left : -i.width
          });
          i.$container.css({
            display : "none",
            margin : "0",
            padding : "0",
            listStyle : "none",
            position : "relative",
            height : "100%"
          })
        }
        if (i.size() === 1) {
          i.$el.find(i.options.elements.nav).hide()
        }
      },
      images : function() {
        var e = i.$container.find("img").not(i.options.elements.preserve);
        e.removeAttr("width").removeAttr("height").css({
          "-webkit-backface-visibility" : "hidden",
          "-ms-interpolation-mode" : "bicubic",
          position : "absolute",
          left : "0",
          top : "0",
          "z-index" : "-1",
          "max-width" : "none"
        });
        e.each(function() {
          var e = i.image._aspectRatio(this), n = this;
          if (!t.data(this, "processed")) {
            var r = new Image;
            r.onload = function() {
              i.image._scale(n, e);
              i.image._center(n, e);
              t.data(n, "processed", true)
            };
            r.src = this.src
          } else {
            i.image._scale(n, e);
            i.image._center(n, e);
          }
        });
      },
      children : function() {
        var e = i.$container.children();
        if (e.is("img")) {
          e.each(function() {
            if (t(this).is("img")) {
              t(this).wrap("<div>");
              var e = t(this).attr("id");
              t(this).removeAttr("id");
              t(this).parent().attr("id", e)
            }
          });
          e = i.$container.children()
        }
        if (!i.init) {
          e.css({
            display : "none",
            left : i.width * 2
          })
        }
        e.css({
          position : "absolute",
          overflow : "hidden",
          height : "100%",
          width : i.width,
          top : 0,
          zIndex : 0
        })
      }
    };
    var l = {
      slide : function(e, t) {
        var n = i.$container.children(), r = n.eq(e.upcoming_slide);
        r.css({
          left : e.upcoming_position,
          display : "block"
        });
        i.$control.animate({
          left : e.offset
        }, i.options.animation_speed, i.options.animation_easing, function() {
          if (i.size() > 1) {
            i.$control.css({
              left : -i.width
            });
            n.eq(e.upcoming_slide).css({
              left : i.width,
              zIndex : 2
            });
            if (e.outgoing_slide >= 0) {
              n.eq(e.outgoing_slide).css({
                left : i.width,
                display : "none",
                zIndex : 0
              })
            }
          }
          t()
        })
      },
      customSlide : function(e, n) {
        var r = i.$container.children(), s = r.eq(e.upcoming_slide);
        s.css({
          left : e.upcoming_position,
          display : "block"
        });
        
        if( r.length <= 1 && e.outgoing_slide != -1) {
          return false;
        }
        
        var o = e.upcoming_slide == (r.length - 1) ? 0 : e.upcoming_slide + 1;
        var u = e.upcoming_slide == 0 ? r.length - 1 : e.upcoming_slide - 1;
        
        if (e.outgoing_slide == -1) {
          u = r.length - 1;
        }
        
        var a = t(".slider-thumbnail-" + o + " img").attr("src");
        var l = t(".slider-thumbnail-" + u + " img").attr("src");
        t(".wd_nav_slider .next img").attr("src", a);
        t(".wd_nav_slider .prev img").attr("src", l);
        var c = e.outgoing_slide + 1;
        var h = e.upcoming_slide + 1;
        t(i.$control).find(".slides-container li:nth-child(" + c + ") .container").removeClass("show");
        setTimeout(function() {
          f(t(i.$control).find(".slides-container li:nth-child(" + h + ") .container"));
        }, 700);
        i.$control.animate({
          left : e.offset
        }, i.options.animation_speed, i.options.animation_easing, function() {
          if (i.size() > 1) {
            i.$control.css({
              left : -i.width
            });
            r.eq(e.upcoming_slide).css({
              left : i.width,
              zIndex : 2
            });
            if (e.outgoing_slide >= 0) {
              r.eq(e.outgoing_slide).css({
                left : i.width,
                display : "none",
                zIndex : 0
              });
            }
          }
          n();
        });
      },
      fade : function(e, t) {
        var n = this, r = n.$container.children(), i = r.eq(e.outgoing_slide), s = r.eq(e.upcoming_slide);
        s.css({
          left : this.width,
          opacity : 1,
          display : "block"
        });
        if (e.outgoing_slide >= 0) {
          i.animate({
            opacity : 0
          }, n.options.animation_speed, n.options.animation_easing, function() {
            if (n.size() > 1) {
              r.eq(e.upcoming_slide).css({
                zIndex : 2
              });
              if (e.outgoing_slide >= 0) {
                r.eq(e.outgoing_slide).css({
                  opacity : 1,
                  display : "none",
                  zIndex : 0
                })
              }
            }
            t()
          })
        } else {
          s.css({
            zIndex : 2
          });
          t()
        }
      }
    };
    l = t.extend(l, t.fn.superslides.fx);
    var c = {
      _centerY : function(e) {
        var n = t(e);
        n.css({
          top : (i.height - n.height()) / 2
        })
      },
      _centerX : function(e) {
        var n = t(e);
        n.css({
          left : (i.width - n.width()) / 2
        })
      },
      _center : function(e) {
        i.image._centerX(e);
        i.image._centerY(e)
      },
      _aspectRatio : function(e) {
        if (!e.naturalHeight && !e.naturalWidth) {
          var t = new Image;
          t.src = e.src;
          e.naturalHeight = t.height;
          e.naturalWidth = t.width
        }
        return e.naturalHeight / e.naturalWidth
      },
      _scale : function(e, n) {
        n = n || i.image._aspectRatio(e);
        var r = i.height / i.width, s = t(e);
        if (r > n) {
          s.css({
            height : i.height,
            width : i.height / n
          })
        } else {
          s.css({
            height : i.width * n,
            width : i.width
          })
        }
      }
    };
    var h = {
      _setCurrent : function(e) {
        if (!i.$pagination) {
          return
        }
        var t = i.$pagination.children();
        t.removeClass("current");
        t.eq(e).addClass("current")
      },
      _addItem : function(e) {
        var n = e + 1, r = n, s = i.$container.children().eq(e), o = s.attr("id");
        if (o) {
          r = o
        }
        var u = t("<a>", {
          href : "#" + r,
          text : r
        });
        u.appendTo(i.$pagination)
      },
      _setup : function() {
        if (!i.options.pagination || i.size() === 1) {
          return
        }
        var e = t("<nav>", {
          "class" : i.options.elements.pagination.replace(/^\./, "")
        });
        i.$pagination = e.appendTo(i.$el);
        for (var n = 0; n < i.size(); n++) {
          i.pagination._addItem(n)
        }
      },
      _events : function() {
        i.$el.on("click", i.options.elements.pagination + " a", function(e) {
          e.preventDefault();
          var t = i._parseHash(this.hash), n = i._upcomingSlide(t - 1);
          if (n !== i.current) {
            i.animate(n, function() {
              i.start()
            })
          }
        })
      }
    };
    this.css = a;
    this.image = c;
    this.pagination = h;
    this.fx = l;
    this.animation = this.fx[this.options.animation];
    this.$control = this.$container.wrap(s).parent(".slides-control");
    i._findPositions();
    i.width = i._findWidth();
    i.height = i._findHeight();
    this.css.children();
    this.css.containers();
    this.css.images();
    this.pagination._setup();
    return u()
  };
  n.prototype = {
    _findWidth : function() {
      return t(this.options.inherit_width_from).width()
    },
    _findHeight : function() {
      return t(this.options.inherit_height_from).height()
    },
    _findMultiplier : function() {
      return this.size() === 1 ? 1 : 3
    },
    _upcomingSlide : function(e) {
      if (/next/.test(e)) {
        return this._nextInDom()
      } else if (/prev/.test(e)) {
        return this._prevInDom()
      } else if (/\d/.test(e)) {
        return +e
      } else if (e && /\w/.test(e)) {
        var t = this._findSlideById(e);
        if (t >= 0) {
          return t
        } else {
          return 0
        }
      } else {
        return 0
      }
    },
    _findSlideById : function(e) {
      return this.$container.find("#" + e).index()
    },
    _findPositions : function(e, t) {
      t = t || this;
      if (e === undefined) {
        e = -1
      }
      t.current = e;
      t.next = t._nextInDom();
      t.prev = t._prevInDom()
    },
    _nextInDom : function() {
      var e = this.current + 1;
      if (e === this.size()) {
        e = 0
      }
      return e
    },
    _prevInDom : function() {
      var e = this.current - 1;
      if (e < 0) {
        e = this.size() - 1
      }
      return e
    },
    _parseHash : function(t) {
      t = t || e.location.hash;
      t = t.replace(/^#/, "");
      if (t && !isNaN(+t)) {
        t = +t
      }
      return t
    },
    size : function() {
      return this.$container.children().length
    },
    destroy : function() {
      return this.$el.removeData()
    },
    update : function() {
      this.css.children();
      this.css.containers();
      this.css.images();
      this.pagination._addItem(this.size());
      this._findPositions(this.current);
      this.$el.trigger("updated.slides")
    },
    stop : function() {
      clearInterval(this.play_id);
      delete this.play_id;
      this.$el.trigger("stopped.slides")
    },
    start : function() {
      var n = this;
      if (n.options.hashchange) {
        t(e).trigger("hashchange")
      } else {
        this.animate()
      }
      if (this.options.play) {
        if (this.play_id) {
          this.stop()
        }
        this.play_id = setInterval(function() {
          n.animate()
        }, this.options.play)
      }
      this.$el.trigger("started.slides")
    },
    animate : function(t, n) {
      var r = this, i = {};
      if (this.animating) {
        return
      }
      this.animating = true;
      if (t === undefined) {
        t = "next"
      }
      i.upcoming_slide = this._upcomingSlide(t);
      if (i.upcoming_slide >= this.size()) {
        return
      }
      i.outgoing_slide = this.current;
      i.upcoming_position = this.width * 2;
      i.offset = -i.upcoming_position;
      if (t === "prev" || t < i.outgoing_slide) {
        i.upcoming_position = 0;
        i.offset = 0
      }
      if (r.size() > 1) {
        r.pagination._setCurrent(i.upcoming_slide)
      }
      if (r.options.hashchange) {
        var s = i.upcoming_slide + 1, o = r.$container.children(":eq(" + i.upcoming_slide + ")").attr("id");
        if (o) {
          e.location.hash = o
        } else {
          e.location.hash = s
        }
      }
      r.$el.trigger("animating.slides", [i]);
      r.animation(i, function() {
        r._findPositions(i.upcoming_slide, r);
        if ( typeof n === "function") {
          n()
        }
        r.animating = false;
        r.$el.trigger("animated.slides");
        if (!r.init) {
          r.$el.trigger("init.slides");
          r.init = true;
          r.$container.fadeIn("fast")
        }
      })
    }
  };
  t.fn[r] = function(e, i) {
    var s = [];
    this.each(function() {
      var o, u, a;
      o = t(this);
      u = o.data(r);
      a = typeof e === "object" && e;
      if (!u) {
        s = o.data(r, u = new n(this, a))
      }
      if ( typeof e === "string") {
        s = u[e];
        if ( typeof s === "function") {
          return s = s.call(u, i)
        }
      }
    });
    return s
  };
  t.fn[r].fx = {}
})(this, jQuery);
