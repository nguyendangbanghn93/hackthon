$(document).ready(function () {
    hackthon = new function () {
        function cl(a, b, c) {
            (a || a == 0) && console.log(a);
            (b || b == 0) && console.log(b);
            (c || c == 0) && console.log(c);
        }
        function range(a, b) {
            var c = [];
            for (i = a; i <= b; i++) {
                c.push(i)
            }
            return c;
        }
        function iconMenu(o, text) {
            return $('<div>', { id: '', class: '', text: '' }).append(
                text && $('<div>', { id: '', class: 'df mb25', text: 'LIBRARY' }),
                o.map(function (d, i) {
                    return $('<div>', { id: '', class: 'df mb25 bấmĐc', text: '' }).append(
                        $('<div>', { id: '', class: 'w20', text: '' }).append(
                            $('<div>', { id: '', class: d.i + " fs11 c08 chk1h ta5", text: '' }),
                        ),
                        $('<div>', { id: '', class: 'w60 c08 chk1h ta5', text: d.t }),
                        d.n && $('<div>', { id: '', class: 'w20 tar pr10', text: d.n }),
                        d.e ?? ""
                    )
                })
            )
        }
        $.fn.extend({
            hoverB: function (o) {
                o = $.extend({
                    hướng: "bottom", //top, left, right
                    từ: "150%",
                    đến: "100%",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    thờiGian: 500,
                    đốiTượng: false,
                    nộiDung: $('<div>', { id: '', class: 'pa bgcf pa5', text: 'điền nội dung vào đây' }),
                }, o)
                var tran = o.thờiGian / 1000 + "s";
                return this.each(function () {
                    var t = $(this),
                        css1 = {
                            top: o.top ?? "",
                            bottom: o.bottom ?? "",
                            left: o.left ?? "",
                            right: o.right ?? "",
                            opacity: 0
                        },
                        css2 = {
                            top: o.top ?? "",
                            bottom: o.bottom ?? "",
                            left: o.left ?? "",
                            right: o.right ?? "",
                            opacity: 1
                        };
                    o.nộiDung.css({ position: "absolute", transition: tran })
                    switch (o.hướng) {
                        case "bottom":
                            $.extend(css1, { top: o.từ })
                            $.extend(css2, { top: o.đến })
                            break;
                        case "right":
                            $.extend(css1, { right: o.từ })
                            $.extend(css2, { right: o.đến })
                            break;
                    }
                    o.nộiDung.addClass("chờXóa");
                    t.on("mouseenter", o.đốiTượng, function () {
                        var t = $(this);
                        t.append(
                            o.nộiDung.css(css1)
                        )
                        setTimeout(function () {
                            o.nộiDung.css(css2)
                        }, 50)
                        var event = {
                            mouseleave: function () {
                                o.nộiDung.css(css1)
                                setTimeout(function () {
                                    t.find(".chờXóa").remove();
                                    t.off(event)
                                }, o.thờiGian);
                            }
                        };
                        t.on(event)
                    },
                    )
                })
            }
        })
        this.head = head = function () {
            return $('<div>', { id: '', class: 'ta5', text: '' }).append(
                //thanh 1
                $('<div>', { id: '', class: 'thanh1 dibc ptb25 plr15 bb1 bss bchk', text: '' }).append(
                    $('<div>', { id: '', class: 'w33 dibc', text: '' }).append(
                        $('<div>', { id: '', class: 'fas fa-bars h1 fs15 vatb bấmĐc', text: '' }).on("click", function (e) {
                            var t = $(this),
                                menu = $('<div>', { id: '', class: 'pf l0 b0 wmx3 bgcf z99 fs1 oya menuDọc ta5', text: '' }).css({
                                    width: "300px",
                                    top: $(this).closest(".thanh1").outerHeight() + "px",
                                    marginLeft: "-100%",
                                    opacity: 0
                                }).append(
                                    //mn1
                                    $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                        iconMenu([{
                                            i: "fas fa-home ",
                                            t: "Home "
                                        }, {
                                            i: "fas fa-fire",
                                            t: "Trending"
                                        },
                                        {
                                            i: "fab fa-youtube",
                                            t: "Subcriptions"
                                        }])
                                    ),
                                    // mn2
                                    $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                        iconMenu([{
                                            i: "fas fa-hourglass-half ",
                                            t: "History "
                                        }, {
                                            i: "far fa-clock",
                                            t: "Watch Later"
                                        },
                                        {
                                            i: "fab fa-app-store-ios",
                                            t: "Purchases"
                                        },
                                        {
                                            i: "far fa-heart",
                                            t: "Liked Videos"
                                        },
                                        {
                                            i: "far fa-list-alt",
                                            t: "Playlist"
                                        },], 'LIBRARY')
                                    ),
                                    // mn3
                                    $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                        iconMenu([{
                                            i: "wh20 bra50 bgc9 ",
                                            t: "Dr Disrespect3 ",
                                            n: 12
                                        }, {
                                            i: "wh20 bra50 bgc9 ",
                                            t: "ASMR6",
                                            n: 8
                                        },
                                        {
                                            i: "wh20 bra50 bgc9 ",
                                            t: "Rivvrs2",
                                            n: 2
                                        },
                                        {
                                            i: "wh20 bra50 bgc9 ",
                                            t: "The Verge11",
                                            n: 7
                                        },
                                        {
                                            i: "wh20 bra50 bgc9 ",
                                            t: "Seeker3",
                                            n: 4
                                        }, {
                                            i: "wh20 bra50 bgc9 ",
                                            t: "Music20",
                                            n: 1
                                        },], 'SUBSCRIPTIONS'),
                                        $('<div>', { id: '', class: '', text: '' }),
                                        $('<div>', { id: '', class: 'df bấmĐc mt15 c08 chk1h ta5', text: '' }).append(
                                            $('<div>', { id: '', class: 'w20', text: '' }).append(
                                                $('<div>', { id: '', class: 'fas fa-chevron-down' + " fs11 ", text: '' }),
                                            ),
                                            $('<div>', { id: '', class: 'w60 ', text: ' Show 14 more' }),
                                        )
                                    ),
                                    //mn4
                                    $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                        iconMenu([{
                                            i: "fas fa-cog ",
                                            t: "Settings "
                                        }, {
                                            i: "far fa-flag",
                                            t: "Report history"
                                        },
                                        {
                                            i: "fas fa-sign-out-alt",
                                            t: "Sign out"
                                        }])
                                    ),
                                    //mn5
                                    $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                        $('<div>', { id: '', class: 'dibc', text: '' }).append(
                                            ["About", "Community Rules", "Privacy", "Terms", "Blogs", "Contracts", "Donate", "FAQ"].map(function (v) {
                                                return $('<div>', { id: '', class: 'mb7 mr15 c07 c08 chk1h ta5 bấmĐc', text: v })
                                            }),
                                            $('<div>', { id: '', class: 'c05 mt25', text: 'azyrusthemes' }),
                                        ),
                                    ),
                                    //mn6
                                    $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                        $('<div>', { id: '', class: 'dibc mt10', text: '' }).append(
                                            ["fab fa-facebook-square", "fab fa-twitter", "fab fa-instagram"].map(function (v) {
                                                return $('<div>', { id: '', class: 'bấmĐc fs18 c08 chk1h ta5 mr25 ' + v })
                                            }),
                                        ),
                                    ),
                                    $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' })
                                );
                            if (!$("body").find(".menuDọc").length) {
                                t.addClass("pen")
                                $("body").append(menu)
                                setTimeout(function () {
                                    menu.css({
                                        marginLeft: "0%",
                                        opacity: 1,
                                    })
                                    t.removeClass("pen")
                                }, 50)
                            } else {
                                t.addClass("pen")
                                $("body").find(".menuDọc").css({
                                    marginLeft: "-100%",
                                    opacity: 0
                                })
                                setTimeout(function () {
                                    $("body").find(".menuDọc").remove();
                                    t.removeClass("pen")
                                }, 500)
                            }
                        }),
                        $('<div>', { id: '', class: 'bgpc bgrn img ml25 bấmĐc' }).css({
                            backgroundImage: "url('img/logo.png')",
                            width: "70px",
                            height: "21px"
                        }),
                    ),
                    $('<div>', { id: '', class: 'w33 pr ', text: '' }).append(
                        $('<input>', { id: '', class: 'w1 bra15 on', placeholder: 'Search' }).css({ height: "35px" })
                    ).append(
                        $('<div>', { id: '', class: 'fas fa-search pa r0 mr15 bấmĐc t50 tty', text: '' }),
                    ),
                    $('<div>', { id: '', class: 'w33 dibc tar ', text: '' }).append(
                        $('<div>', { id: '', class: 'far fa-comment-dots fs15 mlr10 h1 vatb', text: '' }),
                        $('<div>', { id: '', class: 'far fa-bell fs15 mlr10  h1 vatb', text: '' }),
                        $('<div>', { id: '', class: 'plr15 bấmĐc', text: 'Sigin' }).on('click', function () {
                            $(".Banner").css({ padding: "150px 0px" }).find(".textSigIn").remove();
                            $(".bannerText").text("Sig In").removeClass("mb40").addClass("mb15").after(
                                $('<div>', { id: '', class: 'cf textSigIn', text: 'Please sign in to have access to all videos and many more.' }),
                            )
                            $(".bannerBtn").remove();
                            $(".content").empty().append(
                                $('<div>', { id: '', class: 'container df jcsc pt50  bb1 bss bchk', text: '' }).append(
                                    $('<div>', { id: '', class: 'col-md-4 col-sm-8 col-xs-12 cb mt50', text: '' }).append(
                                        $('<div>', { id: '', class: 'df jcsc', text: '' }).append(
                                            $('<div>', { id: '', class: 'bgpc bgrn img ml25 mb15' }).css({
                                                backgroundImage: "url('img/logo.png')",
                                                width: "70px",
                                                height: "21px"
                                            }),
                                        ),
                                        $('<div>', { id: '', class: 'tac fwb c9 fs12', text: 'Log into your Oren account' }),
                                        $('<div>', { id: '', class: 'mt40 tal bb1 bss bchk', text: '' }).append(
                                            $('<input>', { id: '', class: 'w1 bra5 on mb30', placeholder: 'Username' }).css({ height: "38px" }),
                                            $('<input>', { id: '', class: 'w1 bra5 on mb30', placeholder: 'Password' }).css({ height: "38px" }),
                                            $('<div>', { id: '', class: 'dibc mb30', text: '' }).append(
                                                $('<input>', { type: 'checkbox', class: ' bra5 on bấmĐc vas mr25', text: 'Remember Password' }),
                                                $('<div>', { id: '', class: '', text: 'Remember me' }),
                                            ),
                                            $('<div>', { id: '', class: 'btn-ha bg0 bấmĐc w1 bra3 tac mb30', text: 'Upload' }).css({
                                                height: "38px",
                                                borderRadius:"5px"
                                            }),
                                            $('<div>',{id:'',class:'mb30 bấmĐc c3 chk1h ta5',text:'Forgot password?'}),
                                        ),
                                        $('<div>',{id:'',class:'dibc ptb50 fwb mb15',text:''}).append(
                                            $('<div>',{id:'',class:'c6',text:'Don’t have an account?'}),
                                            $('<div>',{id:'',class:'ml5 bấmĐc c0 chk1h ta5',text:' Signup here.'}),
                                        ),
                                    ),
                                ),
                            )
                        }),
                        $('<div>', { id: '', class: 'pr h1 ', text: '' }).css({ width: "50px" }).append(
                            $('<div>', { id: '', class: 'pa l0 wh50 bra50 bgc9 bấmĐc', text: '' }).css({ top: "-35px" }).append(
                                $('<div>', { id: '', class: 'pr wh1', text: '' }).on("click", function () {
                                    var t = $(this), h,
                                        menuAc = $('<div>', { id: '', class: 'pa t1 r0 bgcfa tal o0 menuAc', text: '' }).append(
                                            $('<div>', { id: '', class: 'pt25', text: '' }).css({
                                                width: "300px"
                                            }).append(
                                                $('<div>', { id: '', class: 'plr25 dibc', text: '' }).append(
                                                    $('<div>', { id: '', class: 'pl10', text: 'AZYRUSMAX' }),
                                                    $('<div>', { id: '', class: 'fs08 pa3 ml15 cf', text: 'PRO' }).css({ background: "#74ca74" }),
                                                ),
                                                $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                                    iconMenu([{
                                                        i: "far fa-user ",
                                                        t: "My Channel "
                                                    }, {
                                                        i: "fas fa-dollar-sign",
                                                        t: "Paid subscriptions"
                                                    },
                                                    {
                                                        i: "fas fa-cog",
                                                        t: "Settings"
                                                    }, {
                                                        i: "fas fa-sign-out-alt",
                                                        t: "Sign out"
                                                    },])
                                                ),
                                                $('<div>', { id: '', class: 'bb1 bss bchk ptb25 pl40 pr15', text: '' }).append(
                                                    iconMenu([{
                                                        i: "far fa-lightbulb",
                                                        t: "Dark theme",
                                                        e: $('<div>', { id: '', class: '	fas fa-toggle-off tar', text: '' }),
                                                    }, {
                                                        i: "fas fa-language",
                                                        t: "Language"
                                                    },
                                                    {
                                                        i: "far fa-comment-dots",
                                                        t: "Send Feedback"
                                                    }, {
                                                        i: "fas fa-location-arrow",
                                                        t: "india",
                                                        e: $('<div>', { id: '', class: 'fas fa-angle-right vab fs12', text: '' }),
                                                    },])
                                                ),
                                                $('<div>', { id: '', class: 'bb1 bss bchk pt25 pl40 pr15', text: '' }).append(
                                                    iconMenu([{
                                                        i: "far fa-lightbulb",
                                                        t: "Dark theme",
                                                        e: $('<div>', { id: '', class: 'fas fa-toggle-off tar', text: '' }),
                                                    }])
                                                ),
                                            )
                                        );
                                    if (t.find(".menuAc").length) {
                                        var g = t.find(".menuAc");
                                        g.css({ marginTop: "0px" })
                                        g.height(0);
                                        setTimeout(function () {
                                            g.remove();
                                        }, 500)
                                    } else {
                                        t.append(menuAc)
                                        h = menuAc.height();
                                        menuAc.height(0).removeClass("o0").addClass("oh ta5");
                                        setTimeout(function () {
                                            menuAc.height(h)
                                            menuAc.css({ marginTop: "25px" })
                                        })
                                    }
                                }),
                            ),
                        ),
                        $('<div>', { id: '', class: 'fas fa-chevron-down fs1 mlr10  h1 vatb bấmĐc', text: '' }),
                        $('<div>', { id: '', class: 'btn-ha bg0 bấmĐc', text: 'Upload' }).css({
                            width: "110px",
                            height: "35px"
                        }),
                    ),
                ).each(function () {
                    var t = $(this);
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 5) {
                            t.addClass("pf w1 bgcf z99")
                        } else {
                            t.removeClass("pf w1 bgcf z99")
                        }
                    })
                }),
                // thanh 2
                $('<div>', { id: '', class: 'plr15 dibc', text: '' }).append(
                    ["Pages", "Categories", "Channels", "Trending", "LIVE", "Movies"].map(function (v) {
                        return $('<div>', { id: '', class: 'fs1 ptb25 plr10 bấmĐc  c08 chk1h ta5 pr', text: v }).each(function () {
                            $(this).text() == "Pages" && $(this).hoverB({
                                left: "10px",
                                nộiDung: $('<div>', { id: '', class: 'bgcf c07 dibc ta5', text: '' }).css({
                                    width: "600px"
                                }).append(
                                    ["Homepage,", "Single Video Page", "Single Video Simplified Page", "Singel Video Full Width Page", "Single Video Playlist Page", "Upload Video Page", "Upload Video Edit Page", "Browse Channels Page", "Searched Videos Page", "Single Channel", "History Page", "Browse Categories Page", "Updates From Subscription Page", "Login Page", "Signup Page", "User Account Page",].map(function (v, i) {
                                        return $('<div>', { id: '', class: 'bb1 bss bchk col-xs-6 ptb15 plr25 ' + (v == 'Single Video Page' ? 'singleMn' : ''), text: v });
                                    }),
                                ),
                            })
                            $(this).hoverB({
                                hướng: "bottom",
                                từ: "150%",
                                đến: "0%",
                                left: "100%",
                                đốiTượng: ".singleMn",
                                nộiDung: $('<div>', { id: '', class: 'bgcf c07 dibc ta5', text: '' }).css({
                                    width: "300"
                                }).append(
                                    ["Single Channel Home Page",
                                        "Single Channel Videos Page",
                                        "Single Channel Playlist Page",
                                        "Single Channel Channels Page",
                                        "Single Channel About Page",
                                        "Single Channel Products Page",].map(function (v) {
                                            return $('<div>', { id: '', class: 'bb1 bss bchk ptb15 plr25', text: v })
                                        })
                                )
                            })
                        })

                    }),
                    $('<div>', { id: '', class: 'mt25 ml15 dibc', text: '' }).append(
                        $('<div>', { id: '', class: 'fs1  plr10 ta5', text: "Go to:" }),
                        $('<div>', { id: '', class: ' h1 fs12 vatb mlr15 ', text: '' }),
                        ["far fa-heart", "far fa-clock", "far fa-play-circle", "fab fa-app-store-ios", "fas fa-hourglass-half"].map(function (v) {
                            return $('<div>', { id: '', class: v + ' fs12 vatb mlr15 bấmĐc chk1h c08  ta5', text: '' })
                        }),
                    ),
                    $('<div>', { id: '', class: 'ptb25 plr10 bấmĐc chk1h c08 fr', text: '' }).append(
                        ["fas fa-th-large", "fas fa-th-list",].map(function (v) {
                            return $('<div>', { id: '', class: v + ' fs12 vatb mlr15 bấmĐc chk1h c08  ta5', text: '' })
                        }),
                    ),

                ),
                // banner
                $('<div>', { id: '', class: 'Banner bgc9', text: '' }).css({ padding: "200px 0px 200px 0px" }).append(
                    $('<div>', { id: '', class: 'tac', text: '' }).append(
                        $('<div>', { id: '', class: 'fwb fs25 cf mb40 bannerText', text: 'Watch share and upload with friends' }),
                        $('<div>', { id: '', class: 'plr25 bgcf bra15 dib bấmĐc bannerBtn', text: 'Create my account' }).css({
                            lineHeight: "38px",
                            height: "38px"
                        }),
                    ),
                ),
            )
        };
        this.home = home = function () {
            return $('<div>', { id: '', class: 'container', text: '' }).append(
                //khối 1
                $('<div>', { id: '', class: 'pt50 mt15 cb  bb1 bss bchk', text: '' }).css({
                    paddingBottom: "100px"
                }).append(
                    [{
                        img: "img/sv1.png",
                        title: "Get paid by your fans",
                        content: "Accept money from your fans through tips."
                    }, {
                        img: "img/sv2.png",
                        title: "Grow your audience",
                        content: "Join a growing community of young millennialaas & get new fans."
                    }, {
                        img: "img/sv3.png",
                        title: "Simple transfer from YouTube",
                        content: "Upload your videos from YouTube with an easy link copy/paste."
                    }, {
                        img: "img/sv4.png",
                        title: "Make money with Amazon",
                        content: "Extra income through Amazon Affiliates on your channel."
                    },].map(function (v, i) {
                        return $('<div>', { id: '', class: 'col-md-3 col-sm-6 plr15 ', text: '' }).append(
                            $('<div>', { id: '', class: 'w1 df jcsc mb25', text: '' }).append(
                                $('<div>', { id: '', class: 'w30 bấmĐc', text: '' }).append(
                                    $('<div>', { id: '', class: 'img-11 bgsoi phóng' }).css({
                                        backgroundImage: "url('" + v.img + "')"
                                    }),
                                ),
                            ),
                            $('<div>', { id: '', class: 'tac fs1 fwb mb15', text: v.title }),
                            $('<div>', { id: '', class: 'tac fs1 ', text: v.content }),

                        )
                    })
                ),
                //khối 2
                $('<div>', { id: '', class: 'pt50 pt30 cb  bb1 bss bchk', text: '' }).css({
                    // paddingBottom: "100px"
                }).append(
                    $('<div>', { id: '', class: 'fs11 fwb mb25 plr15', text: 'Featured Videos' }),
                    $('<div>', { id: '', class: 'cb', text: '' }).append(
                        range(1, 8).map(function (d) {
                            return $('<div>', { id: '', class: 'col-md-3 col-sm-6 plr15 mb25', text: '' }).append(
                                $('<div>', { id: '', class: 'img-85 videoFake pr', text: '' }).append(
                                    $('<div>', { id: '', class: 'pa b0 r0 bgc0 bra3 cf fs09 pa3', text: '12:5' + d }),
                                ),
                                $('<div>', { id: '', class: 'fwb mt25  t2l', text: 'Kingdom Come: Deliverance Funny Moments and Fails ' + d }),
                                $('<div>', { id: '', class: 'fs09 mt15 c07 lh16 pr', text: 'newfox media' }).append(
                                    (d == 2 || d == 7) && $('<div>', { id: '', class: 'fas fa-check ml10 chk1', text: '' }),
                                ),
                                $('<div>', { id: '', class: 'dibc fs09 c07 lh16', text: '' }).append(
                                    $('<div>', { id: '', class: '', text: '686K views .' }),
                                    $('<div>', { id: '', class: '', text: '1 week ago' }),
                                ),
                            )
                        }),
                    ),
                ),
                //khối 3
                $('<div>', { id: '', class: 'pt50 pt30 cb  bb1 bss bchk', text: '' }).css({
                    // paddingBottom: "100px"
                }).append(
                    $('<div>', { id: '', class: 'fs11 fwb mb25 plr15', text: 'Updates from Subscriptions' }),
                    $('<div>', { id: '', class: 'cb', text: '' }).append(
                        range(1, 4).map(function (d) {
                            return $('<div>', { id: '', class: 'col-md-3 col-sm-6 plr15 mb25', text: '' }).append(
                                $('<div>', { id: '', class: 'cb mb25', text: '' }).append(
                                    $('<div>', { id: '', class: 'wh50 bra50 bgc9 fl', text: '' }),
                                    $('<div>', { id: '', class: 'df jcsb pl25', text: '' }).css({ height: "50px" }).append(
                                        $('<div>', { id: '', class: 'h1 df fdc jcsc', text: '' }).append(
                                            $('<div>', { id: '', class: 'fwb', text: 'Tên ' + d }),
                                        ),
                                        $('<div>', { id: '', class: 'h1 df fdc jcsc', text: '' }).append(
                                            $('<div>', { id: '', class: '', text: d }),
                                        ),
                                    ),
                                ),
                                $('<div>', { id: '', class: 'img-85 videoFake pr', text: '' }).append(
                                    $('<div>', { id: '', class: 'pa b0 r0 bgc0 bra3 cf fs09 pa3', text: '12:5' + d }),
                                ),
                                $('<div>', { id: '', class: 'fwb mt25  t2l', text: 'Kingdom Come: Deliverance Funny Moments and Fails ' + d }),
                                $('<div>', { id: '', class: 'fs09 mt15 c07 lh16 pr', text: 'newfox media' }).append(
                                    (d == 2 || d == 7) && $('<div>', { id: '', class: 'fas fa-check ml10 chk1', text: '' }),
                                ),
                                $('<div>', { id: '', class: 'dibc fs09 c07 lh16', text: '' }).append(
                                    $('<div>', { id: '', class: '', text: '686K views .' }),
                                    $('<div>', { id: '', class: '', text: '1 week ago' }),
                                ),
                            )
                        }),
                    ),
                ),
                //khối 4
                $('<div>', { id: '', class: 'pt50 pt30 cb  bb1 bss bchk', text: '' }).css({
                    // paddingBottom: "100px"
                }).append(
                    $('<div>', { id: '', class: 'fs11 fwb mb25 plr15', text: 'New Videos' }),
                    $('<div>', { id: '', class: 'cb', text: '' }).append(
                        range(1, 8).map(function (d) {
                            return $('<div>', { id: '', class: 'col-md-3 col-sm-6 plr15 mb25', text: '' }).append(
                                $('<div>', { id: '', class: 'img-85 videoFake pr', text: '' }).append(
                                    $('<div>', { id: '', class: 'pa b0 r0 bgc0 bra3 cf fs09 pa3', text: '12:5' + d }),
                                ),
                                $('<div>', { id: '', class: 'fwb mt25  t2l', text: 'Kingdom Come: Deliverance Funny Moments and Fails ' + d }),
                                $('<div>', { id: '', class: 'fs09 mt15 c07 lh16 pr', text: 'newfox media' }).append(
                                    (d == 2 || d == 7) && $('<div>', { id: '', class: 'fas fa-check ml10 chk1', text: '' }),
                                ),
                                $('<div>', { id: '', class: 'dibc fs09 c07 lh16', text: '' }).append(
                                    $('<div>', { id: '', class: '', text: '686K views .' }),
                                    $('<div>', { id: '', class: '', text: '1 week ago' }),
                                ),
                            )
                        }),
                    ),
                ),
                //khối 5
                $('<div>', { id: '', class: 'pt50 pt30 cb  bb1 bss bchk', text: '' }).css({
                    // paddingBottom: "100px"
                }).append(
                    $('<div>', { id: '', class: 'fs11 fwb mb25 plr15', text: 'Popular Videos' }),
                    $('<div>', { id: '', class: 'cb', text: '' }).append(
                        range(1, 8).map(function (d) {
                            return $('<div>', { id: '', class: 'col-md-3 col-sm-6 plr15 mb25', text: '' }).append(
                                $('<div>', { id: '', class: 'img-85 videoFake pr', text: '' }).append(
                                    $('<div>', { id: '', class: 'pa b0 r0 bgc0 bra3 cf fs09 pa3', text: '12:5' + d }),
                                ),
                                $('<div>', { id: '', class: 'fwb mt25  t2l', text: 'Kingdom Come: Deliverance Funny Moments and Fails ' + d }),
                                $('<div>', { id: '', class: 'fs09 mt15 c07 lh16 pr', text: 'newfox media' }).append(
                                    (d == 2 || d == 7) && $('<div>', { id: '', class: 'fas fa-check ml10 chk1', text: '' }),
                                ),
                                $('<div>', { id: '', class: 'dibc fs09 c07 lh16', text: '' }).append(
                                    $('<div>', { id: '', class: '', text: '686K views .' }),
                                    $('<div>', { id: '', class: '', text: '1 week ago' }),
                                ),
                            )
                        }),
                    ),
                ),
                //khối 6
                $('<div>', { id: '', class: 'pt50 pt30 cb  bb1 bss bchk', text: '' }).css({
                    // paddingBottom: "100px"
                }).append(
                    $('<div>', { id: '', class: 'fs11 fwb mb25 plr15', text: 'Popular Channels' }),
                    $('<div>', { id: '', class: 'cb', text: '' }).append(
                        range(1, 6).map(function (d) {
                            return $('<div>', { id: '', class: 'col-md-2 col-sm-4 col-xs-6 plr15 mb25', text: '' }).append(
                                $('<div>', { id: '', class: 'img-34 pr', text: '' }),
                                $('<div>', { id: '', class: 'fwb mt25  t2l', text: 'BattleState ' + d }),
                                $('<div>', { id: '', class: 'fs09 mt15 c07 lh16 pr', text: '235' + d + 'K Followers' }).append(
                                    (d == 2 || d == 7) && $('<div>', { id: '', class: 'fas fa-check ml10 chk1', text: '' }),
                                ),
                            )
                        }),
                    ),
                ),
            ).hoverB({
                hướng: "right",
                từ: "0px",
                đến: "10px",
                // left: "100%",
                đốiTượng: ".videoFake",
                nộiDung: $('<div>', { id: '', class: 'thờiGian bgc05 pa t0 r0 mt10 o0 ta5 cf bra3 pa5 fas fa-clock', text: '' })
            })
        };
        this.khởiTạo = function () {
            $("body").prepend(
                $('<div>', { id: '', class: '', text: '' }).append(
                    $('<div>', { id: '', class: 'head', text: '' }).append(
                        head
                    ),
                    $('<div>', { id: '', class: 'content', text: '' }).append(
                        home
                    ),
                    $('<div>', { id: '', class: 'tac ', text: '' }).css({ padding: "70px 0" }).append(
                        $('<div>', { id: '', class: 'far fa-caret-square-up fs12 chk1h ta5 bấmĐc', text: '' }).on("click", function () {
                            $("html, body").animate({ scrollTop: 0 }, "slow");
                        }),
                    ),
                )
            )
        }
    }
    hackthon.khởiTạo();
});
