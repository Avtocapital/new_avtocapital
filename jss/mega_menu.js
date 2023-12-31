!(function (e) {
    var i = {
        logo_align: "left",
        links_align: "left",
        socialBar_align: "left",
        searchBar_align: "right",
        trigger: "hover",
        effect: "fade",
        effect_speed: 400,
        sibling: !0,
        outside_click_close: !0,
        top_fixed: !1,
        sticky_header: !1,
        sticky_header_height: 200,
        menu_position: "horizontal",
        full_width: !0,
        mobile_settings: { collapse: !1, sibling: !0, scrollBar: !0, scrollBar_height: 400, top_fixed: !1, sticky_header: !1, sticky_header_height: 200 },
    };
    e.fn.megaMenu = function (s) {
        return (
            (s = e.extend({}, i, s || {})),
            this.each(function () {
                var i,
                    a = e(this),
                    t = "li",
                    n = a.find(".menu-logo"),
                    l = n.children(t),
                    r = a.find(".menu-links"),
                    o = (r.children(t), a.find(".menu-social-bar")),
                    d = a.find(".menu-search-bar"),
                    c = ".drop-down-multilevel, .drop-down, .drop-down-tab-bar";
                (i = {
                    menu_full_width: function () {
                        !0 === s.full_width && a.addClass("menuFullWidth");
                    },
                    logo_Align: function () {
                        "right" === s.logo_align && n.addClass("menu-logo-align-right");
                    },
                    links_Align: function () {
                        "right" === s.links_align && r.addClass("menu-links-align-right");
                    },
                    social_bar_Align: function () {
                        "right" === s.socialBar_align && o.addClass("menu-social-bar-right");
                    },
                    search_bar_Align: function () {
                        "left" === s.searchBar_align && d.addClass("menu-search-bar-left");
                    },
                    collapse_trigger_button: function () {
                        if (!0 === s.mobile_settings.collapse) {
                            l.append('<div class="menu-mobile-collapse-trigger"><span></span></div>');
                            var i = r.add(o);
                            i.hide(0),
                                d.addClass("active"),
                                a.find(".menu-mobile-collapse-trigger").on("click", function () {
                                    return i.is(":hidden") ? (e(this).addClass("active"), i.show(0)) : (e(this).removeClass("active"), i.hide(0)), !1;
                                });
                        }
                    },
                    switch_effects: function () {
                        switch (s.effect) {
                            case "fade":
                                a.find(c).addClass("effect-fade");
                                break;
                            case "scale":
                                a.find(c).addClass("effect-scale");
                                break;
                            case "expand-top":
                                a.find(c).addClass("effect-expand-top");
                                break;
                            case "expand-bottom":
                                a.find(c).addClass("effect-expand-bottom");
                                break;
                            case "expand-left":
                                a.find(c).addClass("effect-expand-left");
                                break;
                            case "expand-right":
                                a.find(c).addClass("effect-expand-right");
                        }
                    },
                    transition_delay: function () {
                        a.find(c).css({ webkitTransition: "all " + s.effect_speed + "ms ease ", transition: "all " + s.effect_speed + "ms ease " });
                    },
                    hover_trigger: function () {
                        "hover" === s.trigger && (i.transition_delay(), a.find(c).parents(t).addClass("hoverTrigger"), i.switch_effects());
                    },
                    mobile_trigger: function () {
                        a.find(c).prev("a").append('<div class="mobileTriggerButton"></div>'),
                            a.find(".mobileTriggerButton").on("click", function () {
                                var i = e(this),
                                    n = i.parents("a"),
                                    l = n.next(c);
                                return (
                                    l.is(":hidden")
                                        ? (!0 === s.mobile_settings.sibling &&
                                              (i.parents(a).siblings("ul,li").find(c).hide(0), i.parents(a).siblings(t).removeClass("activeTriggerMobile"), i.parents(a).siblings("ul").find(t).removeClass("activeTriggerMobile")),
                                          n.parent(t).addClass("activeTriggerMobile"),
                                          l.show(0))
                                        : (n.parent(t).removeClass("activeTriggerMobile"), l.hide(0)),
                                    !1
                                );
                            }),
                            a.find("i.fa.fa-indicator").on("click", function () {
                                return !1;
                            });
                    },
                    click_trigger: function () {
                        "click" === s.trigger &&
                            (a.find(c).prev("a").append('<div class="desktopTriggerButton"></div>'),
                            a.find(c).parents(t).addClass("ClickTrigger"),
                            i.switch_effects(),
                            i.transition_delay(),
                            a.find(".desktopTriggerButton").on("click", function (i) {
                                i.stopPropagation(), i.stopImmediatePropagation();
                                var n = e(this),
                                    l = n.parents("a"),
                                    r = l.next(c);
                                r.hasClass("active")
                                    ? (l.parent(t).removeClass("activeTrigger"), r.removeClass("active"))
                                    : (!0 === s.sibling &&
                                          (n.parents(a).siblings("ul,li").find(c).removeClass("active"), n.parents(a).siblings(t).removeClass("activeTrigger"), n.parents(a).siblings("ul").find(t).removeClass("activeTrigger")),
                                      l.parent(t).addClass("activeTrigger"),
                                      r.addClass("active"));
                            }));
                    },
                    scroll_bar: function () {
                        !0 === s.mobile_settings.scrollBar && r.css({ maxHeight: s.mobile_settings.scrollBar_height + "px", overflow: "auto" });
                    },
                    top_Fixed: function () {
                        !0 === s.top_fixed && a.addClass("desktopTopFixed"), s.mobile_settings.top_fixed && a.addClass("mobileTopFixed");
                    },
                    sticky_Header: function () {
                        var i = e(window),
                            t = !0,
                            n = !0;
                        a.find(c).is(":hidden")
                            ? !0 === s.mobile_settings.sticky_header &&
                              !1 === s.top_fixed &&
                              i.on("scroll", function () {
                                  i.scrollTop() > s.mobile_settings.sticky_header_height ? !0 === n && (a.addClass("mobileTopFixed"), (n = !1)) : !1 === n && (a.removeClass("mobileTopFixed"), (n = !0));
                              })
                            : !0 === s.sticky_header &&
                              "horizontal" === s.menu_position &&
                              !1 === s.top_fixed &&
                              i.on("scroll", function () {
                                  i.scrollTop() > s.sticky_header_height
                                      ? !0 === t &&
                                        (a.fadeOut(200, function () {
                                            e(this).addClass("desktopTopFixed").fadeIn(200);
                                        }),
                                        (t = !1))
                                      : !1 === t &&
                                        (a.fadeOut(200, function () {
                                            e(this).removeClass("desktopTopFixed").fadeIn(200);
                                        }),
                                        (t = !0));
                              });
                    },
                    position: function () {
                        "vertical-left" === s.menu_position ? a.addClass("vertical-left") : "vertical-right" === s.menu_position && a.addClass("vertical-right");
                    },
                }).menu_full_width(),
                    i.logo_Align(),
                    i.links_Align(),
                    i.social_bar_Align(),
                    i.search_bar_Align(),
                    i.collapse_trigger_button(),
                    i.hover_trigger(),
                    i.mobile_trigger(),
                    i.click_trigger(),
                    i.scroll_bar(),
                    i.top_Fixed(),
                    i.sticky_Header(),
                    i.position(),
                    e(window).resize(function () {
                        i.sticky_Header();
                    });
            })
        );
    };
})(jQuery);
