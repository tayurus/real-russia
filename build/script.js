/////////////////////////////////////////////данные
var numberOfEntries = { val: "Single entry visa"}, delivery, arrivalDate1, departureDate1, arrivalDate2, departureDate2, passportNumber, passportIssued = [],
    passportExpired = [], citizenship, countryApplyIn, registration = {element: $(".input-registration"),val:"NO"}, birthDate, processingCity, cities = [], hotels = [], vehicleMake, vehicleColor, vehicleLisence,
    visitorsCount = 1, firstName, surname, middleName, email, phone, locationCount = 1, purpose, totalPrice, haveReadTerms, agreeVisaSuitable, groupSize = 1;
var errors = [];

! function(t, e, i) {
    ! function() {
        var s, a, n, h = "2.2.3",
            o = "datepicker",
            r = ".datepicker-here",
            c = !1,
            d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
            l = {
                classes: "",
                inline: !1,
                language: "ru",
                startDate: new Date,
                firstDay: "",
                weekends: [6, 0],
                dateFormat: "",
                altField: "",
                altFieldDateFormat: "@",
                toggleSelected: !0,
                keyboardNav: !0,
                position: "bottom left",
                offset: 12,
                view: "days",
                minView: "days",
                showOtherMonths: !0,
                selectOtherMonths: !0,
                moveToOtherMonthsOnSelect: !0,
                showOtherYears: !0,
                selectOtherYears: !0,
                moveToOtherYearsOnSelect: !0,
                minDate: "",
                maxDate: "",
                disableNavWhenOutOfRange: !0,
                multipleDates: !1,
                multipleDatesSeparator: ",",
                range: !1,
                todayButton: !1,
                clearButton: !1,
                showEvent: "focus",
                autoClose: !1,
                monthsField: "monthsShort",
                prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                navTitles: {
                    days: "MM, <i>yyyy</i>",
                    months: "yyyy",
                    years: "yyyy1 - yyyy2"
                },
                timepicker: !1,
                onlyTimepicker: !1,
                dateTimeSeparator: " ",
                timeFormat: "",
                minHours: 0,
                maxHours: 24,
                minMinutes: 0,
                maxMinutes: 59,
                hoursStep: 1,
                minutesStep: 1,
                onSelect: "",
                onShow: "",
                onHide: "",
                onChangeMonth: "",
                onChangeYear: "",
                onChangeDecade: "",
                onChangeView: "",
                onRenderCell: ""
            },
            u = {
                ctrlRight: [17, 39],
                ctrlUp: [17, 38],
                ctrlLeft: [17, 37],
                ctrlDown: [17, 40],
                shiftRight: [16, 39],
                shiftUp: [16, 38],
                shiftLeft: [16, 37],
                shiftDown: [16, 40],
                altUp: [18, 38],
                altRight: [18, 39],
                altLeft: [18, 37],
                altDown: [18, 40],
                ctrlShiftUp: [16, 17, 38]
            },
            m = function(t, a) {
                this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init()
            };
        n = m, n.prototype = {
            VERSION: h,
            viewIndexes: ["days", "months", "years"],
            init: function() {
                c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0
            },
            _createShortCuts: function() {
                this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5)
            },
            _bindEvents: function() {
                this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this))
            },
            _bindKeyboardEvents: function() {
                this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this))
            },
            _bindTimepickerEvents: function() {
                this.$el.on("timeChange.adp", this._onTimeChange.bind(this))
            },
            isWeekend: function(t) {
                return -1 !== this.opts.weekends.indexOf(t)
            },
            _defineLocale: function(t) {
                "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
                var i = this._getWordBoundaryRegExp;
                (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0)
            },
            _buildDatepickersContainer: function() {
                c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container")
            },
            _buildBaseHtml: function() {
                var t, i = e('<div class="datepicker-inline">');
                t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker)
            },
            _triggerOnChange: function() {
                if (!this.selectedDates.length) {
                    if ("" === this._prevOnSelectValue) return;
                    return this._prevOnSelectValue = "", this.opts.onSelect("", "", this)
                }
                var t, e = this.selectedDates,
                    i = n.getParsedDate(e[0]),
                    s = this,
                    a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
                t = e.map(function(t) {
                    return s.formatDate(s.loc.dateFormat, t)
                }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function(t) {
                    var e = n.getParsedDate(t);
                    return new Date(e.year, e.month, e.date, e.hours, e.minutes)
                })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this)
            },
            next: function() {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            prev: function() {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            formatDate: function(t, e) {
                e = e || this.date;
                var i, s = t,
                    a = this._getWordBoundaryRegExp,
                    h = this.loc,
                    o = n.getLeadingZeroNum,
                    r = n.getDecade(e),
                    c = n.getParsedDate(e),
                    d = c.fullHours,
                    l = c.hours,
                    u = t.match(a("aa")) || t.match(a("AA")),
                    m = "am",
                    p = this._replacer;
                switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
                    case /@/.test(s):
                        s = s.replace(/@/, e.getTime());
                    case /aa/.test(s):
                        s = p(s, a("aa"), m);
                    case /AA/.test(s):
                        s = p(s, a("AA"), m.toUpperCase());
                    case /dd/.test(s):
                        s = p(s, a("dd"), c.fullDate);
                    case /d/.test(s):
                        s = p(s, a("d"), c.date);
                    case /DD/.test(s):
                        s = p(s, a("DD"), h.days[c.day]);
                    case /D/.test(s):
                        s = p(s, a("D"), h.daysShort[c.day]);
                    case /mm/.test(s):
                        s = p(s, a("mm"), c.fullMonth);
                    case /m/.test(s):
                        s = p(s, a("m"), c.month + 1);
                    case /MM/.test(s):
                        s = p(s, a("MM"), this.loc.months[c.month]);
                    case /M/.test(s):
                        s = p(s, a("M"), h.monthsShort[c.month]);
                    case /ii/.test(s):
                        s = p(s, a("ii"), c.fullMinutes);
                    case /i/.test(s):
                        s = p(s, a("i"), c.minutes);
                    case /hh/.test(s):
                        s = p(s, a("hh"), d);
                    case /h/.test(s):
                        s = p(s, a("h"), l);
                    case /yyyy/.test(s):
                        s = p(s, a("yyyy"), c.year);
                    case /yyyy1/.test(s):
                        s = p(s, a("yyyy1"), r[0]);
                    case /yyyy2/.test(s):
                        s = p(s, a("yyyy2"), r[1]);
                    case /yy/.test(s):
                        s = p(s, a("yy"), c.year.toString().slice(-2))
                }
                return s
            },
            _replacer: function(t, e, i) {
                return t.replace(e, function(t, e, s, a) {
                    return e + i + a
                })
            },
            _getWordBoundaryRegExp: function(t) {
                var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g")
            },
            selectDate: function(t) {
                var e = this,
                    i = e.opts,
                    s = e.parsedDate,
                    a = e.selectedDates,
                    h = a.length,
                    o = "";
                if (Array.isArray(t)) return void t.forEach(function(t) {
                    e.selectDate(t)
                });
                if (t instanceof Date) {
                    if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
                        if (h === i.multipleDates) return;
                        e._isSelected(t) || e.selectedDates.push(t)
                    } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];
                    e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render()
                }
            },
            removeDate: function(t) {
                var e = this.selectedDates,
                    i = this;
                if (t instanceof Date) return e.some(function(s, a) {
                    return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0
                })
            },
            today: function() {
                this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton)
            },
            clear: function() {
                this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange()
            },
            update: function(t, i) {
                var s = arguments.length,
                    a = this.lastSelectedDate;
                return 2 == s ? this.opts[t] = i : 1 == s && "object" == typeof t && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
            },
            _syncWithMinMaxDates: function() {
                var t = this.date.getTime();
                this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1
            },
            _isSelected: function(t, e) {
                var i = !1;
                return this.selectedDates.some(function(s) {
                    return n.isSame(s, t, e) ? (i = s, !0) : void 0
                }), i
            },
            _setInputValue: function() {
                var t, e = this,
                    i = e.opts,
                    s = e.loc.dateFormat,
                    a = i.altFieldDateFormat,
                    n = e.selectedDates.map(function(t) {
                        return e.formatDate(s, t)
                    });
                i.altField && e.$altField.length && (t = this.selectedDates.map(function(t) {
                    return e.formatDate(a, t)
                }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n)
            },
            _isInRange: function(t, e) {
                var i = t.getTime(),
                    s = n.getParsedDate(t),
                    a = n.getParsedDate(this.minDate),
                    h = n.getParsedDate(this.maxDate),
                    o = new Date(s.year, s.month, a.date).getTime(),
                    r = new Date(s.year, s.month, h.date).getTime(),
                    c = {
                        day: i >= this.minTime && i <= this.maxTime,
                        month: o >= this.minTime && r <= this.maxTime,
                        year: s.year >= a.year && s.year <= h.year
                    };
                return e ? c[e] : c.day
            },
            _getDimensions: function(t) {
                var e = t.offset();
                return {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    left: e.left,
                    top: e.top
                }
            },
            _getDateFromCell: function(t) {
                var e = this.parsedDate,
                    s = t.data("year") || e.year,
                    a = t.data("month") == i ? e.month : t.data("month"),
                    n = t.data("date") || 1;
                return new Date(s, a, n)
            },
            _setPositionClasses: function(t) {
                t = t.split(" ");
                var e = t[0],
                    i = t[1],
                    s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
                this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s)
            },
            setPosition: function(t) {
                t = t || this.opts.position;
                var e, i, s = this._getDimensions(this.$el),
                    a = this._getDimensions(this.$datepicker),
                    n = t.split(" "),
                    h = this.opts.offset,
                    o = n[0],
                    r = n[1];
                switch (o) {
                    case "top":
                        e = s.top - a.height - h;
                        break;
                    case "right":
                        i = s.left + s.width + h;
                        break;
                    case "bottom":
                        e = s.top + s.height + h;
                        break;
                    case "left":
                        i = s.left - a.width - h
                }
                switch (r) {
                    case "top":
                        e = s.top;
                        break;
                    case "right":
                        i = s.left + s.width - a.width;
                        break;
                    case "bottom":
                        e = s.top + s.height - a.height;
                        break;
                    case "left":
                        i = s.left;
                        break;
                    case "center":
                        /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2
                }
                this.$datepicker.css({
                    left: i,
                    top: e
                })
            },
            show: function() {
                var t = this.opts.onShow;
                this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t)
            },
            hide: function() {
                var t = this.opts.onHide;
                this.$datepicker.removeClass("active").css({
                    left: "-100000px"
                }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t)
            },
            down: function(t) {
                this._changeView(t, "down")
            },
            up: function(t) {
                this._changeView(t, "up")
            },
            _bindVisionEvents: function(t) {
                this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0))
            },
            _changeView: function(t, e) {
                t = t || this.focused || this.date;
                var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
                i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i]
            },
            _handleHotKey: function(t) {
                var e, i, s, a = n.getParsedDate(this._getFocusedDate()),
                    h = this.opts,
                    o = !1,
                    r = !1,
                    c = !1,
                    d = a.year,
                    l = a.month,
                    u = a.date;
                switch (t) {
                    case "ctrlRight":
                    case "ctrlUp":
                        l += 1, o = !0;
                        break;
                    case "ctrlLeft":
                    case "ctrlDown":
                        l -= 1, o = !0;
                        break;
                    case "shiftRight":
                    case "shiftUp":
                        r = !0, d += 1;
                        break;
                    case "shiftLeft":
                    case "shiftDown":
                        r = !0, d -= 1;
                        break;
                    case "altRight":
                    case "altUp":
                        c = !0, d += 10;
                        break;
                    case "altLeft":
                    case "altDown":
                        c = !0, d -= 10;
                        break;
                    case "ctrlShiftUp":
                        this.up()
                }
                s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade)
            },
            _registerKey: function(t) {
                var e = this.keys.some(function(e) {
                    return e == t
                });
                e || this.keys.push(t)
            },
            _unRegisterKey: function(t) {
                var e = this.keys.indexOf(t);
                this.keys.splice(e, 1)
            },
            _isHotKeyPressed: function() {
                var t, e = !1,
                    i = this,
                    s = this.keys.sort();
                for (var a in u) t = u[a], s.length == t.length && t.every(function(t, e) {
                    return t == s[e]
                }) && (i._trigger("hotKey", a), e = !0);
                return e
            },
            _trigger: function(t, e) {
                this.$el.trigger(t, e)
            },
            _focusNextCell: function(t, e) {
                e = e || this.cellType;
                var i = n.getParsedDate(this._getFocusedDate()),
                    s = i.year,
                    a = i.month,
                    h = i.date;
                if (!this._isHotKeyPressed()) {
                    switch (t) {
                        case 37:
                            "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
                            break;
                        case 38:
                            "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
                            break;
                        case 39:
                            "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
                            break;
                        case 40:
                            "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : ""
                    }
                    var o = new Date(s, a, h);
                    o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o
                }
            },
            _getFocusedDate: function() {
                var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
                    e = this.parsedDate;
                if (!t) switch (this.view) {
                    case "days":
                        t = new Date(e.year, e.month, (new Date).getDate());
                        break;
                    case "months":
                        t = new Date(e.year, e.month, 1);
                        break;
                    case "years":
                        t = new Date(e.year, 0, 1)
                }
                return t
            },
            _getCell: function(t, i) {
                i = i || this.cellType;
                var s, a = n.getParsedDate(t),
                    h = '.datepicker--cell[data-year="' + a.year + '"]';
                switch (i) {
                    case "month":
                        h = '[data-month="' + a.month + '"]';
                        break;
                    case "day":
                        h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]'
                }
                return s = this.views[this.currentView].$el.find(h), s.length ? s : e("")
            },
            destroy: function() {
                var t = this;
                t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove()
            },
            _handleAlreadySelectedDates: function(t, e) {
                this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()))
            },
            _onShowEvent: function(t) {
                this.visible || this.show()
            },
            _onBlur: function() {
                !this.inFocus && this.visible && this.hide()
            },
            _onMouseDownDatepicker: function(t) {
                this.inFocus = !0
            },
            _onMouseUpDatepicker: function(t) {
                this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus()
            },
            _onKeyUpGeneral: function(t) {
                var e = this.$el.val();
                e || this.clear()
            },
            _onResize: function() {
                this.visible && this.setPosition()
            },
            _onMouseUpBody: function(t) {
                t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide()
            },
            _onMouseUpEl: function(t) {
                t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4)
            },
            _onKeyDown: function(t) {
                var e = t.which;
                if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
                    if (this._getCell(this.focused).hasClass("-disabled-")) return;
                    if (this.view != this.opts.minView) this.down();
                    else {
                        var i = this._isSelected(this.focused, this.cellType);
                        if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                        this._handleAlreadySelectedDates(i, this.focused)
                    }
                }
                27 == e && this.hide()
            },
            _onKeyUp: function(t) {
                var e = t.which;
                this._unRegisterKey(e)
            },
            _onHotKey: function(t, e) {
                this._handleHotKey(e)
            },
            _onMouseEnterCell: function(t) {
                var i = e(t.target).closest(".datepicker--cell"),
                    s = this._getDateFromCell(i);
                this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
            },
            _onMouseLeaveCell: function(t) {
                var i = e(t.target).closest(".datepicker--cell");
                i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
            },
            _onTimeChange: function(t, e, i) {
                var s = new Date,
                    a = this.selectedDates,
                    n = !1;
                a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s)
            },
            _onClickCell: function(t, e) {
                this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e)
            },
            set focused(t) {
                if (!t && this.focused) {
                    var e = this._getCell(this.focused);
                    e.length && e.removeClass("-focus-")
                }
                this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t)
            },
            get focused() {
                return this._focused
            },
            get parsedDate() {
                return n.getParsedDate(this.date)
            },
            set date(t) {
                return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0
            },
            get date() {
                return this.currentDate
            },
            set view(t) {
                return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t)
            },
            get view() {
                return this.currentView
            },
            get cellType() {
                return this.view.substring(0, this.view.length - 1)
            },
            get minTime() {
                var t = n.getParsedDate(this.minDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get maxTime() {
                var t = n.getParsedDate(this.maxDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get curDecade() {
                return n.getDecade(this.date)
            }
        }, n.getDaysCount = function(t) {
            return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()
        }, n.getParsedDate = function(t) {
            return {
                year: t.getFullYear(),
                month: t.getMonth(),
                fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
                date: t.getDate(),
                fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                day: t.getDay(),
                hours: t.getHours(),
                fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                minutes: t.getMinutes(),
                fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
            }
        }, n.getDecade = function(t) {
            var e = 10 * Math.floor(t.getFullYear() / 10);
            return [e, e + 9]
        }, n.template = function(t, e) {
            return t.replace(/#\{([\w]+)\}/g, function(t, i) {
                return e[i] || 0 === e[i] ? e[i] : void 0
            })
        }, n.isSame = function(t, e, i) {
            if (!t || !e) return !1;
            var s = n.getParsedDate(t),
                a = n.getParsedDate(e),
                h = i ? i : "day",
                o = {
                    day: s.date == a.date && s.month == a.month && s.year == a.year,
                    month: s.month == a.month && s.year == a.year,
                    year: s.year == a.year
                };
            return o[h]
        }, n.less = function(t, e, i) {
            return t && e ? e.getTime() < t.getTime() : !1
        }, n.bigger = function(t, e, i) {
            return t && e ? e.getTime() > t.getTime() : !1
        }, n.getLeadingZeroNum = function(t) {
            return parseInt(t) < 10 ? "0" + t : t
        }, n.resetTime = function(t) {
            return "object" == typeof t ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0
        }, e.fn.datepicker = function(t) {
            return this.each(function() {
                if (e.data(this, o)) {
                    var i = e.data(this, o);
                    i.opts = e.extend(!0, i.opts, t), i.update()
                } else e.data(this, o, new m(this, t))
            })
        }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
            ru: {
                days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                today: "Сегодня",
                clear: "Очистить",
                dateFormat: "dd.mm.yyyy",
                timeFormat: "hh:ii",
                firstDay: 1
            }
        }, e(function() {
            e(r).datepicker()
        })
    }(),
    function() {
        var t = {
                days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
                months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
                years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
            },
            s = e.fn.datepicker,
            a = s.Constructor;
        s.Body = function(t, i, s) {
            this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init()
        }, s.Body.prototype = {
            init: function() {
                this._buildBaseHtml(), this._render(), this._bindEvents()
            },
            _bindEvents: function() {
                this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this))
            },
            _buildBaseHtml: function() {
                this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el)
            },
            _getDayNamesHtml: function(t, e, s, a) {
                return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a))
            },
            _getCellContents: function(t, e) {
                var i = "datepicker--cell datepicker--cell-" + e,
                    s = new Date,
                    n = this.d,
                    h = a.resetTime(n.minRange),
                    o = a.resetTime(n.maxRange),
                    r = n.opts,
                    c = a.getParsedDate(t),
                    d = {},
                    l = c.date;
                switch (e) {
                    case "day":
                        n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
                        break;
                    case "month":
                        l = n.loc[n.opts.monthsField][c.month];
                        break;
                    case "year":
                        var u = n.curDecade;
                        l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""))
                }
                return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
                    html: l,
                    classes: i
                }
            },
            _getDaysHtml: function(t) {
                var e = a.getDaysCount(t),
                    i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
                    s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
                    n = i - this.d.loc.firstDay,
                    h = 6 - s + this.d.loc.firstDay;
                n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;
                for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
                return d
            },
            _getDayHtml: function(t) {
                var e = this._getCellContents(t, "day");
                return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
            },
            _getMonthsHtml: function(t) {
                for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) e += this._getMonthHtml(new Date(i.year, s)), s++;
                return e
            },
            _getMonthHtml: function(t) {
                var e = this._getCellContents(t, "month");
                return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>"
            },
            _getYearsHtml: function(t) {
                var e = (a.getParsedDate(t), a.getDecade(t)),
                    i = e[0] - 1,
                    s = "",
                    n = i;
                for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
                return s
            },
            _getYearHtml: function(t) {
                var e = this._getCellContents(t, "year");
                return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
            },
            _renderTypes: {
                days: function() {
                    var t = this._getDayNamesHtml(this.d.loc.firstDay),
                        e = this._getDaysHtml(this.d.currentDate);
                    this.$cells.html(e), this.$names.html(t)
                },
                months: function() {
                    var t = this._getMonthsHtml(this.d.currentDate);
                    this.$cells.html(t)
                },
                years: function() {
                    var t = this._getYearsHtml(this.d.currentDate);
                    this.$cells.html(t)
                }
            },
            _render: function() {
                this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)()
            },
            _update: function() {
                var t, i, s, a = e(".datepicker--cell", this.$cells),
                    n = this;
                a.each(function(a, h) {
                    i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes)
                })
            },
            show: function() {
                this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0)
            },
            hide: function() {
                this.$el.removeClass("active"), this.active = !1
            },
            _handleClick: function(t) {
                var e = t.data("date") || 1,
                    i = t.data("month") || 0,
                    s = t.data("year") || this.d.parsedDate.year,
                    a = this.d;
                if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));
                var n = new Date(s, i, e),
                    h = this.d._isSelected(n, this.d.cellType);
                return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n)
            },
            _onClickCell: function(t) {
                var i = e(t.target).closest(".datepicker--cell");
                i.hasClass("-disabled-") || this._handleClick.bind(this)(i)
            }
        }
    }(),
    function() {
        var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
            i = '<div class="datepicker--buttons"></div>',
            s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
            a = e.fn.datepicker,
            n = a.Constructor;
        a.Navigation = function(t, e) {
            this.d = t, this.opts = e, this.$buttonsContainer = "", this.init()
        }, a.Navigation.prototype = {
            init: function() {
                this._buildBaseHtml(), this._bindEvents()
            },
            _bindEvents: function() {
                this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this))
            },
            _buildBaseHtml: function() {
                this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed()
            },
            _addButtonsIfNeed: function() {
                this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear")
            },
            _render: function() {
                var i = this._getTitle(this.d.currentDate),
                    s = n.template(t, e.extend({
                        title: i
                    }, this.opts));
                this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
            },
            _getTitle: function(t) {
                return this.d.formatDate(this.opts.navTitles[this.d.view], t)
            },
            _addButton: function(t) {
                this.$buttonsContainer.length || this._addButtonsContainer();
                var i = {
                        action: t,
                        label: this.d.loc[t]
                    },
                    a = n.template(s, i);
                e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a)
            },
            _addButtonsContainer: function() {
                this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker)
            },
            setNavStatus: function() {
                if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                    var t = this.d.parsedDate,
                        e = t.month,
                        i = t.year,
                        s = t.date;
                    switch (this.d.view) {
                        case "days":
                            this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
                            break;
                        case "months":
                            this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
                            break;
                        case "years":
                            var a = n.getDecade(this.d.date);
                            this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next")
                    }
                }
            },
            _disableNav: function(t) {
                e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-")
            },
            _activateNav: function(t) {
                e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-")
            },
            _onClickNavButton: function(t) {
                var i = e(t.target).closest("[data-action]"),
                    s = i.data("action");
                this.d[s]()
            },
            _onClickNavTitle: function(t) {
                return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void(this.d.view = "years")
            }
        }
    }(),
    function() {
        var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
            i = e.fn.datepicker,
            s = i.Constructor;
        i.Timepicker = function(t, e) {
            this.d = t, this.opts = e, this.init()
        }, i.Timepicker.prototype = {
            init: function() {
                var t = "input";
                this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
            },
            _setTime: function(t) {
                var e = s.getParsedDate(t);
                this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes
            },
            _setMinTimeFromDate: function(t) {
                this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes)
            },
            _setMaxTimeFromDate: function(t) {
                this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes)
            },
            _setDefaultMinMaxTime: function() {
                var t = 23,
                    e = 59,
                    i = this.opts;
                this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes
            },
            _validateHoursMinutes: function(t) {
                this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes)
            },
            _buildHTML: function() {
                var i = s.getLeadingZeroNum,
                    a = {
                        hourMin: this.minHours,
                        hourMax: i(this.maxHours),
                        hourStep: this.opts.hoursStep,
                        hourValue: this.hours,
                        hourVisible: i(this.displayHours),
                        minMin: this.minMinutes,
                        minMax: i(this.maxMinutes),
                        minStep: this.opts.minutesStep,
                        minValue: i(this.minutes)
                    },
                    n = s.template(t, a);
                this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
            },
            _updateCurrentTime: function() {
                var t = s.getLeadingZeroNum(this.displayHours),
                    e = s.getLeadingZeroNum(this.minutes);
                this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod)
            },
            _updateRanges: function() {
                this.$hours.attr({
                    min: this.minHours,
                    max: this.maxHours
                }).val(this.hours), this.$minutes.attr({
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).val(this.minutes)
            },
            _handleDate: function(t) {
                this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t)
            },
            update: function() {
                this._updateRanges(), this._updateCurrentTime()
            },
            _getValidHoursFromDate: function(t, e) {
                var i = t,
                    a = t;
                t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
                var n = e || this.d.ampm,
                    h = "am";
                if (n) switch (!0) {
                    case 0 == a:
                        a = 12;
                        break;
                    case 12 == a:
                        h = "pm";
                        break;
                    case a > 11:
                        a -= 12, h = "pm"
                }
                return {
                    hours: a,
                    dayPeriod: h
                }
            },
            set hours(t) {
                this._hours = t;
                var e = this._getValidHoursFromDate(t);
                this.displayHours = e.hours, this.dayPeriod = e.dayPeriod
            },
            get hours() {
                return this._hours
            },
            _onChangeRange: function(t) {
                var i = e(t.target),
                    s = i.attr("name");
                this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
            },
            _onSelectDate: function(t, e) {
                this._handleDate(e), this.update()
            },
            _onMouseEnterRange: function(t) {
                var i = e(t.target).attr("name");
                e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-")
            },
            _onMouseOutRange: function(t) {
                var i = e(t.target).attr("name");
                this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-")
            },
            _onMouseUpRange: function(t) {
                this.d.timepickerIsActive = !1
            }
        }
    }()
}(window, jQuery);

//////////////////////////////////////////helpers
function parseDate(s) {
    var b = s.split('.').reverse();
    return new Date(b[0], parseInt(b[1]) - 1, b[2]);
}

function addMonths(date, months){
    let copyDate = new Date(JSON.parse(JSON.stringify(date)));
    copyDate.setMonth(copyDate.getMonth() + 6);
    return copyDate;
}

function extractObjectField(obj, fieldName){
    return obj[fieldName];
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//current showed step and max count of steps
let currStep, maxStepCount;

function inititializeSteps() {
    $("[data-role='prevStep']").hide()
    currStep = 1;
    maxStepCount = 4;
    showCurrStep();
}


function checkIsStepCorrect(step) {

    $('[data-step=' + step + ']').show();
    $('[data-step=' + step + '] input, [data-step=' + step + '] select').each((index, item) => {
        if ($(item).val() === "" || $(item).val() === null || ($(item).val() === 'no' && $(item).is(":checked")))
            $(item).trigger('change')
    })

    //идем по всем видимым строкам с ошибками и смотрим, есть ли ошибочный текст
    let stepHasError = false;
    $("[data-step=" + step + "] .input__error-label").each(function(index, item) {
        if ($(item).text() !== "" && $(item).is(":visible")) {
            stepHasError = true;
            $("[data-steps=" + step + "]").addClass("steps__item_incorrect");
            $("[data-steps=" + step + "]").removeClass("steps__item_correct");
        }
    });

    if (!stepHasError) {
        $("[data-steps=" + step + "]").removeClass("steps__item_incorrect");
        $("[data-steps=" + step + "]").addClass("steps__item_correct");
    }

    $('[data-step=' + step + ']').hide();
    $('[data-step=' + currStep + ']').show();

}

function showCurrStep() {
    //если сейчас 4-ый шаг, то изменить "next step" на "continue" и сделать ее кнопкой отправки формы
    setTimeout(() => {
        if (currStep == 4) {
            $("[data-role='nextStep']").text("Confirm!");
            $("[data-role='nextStep']").attr("type", "submit");
            $("[data-role='nextStep']").attr("data-role", "confirm");
        } else {
            //иначе сделать изменить "continue" на "next step"
            $("[data-role='confirm']").text("next step");
            $("[data-role='confirm']").attr("type", "button");
            $("[data-role='confirm']").attr("data-role", "nextStep");
        }
    }, 200)



    //hide all steps
    $("[data-step]").hide();
    //show next step
    $("[data-step=" + currStep + "]").show();
    $("[data-steps]").removeClass("steps__item_active");
    $("[data-steps=" + currStep + "]").addClass("steps__item_active");
    $(window).scrollTop(0);

    if (currStep != 1) {
        $("[data-role='prevStep']").show()
    } else {
        $("[data-role='prevStep']").hide()
    }
}

function separationDateIntoThreeInputs(date) {
    let mass = date.val().split('/');
    let next = date.next();
    for (i = 0; i < mass.length; i++) {
        next.val(mass[i]);
        next = next.next();
    }
}

function initializeDatepickers(){

    $('.datepicker-here').datepicker({
        language: 'en',
        minDate: new Date(new Date().setFullYear(1900)),
        maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 20)),
        onSelect: (fd, date, inst) => {
            inst.date = date;
            inst.hide();
        }
    })

    $(".input-birth-date").datepicker({
        maxDate: new Date()
    })
    $(".input-passport-expired").datepicker({
        minDate: new Date(new Date().setMonth(new Date().getMonth() + 6))
    })
    $(".input-passport-issued").datepicker({
        maxDate: new Date()
    })
    $(".input-arrival-date1, .input-departure-date1").datepicker({
        minDate: new Date()
    })
}

function calculatePrice() {
    Visas.Russian.Prices.CurrentPriceServiceProxy.GetTouristVSDOrderPrice(Visas.Russian.EntryTypeId.parseFrom(numberOfEntries.val), Visas.Russian.RegistrationTypeId.parseFrom(registration.val), visitorsCount, function(data) {
        totalPrice = data.Total.toFixed(2);
        $('.total__sum-value').text(data.Total.toFixed(2));
    });
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EVENT LISTENERS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).on("click", '[data-role="confirm"], [data-role="nextStep"], [data-steps=4]', function(e) {
    if (currStep == 4){
        $('input,select').attr('data-visited','true');
        $('input,select').trigger('blur');

        //идем по всем видимым строкам с ошибками и смотрим, есть ли ошибочный текст
        errors = [];
        let stepsHasError = false;
        for (let i = 1; i <= 4; i++) {
            $("[data-step=" + i + "]").show()
            $("[data-step=" + i + "] .input__error-label").each(function(index, item) {
                if ($(item).text() !== "" && $(item).is(":visible")) {
                    stepsHasError = true;
                    $("[data-steps=" + currStep + "]").addClass("steps__item_incorrect");
                    $("[data-steps=" + currStep + "]").removeClass("steps__item_correct");
                    let error = {
                        step: i,
                        name: $(item).prev().find('[name]').attr('name'),
                    }

                    errors.push(error)
                }
            });
            $("[data-step=" + i + "]").hide();
        }

        $("[data-step=" + 4 + "]").show();

        // if ($("[name=agreeVisaSuitable]:checked").val() !== "yes")
        //     stepsHasError = true;
        // if ($("[name=haveRead]:checked").val() !== "yes")
        //     stepsHasError = true;

        if (stepsHasError) {
            $("#savedButtons").removeClass('d-block')
            $("#savedButtons").removeClass('d-sm-flex')
            $("#savedButtons").hide();
            alert("Check steps. You have errors!");
            $('.header-sticky').addClass('active');
            $(".sticky-errors__links").html("")
            errors.forEach(function(error) {
                $(".sticky-errors__links").append("<a class='sticky-errors__link' data-error-step=" + error.step + " href='#'>" + error.name + "</a>")
            })
            e.preventDefault();
        }

        console.log(errors);
    }

})

$(document).on('click', '.sticky-errors__link', function() {
    $('[data-steps= ' + $(this).attr('data-error-step') + ']').click();
    $([document.documentElement, document.body]).animate({
        scrollTop: $('[name=' + $(this).text() + ']').parent().offset().top - 75 - $('.header-sticky').height()
    }, 1000)
})
//when user clicks on button "next-step"
$("[data-role='nextStep']").click(function() {

    checkIsStepCorrect(currStep);

    //check - if next steps exist
    if (currStep < maxStepCount) {
        currStep++;
        showCurrStep();
    }


});

//when user clicks on button "prev-step"
$("[data-role='prevStep']").click(function() {

    checkIsStepCorrect(currStep);
    //check - if prev steps exist
    if (currStep != 1) {
        currStep--;
        showCurrStep();
    }

});

//when user change groupSize
$(".input-group-size").change(function() {

    let newVisitorsCount = $(this).val();

    //removes all visitors except one
    $(".visitor-wrapper").each(function(index, item) {
        if ((index + 1) > newVisitorsCount){
            $(item).remove();
            passportIssued.splice(index, 1);
            passportExpired.splice(index, 1);
        }

    })

    //save last sex
    let lastSex = $(".visitor-wrapper:last").find('[name=gender_' + visitorsCount + ']:checked').val();

    //add needed count of visitors-blocks
    for (let i = visitorsCount; i < newVisitorsCount; i++)
        $(".visitor-wrapper:eq(" + (visitorsCount - 1) + ")")
        .after($(".visitor-wrapper:eq(" + (visitorsCount - 1) + ")")
            .clone(false))



        initializeVisitorsDatepickers();
        initializeLocaleDatePicker();

    //changing number-text of visitor
    $(".visitor-wrapper").each(function(index, item) {
        let newText = ""
        if (index != 0)
            newText = "Visitor " + (index + 1);
        else
            newText = "Visitor 1 (Main Applicant)"
        $(item).find(".step__subtitle-text").text(newText);
        $(item).find(".radio-buttons__wrapper .radio-buttons__radio").attr('name', 'gender_' + (index + 1));
        $(item).find('[id^=m]').attr("id", "m" + (index + 1))
        $(item).find('[id^=f]').attr("id", "f" + (index + 1))
        $(item).find('[for^=m]').attr("for", "m" + (index + 1))
        $(item).find('[for^=f]').attr("for", "f" + (index + 1))

        //remove text from inputs
        if ((index + 1) > visitorsCount) {
            $(item).find('input').val("");
        }
    });

    //resurect last Sex
    $("[name=gender_" + visitorsCount + "][value=" + lastSex + "]").prop("checked", true)

    if (visitorsCount < newVisitorsCount)
        $(".visitor-wrapper:last").find('input').prop("checked", false)


    visitorsCount = newVisitorsCount;

    calculatePrice();
    // checkIsStepCorrect(2);
});

$('.input-entries').change(function() {
    if ($(this).val() == 'Double entry visa')
        $('.second-entry').show();
    else $('.second-entry').hide();

    calculatePrice();
})

$('.input-purpose').change(function() {
    if ($(this).val() == "Auto Tourist")
        $('.auto-tourism-wrapper').show()
    else $('.auto-tourism-wrapper').hide()


    setTimeout(() => {
        checkIsStepCorrect(3)
    }, 200)
})

$("[data-button='addLocation']").click(function() {
    console.log(locationCount);
    if(locationCount < 10) {
        $(this).before($(this).prev().clone(true));
        locationCount++;
        $(this).prev().find('.input-city').attr('name', 'visitCity' + locationCount);
        $(this).prev().find('.input-hotel').attr('name', 'visitHotel' + locationCount);

        $(".location-wrapper").each(function(index, item) {
            $(item).find('.button__remove-location').text("REMOVE LOCATION " + (index + 1));
            $(item).find('.step__subtitle-text').text("LOCATION " + (index + 1));
        })

        checkIsStepCorrect(3);
    }
})


$(document).on("click", ".button__remove-location", function() {
    if ($(".location-wrapper").length > 1) {
        let element = $(this).parent().find('.input-city');
        cities.forEach((item, index) => {
            if (item.element.is(element))
                cities.splice(index, 1);
        })
        $(this).parent().remove();
    }

    cities.forEach((item) => {
        validateProcessingCities(item.element, true);
    })
    locationCount = 0;

    $(".location-wrapper").each(function(index, item) {
        locationCount++;
        $(item).find('.input-city').attr('name', 'visitCity' + locationCount);
        $(item).find('.input-hotel').attr('name', 'visitHotel' + locationCount);
        $(item).find('.button__remove-location').text("REMOVE LOCATION " + (index + 1));
        $(item).find('.step__subtitle-text').text("LOCATION " + (index + 1));
    })

    checkIsStepCorrect(3);


})

$('.input-purpose').change(function() {
    if ($(this).val() == 'Auto Tourist')
        $('.auto-tourism-wrapper').show();
    else $('.auto-tourism-wrapper').hide();
})

$(document).on("blur propertychange change input paste", ".input-arrival-date1", function() {
    $('.arrival-date-insert').text($('.input-arrival-date1').val());
});

$(document).on("blur propertychange change input paste", ".input-departure-date1", function() {
    if (numberOfEntries.val === "Single entry visa") {
        $('.departure-date-insert').text($('.input-departure-date1').val());
    }

});

$(document).on("blur propertychange change input paste", ".input-departure-date2", function() {
    if (numberOfEntries.val === "Double entry visa") {
        $('.departure-date-insert').text($('.input-departure-date2').val());
    }
});
$(document).on("blur propertychange change input paste", ".input-entries", function() {
    numberOfEntries = {
        element: $(this),
        val: $(this).val()
    }

    if ($(this).val() === "Double entry visa") {
        $("#summary").html("The visa support document applied for will be valid for processing a visa for the named person to enter Russia (the first time) on or after <span class='arrival-date-insert'> &lt; not specified &gt; </span> and they must leave Russia (for the second time) on or before <span class='departure-date-insert'>&lt; not specified &gt;</span>. The visa will allow two entries into and two exits from Russia during this period. It is the applicant’s responsibility to confirm\ that the visa support document/visa meet their requirements before they process the visa, or travel or use the visa itself. Please note that once your visa is issued the pre-paid registration fees are non-refundable. Please note that once the visa support is issued, no refunds are possible.")
    } else {
        $("#summary").html("  The visa support document applied for will be valid for processing a visa for the named person to enter Russia on or after <span class='arrival-date-insert'> &lt; not specified &gt; </span> and they must leave Russia on or before <span class='departure-date-insert'>&lt; not specified &gt;</span>. The visa will allow one entry to and one exit from Russia during this period. It is the applicantâ€™s responsibility to confirm that the visa support document/visa meet their requirements before they process the visa, or travel or use the visa itself. Please note that once the visa support is issued, no refunds are possible.")
    }
});

function cityInGetNotes(ctr) {
    if (ctr !== null){
        let country = Visas.Russian.CountryRepository.Current.getNameByIsoAlpha2Code(ctr)
        console.log(country);

        if ($(e).attr('data-visited') === "true"){
            processingCity = {
                val: $(e).val(),
                element: $(e)
            };

            let index = $(".input-city").index(e);
            cities[index] = {
                val: $(e).val(),
                element: $(e)
            };

            let citiesVal = []
            cities.forEach((city) => {
                citiesVal.push(extractObjectField(city, "val"))
            })

            let hasSiberianRailWay = false;
            let anotherCitiesNotSelected = true;
            citiesVal.forEach((item) => {
                if (item === "Transsiberian Railway")
                    hasSiberianRailWay = true;

                else if (item !== null)
                    anotherCitiesNotSelected = false;
            })

            let errorsText = '<div>' + valueCanNotBeEmpty(cities[index].val) + '</div>';
            errorsText += '<div>' + transsiberianRailwayCanNotBeAlone(hasSiberianRailWay, anotherCitiesNotSelected) + '</div>';

            errorsText += "<div>" + citiesCannotContainDuplicates(citiesVal) + "</div>";

            let warningText = '<div>' + processingDaysForCaucasusCities(processingCity.val) + '</div>';

            $(e)
                .parent()
                .next()
                .html(errorsText);
            $(e)
                .parent()
                .next()
                .next()
                .html(warningText);

            checkIfFieldCorrect(errorsText, e)

            if (!trigger)
                cities.forEach((item) => {
                    validateProcessingCities(item.element, true);
                })
        }
    }
}

function citizenshipApplyInGetNotes(ctr) {
    if (ctr !== null){
        let country = Visas.Russian.CountryRepository.Current.getNameByIsoAlpha2Code(ctr)
        console.log(country);

            let errorsText =  '<div>'+ valueCanNotBeEmpty(country) +'</div>';

            if(valueCanNotBeEmpty(country) == ''){
                errorsText = '<div>' + someCountriesCanBeDangerous(false) + '</div>';
                Visas.Russian.Rules.RuleChecker.Current.IsTouristVSDServiceAvailable(country, function(res) {
                    errorsText = '<div>' + someCountriesCanBeDangerous(res) + '</div>'
                })

                if (typeof registration !== 'undefined')
                    errorsText += someCountriesCannotRegitsterInPiter(country, registration.val);
            }

            $('.input-citizenship')
                .parent()
                .next()
                .html(errorsText);

            checkIfFieldCorrect(errorsText, $('.input-citizenship'))

            if (typeof registration !== "undefined") validateRegistration(registration.element, true);


    }
}

function countryApplyInGetNotes(ctr){

    if (ctr !== null && ctr !== "PLACEHOLDER"){
        $(".input-country").parent().removeClass("input__wrapper_error");
        $(".input-country").parent().next().html("")
        let country = Visas.Russian.CountryRepository.Current.getNameByIsoAlpha2Code(ctr)
        let text = Visas.Russian.RussianConsulateSettignsRepository.Current.GetTouristNoteByCountry(country);
        if (text !== null) {
            text = text.replace("{Country}",country);
            $(".input-country").closest('.input').next().html("<b>CONSULAR NOTES</b>\
                                                    <div class='step__note-text'>" + text + "</div>")
            $(".input-country").closest('.input').next().removeClass('disabled');
        }
        else{
                $(".input-country").closest('.input').next().html("");
                $(".input-country").closest('.input').next().addClass('disabled');
        }
    }
    else{
        $(".input-country").parent().addClass("input__wrapper_error");
        $(".input-country").parent().next().html("This field can not be empty")
        $(".input-country").closest('.input').next().html("");
        $(".input-country").closest('.input').next().addClass('disabled');
    }
}


$(document).on("blur propertychange change input paste", ".input-city", function() {
    let el = $(this);
    Visas.Russian.HotelsServiceProxy.Current.getHotels($(this).val(), function(data) {
        $(el).closest('.input').next().find('select').find('option').remove();
        $(el).closest('.input').next().find('select').append("<option disabled selected hidden>Please select...</option>");
        data.forEach((hotel) => {
            $(el).closest('.input').next().find('select').append("<option value=" + hotel.hotelName + " >" + hotel.hotelName + "</option>")
        })
    });
});

$(document).on("blur propertychange change input paste", ".input-registration", function() {
    calculatePrice();
})

$(document).on("blur propertychange change input paste", ".total__select", function() {
    let selectedCurrency = $(this).val();
    if (selectedCurrency === "gbp")
        $('.total__currency').text('£');
    if (selectedCurrency === "usd")
        $('.total__currency').text('$');
    if (selectedCurrency === "eur")
        $('.total__currency').text('€');

    let selectedRate = parseFloat($(this).find("option[value=" + selectedCurrency + "]").attr('rate')).toFixed(2);
    $('.total__sum-value').text((totalPrice * selectedRate).toFixed(2))

    // if($(this).val() === 'YES')
    //     $('.total-table__registration').text()
})

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FUNCTION EXPRESSIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Visas.Russian.EntryTypeId.parseFrom = function(val) {
    val = val.toLowerCase();
    if (val.indexOf("single") >= 0) {
        return Visas.Russian.EntryTypeId.Single;
    }

    if (val.indexOf("double") >= 0) {
        return Visas.Russian.EntryTypeId.Double;
    }
    throw new Error();
};

Visas.Russian.RegistrationTypeId.parseFrom = function(val) {
    switch (val) {
        case "NO":
            return null;
        case "YES":
            return Visas.Russian.RegistrationTypeId.RegistrationInMoscow;
        case "YES_Piter":
            return Visas.Russian.RegistrationTypeId.RegistrationInStPetersburg;
        default:
            throw new Error();
    }
};


///////////////////////////////////////// ACTIONS //////////////////////////////////////////////////
inititializeSteps();
calculatePrice();
initializeLocaleDatePicker();
initializeDatepickers();

/**
 *  Version 1.0.3
    Copyright 2018 https://github.com/masbaehr
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function NiceCountryInput(domElement) {
    /*Fixed variables*/
    this.domElement = domElement;
    /* check if already initialized before doing any work */
    if ($(this.domElement).data("initialized")) {
        this.log("Already initialized...");
        return;
    }
    /* i18n */
    this.i18nwait = this.escapeHTML($(domElement).data("i18nwait") || 'Please wait');
    this.i18nfilter = this.escapeHTML($(domElement).data("i18nfilter") || 'Filter');
    this.i18nall = this.escapeHTML($(domElement).data("i18nall") || 'All');
    this.i18nnofilter = this.escapeHTML($(domElement).data("i18nnofilter") || "None");
    /*create DOM elements only when not already initialized */
    $(domElement).append("<div class='niceCountryInputMenu'><span class='niceCountryInputMenuDefaultText'><a><img class='niceCountryInputMenuCountryFlag' src='' /><span>"+this.i18nwait+"…</span></a></span><div class='niceCountryInputMenuDropdown'><span style='font-size: 10px;'>▼</span></div></div>");
    $(domElement).append("<div class='niceCountryInputMenuFilter' style='display: none;'><input placeholder='"+this.i18nfilter+"…'/></div>");
    $(domElement).append("<div class='niceCountryInputMenuDropdownContent' style='display: none;' />");
    $(domElement).append("<input class='niceCountryInputMenuInputHidden' type='hidden'/>");
    /*Data attributes (selectors)*/
    this.defaultText = $(domElement).find(".niceCountryInputMenuDefaultText");
    this.selectOneMenu = $(domElement).find(".niceCountryInputMenu");
    this.selectOneContent = $(domElement).find(".niceCountryInputMenuDropdownContent");
    this.selectOneFilter = $(domElement).find(".niceCountryInputMenuFilter");
    this.selectOneHiddenInput = $(domElement).find(".niceCountryInputMenuInputHidden");
    /*Data attributes (dynamic)*/
    this.selectedCountry = $(domElement).data("selectedcountry");
    this.showSpecialCountries = $(domElement).data("showspecial");
    this.showContinents = $(domElement).data("showContinents");
    this.showContinentsOnly = $(domElement).data("showcontinentsonly");
    this.onlyCountries = eval($(domElement).data("onlycountries"));
    this.showFlags = $(domElement).data("showflags");
    this.onChangeCallback = $(domElement).data("onchangecallback");
    this.preferredCountries = eval($(domElement).data("preferredcountries"));
    /*country data*/
    this.allIsoCountries = [{ n: "Please select", i: "placeholder" },{ n: "Afghanistan (‫افغانستان‬‎)", i: "af" }, { n: "Åland Islands (Åland)", i: "ax" }, { n: "Albania (Shqipëri)", i: "al" }, { n: "Algeria (‫الجزائر‬‎)", i: "dz" }, { n: "American Samoa", i: "as" }, { n: "Andorra", i: "ad" }, { n: "Angola", i: "ao" }, { n: "Anguilla", i: "ai" }, { n: "Antigua and Barbuda", i: "ag" }, { n: "Argentina", i: "ar" }, { n: "Armenia (Հայաստան)", i: "am" }, { n: "Aruba", i: "aw" }, { n: "Australia", i: "au" }, { n: "Austria (Österreich)", i: "at" }, { n: "Azerbaijan (Azərbaycan)", i: "az" }, { n: "Bahamas", i: "bs" }, { n: "Bahrain (‫البحرين‬‎)", i: "bh" }, { n: "Bangladesh (বাংলাদেশ)", i: "bd" }, { n: "Barbados", i: "bb" }, { n: "Belarus (Беларусь)", i: "by" }, { n: "Belgium (België)", i: "be" }, { n: "Belize", i: "bz" }, { n: "Benin (Bénin)", i: "bj" }, { n: "Bermuda", i: "bm" }, { n: "Bhutan (འབྲུག)", i: "bt" }, { n: "Bolivia", i: "bo" }, { n: "Bosnia and Herzegovina (Босна и Херцеговина)", i: "ba" }, { n: "Botswana", i: "bw" }, { n: "Brazil (Brasil)", i: "br" }, { n: "British Indian Ocean Territory", i: "io" }, { n: "British Virgin Islands", i: "vg" }, { n: "Brunei", i: "bn" }, { n: "Bulgaria (България)", i: "bg" }, { n: "Burkina Faso", i: "bf" }, { n: "Burundi (Uburundi)", i: "bi" }, { n: "Cambodia (កម្ពុជា)", i: "kh" }, { n: "Cameroon (Cameroun)", i: "cm" }, { n: "Canada", i: "ca" }, { n: "Cape Verde (Kabu Verdi)", i: "cv" }, { n: "Caribbean Netherlands", i: "bq" }, { n: "Cayman Islands", i: "ky" }, { n: "Central African Republic (République Centrafricaine)", i: "cf" }, { n: "Chad (Tchad)", i: "td" }, { n: "Chile", i: "cl" }, { n: "China (中国)", i: "cn" }, { n: "Christmas Island", i: "cx" }, { n: "Cocos (Keeling) Islands (Kepulauan Cocos (Keeling))", i: "cc" }, { n: "Colombia", i: "co" }, { n: "Comoros (‫جزر القمر‬‎)", i: "km" }, { n: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", i: "cd" }, { n: "Congo (Republic) (Congo-Brazzaville)", i: "cg" }, { n: "Cook Islands", i: "ck" }, { n: "Costa Rica", i: "cr" }, { n: "Côte d’Ivoire", i: "ci" }, { n: "Croatia (Hrvatska)", i: "hr" }, { n: "Cuba", i: "cu" }, { n: "Curaçao", i: "cw" }, { n: "Cyprus (Κύπρος)", i: "cy" }, { n: "Czech Republic (Česká republika)", i: "cz" }, { n: "Denmark (Danmark)", i: "dk" }, { n: "Djibouti", i: "dj" }, { n: "Dominica", i: "dm" }, { n: "Dominican Republic (República Dominicana)", i: "do" }, { n: "Ecuador", i: "ec" }, { n: "Egypt (‫مصر‬‎)", i: "eg" }, { n: "El Salvador", i: "sv" }, { n: "Equatorial Guinea (Guinea Ecuatorial)", i: "gq" }, { n: "Eritrea", i: "er" }, { n: "Estonia (Eesti)", i: "ee" }, { n: "Ethiopia", i: "et" }, { n: "Falkland Islands (Islas Malvinas)", i: "fk" }, { n: "Faroe Islands (Føroyar)", i: "fo" }, { n: "Fiji", i: "fj" }, { n: "Finland (Suomi)", i: "fi" }, { n: "France", i: "fr" }, { n: "French Guiana (Guyane française)", i: "gf" }, { n: "French Polynesia (Polynésie française)", i: "pf" }, { n: "Gabon", i: "ga" }, { n: "Gambia", i: "gm" }, { n: "Georgia (საქართველო)", i: "ge" }, { n: "Germany (Deutschland)", i: "de" }, { n: "Ghana (Gaana)", i: "gh" }, { n: "Gibraltar", i: "gi" }, { n: "Greece (Ελλάδα)", i: "gr" }, { n: "Greenland (Kalaallit Nunaat)", i: "gl" }, { n: "Grenada", i: "gd" }, { n: "Guadeloupe", i: "gp" }, { n: "Guam", i: "gu" }, { n: "Guatemala", i: "gt" }, { n: "Guernsey", i: "gg" }, { n: "Guinea (Guinée)", i: "gn" }, { n: "Guinea-Bissau (Guiné Bissau)", i: "gw" }, { n: "Guyana", i: "gy" }, { n: "Haiti", i: "ht" }, { n: "Honduras", i: "hn" }, { n: "Hong Kong (香港)", i: "hk" }, { n: "Hungary (Magyarország)", i: "hu" }, { n: "Iceland (Ísland)", i: "is" }, { n: "India (भारत)", i: "in" }, { n: "Indonesia", i: "id" }, { n: "Iran (‫ایران‬‎)", i: "ir" }, { n: "Iraq (‫العراق‬‎)", i: "iq" }, { n: "Ireland", i: "ie" }, { n: "Isle of Man", i: "im" }, { n: "Israel (‫ישראל‬‎)", i: "il" }, { n: "Italy (Italia)", i: "it" }, { n: "Jamaica", i: "jm" }, { n: "Japan (日本)", i: "jp" }, { n: "Jersey", i: "je" }, { n: "Jordan (‫الأردن‬‎)", i: "jo" }, { n: "Kazakhstan (Казахстан)", i: "kz" }, { n: "Kenya", i: "ke" }, { n: "Kiribati", i: "ki" }, { n: "Kosovo (Kosovë)", i: "xk" }, { n: "Kuwait (‫الكويت‬‎)", i: "kw" }, { n: "Kyrgyzstan (Кыргызстан)", i: "kg" }, { n: "Laos (ລາວ)", i: "la" }, { n: "Latvia (Latvija)", i: "lv" }, { n: "Lebanon (‫لبنان‬‎)", i: "lb" }, { n: "Lesotho", i: "ls" }, { n: "Liberia", i: "lr" }, { n: "Libya (‫ليبيا‬‎)", i: "ly" }, { n: "Liechtenstein", i: "li" }, { n: "Lithuania (Lietuva)", i: "lt" }, { n: "Luxembourg", i: "lu" }, { n: "Macau (澳門)", i: "mo" }, { n: "Macedonia (FYROM) (Македонија)", i: "mk" }, { n: "Madagascar (Madagasikara)", i: "mg" }, { n: "Malawi", i: "mw" }, { n: "Malaysia", i: "my" }, { n: "Maldives", i: "mv" }, { n: "Mali", i: "ml" }, { n: "Malta", i: "mt" }, { n: "Marshall Islands", i: "mh" }, { n: "Martinique", i: "mq" }, { n: "Mauritania (‫موريتانيا‬‎)", i: "mr" }, { n: "Mauritius (Moris)", i: "mu" }, { n: "Mayotte", i: "yt" }, { n: "Mexico (México)", i: "mx" }, { n: "Micronesia", i: "fm" }, { n: "Moldova (Republica Moldova)", i: "md" }, { n: "Monaco", i: "mc" }, { n: "Mongolia (Монгол)", i: "mn" }, { n: "Montenegro (Crna Gora)", i: "me" }, { n: "Montserrat", i: "ms" }, { n: "Morocco (‫المغرب‬‎)", i: "ma" }, { n: "Mozambique (Moçambique)", i: "mz" }, { n: "Myanmar (Burma) (မြန်မာ)", i: "mm" }, { n: "Namibia (Namibië)", i: "na" }, { n: "Nauru", i: "nr" }, { n: "Nepal (नेपाल)", i: "np" }, { n: "Netherlands (Nederland)", i: "nl" }, { n: "New Caledonia (Nouvelle-Calédonie)", i: "nc" }, { n: "New Zealand", i: "nz" }, { n: "Nicaragua", i: "ni" }, { n: "Niger (Nijar)", i: "ne" }, { n: "Nigeria", i: "ng" }, { n: "Niue", i: "nu" }, { n: "Norfolk Island", i: "nf" }, { n: "North Korea (조선 민주주의 인민 공화국)", i: "kp" }, { n: "Northern Mariana Islands", i: "mp" }, { n: "Norway (Norge)", i: "no" }, { n: "Oman (‫عُمان‬‎)", i: "om" }, { n: "Pakistan (‫پاکستان‬‎)", i: "pk" }, { n: "Palau", i: "pw" }, { n: "Palestine (‫فلسطين‬‎)", i: "ps" }, { n: "Panama (Panamá)", i: "pa" }, { n: "Papua New Guinea", i: "pg" }, { n: "Paraguay", i: "py" }, { n: "Peru (Perú)", i: "pe" }, { n: "Philippines", i: "ph" }, { n: "Pitcairn Islands", i: "pn" }, { n: "Poland (Polska)", i: "pl" }, { n: "Portugal", i: "pt" }, { n: "Puerto Rico", i: "pr" }, { n: "Qatar (‫قطر‬‎)", i: "qa" }, { n: "Réunion (La Réunion)", i: "re" }, { n: "Romania (România)", i: "ro" }, { n: "Russia (Россия)", i: "ru" }, { n: "Rwanda", i: "rw" }, { n: "Saint Barthélemy (Saint-Barthélemy)", i: "bl" }, { n: "Saint Helena", i: "sh" }, { n: "Saint Kitts and Nevis", i: "kn" }, { n: "Saint Lucia", i: "lc" }, { n: "Saint Martin (Saint-Martin (partie française))", i: "mf" }, { n: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", i: "pm" }, { n: "Saint Vincent and the Grenadines", i: "vc" }, { n: "Samoa", i: "ws" }, { n: "San Marino", i: "sm" }, { n: "São Tomé and Príncipe (São Tomé e Príncipe)", i: "st" }, { n: "Saudi Arabia (‫المملكة العربية السعودية‬‎)", i: "sa" }, { n: "Senegal (Sénégal)", i: "sn" }, { n: "Serbia (Србија)", i: "rs" }, { n: "Seychelles", i: "sc" }, { n: "Sierra Leone", i: "sl" }, { n: "Singapore", i: "sg" }, { n: "Sint Maarten", i: "sx" }, { n: "Slovakia (Slovensko)", i: "sk" }, { n: "Slovenia (Slovenija)", i: "si" }, { n: "Solomon Islands", i: "sb" }, { n: "Somalia (Soomaaliya)", i: "so" }, { n: "South Africa", i: "za" }, { n: "South Georgia & South Sandwich Islands", i: "gs" }, { n: "South Korea (대한민국)", i: "kr" }, { n: "South Sudan (‫جنوب السودان‬‎)", i: "ss" }, { n: "Spain (España)", i: "es" }, { n: "Sri Lanka (ශ්‍රී ලංකාව)", i: "lk" }, { n: "Sudan (‫السودان‬‎)", i: "sd" }, { n: "Suriname", i: "sr" }, { n: "Svalbard and Jan Mayen (Svalbard og Jan Mayen)", i: "sj" }, { n: "Swaziland (Kingdom of eSwatini)", i: "sz" }, { n: "Sweden (Sverige)", i: "se" }, { n: "Switzerland (Schweiz/Suisse/Svizzera)", i: "ch" }, { n: "Syria (‫سوريا‬‎)", i: "sy" }, { n: "Taiwan (台灣)", i: "tw" }, { n: "Tajikistan", i: "tj" }, { n: "Tanzania", i: "tz" }, { n: "Thailand (ไทย)", i: "th" }, { n: "Timor-Leste", i: "tl" }, { n: "Togo", i: "tg" }, { n: "Tokelau", i: "tk" }, { n: "Tonga", i: "to" }, { n: "Trinidad and Tobago", i: "tt" }, { n: "Tunisia (‫تونس‬‎)", i: "tn" }, { n: "Turkey (Türkiye)", i: "tr" }, { n: "Turkmenistan", i: "tm" }, { n: "Turks and Caicos Islands", i: "tc" }, { n: "Tuvalu", i: "tv" }, { n: "Uganda", i: "ug" }, { n: "Ukraine (Україна)", i: "ua" }, { n: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", i: "ae" }, { n: "United Kingdom", i: "gb" }, { n: "United States", i: "us" }, { n: "U.S. Minor Outlying Islands", i: "um" }, { n: "U.S. Virgin Islands", i: "vi" }, { n: "Uruguay", i: "uy" }, { n: "Uzbekistan (Oʻzbekiston)", i: "uz" }, { n: "Vanuatu", i: "vu" }, { n: "Vatican City (Città del Vaticano)", i: "va" }, { n: "Venezuela", i: "ve" }, { n: "Vietnam (Việt Nam)", i: "vn" }, { n: "Wallis and Futuna", i: "wf" }, { n: "Western Sahara (‫الصحراء الغربية‬‎)", i: "eh" }, { n: "Yemen (‫اليمن‬‎)", i: "ye" }, { n: "Zambia", i: "zm" }, { n: "Zimbabwe", i: "zw" }];
    this.specialCountries = [{ n: this.i18nall, i: "_al" }, { n: this.i18nnofilter, i: "_nf" }];
    this.continents = [{ n: "Europe", i: "_eu" }, { n: "World", i: "_wo" }, { n: "Africa", i: "_af" }, { n: "Asia", i: "_as" }, { n: "North America", i: "_na" }, { n: "South America", i: "_sa" }, { n: "Australia and Oceania", i: "_oc" }, { n: "Antarctis", i: "_an" }];
    this.defaultPreferred = ["de", "at", "ch", "fr", "it", "us", "gb", "es", "ru", "jp", "cn", "kr", "tr", "hr", "br"];
}

NiceCountryInput.prototype.log = function(value) {
    //console.log("NiceCountryInput | " + value);
};

NiceCountryInput.prototype.init = function() {
    var _this = this;
    _this.log("init");

    //initialized
    if ($(_this.domElement).data("initialized")) {
        _this.log("Already initialized...");
        return;
    }

    //bind handlers
    _this.selectOneMenu.click(function() {
        _this.log("selectOneMenu.click");
        _this.openSelection();
    });
    _this.selectOneFilter.find("input").keydown(function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    });
    _this.selectOneFilter.find("input").keyup(function(event) {
        if (event.keyCode === 13) {
            _this.selectByFilterReturn();
            event.preventDefault();
            return false;
        }
        _this.filterCountries(this);
    });

    _this.updateSelectedCountry();

    /*Init country list*/

    var countryIterationFunc = function(index, el) {
        //check only country list
        if (_this.onlyCountries !== undefined && $.inArray(el.i, _this.onlyCountries) === -1) {
            return;
        }
        _this.selectOneContent.append("<a title='" + el.n + "' data-countryname='" + el.n + "' data-countryiso='" + el.i + "'>" + _this.getFlagHtml(el.i.toUpperCase()) + "<span>" + el.n + "</span></a>");
        //bind on click handler to appended element
        _this.selectOneContent.children().last().click(function() {
            _this.selectCountry(this);
        });

        //country selection
        var countryText = "<a>" + _this.getFlagHtml(el.i.toUpperCase()) + "<span>" + el.n + "</span></a>";
        if (_this.selectedCountry !== undefined && _this.selectedCountry.toLowerCase() === el.i) {
            _this.defaultText.text("");
            _this.defaultText.append(countryText);
        }
        //set first country
        if (_this.selectedCountry === undefined && index === 0) {
            _this.defaultText.text("");
            _this.defaultText.append(countryText);
        }
    };

    if (_this.showSpecialCountries) {
        $(this.specialCountries).each(countryIterationFunc);
    }
    if (_this.showContinents || _this.showContinentsOnly) {
        $(this.continents).each(countryIterationFunc);
    }

    if (!_this.showContinentsOnly) {
        $(this.allIsoCountries).each(countryIterationFunc);
    }

    _this.getFlagJSON();

    //set as initialized
    _this.log("Initialized...!");
    $(_this.domElement).data("initialized", "true");
};

NiceCountryInput.prototype.getCountryNameForIso = function(iso) {
    this.log("getCountryNameForIso");
    var cname = "";
    $(this.allIsoCountries).each(function() {
        if (this.i === iso.toLowerCase()) {
            cname = this.n;
        }
    });
    $(this.specialCountries).each(function() {
        if (this.i === iso.toLowerCase()) {
            cname = this.n;
        }
    });
    this.log("return:" + cname);
    return cname;
};

NiceCountryInput.prototype.getFlagHtml = function(iso) {
    if (this.showFlags !== false) {
        return "<img class='niceCountryInputMenuCountryFlag' data-flagiso='" + iso + "'/>";
    } else {
        return "<div class='niceCountryInputMenuCountryNoFlag'>" + iso.toUpperCase() + "</div>";
    }
};

NiceCountryInput.prototype.getFlagJSON = function() {
    var _this = this;
    $(".niceCountryInputMenuCountryFlag").each(function(i, d) {
        var iso = $(d).data("flagiso");
        $(d).attr("src", "data:image/png;base64," + NiceCountryInput.niceCountryFlags[iso.toLowerCase()])
    });
};

NiceCountryInput.prototype.openSelection = function() {
    this.selectOneContent.toggle();
    this.selectOneFilter.toggle();
    this.selectOneFilter.find("input").focus();
};

NiceCountryInput.prototype.updateSelectedCountry = function() {
    this.log("updateSelectedCountry");
    var countryiso = this.selectedCountry;
    var countryname = this.getCountryNameForIso(countryiso);
    this.selectOneMenu.find("a").first().text("");
    this.selectOneMenu.find("a").first().append("<a>" + this.getFlagHtml(countryiso.toUpperCase()) + "<span>" + countryname + "</span></a>");
    //reload flags
    this.getFlagJSON();
};

NiceCountryInput.prototype.selectCountry = function(e) {
    this.log("selectCountry");
    var countryname = $(e).data("countryname");
    var countryiso = $(e).data("countryiso");
    //Select the country
    this.selectOneMenu.find("a").first().text("");
    this.selectOneMenu.find("a").first().append("<a>" + this.getFlagHtml(countryiso.toUpperCase()) + "<span>" + countryname + "</span></a>");
    //hide the country list panel and the filter
    this.selectOneContent.hide();
    this.selectOneFilter.hide();
    //set the hidden input
    this.selectOneHiddenInput.val(countryiso.toUpperCase());
    if(this.onChangeCallback !== undefined && this.onChangeCallback !== ""){
        window[this.onChangeCallback](countryiso.toUpperCase());
    }
    //reload flags
    this.getFlagJSON();
};

NiceCountryInput.prototype.selectByFilterReturn = function() {
    var allAnchors = this.selectOneContent.children("a");
    var firstVisible;
    allAnchors.each(function() {
        if ($(this).is(":visible")) {
            firstVisible = this;
            return false;
        }
    });
    if (firstVisible !== undefined) {
        this.selectCountry(firstVisible);
    }
};

NiceCountryInput.prototype.filterCountries = function(elem) {
    this.log("filterCountries");
    var filterVal = $(elem).val().toLowerCase();
    var allAnchors = this.selectOneContent.children("a");
    allAnchors.each(function() {
        if ($(this).data("countryname").toLowerCase().indexOf(filterVal) !== -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
};


NiceCountryInput.prototype.escapeHTML = function(str) {
    var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      return String(str).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
      });
};

NiceCountryInput.niceCountryFlags = {
    "placeholder": "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",
    "ab": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA3klEQVR4XmNgGAXUAAvcdN+j4yW+Jh/QxQwaLE8zzLLdTxE+Yaj1H4YvBnr/P21nDqYvRQTBxUHYpM7yP8NMO8owzLBrqfFg+npW6v8H3e1wy884WoPZF/au/3/p7V2KMNiyy9GhcB+82rj+/4cTx+A+g8l9PHXiP6UAbNlJE124ZS9Xr/j/683r/2dd7MB8mJxHu8d/6SVBFGGUOAMHl58Hik9hmCpx9uXLh//E4G8/v/3/9vsHRZgBXYCWmAHDq7TE6JFIS8yAnjxpCRjQMx4tMX3jDEgcoBseBdQAAKVT61W+yMy5AAAAAElFTkSuQmCC",
    "ad": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABeUlEQVR4Xu3TzSuDAQDH8ecP8LLFspXmZRShRLPSis1IRLs4qKHNbSUpYnkJa4bnEQfLUl62npmXlXBYRLOthmS2wjzeS3JwcHRQ++Hmwi7PDrTD9/y5/H6EsMAUJvjL+KnymgGE74mI3SjyEOCU/tY9EcMi9fex620B3hgOguuC6GEeqxQ+ey0cpAKkugI75irsz8th6y9kH7PrS+FSV8FvaIRTJ8bpYBaOJ4sx11XELuZeyMd0Wx0ueuvxfqVFkCzBU3sSQuPpMHcqsTWRxR62SYkw1iLDoa4MwR4FvAYpzmZz4Z+TwNgkx8kyjz3swRUPSiMBM8THs46LG0c2XqyJYGghRpvEYJxx7GFeSz5MHUqESBEuu1PgM+eAmeHhzibCiKocR0tp7GGvgTgs9imxSrVihdLAolfBbmwGPayCZaABj55k9rCvtd3ucnBAZ3yushJT2mrQgzK45zNxu5fA7hq/n/d0jYuAIxXnG4nRO3WkYtj/xD4AnmOmmt/O4U8AAAAASUVORK5CYII=",
    "ae": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAgElEQVR4XmN4zMv6+z8Dw398ON5D9j9DsT6l+D7DqGVYNJOKh7NlnwX5vqIbjo63pgffrNk+5TAluGLbpI0M/2VkCPrs/4IF/6kA7o9ahq6RHDCcLXvLykow6XdKSd3U19c/TAk2NzffyPCYgYGgz+KBmIFyfH/UMnSN5OBhbBkAT2NyV9hZxugAAAAASUVORK5CYII=",
    "af": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABSklEQVR4XmNgYGC4D8T/8eH9RGCGmQRwB8NvhlHLCGEMw9HxqGUwAw8LCPw/a2n5/5yNzf8Ljo7/T6qp0cgyZYb/R0xE/h8QYP5/wdvx/2Fp/v8nHJTB4tS1jJ3h/7lU6/8Hzdn+Xwh3+v9s+XQwDeKDxEHyGIajY6It02D4f77a9f+ZWNP/VxID/5/3dfh/JSH4/9lYM7A4SB7DcHRMrGVH3IT/n842+H/KS/v/jYbU/3emFPy/kh8K5oPEQfIYhqNjYi3brwRMHFFc/49Y8/y/WZ0OtCjo/7XyGDAfJA6SxzAcHRNtGRAfD1QABpvR/+Mmcv/PWVn9P2GuCOEDxUHyGIajY1Is2y/M8P+Ui87/t/t3/X+9cc3/t7s3/z9uJQ8Wp75lUHxUQgJMH+TgQBHHMBwdk2MZLoxhODoetQzdYGwYw3B0TG/LAEl+KaleNp9nAAAAAElFTkSuQmCC",
    "ag": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB1UlEQVR4Xr2SMUgCYRTHHyUkaVLQ0BBCckOgOEQUREO0REMkBCVYpDZISxEtgWNDNBXkILgItglBc0NQEUXDDUIRgUFCLYXDRYNBr3teR5/3Tv1s6IPfnX6+9/953zsAAPxH2IYtjnZAd6fxeWLkd6+3h9fWZdW60YCDpHE/zQI6OwB3NgD7enmdHXG6F/XLkM2PJvQ0iXnjKUiSTADiLeDeFmD52thfmQMc9PFek6AOeeBJv1zqeGyKTDZjgIVjwPNDQ2RSOgVUjwBzu7zHxKVzpkOeqozI2BQqXsDtNcDlkPEUokiE/gzVLUzzjNRPfo2MqJ6rheEA4OMJF4h8FgDXl3hvRMhmMjpXOl8qpFlNjRsvAR2hVSBCx0kznJ0E7O4y+v06D41kxFWXFz2RMkIM/4xrUcMzj1KTaysjMt4QC2iF1ECYZdaVEfHRfRYiQ2QszbKayoptDgzO3LCwRvhnVXxod7KspjLivl/B3ImG2QtsCtXd+QIsQ1pGvIbDKLPeolHWa6WpjNDSaWt2zXrPZlmPHVKyktOJFVW1OqqrUihgye1mPXZIyYhnRcEvTasR0feXQOM5iUjLCOv8ZOYk0pKMMOcnOyeRlmU0v498XnpOIt8E+BwS3lMn5gAAAABJRU5ErkJggg==",
    "ai": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACZUlEQVR4Xr2TUUhTURjH74P4EAaCL3uYbz4YPfiobw1EURDmwwgfFs2GNpSicqCSFIaUSQ8rVq00GrGStTBbjbWSQB24NnPYnW7TretWmzUaOnGtIePf7oHJXdebMLYO/Djc7/vu/3/Ox3coRqHYSbpcmJiwo7LyAiiqmyCR3EI2h0WKIjv7ncuJxf0wD97BWksLPt1/uh8/lLOdj3Y+KnoRUqmw6Q+ho2Nc0KysTIXh3nGsyU4iMjQEq3kJNTVDfFEhsqfcq6g4h2s9D+FtbEJMp4PVsgyFQp9nNnxlGp/7LiPQ3g6PbQFtbVq+2GHMPJ/78X5yFixBuxtbJhOSTifSDIOgTEbM2H13fh7bFguJz03ZST2L4Z6NLyrEsli8xwoWylvxMb6oEP/VjNvGsNND2vQ7EEBqZSWvjWw85fORdn5z0YW1MTcgGs0MkkwIX+Ry+C714+Z1S96AjIxY4PVuIm4wkJHX990F+x9P8F8olU8SYSaGmFaLdakUDwYfExGh0R8YmEJ8I4qvajU8Z1SQNo3xRYXYdToj7EmXro6hoWF0P3GQWS4nEqlhMDjwi6ZBn1LyRQWhuhl+sDDq65Worj6N5uau7Du9iKqqTrS2dnFqimjm91uRySQBZhr46UYmFUU6HeHUFNHM630Dsl7UAe5RIBEonZnDoQdoDRC2kZvhtQTb0XecmiKaGY1Zo1UdYKwFNszABzmCvlecmiKaSaU9CMVXsZ4IgfnuQmDLj9vaG5yaIpqxNL58BmoRhNoFGkeOlmgaWVjxE6ZJ1M06IDp+/q98kc1ylJdzb5SjRGYH8Qcr9uN9ONfQeAAAAABJRU5ErkJggg==",
    "al": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABbElEQVR4Xu2UO0vEUBCFs3GTuE832c1rNVlBsbGzt7MTsbOz8xdYWCvYWdoJFhaCYGchWPgbthMsJBb+j+M9d1lYxkf24gMLi5Nh5szMx83LeskXCyX8ggqLl3eMn9Afhj1lg0/zEpXDDjo+bpMUl1GMwJ7BTqOp64zMWafPPjkrVA67CGNs1xtYdhwc+QFWXReHnVFkzjp99slZY9hd0sduswXLsrDmeVhxXFQrFRUdnbNOn31y1hh2HSXYn+vopR+JPvvkrDHsPIyw12q/AUyKPvvkrDGMLwAfftu24anbNwlhzjp99slZY9hZL8JGra4X8gRVawRkZM46ffbJWWPYcD7Dw0KOmzjVJ+EJbAVjZM46ffbJWSPYcz7QS4/9Lk6CHk67IdZnaxrCyJx1+uxjv9wxNYwa/yW46D7tY1N9U3xOjMzHgCn+JuUwqSv1ii+pb4xReiUyhz1mObbUqRilVyJz2Bf0D/sWFa/w1i2UbdUF9gAAAABJRU5ErkJggg==",
    "am": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAX0lEQVR4XmP4z8BwH4j/0wHfZwARWCRogUctowqms2XtDBUbmxlqDtMag+xhAFp6H9MRNMH3Ry2jBr4/jC070WS+8UK7/mFaY5A9DP+XAjP1UqDVtMf3Ry2jBh7GlgEA73KZMgeA1KQAAAAASUVORK5CYII=",
    "ao": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABWklEQVR4Xu2TwStEURTGv8UUuxGa9LJRJPUW/gbZTJJkOztF1Cxko2wskJVR/gEWdlISZWNBk1nIQllYndHkf7A7zvUOcu/13l24Vha/r3fud27fO/e+BwZI4D+AYMRjxOA/7FcIDEuEurDo8cIJDCsLu0JLONLa7ikmIKxPWEY2XUVoChOevmICwkzAk1DTOhXudN3uzYfQBjokxU+0u8DPcmyd5Gvt9Rz8krq9eZgclIzADOhnvuauNS/AM1V3PQ/NkfE85gdXp+C9bXBPOauHh8AP1+CBittbAEHFNj5Jx8DHh+DbS3B1Up4PwOur8qYlt7cAgopt8Nw0uLEJHkyyKVaWskAz1eiI2x8AQcU2uFs+DLoHn8hUj/K5n8n/1dgC1xfAN3Jns1PungIIKrbxjjkqc1fj6fdj6+8F7++AN9bcPTkQVGwjBgQV24gBQcU2YkBQsY0Y0Bsro0eFDgxHjwAAAABJRU5ErkJggg==",
    "aq": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABPElEQVR4XmOwqj13H4j/0wHfZwARWCRogQe5ZZ7tlzDEiMSkWda2/uH/n7///geBuy+//1906MV/387LGOpwYOIti5x4DWwJOnj2/uf/9ade/w/rv4qhBw3jtmzCtsf/nZsv/A/uvQLm1668j24PCgD5Et0Moi0DGQ5y9USgpbP3Pv//+O0PdPNRwMUHnzHMINoyUFycuvMJ3Uyc4Pitj/8dGi9gmEOUZSDcvPYBupl4wa3n3zDMINqyNSdeoZuHF5y7hzco8VsWP/X6/28/IUmdGECRz0D4yI0P6GbiBCWL72DoJ8kyUEKZuecZOIg2nXkDTggvP/5CtwecyUFZBV0/SZZhwwHdl9Ht+p804waGOjRMnmVVy++BfQeKz+tPvv5vWH0fQw0WTJ5lMGxbfx5DDA+mzDIS8TC2DAD7o+P0pXertAAAAABJRU5ErkJggg==",
    "ar": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA30lEQVR4XmMoXnP/fsma+/9pjUH2MIxaRike5pYtPfnq5YrTr//TGoPsYfjw7ffv/ySAOweW/n9wYgMQb/z/9f0bdGmcAGQP0ZZ9evHg/7WtU/5fWJL/f2+t8f8z87P+X9k0ASxODCDJsjf3b/6/vbXh/6Ycxf9XJ/D931Oh/P/c/Lz/Ty+fQFeKFZBkGchQkOE7S5X/v1zK939/rTrY8hc3L6IrxQpIsgwUXKBgAwXf/kaT/5eW5oODlSbBCAKgBAFKGK+uHfx/Z/9SdGm8AGwZXZM+XTP1qGWU4uFtGQCI4eAEuOjl6wAAAABJRU5ErkJggg==",
    "as": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACb0lEQVR4Xq2UUUhTURzGDxjk8EHooV56GJKCSpaLBVFSxoIw6aEXJUKyWBRic9GCIluDORfLzGojItzUZdDWNnUvNW0b02lGmxveZDa6wYwlK6KH2EMPX7t3KN6r2e7WBx9czvmf78f5n3MuIeQC/qeLiBxVW5rQvPUY9CVSuEt3IVCxH/Pn2jPzGywQ4s3Cl/qt+LUYx4oEw4SEM4p/iGLWM5YbTHA4FUFw4C7MyiZcqy+DoqoILm3bxjCh4YyWlz7jtUkD89mD6KgkuFRB8EBKcLWKQFlTjPkZH1tH8glfK5qm8fBwKfQSAnk5QWcNYb9byggUGbBTc3G1lggNX6t0Oo0R3WV2F3ckWXfXZnd2vloEV28np54ICefryyIFm6IRva0yFvL0QLZ92r0ZWGUxtKePwOd5BavVilAoBMIPEKpEIoE34x7oZDuhzLTt5m4Cw74s9EZjLSwWC9xuNyiKyh/m9U7A7/cjEAggGo2iX90OY0sd7kuzoEd1JRi6p2HPlHEsFssfZjNrEJx4xhljzvC6RMS288oeEai3Ac68YBjTNpdZhYhbDjo0hMiMgzOvrt+O25kbaVad4YwzyuuCJD9NY8F5HJ7HhzBmakBkvBuJSSWiU4NYGCyH3dCBb8tf+csKu/oDRhWmfU6M2p/gvbMVfYptGO2pRtijAx0eBn7/5NQX9KiDjjY4unbAZzkBe18DXvTIYLp1FN6XalgMp2A3NiOVSq3WF/y7mpt6jhHjSSQcYti6xHDoxUhSw5yaFa2D8Z0LPJlMIvzOD/rjHBLxWfz4vv68GP0Txncu8L9JMIxvIfCCYXxvBv8DZlG3+IT4XSQAAAAASUVORK5CYII=",
    "at": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAASElEQVR4XmN4LCPz+z4Dw39aY5A9DKOWUYqHuWVvs7M/vE5I+E9rDLKH4f////f/0wfcH7WMGmA4W0bXpE/XTD1qGaV4eFsGAF50dnwtqpqxAAAAAElFTkSuQmCC",
    "au": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACuUlEQVR4XpWVUUhTYRTH74MPPvjgw0AfFuzBBx+EIIqMRASDST6McKQkNMMl1SzNSVNWaRgxmJk1TchGhaZGijOLKaMk9hKaaNNEzPzIzGY6JcsgKP91vrUx773dbRd+38M5557/9517zneFGYPx9xb7AIulDwkJpyAIZZzZxha8FgQ8tPeGbcnJlXhqbcF7vR6dTf1he4ww4YLhVmBOfxQbLhc8nhmo1RZZseyDNkyfNGG5vh5s3o/MTJs4WTSYQEtGRj3Gz9VisbwcX5ZWodO1hsW6r/fBbrqNdzodvnm96O4e5SeUSRYNJvwtX6Cu7gkaGp5h9P4A1nt7QY//rpOLBUbHsdLcjB8rqxgYmATFErQhmYRKMMG3b/+2T6OBmEmViov51GqJj3DnHRMniwYTJtS7tilpvHiyDouTcbTam8jJaZTYudiCa/jX5sgIxCzV1PCk6z09Eh/Rda1LnIx3MzXZ4OAbiY+LBZcyVFQ8wvelZSwUFeG59Qbmmlq5mNvp5t332WbDjPE0DmUrd2FqajVHbOc6KSnmRbd7Gl+HhjBfUADriRbujGz9pKSz6Oh4ha2xMd6Vjsq2HTOpREQcE2bffvxJJZs6cx57dl8JB4nnjCgudmLTvwZWUoLO4xclieVoa3sJk6krKFattQaq8i7x3UcGGbUNsGUZkXvg6g67RlMLg+Eejuy18HLZ7cOgORWLEHQqErNaXUGx4CINjIX09MtgbO1/3RfmXylZTGJK34cqkphoktjz8x1QqaoibSwmMSpb6EUl4Uho3kTXGlMUo0u5v38CU1Of+Ow4HC8kMXHAFMWoRDQWoYdmURwTB0xRLDe3Ce3tXi60sbHF/3lpabG1vAxMUYyg272w8A4farFPDrP5MUpLH0jsQixiofmjxojWHOSnTVE1ZGJZVLF4UdgU+wMr+cV7y0ozKgAAAABJRU5ErkJggg==",
    "aw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA6klEQVR4XmMwnnnmPhD/pwdmMMZhWczswxhilGKslvnXLPu/ePZ6DMWUYqyWdWfU/1+fWY6hmFKMYpnb4ov/s+Ye+L/NLeD/GWf3/7kz94DF0DWRi8GWBa+88n/24p3/93gG/T/DwICCT9o5gYM0bOl5DM2kYhSfec07/b+id83/PQ4e/887OP2v6Vz+33fOCQxN5GKscTYhufL/5tQiDMWUYqyWhZfO+b90xhoMxZRirJaZTj/5P3H6XgzFlGKsltEKD2PLVl4N+7Dppu9/emCGSSdz3848k/afHpi+ltE1GI3pmUCMh6tlADZEihdcFfZqAAAAAElFTkSuQmCC",
    "ax": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAgUlEQVR4XmNgCF76Hxe+v0/0/89t7P8vCZiA8Zd5vP//n2PAUEc0xhBAwqOWEY0xBJDwqGVEY5BmfBibZeRiBpBh+PCXhbxwy973CGHIk4IZYAbRA9PXMnSvomOqBiN6JKJjkCKYZRQnEIzkiYSpnvQxBJDwqGVEYwwBJDxqGbEYAMyZptesSPVcAAAAAElFTkSuQmCC",
    "az": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA3klEQVR4XmOQWnX+H8POJ/9pjcH2jFpGKR7mliXVTfsb2bT4P60xyB6Gm2aWv99qWv4nhN+Zuf7/2jXp/68Ll/9/mz7v/5fqFgw1+DDIHqIt+7X/yP+fO/f/f6tjAxED0h98Iv9/8I5AiOHBRFsG8hUIfAxNRIgZO/3/feHK/3/v3v//4BeNoQcdE2+ZgT3YUAzLLl6lvmUg/H3eUoxg/JRSQP1gBGFQUP7ctOP/n/sP/39t7fv/KbUAQw0+DLasttj8ZUOh2X9aY5A9DPZzTO8D8X864PujllEDD2PLAChl+/zJQ+hdAAAAAElFTkSuQmCC",
    "ba": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABBUlEQVR4XmNgYJh5f/HiW/+3b3/0n4Vl9n8ZmSX/ebgm/T88R+X//zMMVMHz663+g+xhABECAvPBFjk7bwFb6uCw+b+I0FSqWYhiGRCDOP+Dg3f9B4Hq6lNgPrV8iNUyG5uN/w0M1vz39t4ODk6QT6lhIVbLYFhFZfn/48df/r99+yPYAZRaiNcyEEZONAoKyyiykKBl1Ew0BC2DYWokGqIts7BYD0407u5byU40RFsGw8iJhlQLSbYMhMktaciyjNxEQ5ZlMExqoqHIMlITDUWWwTCxiYYqloEwMYmGapZhSzTiYtNRLKSaZTCML9FQ3TJ81RPVLYNhDY2VGNVTsn8cSO4+AEjVj4R/Lf9xAAAAAElFTkSuQmCC",
    "bb": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABCElEQVR4XmNgUKu/D8T/8eH/x9UIYnQ9WPB9BjCBKYGC0Q3GhtH1YMGjlmEajo7R9WDB5Fn2eZ8Khhi6HiyYOMt+H1GFGwpiZwYJoFgEEkPXgwUTZ9n73Sr/Q5x4/19fofB/TZvUfxUZ1v8bOqX+n18k/z/ClRcsj64HCybOMpDre3JF/zekCIPZIMtAdEWc0P8JBaLUDUaQYSDX2+hzolgG4sPiD10PFky8ZSDsYMQFpvVV2cG0hwU3XA5dDxZMmmUJ3nz/NeTZ/lvpcoJ9B+LTzLLX25VRfAjj08QyGIZZhozR9WDB5Fl2eIYshhi6HiyYPMuwYXQ9WPCoZZiGo2N0PVgwfS0DALs9Niz17yWoAAAAAElFTkSuQmCC",
    "bd": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAyElEQVR4XmNgyPK7D8T/6YDvM4AJTAla4EFomVa8z//4QM//va5u/1vd3f77h3r9F0/xxVBHAOO3jD/N9/8cR7f/X7QcMfBLXaf/aQEeGHrwYNyWSSf7/L9p6IxhCTpeYu+GoRcHxm3ZaltXDINx4ehgTwz9WDB2yzzCvTAMxIef6jn9Z8nEMBwdY7cMlAjQDSSE9eK80Q1Hx9gt22xNfBDCMCi1opsz+CyjazDSNYGAMN2SPgjTNVODMN2KK2RMl4KYyngYWwYAdR/x9N6BxxQAAAAASUVORK5CYII=",
    "be": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAU0lEQVR4Xu3NoRWAQBAD0S2AAq6M678TFEWAP8BO8haHivh2pqrqeKzO2rdP55ita8z3k1mPccpMwg7jlJmEHcYpMwk7jFNmEnYYp8wk7DBOv89uanxHAdHMcG0AAAAASUVORK5CYII=",
    "bf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABCElEQVR4Xt2QsQ4BQRCG5w28gcI7SNQiIfEmeoVepVFolCgktAoPoNAQUUhUd0IhFCJ0FOP+bC5xs3fZXUFC8d1k/5md77LkEfkB/AV8wiem8Ql+QLZJ6ZkFr8mubT2zwF22yxDzVVXZM+AuO1WVDFX2DLjLbkslQ5U9A8mybTr4+1qUc12JQnCWM7gndxllYF8gvq+jgiQwh3m5IyIrNume7RInke8Tj1b68mfQx5y8+ww8RllIa6pLAHI5G4eTrL/QRQC5nI3DWpbrER+OavnlRNyZq4ozcvTlHYm1rDJWi2cecXmoMlSckaMv70isZXiqxkTPAXKbp7SWlQZ65tIH1rJ38N+yBw7+JCYCpNdnAAAAAElFTkSuQmCC",
    "bg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAXElEQVR4XmP4/////f/0AfcZQAS6KI3AqGVUAXS2rP3c7o3NZ3YcpjUG2cPAMC3vPhD/pwO+P2oZNfBwtqwo2m5jXqz9YVpjkD0M19SE7gPxfzrg+6OWUQMPY8sAHjGPHWGaYUEAAAAASUVORK5CYII=",
    "bh": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAeklEQVR4XmNgAIL////v/48H/P3y9f+bxav/33QN+39OUI1sDLKLoGXI4Pu1W/+fVLX+v6RijmEYITz4LKNrMNLVMmRA82BEBjS3jK7BSFfLkAHNgxEZ0NwyugYjXS1DBjQPRmRAc8voGox0tQwZ0DwYkQHNLaNWMAIAyWjHPoRLtGYAAAAASUVORK5CYII=",
    "bi": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABkUlEQVR4Xr1WPU/CUBR9A0YmZ0YSiQMTg6OTCwmbv4CNlUkdWE2cjAOLGwMLiTEMrCZvIMbFpBqiMUHzNld0EY3R4zsPW9tb0QLCaW5fez/Oyb28tig0GkAmAyg1PyO/1bFXFoMBUK0CqVQ8cRYjH3nJb6Hc2UevB2xsxIumMfKQLwQ1fB9GHA7N5vSjZR3rBaijcjc5dJ46MhYfLddyGajXAa1HK+/D8dDIwiA/dZTyFGjFuyL6L32ZNxpFpQJ4XuAyb+Y7Tj/jYmQE+cjrawRitPRVGrWHmmt5HPT5IVo7ebeOA+vJQ74wf0TMt+x1Fu3HtuRw6B7vorW1BH2yLUMOrGO95Bwr5lvpvoQPe0gY05Uul8d8yZFYrHBbkJy/gvmSY2Ix7/kC+uzA/U68dr5XD/ryCPp0L/DNJBYeo8mvwKxnRi18wWyuwawu2x0xnH6McoO4zvS+M3bkfOzMdqo7taAzIvEGSbL1k+DPrT/JQx3BJA/1Ql9XP45sXi/iiGfenxh3liP7L4t9PBf4t+AT+IHP3BVGqewAAAAASUVORK5CYII=",
    "bj": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAQUlEQVR4XmMwnMLwnxhcsJLh/P9rDP8pwQzohuLCo5bhw6OWjVqGFw9Oy9IKWM/fUxT4TwketWzUMrx41LKhZxkAqmySUfQ2LtcAAAAASUVORK5CYII=",
    "bl": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "bm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACL0lEQVR4Xu2SXUhTYRjHd9mFdwp1UXZTQS0ShYJA2Aozu1jm0Uo0jmHh17ENnTlT1naarFm5ZbqseVJSy6ykdmGUSi31bAiala2LCqMUBakru5HKfzwHmpNzcRDObqIXfi/vx8Pze3ifV/P2Qsvygn8Ano4gNuxtgGaLFfr8doST0zF/ySvtiUPHWhGsvYqFm114WNOKyQTt2ojXftYkbj/3kzcK+Gjz4K+U4XoismhJYGhKKqRkY448mRIkG+B9y2J9G4JOAeGqi5hz+/Dt7iNMbUvFNGvEbJ0LX5raMdl4GxRH9J60y5MpQbI3u9LkFwq8zCqTnSlCMqvD/9vW9Bwdfa8w/f4rvvc8xtyn+cgzLv5YwuLrMMa8vbgsjIJi3Udt8mRKkIzJu/GLekE9od5Qj6I/yDotD5PjCWaGJzDjbEZX1XVUJ5+WJ1OCZE9dnUsjpTxsDI/DiaxE2T4LQrkmDNc1R85ytp5Cm70bAfcdPDOsfsZxr4APwRAGfQLul5+R1sQLXeZqGU2yKtZI+IEfNELFxeiOi8OEKEr7wIGoX6um7JrbAUueDvZSHRot5RDFd7GTVVYwOMGmQldQgeOVZzHY74+N7JbJjKLs3UjXJ0G/cxPY/ELUHtwfG1mniwdXY0dJtRcNLfdQyJnBe6wYyshaiVNLdsXMICVlMzILMmB0csjesx5skR5j8TtW4tSSEX3sEXD1BuQ603DeaMB4QpSIUFOmyH+ZKvzTsj/M85mat/P9QQAAAABJRU5ErkJggg==",
    "bn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAC2UlEQVR4Xr2SXUhTYRjHj07l4Oa329yHO7qGoRlFKpEZfVh4IRUTUwS16OMqb7wyc12YBl2YRBEVShEZklIXkotiBTUIlEIlLHPaySZL1OXGdHNt7d/ZIdd2dGyE+sCP93Dec57f+5zzJxzfxDQDNgGacC20mJ2mYu7GRkATHrfJBaaYFS7rXThnypkNGffB9eCfzL88v81wL/bCOXsSjikl96X/ZW1ZQHmW4V7S4td8PZa/Z7Mvzj2QY+ljGrdZKMKQBZQLDvo5ppvVsLwp4DYLBU1UVhzztLa2wmAwcDuvWdZXesy03YJF+5qZeAQuSzvCDBhNUJTcQxAEvKhUKmg0Guj1eq4DC0/7YThajWFhNkbEuRhKysKXQ2Ww6QfY/TACFijzZ6tMjgsVVdDpdHA4HEwjK3729OHH1Zv4XFgK05XrmL/fDfvYhO9A9tExuC3WYAELLuMREWjii5AfFQuVIAF16nJ0dXXBZrPB2HDZJ/BO5hifZNep+kvwuNy+Pbb+Bsw1Xz9LdNzYZzlemg2SjF4lLImJQ19CJivcHkWy90iSxO2sXejs7ITRaISlX8dO/CnvCPupg5U3iIR3PO+Yc6Mi9HQkokpNIiU5im0sjYxGPyPL4ZG4lyr3HaI3nvJdPy7Yhjvn6zCcUwTn1DTX4asAmT+2CTG0j5LQWBmPtlQJ2/TF7nQ0xosgYQ7QLpCC4sWgSSiErkjBfvJmfhr2KoMHLKhshcWhNJi7ZRjsFeLJYSneH6DwYU8mnkkoDOYp8a6YwsVkIeIieCiMjkUis65MLJeJcPZMjS9gIWVe7BNpmKzOYBK4BYYyJUZOZEB3UIGH+VK83ElhdIeKnZT7v/0R8Hk4V5trDylbGhfD+laCaY0CpmsK0LUZGC9Rgj5F4WtzOvrUEtTs5yOejFwl8Ucm4YWeLFwCA7ZavK4yf1YCVnc61ivZWBmXAW0KWhoE5k2R/YX+AzUcy+SXCSTBAAAAAElFTkSuQmCC",
    "bo": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABD0lEQVR4XmO47iD976q23H9aY5A9DKOWUYqHuWW3y4X/Ps0X/k9rDLKH4fEVtt//HzD8JwY/OMrw38hA/r+lMc9/ZUVRDHl8GGQP0ZbdOcT238mS9z8nO9t/T2f7/1xcrP+7KsT//3vAjqEWGybJsuwQtv8eWhz/3WyE/kuoKv43iXT/X+TB9b8hjQaWTchk/R9nw/5fLtr/f0lf7f+Utur/cbbs/ydls2GoxYZJsuz8PNb/Dba8//UDrP/r6Wr+ryiN+D/Fg///wzU0sOz9JYb/a5rY/1fFcv93NlP+72rC/n9zKydYHF0tNgy2LHqe4sv4+Yr/aY1B9jAwVBrfZ6g0+U97DLRn1DLK8XC2DABID4gkv4MsmQAAAABJRU5ErkJggg==",
    "bq": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAXUlEQVR4XmPYaurwb52Mxn9aY5A9DKOWUYqHuWUnKpv/nims/E9rDLKH4fnrT7//0wGA7Bm1jGIwzC0r6Nj6sqR7239aY5A9DIpuPfcV3br/0x733B+1jAp4OFsGADj8ivtJ5t7cAAAAAElFTkSuQmCC",
    "br": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACeElEQVR4Xr2VS2gTURiFu/VVfIAblUq0PuhDCSZEYkVrFYuhYqkGFUUDSlFpUetGhKKgi1AFEasErCVOkqmmVtMmhtpKa1oTH1hBlKKNaaiCKAhZCO6O+UfmMjM3k2a6cHGSzMx/znfv3Hv/FJk6tqeywn9Qqog+cjzIq7Wd27h7BcgYjCA3YqXITM3B1eHVKO2s4WryqHDYnm4bPn5ahD/fZjHRNd3X1upoeli5txp34iYG+DmxEImhCnweK5Guf0/Nhmd0hVSn9RqCHQ5ZkJxYIIWOvzHhYFMrymrvMdn33oJXqJWeU92BRxYuY1rY+uwoxVfL2Wxex8pgrutQgZRquXSS1ZKP/NrMnLDGiBlfvxQzcya9GFe8AbTcDqK5rQ+Oxm4ORgqH7MxDfsrRhVl9W/D47TLVBiDFn+9Dm/8ZrnUNolXoQXAkgXjyA65H+rD/TIjBXGfPc97w2FJs9G9Ww05HK/EjPZcrJt30NGDHEfVszLv9OHE5AvFFDO39YWxy3oet3sN5SZR7rr/iH2zV3ZrJCwPl+JUHRoBKhwDH8YfS7+pDDxj42MUIfImnOOUWOS+Jcilf9RqrAlWIvlvCFQ88scLZ1JsdvSgBZZitQWTAna4gQsODnJfyuNeoXMjm6Dp8T81jhsxkMXa53LDU+7PALimcvglMIqg9OxDlBiE/LY0yNyeMZBa25tz6BFSuHa0lgZVbnzYZ+bWZujBZeodafp10qH2BOul5OjkfR3s3cBkFw0jUhqgdUVuiUG27IgkvdQ+yMZgsarjvx9WNmGbt7LFytToqHEaivxT30BppO7ePriyk+SplDCbLIETWzGAzVOovp9+8Vc9tEk8AAAAASUVORK5CYII=",
    "bs": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABTklEQVR4XmOQDgv/JL1w2R+Vy7d+0xoz8JmY/mZgYPjP7OX7n333of8c567RDMMtA2FGXt7/rCWV/zlOX8ZQSA2MYhkMM6lr/GdbuBxDMaUYq2UwzBwY8p9931EMTeRivJaBMDhoqxswNJKDGaRNlf+iW4AN8+sr/7dYWf/f7coCsjGDrSUPXp8hYxYWhv8Z8Qz/399i+P//JemYJMtgWEKM4f+SaZiGEcJkWQbDNuYM/2+fwDQUF2YwNeIiyzIOdob/DaUM/78/wjQUF2aQk2EjKoEgYxc7hv/Xj2AaRgiTZBm5cQW3TFBa4B+6oeiYiZnpv2aE2f/4U7X/U2+0ko0Z2CUl8PqMmkUX0DIp7JZxcVG9UMZqGbOL23/27fsxFFOKUSxjlJL+zzZxOoYiamGIZczM/1kSU/9znDiPoYCamEHE2/cn+7otGBK0wABkPqhRhGUlBQAAAABJRU5ErkJggg==",
    "bt": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAC7ElEQVR4XrXVW0jTYRjH8e67qEyyA2tKgiAdiBK6KrJITV1KJ9IsJEtKq1lGpjjNsk2cOd1sHjewcrOyNbDl2jysudYqCo9IRhO68MILoS538W1NNHVGNfPid/W+7/P5P/Dwf5YxFOr2hiXNGyFIQr4tY6kxowBSV8PJYM+SYW5LBFSvgyQvJApaHDbRK6BNvQOVNJHW2iQ8Q1t+QcYw3Df3TSHTCRQbtwno0KVheZqPokyMsa0Ou83KY30jw+ZiXhZlYC9Ip/OgF41ZRGeTbzZia92DpiqF/NxT1CgrkMvl6PV6TCYTDruNXtlV3PtXMh6zcvGdefqF1Fdn+wC1qhyHuYZnTQrqzh3lYc4pjBeSseeeYCI+ePHYZ7OQdt1FGhvqkJbewliWx3DCBj6djqIgcTcjtbf5mLqDicSQwLAxqxCHIYmG0ggGTLv52r2ZrkdKtFotTQo5H5wObM1q7lfKsGuVvJBkBTYg4654VPJMGupVdFlNGPRKnkjSaVfLcTqdNMhlvJbmoL2Yij05kn6xiLHksMCwxvI4tJpGmuuve788C1N1Ca+eP8Plcvk6K8lI8RV8lxA6F/hXrFe/E6VcTF2NFItYgOfQakaiV6DZvhxVWhwGgwF7SpSv4NDeFXgSF4D+FuvURaNQVKJTyeipKORxeqzv8WTcKlrPH0ZbIcMiOY8zW8TzqjuYj0/BflkIG+0IY/RlJKMvNtB9fxv1imLKiwporlWhu6fg+5dh3Ic3zRTp2xdET8ouam6IGVCXMCi75A/9DptwhNP9NAOruZUyWSmV2afpOXuApuq7jCWs570o3L+QNyOZ0XTknaGv6Izf2YLY5NutWB+lYTW1YKq8xgfpZUheg1skQF8o9k7bSfqSFsb+mNnYpCsMa0sszgfpuI+E+H430xeHYtfi0GsY1JQzeCzSv9DfZE5nA8K5K2FeLBUSHLlTIx5QZrCfm/TKGv8LszK704Diw9oE475NOv/wf8eL/QALp5/oimYktgAAAABJRU5ErkJggg==",
    "bv": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAi0lEQVR4XmO4rqHxHxf+9eTJ/4Tmff8ZLKaDMQg8jIvDUEcsZkAXQMajlhGLRy0bgpZ9PXnyPy7878cPDMu+X7+OoY5YzAAyDB9WCVkGtwxdjlTMADOILhhDgJYYHBF4ANj7UMWUAoZnlZX/cWEQQLfs/Zo1GOqIxXiTPjbLQJrQ1RGLRy0btQwvBgB/oRfH8ORepwAAAABJRU5ErkJggg==",
    "bw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAW0lEQVR4XmNgOPP/PsPp//9pjkH2jFpGMR7elkXf+/8y/t7//7TGIHsYNhw89mf//v3/aY1B9jDIyMn/Y2Bg+E9rDLZn1DJKMdgeuiYQuiZ9umbqUcsoxsPaMgAczU6qMpOkswAAAABJRU5ErkJggg==",
    "by": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABq0lEQVR4XrWWz0sCQRiGv/+qe8f+hDrkxSQio7qFdtGwqAxLC8K1tp+IHaLICgyEoCgyNZZK3fXXthBEBVFdHHmblg7VXGcPD3N54GNm3u+boedstlWdn8e7rqMyNYVaLIY9Ikeg6twce724gDE7izdNgzY8LEiyoMbyMjM3NmCur+OBr6VAQJBkQbwAa66uwtrZgZVM4t7nEyRZUHl8vP1dTA8GYaoqbrxeQZIFPaZSrUJvL17Oz3Ha0YFqOCxIsqCbvr520ePBdU8PCi4Xim63IMmCrK0tVl9aQiUUgjYyAiMSESRZkJlIsKdMBsbMDD7qdWhDQ4IkC7JUlTUTCbycnUGfnIQxPS1IsiBzbY01FcUOyB2Pvc53+F+SBZmKwp6Oj6HzHX06fow8ILXFRZQnJuxR5WhArgY9rQKPe667G3nebyeh/veuBco7ARnpJPvd1EenYXSukCNQMTjWbsTjKPn94PeHg+iAIMmCKrs/g3h72x7EhymfIMmCSpt/n5j0fkCQZEG38Qh7vby0++v78TxQRgVJFmTms61aNGp/C8p8Ph7mYoIkiy9VjS4jz/SMEgAAAABJRU5ErkJggg==",
    "bz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADBElEQVR4Xr1VXUiTURjeRZddZDcJ3nhREWQkJmIaqElqGktFUyvS1PAH02qmZhPTdP6tHJmbloKtZLJQshQhZhaBqTjn79z4Jt90k82fUtjFKomnnROCfJhLMQ88fHznfZ73+b73vOcc3ojLUdYB7AFYXpxH4ir/RDL+N4gP75CfcI0XUAFn8M14AYG0F68/TkPDWOmTvJN5LnczUB9nZvvDHuF51yh+freD0Q5jTj8BrXaIPicn+uk8iRMeV7stM/c4KWbMy9REr1ODWdCjslsIQUs6BPI0aPQaGJlJGic8wufm+CezfWer0KuegfrLe6z9WkP3h3c4J/JCdFkw4u+HIjjRDZ7Frnir6qTxof4eyic6bi6nZmQ99GMDsK/ZQYb4agDqGysQUxiE2JxAXCnyRDL/CPinTtI4MRwf+UR13FxOzUbGdVj+asXTsmLkhnmjJOQgCnP4CCw/jvPxHvArOIaUhBCEu7og2scLjTUizC8aqY6ba0uzAxG1MBum6dcuGI2ouuyPthJ/VBdcQK1YBFl1FnIzgxDl64EMb3dkR4bDbluB7YeN6oiem/OvZsG3FXTh10vIsizq6urQ1CiDVHgH5fk3oJDkoUCQBLFYDIPBQHmET3REz825pRnpsI1mKpUKz2QymPQ6PHmch07ZGUirBXSexNfXjei2ZUbKsGwxweYoDRkMw0ChUEDaLENlQyukLe1okMvQ1iqFUqmkcTKWVqxUt60yEjDmb9BNDGLMNApxkxCp9UGILPXGYUdznL6XjeCSVFwS+iCliI9X7c1/KqDVUB03l1Mz0sIrixYwM2OQdj1ArbwGUakXEVHqj4ASN8Q8DEVCdixELYVo6KjCoonFktW0s9Ynm7NPM0vLQgyVb1QQ3M1HWnomJBIJriVdR9bNW+j7PEKNZmanKH9Hm5qAHD+sZRVWixGGqWHI5S/R0TNAG6KrV+14b6Hz5nkD5e34uFrH+kFMOo38pXqsj7b39NQgZud0dK125SDeiF25Yvb08iTX9SZX+P8A+xvKbc7ABIEtXAAAAABJRU5ErkJggg==",
    "ca": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABDklEQVR4XmPYz2XwHxt+0DHr8H8yAEgfulkwzIAuMGoZLkBVy/5+//n/Ye88dGE4oJplH46e+/94ytL/B4XM/n86e/X/54s30JVQz7JrSdUoat7tP4muhDLLQK7/cvX2/yczVvx/NHERipofT16AfQpSA2JTbNmtog642OXwQjj7sKTt//PuKXD+q/V7KLfsZl4Lhhw2/HrzfsotAxlySMwKQx4Zn3WI/f/zxRvKLQOBjycv/T+q6IyhBoRBiQaUHWCAYstA4E5lH1j8uKbX/2Oq7v+PyDqA+V9v3kdWRh3Lfr15D2c/W7AeTP/5/BXFVyBAFcuQwb3GqehCcEB1y2A+wwaobhk+MGoZzS0DAP9S58fuv+G8AAAAAElFTkSuQmCC",
    "cc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABaklEQVR4Xu2Tvy9DURTHv4PBYJAwiEgY2AxG/4GBxGAwGA0Wg8Qu4kf9aNMEsYhGQ2jogGpikqISkgoTA9EnkVgNBoPh6x33SfN6Xl81eSwMn5f3zrvnfu45915gHJYNfwELnw/94yf4K7L2BTCcBmcOwKawGvwtakM65lCQieDtAby+Aoe3wacbsHpSJfjStwbunuq4g5HJpCIa2QHrZ8E6e3VTKbA/rhJ8kVyhOO5gZFL6yx34em8kY3FwLwsuHboTZFED62D6DBxN+raMDXNg57KHTD42jkA+gs8n4G3CvHevFgZXTYDnOTBzYSaSWHME7I2BLREtk67I1njKWqNg7hLM25Vl98HBTXdyx6JZQE/MHQ/ZE3ataJkH+uiXao1U857XssZ5PXZoS8fgJfMjkXG3sS1q2ls8rgSVyaRquYdyQGQ/K7walcnKIVV+Ve1BsDI5gcljHXcIVlYz7dvaYGVl+JcFgvUBkVxRiUkJXe0AAAAASUVORK5CYII=",
    "cd": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABlklEQVR4XmNgqP9/H4j/0wLzt3z8P2lz2f/Xa2X/Xw5Q/8fAgGaZcNvb//JdjzA0kooTFi79//iw5v/7CXL/zwsr/L+groxpWcS8tf9zls7C0EwsNpp44f/Bw97/n3fK/L+ooPD/nIAiGGO1bNXuhP9b94dhGEIIIwfZdWt5uCUYlil33/t/5rjD/+/XJFDwlVOW//X6r2AYjI7RgwzdomuW8v9vLNb7A/cZT/OX/8t2pcAt2nkgCCyGbjAyxhVkcN/IKP5/1ib9/+hB9/82U489QwnGaVuK/3++KvP//WV5sMXohsMwoSAD4Xtxsv+fHVL7n7Jo0X+Wht8gffdRLDt6xP2/1eST4KA7ecz5P0fTDwyLiAmyd6ulwA4HpWwkvQjLQK5FlgTxxdtfwvmkBJnZpDMYjkSxDBcmM8iwYfyWURBk2DB2y6gQZNgwqmVUDDJsGGEZlYMMG77PYD759DMaBBk2fJ/h5lL9PzQIMmz4PgOogES3hApBhg2jWkbFIMOGEZZROciw4fsMl3zV/tEgyLDh+wDEWSNuXMu1yAAAAABJRU5ErkJggg==",
    "cf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAvklEQVR4Xu2SsRGDMAxFNQQFBQUlI6TMGBklHenYIQswBiUjpEyRIkWGUCyHUOjbOpRQWncP4X8S77gzETF/6brb+p4CgkAiMgiPqnpx2955ng+xyxkHd5LV9ZOn6Shfi13OOLiTTOj7C4/jiYfhnBj6AAH9KGuaR+y5vxIgIKeMPQXbznUdmKVFRbaUc/pPGV3DjdoIiAhnTCAw0KIiW4HAQIvcMo4XciMJGcwYyAaEWbSoyBZkA8IsWuSUvQGxrVdJSd3VKgAAAABJRU5ErkJggg==",
    "cg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAeUlEQVR4Xr3NuxVAUBCE4S1DCfovQyhRgh4kgw2cY3Ht8wZ/OPMRTYRo40xYNwLQjuTQmhbCEsQsEIYAZoUOyYd5IBfmhcxYBDJhUUiNZUAqLAv6xTKhJpYNfWIV0CtWBT2wSuiGVUMX1gNirBfEWC+IMchjWRJ0tgNYh9XJ2DvWOgAAAABJRU5ErkJggg==",
    "ch": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAf0lEQVR4XmO4qi13H4j/0wHfZwARWCRogQexZTftjf8/SAiDYxAfXQ0eTJplT6uK/iMDEB9dDR48ahkE09Syj9s2/v/15DEc/3n3FsUyEB9ZHqQe3QyiLfty6jiK4YQASD26GYPTMroGIzqmaQJBx6OW4cCkWUbXgphCPIwtAwAjmQWEGHIX2AAAAABJRU5ErkJggg==",
    "ci": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAARUlEQVR4Xu2NsQ0AIAzD8v8J/MQNPaUwR1HDxBRLXm30Ql179AFsOAuZOUSczcwj4mxmHhFnM/OIOJuZR8TZzDwizv6dHYIW3szeE31PAAAAAElFTkSuQmCC",
    "ck": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACtElEQVR4Xq2UX0hTURzHz4MPQj6I+CC10vJBQYuBYBJBI8FXtUEKoyyU1DZ12mL+CRUmImkZc7LhH3rQcqklSeLLaIQPxmYKEebc5nUqYgMNpB58sG/8Tl7d7mSp8+Fzufece7/f3++c77lsvrhs97fTCbP5E2JjtWDsAedV+yhmGMNCh2l/jKgs7MTi/RL4LRZcStQHzf0HgeUo2ja+anRYq62Ff3kDKlX/oWZX0hoxXfkEKxoNfnp8qKp6g6ioMqlgOARGF/qopcQIz5272Bodhd3uwrjlAzdzPetGt9oIr0qFbZsNIyNfIJMdq6MDM0ff253FofcgvMPjWO/p46JbVis3o443BwexNTEJ37sJ/p7IxXOPpILhENic7PwfEj0JmbKHUsFwCMzV1Lq73twMKStaLRf05OWFzImkXaiWCoZDYImJdatJSXXIzzfDNb8Gv8kEr74BjmEbN1symjE768O23Q530T20V/cjObkB9M2xAxIXV+3r7Z0CxX+psBDWmhf8CEjTWFo6iM3ldZ5Gp0aPa1dbg8QSEnS8ALX6Nb8/JEQC++5Y2FnV6TBXocf1zJb9SakZER9fg4GBz/g1PQ2PUomUs1pER6uRnt4Mt/sHN+jq+sifnc7loHPLzW5nPPbfyqoPWZLLKfUolpcjJ6NBWiEXu3njKc5El2NoyIGCgh7eTeA7onFR0csDs3+XYLGjolB08KWTjotQUQR1zyI16+y0BVZ+KPQbNBgm6F6IyCw1tVG6LyHQcsrlBroXTmxGJlNTbh4a6VwglE7aOxaJGUEVZ2W1hYyLUOiys58jJqaCnoWIzEiIqt4LQAgUDur+VMwISiPFP/AQkzgdh6am8cBChIjNaO+USgtyc7sxOfmNdzs2NseXeC8YIkLEZiK0P9QddUUplc6z0zQ7AsJf/bKzyifrMZ4AAAAASUVORK5CYII=",
    "cl": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAnUlEQVR4XmNgsFx6j8Fy2T9C+Pbjz4/+////jxLMMOCWCbiuoY9lKqGb/1XPvEhby3icVv/rW37j/6ELr/4/evH1/7wtd/8bxG2njWUgrBC06d+7Tz///wNKxbecoJ3PQFjEY+2/U9fe/p+06ub/9K5TtLVMwnv9Pw77lXBf0tQyfHjoWXZFR+7eVW25f/TAo5ZRBY9aRhU8ahlVMAAPk6POpXnJ/QAAAABJRU5ErkJggg==",
    "cm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAmklEQVR4XmNgqIq7D8T/8eFzgmoE8Z+LYoTwfYZRywhhLIaj41HLMA1Hx1gMR8fkWXZBXAVDDIvh6Jg8y970yGCIYTEcHZNm2R03xf9fNkn8/3NB7P/XTeL/77gr0s4yEH7VLQO27HU3qu+wGI6OSbfseaXs/0vKKmCa5pbhwlgMR8ejlmEajo6xGI6ORy3DNBwdYzEcHdPXMgDNvr58PjKGSgAAAABJRU5ErkJggg==",
    "cn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA0klEQVR4XmO4pylwH4j/0wHfZwARWCRQ8BNv3v8vU7gxxEnEmJbd1+f//zyCB0XhEw/e/6+LuP7f18YwgBSMadmLRO7/n+eyoSsEY5APX8SR7UOEZY8c+P5/38Dy/+9lxv//7jD8/3WUCSPoQJa9zudCN4RYjOqzh1Z8///fYwDjN6Wc6IopxaiWgYIIFISg+Pk0hR1d8f/Hbrz/31Zzkht3mD7DxoZhClMlZgLBhsGWpJNtCQwTbxkoYZAZfDBMnGVUwqOWUQWPWkYVPGoZVfB9AFGxbLBnvwHDAAAAAElFTkSuQmCC",
    "co": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAS0lEQVR4XmP4/4LhPhD/pwO+zwAisEjQAo9aRhU8ahlV8HC2TEa77jeDSN9/WmOwPaOWUYrpb9lhVtl/txgE/tMag+wZtYxiTHfLAFOu6xF40qDmAAAAAElFTkSuQmCC",
    "cr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAf0lEQVR4Xu3VMQqAMAyF4RxEPHUHNzt5Ai9RbyAOT+gF6mLBitHg6CjJIBb+LBm+KZSIelyxQaB7PBYawRYLIWVgZe3EoRhzYYMnji02N92+eM/aiUNTVR8jEWsnzo+97uNYHKayAaydOLZHbYo5h9S2kbUTx/aLucdjoRFMsRM+Jlz6FAak/QAAAABJRU5ErkJggg==",
    "cu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABeklEQVR4XmNYJuHxxcJ2x3+GgA+0x5c4pX6/ZWD4P102/L+U+zVMBdTEMMtA+BEL9/8izZr/7L4vMBVSAyNbBsPnueT++5otwlRMKX4jK/8P3TIY/uTi8v/P5cv/qQXwWgbGLCz/v2Rk/P/3/j26XpIBYcug+J2AwP/vU6b8///7N7oZRAOsln2Ojv7/XkYGw0IQ/qCj8//Xnj3o5hAFsCaQn4sX//+an49hETKeL+X/X9H1HGYiwIeRLfuanf3/3+vXcJf8+/wZ7Et0i2D4GTPH/yr10v/cPk8xDcaG0X32tbwcbtknBwcMC5DxS0aW/40quf/5vR9iGowNo1v2ffLk/z+XL///+/RpvL5aJe5CejCiJ5BP7u4QNjDJw9lI+IOGxv9fO3bAfU8KwLAMFwYn/Z4e6id9FAzK1CkpKAmHXIDXso82NuC4oxbASCAgfJlT6n+g6TzMCKYUI1sGyjdlGhW0r2JmywT/l3O7hKmAmniVuOtXejULANQxg7bXK+sbAAAAAElFTkSuQmCC",
    "cv": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABdElEQVR4XmPgkCi+D8T/6YEZOEYtowIetQyO1fXTMMSIxURZJq2WDcY80oX/985V/R/oFwwW1zZKwVCLDxNl2awWk//TGs3AbJAF8pqZYB8+2SXy38o2DkM9LsygoNf4HV0QHYMMB2FkMZAv9U2S/oso5oHZ6HqwYYb////f/48LfL/y//+j3P//f79Bl0GA7zf+/39ciF8NFDD8efXi0e9nT/5jw38eH/3/91YxhjgKfnLm/9+bOZjiWDDD07So7/csNf/TAzN8Pbz3xeet6//jwt92N2OIIeMvO+b+/3ko5v+X7Usx5NAxgTgDxscVdfzx8evJ//8PEtFFsQKGsMT5X9RNW/9jw3qWjf+1zJvBtKFtPYY8NjF8mMHBZzLBpF+S4fJ/UafBfwHZfHDmBomB6J2z1f6HBgZiqMeFGSQ1as6iC6JjUMb19AgH5ylQCRIT5g8WjwgO/G9skYChHhcGlSD70QXxYTuHGLLLR5ItowQDAGL8XYxc878pAAAAAElFTkSuQmCC",
    "cw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAvklEQVR4XmNg0K6/D8T/6YIZkCzjMGrGVEBNzAC1TMap93//ouP/Fdz6MRVRCzNALQsuWPkfBMKLV2MqohZmgFqm4TMZjA2Cp4MlRGw6MRVTihlwJJDqiXvhFlMNM6BZxqLXCI47EHj/6Tt1g5UBi89UPCf+P33l6f/jFx5jaqAEM2CxDJQiQT6UsO+mbnZgwGIZzTDDsLWspNn3bU2X1396YIa7l+V//3wh8p8emL6WMdAzzhhGLaMGZqCjZQAWNelhOlrRfgAAAABJRU5ErkJggg==",
    "cx": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABxUlEQVR4XmPgsO99Ltng81+my4mmWKLe7zcDg+La+8zai/+L5sVhKKAmhlsGxP8ZlFb/5wur+C/T6YKhkBoY1TIoZreZ+J8WwYrVMhCmNFijZzv8D51pjyKG0zJKg1Wh2+n/2Z1W/wORLMRvGRnBCrJk4krb/0lzHP6XLLT7v3+rDX7L2qff+O8QeQjFQuRgVe91AhsGotEtg8lv3GTz/+1Bq/8/jlj+V+7BY5mC7fb/HBobMHwIClbf4vT/Xw5b/v9/zPL/ls3W/0NmOmBYBsNbgBaC1J3aYfXfcIIjdsuQcXzJmf8SZlvh/DVTov8nz7X/HzPbHuziFesQwYSMLSY5goMQFJSwEIBb5p927L+Kw06slslYboPzF02J/L9nq/X/9Hn2/yettPu/ewvEMofJjuDUZwOk/aY7goMZFH/IDkCxzMRvH9xQDZdd/3Xcd2NY7uzT///zfrv/V3Zb/T+11Q4crMSmVpzByKO9EYzRxcFyGiv++4d0gmkQn9jUitMyUjExhQBWy6ILTv23CT2AYSBBTKAQwGoZKO5AcYZhGJEYV7BitYwaGFuw0swyMEYLVtpaBsWwYKWLZSAMClahlIxPAK08B+QisrUsAAAAAElFTkSuQmCC",
    "cy": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABa0lEQVR4Xt2Sy0rDUBCGu3DhY7jwMXwEH8KFD+BKRNyLe3El6MJVcSGiUilSqBqxlgbRVCLUEEmJrZdqkibWpB35DzSYY9Im8QL6wYScM8l8mZPJEJFCv4OSwYXf/SH+uMy42iGrVuC3wffJDGmL1LVJMuUcn+oTX4av9ewW9bouW/dch2z1hBr7C3SzMkFadoo86z74UpD4MnlxjC5nMyTNjbB7aX6UrRHPlQ0mH8Jg2aOwTPXNaXoqrfqF+YDcNXT+1TDCZa3yOunbM58KRwWOMXVn+D98wbDAc23lkLodM70MYLL44v24XhpnR5yQaBm+Fv8KUkwaBBhrpy76E5mQaFnlXKBbreavMeZR4LnC0S6/zRMtaz7odHyap4tqmU8FQP5MLJKiynyKJ1oGqrLoC22nTZ7n+TnTemF5dIRTiMFgGei8vbKiRSHHxHdNjXWyl8+yfeRjMlz2EXQnlA5YVylIJvsi/1j2Dr6a+vUrPRhoAAAAAElFTkSuQmCC",
    "cz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAv0lEQVR4XmMI853+7/r1F//pARjkZWr/8fCU/Z8y5TC6HNUB2DIGhvz/IOzgMPn//ftv0dVQDaBYBsK09CWGZbT0JU7LaOFLvJZR25dEWQbC1PAl0ZbBMCW+JNkyECbXlwySDMm/0Q0jhNkZcv7XMxj9f8LA9P8FAwPRmGTLjBnC/x9hEMQwiBhMtGXk+oZkyyjxDdGWUcM3yBinZdTyDTLGsIzavkHGKJbRwjfIGGwZLX2DjBk8GXy+0NI3yBgAPgJRjftY7RMAAAAASUVORK5CYII=",
    "de": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAZElEQVR4Xu3NsQ2AMAxE0T8uCDFcZqBnA3QbwAgmkVy5jlNEKd41V3wAVTaA8IlHBuETjwzCJx4ZhE88MgifeGQQG5QDrmytw1OLlQ2gFeth5th3Ut6dK1vrYDeqbACtWA8Tx34Nt+ewIgKvcwAAAABJRU5ErkJggg==",
    "dj": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA7ElEQVR4XrXQsQqCQBzH8RscfRAfwMdxjnanlhx9hmgXIqKXiASpraWhxZoMGkrMNO4XFwhnfw3Lu+G7/bkPv2PhIeXjGTCY6I+dryUvSo55CAyn9EBlbwycQ7Q/cYwCeqSqGibKHxzBih6qiGA6V7ZiOlZ+xVSvbMayjIAqVlIsSQDfJ1hVn5V1LIoAywJME/A8oCgI1mclO+ZxWXvMcQDbBuKYIFX3Zwb36MLYGmAb1j2CCUQsEt/ZAIW3NaydRR/qEsFa+nvNr1ivNV0xJWvk2jBla+Q+MeVr5GRMyxo5gWldI7e8LFKta6ReqIbw8SCsc1EAAAAASUVORK5CYII=",
    "dk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAY0lEQVR4XmM4xm1w/xiPwX9c+Ipnyn8YeLVkI4Y80RhoD8OoZaOW4cTD27JbiZUvb6fX/seFn/TOg1v26dg5DHliMcgehp9PXvyGm0ZDALKHvpbRNRjpmkBGLRu1DCce1pYBAPZPKeryEM8aAAAAAElFTkSuQmCC",
    "dm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACA0lEQVR4Xu2UT0gUURzH34wzs2Gz+xZhKZCi1o3cHfZPbLobISx66GIRJGog1qHLnsy8RSgiwoqxiloUHUKwsA4h0U1MWAv/UCGlu6y25B/Y8tSlLhF+25kBD/N2h/EgXXzw4cebeV8+8978eMR5n8AK8UkCpAnCDQSEEKSys1BH44sYs7YUxPigFIcyM/Ytuxzj0SCLWJwePzjZQEJAPuZAzkcxkOSQ81NsRU6i966fWVsKS7K2uIRnNyU87hDw3etE6rys1ZFbIsZuiOi5foTJFIOoR2PG33c81msc2K52IhN0aJI+7yV89fuwGaDYUChyQYo/UwKTNUK+TROYkemy4V7h2D4rumj1DMWVxhiaT9Rjxm3XPqKvn8PbFhuTNULUzjLjSeVR7T9tVFNN9sFTgeNRDxSfqM1VvgTseFMlM1kGd+gUzHipuPC0RdqTqTs5G72IsjC/J3teeD+jVDBZI0TrX5Px81ECD+4IWDln13cWklFZ6wJfxyHlKRyj4sTYbQHZriZjlBlkbmsWZiy8n0A+6MJCRJeptJ2W4PYKeO2WMX9B78yPr5JM1oil1u9ot2E0weNTWBcuBfW65qUYGuQxdLWcyRTDkkxlpFvEToRqgsFhDulC/RE6huFOhVlbCssy9braXebQWleGa1TC0tRD7P7+dTDX1X+5iA9lxfgHNVAhMtnp1OkAAAAASUVORK5CYII=",
    "do": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA5klEQVR4Xu2SuQrCQBRF5zP8BUv/zw+wtbEKpBELURBExSBaqCi4IYgLaBLBDQXjEjXG5bpUcTDjpLHKhdM97pl5PEJ8Anjxh+pFWLJNxstdr0fhhdCFLGiZFou0niXgxZW5Mib/lUUlucCLMt1VV2sNjZ4K0zRgzib9l5AXYn3pr+gnA2KyAqVUQDufw/V2oUeYcSRbbFTUUjFonSYyWQl7Q6NHmHEkO5p7jNICumERiazo/Gf0Xlmc5WHzfr3gxe2gYzzX+0Ji0OKF0BfDYhkMfFzju+DL1dpCF7JwZbbQhSxcmR0P4D5txN+sWrAAAAAASUVORK5CYII=",
    "dz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA/0lEQVR4XmNgSDK+D8T/ScGh08v3/ycd3GcYtWz4WiYQbfw/09Lk/xYZk/9nRcz/3DQN+f+8Ycr/Px8+oRuKCxBnmXik8f+NQEsuCUAsq8lLPv/vx8//Px8++/9+1fb/f798RTcYGyDOsrmqEIsma5j854pDDUaQpSBMBCBsmV6AMdii00Im/0WiIWKZjbnHf9599P/Dxr3/vxw+g24oLkDYsggHiK+WKyKJTS47cMcl8f9lEfP/T0u7/oMsJgIMMsvoGowgDEsgXTomYD56Avn98g2SmTgBcZYhJ31QiqzPjL/49fQlcPC9aJlOXctAmG6ZGh3TvLgatQwPoK9lAFdYwk3VGdswAAAAAElFTkSuQmCC",
    "ec": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADL0lEQVR4Xr2S/U9VdRyAP5MkAblc3+JcoMn1NagfuhNWHHuhlaKVTsGgm8iMvEtrawKSOTAXjnIk4B2O640XL1dAlEukpkI1rsm4sxdwi2kWCPmD5db4A5rLpwPkD/UlO27lD8852+d7Ps+znXOEGzJqwD1gVMYvUxz8H5iLjfULfdXC6UJh+KRw/fzk/IJbuHRU+O2qujMFd479fl3o2ilU64J7ucGf98oMDe8qoSrNODNwPyF0viX81K06TMdGvg7jSIWdjyuFy8eEnnJDuk2oeUpoyRP664VvmiafHfvOwa1fwhSH6diVkIV9BTaKXTNp9gkFW4X924VW43WeKBMGPhc+MoKf1M9mpMvOzZ+tisN07A3nYjLSY8lI00iKjabR+G7+Rp16n4uA34H3QyE+NYJ1KzTa65bS3aQrDtOxvVsSyc+Jw5mZRJo2HV/zaxwKvM2eXXYOnjhAoGMzyQ+Foz0WRU+bnbNVixWH6VhNUTwVO54kzbaK0pQIvrp0jcGRG5wMDXP0Ipz1+9irR7HekU39+ysJeucrDtOxds8DfJDnIF+y2bUplU+7ujndc45T3V00tjQRDPXRnBnHdsmnesvjjIZsiuMvsYSH370pc6uYCkdqHjucK9gmuXTmROIdLqDkcAO1/Y10UoLnyjv0G7/9eKzs9bUsf6ZAcdxmonOnWPIyF201OmvkTYLLBG+wlIbeMdytfRS6Wzl0pILBOGGjFBOoTedRvUhxmI7dH1tC7/EE7FLHRQmjtvRpDrRdYH9ZOXtezaYjZwFXjflCaeH7L+YzI65CcZiOyZxyPmudxcsv7uSFxCyKkuYRrIumsz2Xod3heOZo5Ekhuet2M9Q7V92/q5jBytVrCHgsbHI+z0vpSVRuTsGpL6XapfPKs4+wrySTXwcsZGVvVHaVWO/0B2/9KFb+iXMxCXy5KIpTCywczIqhZusS3kvU8BfrNGywMrBwJteSo+mw2AiKRdm/zXjnX2PjhCI1BiUGr9iIFD9DEo5VznBeFk3Mj0fMU3b+jqnYD9Nmczl8UnZGNFySYvwUEXjkOb6V+Im57z4rPdPU3buO/Vfc89gfhinR1vLIQ3MAAAAASUVORK5CYII=",
    "ee": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAZUlEQVR4XmMQaHr8S2ji//+0xiB7GEYtoxQPc8u4Q6e94Y6a/5/mGGgPAxBcBeL/dMAge0YtoxgPZ8smTZr0evHixf9pjUH2MNy+ffvHfzoAkD2jllEM6G/ZvXv3vqJL0AKA7AEAYVtLVQffzPsAAAAASUVORK5CYII=",
    "eg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABBUlEQVR4XmM4J6h2H4j/0wHfZwARWCRogUctowqms2U3XEI3XrP1O0wsvmrne+RCps1NdHFCGGQPw////+//JwH8+vb6/5NLk9CFiQH3SbLs6eVp/x+f7///8uby/8+vzQPzSQCkWXZrf+b/a7ui/r9/sv//ncNFYD4JgDTLbh/M+f/wVAvQRzP+PzzdBuaTAEizDOSTl9eX/L+5NxVM09Rnj85P+P/kwuT/L++sAtITgPE3AV0JPnCfoaKiYmNNTc1hYnFLQ+HJGRPLL4FodDl8GGQPAxDcB+L/dMD3GaAEugQt8H0GKIEuQQt8nwFKoEvQAt9ngBLoErTA9xmgBLoELfB9AF+typJb1c/jAAAAAElFTkSuQmCC",
    "eh": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABZklEQVR4Xr2UMUjDUBCGD6lQSoYOWZ0iugQnJ+kiBDo46CSCQ0CEdhDUURQsItTNtYOj4FJxKaiodHBwcBE6dBAsWFAcnBwiZPi9NKQx75ka6YsH39G+/46vfS0hkwj0X3xwK4mHacEdHieMJoaq4d6TeXSYaXFAJdz7Mg+XWReHVME9Igs4Z3RxeFi4S6KA91wO1WIRtm0rYaCsRyYDVCqA6+LHOmsDcwfA7aOYSPW7LKBQALrd6PZpkzP+MKUj//1z53sqVXKZh64DjUa4bSwAo+P+6ys+X7Q4r8fewt9kmgbUauH25EYoe7gHJvL8bY/DXKjkMtMEWq3o9sUrZ1lgla/xha/40wGe4n+7ZLJyGXAccdevS/6DWPtAsy0mUg2UOVoW9b0lVG92lRAruxsjTK0R8tvqkGTuCOFwhp8eW/LwsERkbxphflkeUkVfdm0QjE15QCXkXduOJQdpQLMr8mFafAEb9CAr/GdjvAAAAABJRU5ErkJggg==",
    "er": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACRUlEQVR4XmNYLqbzuMDf/L95l9N/5XluNMOmPU6/GfYxqN8H4v8gPF1D/39csvV/remuGIopxRiWwfB2do3/LdZG/73K7DA0kYtxWoaMV4lo/6dGMOO17Jiyxf9Tpo7/T2jb/D/ArfP/qIIZRcGM1bJDQgb/L4UE/H97svP/zZKE/8fVrf6/2FL//8WG2v/nvbzA8uQEM4Zl+1k0/t+uT/1/qzr5/1l71/8n9Wz/n3PzBMudNLL/f7ct4//9ziywT0kNZgzLQD56f6EHbNhBPr3/h0UNwYZfy4yGWwjyMcgxyKEBw/iCGcOyx7OLwEEHYoPi6OX2hv/vznb/vxwdDDcQ5HOQOLpFyBhbMGNY9nxt9f+zTh5gNsh3D3pzwIaDLIapAfn+zaE2DAtwYVgwu1XZf0ex7NO9KfAgAgXjaUsncLCC4g6m5uGUfLA6kDy6wdjwXmnH/zuz+/5vX3YMYRkoPp6trPp/pykdrAiUMN4eawf7BJQiYZpBakDBCEqV6AbDLeAy+L8roPj/9oUH/2+5/gWMt+6/gwhGUEoEufrj9QnwJH49N+b/k0Vl4KAEqQHF3cfbE+F8dLzbLOr/jrbl/7eefQ23BKtlIAyKJ5CFH670gTM1SAzkC5A4KC4/P5r6/8GEXFRfQINp655bGBbgtQxsIbs22EegjAzKV6DMDHIAKPGAxEFxhS2YCGGsliFjULw9mV8Kzm8gPr5gIoQJWgbCxAYTIYzTMnKCiRDGsIySYCKEwZbtlXN9TI1gIoRBlgEAYqEpQQt+0EQAAAAASUVORK5CYII=",
    "es": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABXUlEQVR4XmM4xi13H4j/0wHfZwARWCRogUctowq+z/BzPfPv/0cY/tMag+zBa9mMUpb/ebGC//sL+f4fnoYpTwrGa1lPJud/cwXm/56G7P+D9Vj+10dwYqghBeO0TE+Z7b+LMeN/R13m//oqrP+dDFj/FwWy/DfTYvufEYBpEDEYp2UR3lL/a715/nfZcP9vNhb5H+Xp9784zet/Yqjy/xmV3BgGEYOxWnZ/NcP/qdH6/3vdBP93pMn9D9MS/18Qk/q/NCHsf2ek4f+5WQIYBhGDsVoGwq3++v9LvSX+1xhJAINS73++i/D/3lip/wuy3f73xgliGEQMxmnZ5Hr7/40JEv8nOPD9r/MR/7+nnuf/2myF/6tmBP+fVERly9qqNP/3lYr9n5Gv/r+l3Pf/tHK9/1dXSvzvqNb+P61GHMMgYjBOy2iBwZaBihEsRQstMJ3LRhCBRYIWeBhbBgD3Br3WxOCY/QAAAABJRU5ErkJggg==",
    "et": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABXUlEQVR4XmPQ7OH4Ty/MgC5ASzxqGVXw4LRMpVP2v1Bl8X+e4nn/uYsn/xetSfmv0cONoQ4fZvh/TPE/IXx6i9N/tYq1/2VKt/z3b5/8X6R453+NyjX/jWuX/v98SANDPS5M0LLfR5XBBjNkH/vv3Dz7f/X0sv/xvR3/vdumgcUKJtdi6MGFCVp2fqvDf4Xyjf/Lp1b+L55S8795VuH//nlZYHb+pLr/CmWbMPTgwgQtW7MyDOwDi/pF/2cvSvpvULMcbBHIhyw5R8By6HpwYYKW3d5pAQ5GE2D8gCyYvzjh/+JlMf+zJzb+D+6YCIy3ZRh6cGGCloGwT9vU/xx5B/93z83579A0B2wxyHcgX01ZkIahHhdm+Jog/Z8Qvpeo/d8mZy48OEE0KAgz0msx1OLDDO8VJf4Tg18rSf9faeb9v8S96H+zU9r/fQbWGGoIYaItowYetYwqmK6WAQA5uKPZzu7VWAAAAABJRU5ErkJggg==",
    "eu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABPElEQVR4XmNgMJ55H4j/0wHfZwATmBK0wIPcMhG73v8JuQlgGl2OACbOMmmXzv9HVir/l3dr+89jOfn/7W1iYBrEB4mD5NH1YMHEWQbCK2cZ/+cwn4oiBuKDxNHV4sD4LRN36v6fUxKBYQk6BsmD1IHUo8shYfyWybu0/T+7Vg5DHBsGqQOpRxdHwvgtozLGbZm4Y/f/ST1O/5U9WjDksGGQOpB6kD50OSjGbRkIX94kDU516OLYMEgdSD26OBLGbxmVMX7LtHwa/s/qtwW6ehKGHDIGyYPUgdSjyyFh/JZJO3f+P7BcFUMcGwapA6lHF0fC+C2DYQHbCf9jsxP/i9ijFlEgPkgcJI+uBwsmzjJQMN3fKfJfxqkTXCYumGIFpkF8kDihYIZi4ixDxzsXaGOIEYHJs4xMPIwtAwB1xdZoL48W9wAAAABJRU5ErkJggg==",
    "fi": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAdUlEQVR4XmP4/////f84QMOsA/8ZTBtQsILfBHRlxIL7DCACXRQGRi0jEoxaRiXLAkpXfHHIWPAfGwYZjG4Zh3ULhjpiMMgeBhnvvt/oBtICg+0ZtYxSDLaHrgkElCTR0ygMUD3pgwh0URgYtYxIMGoZdSwDADtYYltWTxbGAAAAAElFTkSuQmCC",
    "fj": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACe0lEQVR4Xt2TXUhTYRzGdxkmgVBhJNRFRJEhSCQGqUQXXQysrN2MEpSTJzV1m8720QbbclqkLHOl7qRbW45MY/NjflS2spkG7kxzbUasm4iIwqC7iifOgTNtjmPJoYsufufi8PD/ve/L8xeFcsUIHy7ELcNtbMi6ANEeksXV4cVs2m5E2xzxfwxkjRVRaTno9P242DMNcuL9nxITlSg6f0QIBYJb9mK+3oxDksaksowCFR6aOzC3KweRoxJc1VM42xdOHMhHTLQxV/l9c24thk3t7CDulm5qMC7jbsMcKFTXgOxCI3sA6f2FxIF8xEQW19OfXf0BMASmX+Orfwqfe/rxjV5gZZ8cvfjSN4il4UeI0ItweF6wWQZyIJI4kI+YiM7MZ4euB619MnEgH/9YtvIZ/YEwlp7PJH/G0QnMBxdhfzC1/meMF8Rsw/y+PN6CMHUP6prXX5CV1X9VreevvukmQjsPrKp+U9MdUFnb4TieBlfmDliztqHryFb05mTAprmxLGOX+uAxdJsopGZXr7nUSmU7oqeJ35a6qKgUlop8BMwpeHwpBX5NKmbUmzAgTkezrG5ZxnySXPmvIK7YoCgnYFIo0FV8Hs6TEnReu4wWlQaVplYuJ4ysyj6CgtITEJdIQNVr4SWVKFITqNTVQe30cTlhZIa7T+BvaIFP14BwmRbvpLVwy1VwydW47hzlcsLIjN1jGKnR4o2xFbOnKvBWXAZaZwQlJdBm83I5YWTnhiK45/XA4/EgZLXjY2MHim1l6HTWompgjssJI2NQel5iaGwcUcqNSbkeZ5pkMIzTKzPCyRhkzz7A7fDBqrOAHFy18MLK1uA/lv0C5Q/mpv0V9LkAAAAASUVORK5CYII=",
    "fk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADx0lEQVR4Xq2U/08TdxjHb4vJ3EIy/wCymOyXJiZb4rKtyZxpgihIgdFSvhhZ55cqUJSCmxQYpUtrppSC25VasNAxi4XarutasK6kyGoUKzJgZfUYWqyOkkClY5ht0ey93i00K5qoq5e8Prk89+R55fO59x0xJdyPFf8USNKDlJRDIIgDDD0qC0YJAjeaNfHaunWlqN+jwXRRMe719sbrT0mQyE1veugXiTGnVOLWjV+RlUU+VvbGJhmuShoQqqjA4kwIYvHZtcOeRJCILQ/oHXVKSMzw+Vi5cgUmkw+WL+2MjFJrcLKcxM3CQiwPDsLhmEBqas3aQU9DkLjcbvl72mQHzazZjnl9J5aHhhAxmRjZXakUEaMRSwPnEbL1M32rcNJawSnoejKxPkY2lvoaM/T/wNnZBqLaiyNd30Nweoy5fxxMHy37KTsPFIfzCAE2mxnoZ7EeebYKPaTOOonx8QkEKApVhos4oPfiw1MXUaL7ASk1a2T5+e0PhUIDqqrM8PlmmSMMt7Ti9qXr/x6jTo/79/9i6j83HIOs/hvQ/TSrO5MaLyEcDiMajSISiWBxcRELCwuQGK8mymLLg337uhGZnWOSdq2yHpvf/CwhjXQgzp27zgjpoGgOt2H9enFcJtAMg4rtLBQKMaJAIMBIRYaRRJnTOfnnPYsFvwgK0CjSMt8SnZ610afh83UIzYSZ0EyWSeKyV6VenHZ4of/WA7XZA5nRA/OAB6/LhxNlTSWf/9aR/wk2bqxNiGrhzmac5RRDvutEQn3DBglqaqxQHzwZlxH7VXilgIuXi7kgPngfL/C24qWiHXiRtx3E4QsJxxj877BnIT33FAy+edy6Ow9SlIOGslyYKzMh572LukoBlmLvmvTOIS1bm7wsFi4MTS9BohuAo5UPg5yHy6rN6DtWgG5FMSptN/HjnWWw2ceTl7FYMryTU40d1SQqDuaBl5OOupKt2J21BduFYmTK+5C618b0JS2j6XNTcJ8hofooA+5+B7oayuCy9qKznAtr3S6QfeOrvcGkZPQ/1e2hkEmOQVrbCAn3PZQW5UFfmgH1Xi7S1CM487Ur1idOXiaXG/HHyu8YHXTh7SYfcgVCqPZwITv6MTK+GMG1MT9GzHqIhM/hGKmJKQy6zqP301JYbKOg7kRBX/7bUdico+jvaoNu9zbY29TPQeZxwmnshL3nKyikR9HR3AKH9Tu49Fq0l+VDmf0WOsr5cJuNycu2sJUYcgxDoegB2dKObo0WHUoZjCcUMBxvRmOtHtomDTaxjiQve0aC/wCAr1I8Ffm2EAAAAABJRU5ErkJggg==",
    "fm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABGElEQVR4XmNIn37tP70wA7oALTFZls3Y+RhDjBhMkmVVS27/P3j13f/P3/+AaRAfXQ0+TJJlILz88PP/P379/b/uxEsMOUKYZMu61z/4nzPr+v/+TQ8x5Ahhki2jBA8Oy0DBlTfnBjjI0OWwYZA6EJ62HXdKxWpZxaLb/0/f/vj/+fuf4ASBLo8Nz93z9P+rDz//n737EawfXR6EsVrWsvre/yuPPv//+PX3/9m7nmDIY8MgH4HUg/SB9KPLgzBWy2CaQcFYPP8mhhw2DFKXOfM62IfocjCM0zJa4MFtWdsaSHzAaFIwyZYtOfj8/7svv4hOpciYJMsK5938v+fiW3DZCKKJTTwwTJJlMEyOr0CYLMvIxXS1DAC1OwxFUUeQ2gAAAABJRU5ErkJggg==",
    "fo": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAf0lEQVR4XmP4/////f94AIPF9P97tMz+X9fQ+B9glPd/wdYb6EqIBgz/Ry0btQwPoK9lp669fLr/7NP/uDC6ZRXTTmCoIRYzeCYs/CFt1vkfH96vZQq2LNEwFUOOFMywwdzzL8ggemD6WkbXYKRrAvlPz6T/f9SyUcvwALpaBgCYA+z/3qs4zQAAAABJRU5ErkJggg==",
    "fr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "ga": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAXUlEQVR4XmPwWcnw22whw39aY5A9DKOWUYqHuWVd+xg+NO1m+E9rDLKH4f9zhvtA/J8O+P6oZdTAw9my7Pk5HxJml/6nNQbZwyBTtfw3Q+6e/7TGYHtGLaMUD2/LAAFQ2krOvKriAAAAAElFTkSuQmCC",
    "gb": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABWElEQVR4Xu2UsWrCUBSGz+jo6GP4CL6Bj6BTcXR0EYQKLh106Ny9iy0dugi6tja9dCriECJFKbQ4FWui/OVcekO45uYmpu3UH35Cbs65H4TzHyI6QRq77huWnQ4eiELzO5/rtUaPxzNUKmeHHzTngZXLp7i6vAPhWzboMTAFee338VQqgbhht14rphGaBaZDHgsFLJpNkCgWwbZB08BMEH+1knfS5GYqm2zQJJgNwhJiAarVLtDr3eL5foZltwu3XpeFn/N5WMjy/V0sbLsN5KUvrZbs5WcU4nnvGAxGYE44IGkUB8siijb/tv9hP+K/HRAeyXb7Go7jhYf7zUZmhkfZazTwIQSCYB8L40hExZHh6HAvR4kjxdGSoz8cirBQQaLBFCMH1ep5Yqg59Bx+JV4K+qLg5SF/YxIky7qyQckGyQKzQckGOQZmgpINkgemQ0n/YHIemPIXeJAU1X4+5ngAAAAASUVORK5CYII=",
    "gd": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACIklEQVR4XmM4J6h2H4j/Y8OXFFT/3/ZQxBC/FyGPIXbbQwmsHl0cCd9nABFYJP6fF1H9/2Wt5P/v+yT+X5RCGHLHTfH/79Pi/++4IxwBkv8BVPdljSRYH7pZWC3bGKz7f1MoAh/I1vi/L0MTRWxHvM7/3SmaYBpZfC9Q3f5sVLUg83Bapt8V8P/sQZX/fy6KUYxB5oDMw2kZQ1Xcf47amP+dK83//7ggjmEAMRikD6QfZA7IPLyWwbB5r9//G0cUMAzDh0HqQfqQzSHKMhDmqYv+P3GNKYah2DBIHUg9uhlEWwbDThO9/z84Lgc29NcJ8f/vpkr//3UaYglIHCSProegZTItYf97V5v+F2mIxNAkUB/5f1WH/v+Lsqr/n1fKgmkQHySOrpYoyxRaQ8GufX5cBmwxusaFHkb/P86X/v/nvNj/jwuk/s/zMsJQg45xWsZSHft/+wat/1v7tf/b9/tgaJxoYP7/RZ3s/z/nxP6/qJL932tkjqEGHeO0DCQJimTdpiCwxciaYMF4P1YBGIRq/x9EKVAWjOgKYRhrAjkByYdkJxB0hXRL+nTJ1KC4okZxBYtznJbRtSBGr2K2REKqGWQxEN6XroUhBqpeQOqJrmKQ8QVxlf+fV0n8/7lPHJzUYeK3XZX+/zwpDqZhYiB5UOX5abUUWB+6WQQtA+F7IQr/HyYooIhdVlb9/yhN/v8lZdQa+QFQ3b0QzOYCEr4PAFzKtExPbur1AAAAAElFTkSuQmCC",
    "ge": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAjUlEQVR4Xu2Uyw2AIBBEtxCKsBgKsQQPFmMB9GMhHkbHi0FFNzEMF1+yJHx2X7IBDMAML8MAmB3BuZ/ZOJxXi1SR9T2Q0nnVJ2Me86/cyMYR6DogRmCasq1XGc8zj/msk9NaRmRtfMIjK6OWhbBkBWrF5vll32OXSS9Ic5nsUUu/K6mMyNr4hEdWRitbAa993KNntvmeAAAAAElFTkSuQmCC",
    "gf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABEUlEQVR4XmO4eZFvq+IknZfsnQb/aYzvM/y5y3n/1x3Ol+FLlM9iUUBNDLEMiP8D8e/VB0T3c3fp/8aikBoYxTIwfn6N5yyNghXTMhCmUbBit4xGwYrXMjCmYrAStgyE0YPVKUML3SBiMHGWQTE4WAXb9X8fk5X9z9emj24YIUy8Zb9vcf5/mS38/7aKxK9bQlL/D8vL/K91U/nP1U60pcRbBsOPvcX+gyzbZSr7EYuB+DBploF898hF9P+n+Xwg+t/qvSIHSEitpFn26wrX/9/XuSAWA2kQn4TUSppluDB6asWBqWMZFBMqBKhqGRjjCVbqWwbCOIKVNpZBMXqw0tQyMEYKVtpbBsKgYE1cobAVANQX1zSeUILwAAAAAElFTkSuQmCC",
    "gg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAwElEQVR4XmP4/////f9EgD8Pn/5/IaiLgUHiRIL7DCACXRQbABn6UkX7/5cFMv+/rpIG0yA+zSwD+eRjleL/n3fFwDRNfQYy/EO5EtgyED1qGRTQ2bKPpW0fPmbX/CeEPyQUYbUMJI6uFisG2sPwWsflN3K+eWOt8f+Nozqcj47RLcOGQfpB5iCLgezBtMxFA2wYpRhkziCzjJbBSNcEAkqS6GkUG6BK0gcR6KLYwKhleADpltGtiqF75YmOSbEMAGOxCMYxEyGyAAAAAElFTkSuQmCC",
    "gh": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA1ElEQVR4XmO4oK7y75yg2n9aY5A9DKOWUYqHuWXXkhX/3o9S+E8KvhEujyFGCIPsYXhwTOr3n4ti/0nB5UlcGGKEMMgeki17sEvkPwMDA5hGl8OHSbJsVS//f3sTtv/aKixgy0A0iA8SR1eLDZNkGQivm8D/n4OdEWwZiAbx0dXgwiRb9uKgyH8WZob/EiJMYBrER1eDC5Ns2bxmvv9NOdz/v5wSBdMgProaXBhsWVS/wcu4iQb/icERHbp4+fgwyB4Ghmz7+0D8nw74/qhl1MDD2DIAQUaAVEduIEgAAAAASUVORK5CYII=",
    "gi": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACKElEQVR4Xr2V30tTYRjHn/Kw2jn9mJo1jXASmCIy6A/QqybWzRKhKEi66kaiizDwzpuiqGmCBsmCQBDqIqicWG47OjSaZBRMcyUmBeXf4MW393lsBzzTnTOFfeHLs+d9nvf5nJfzHkYbv35voARiDhUDW/7yFZ9mUpZXMhl7y45yBfs29wHL4xPi5J1evPQHMFlzWmKyp9eq/UjP27dukSsYD3nt8SFJOtKDQxirqMEL8kqc6x+Uda7/XPhs37pFrmCsxIlaZOkQvqdmMVp1CgN0UCLnvM51J7mGPQ2cQffhShke9flRRfvwvLxa8ptHKhGta7BvyZMjbMmcxuLoGJ40BhE6WoHU/UcYOlkHP+2XaN57gDa1znXuY/hOcoStqNs31XIOr+qb8dBfi5g6wWTTWUw0BCWOqxNHqgNST7SGsJZZtI+w5AhjzXdekfciF0EN55gz5zNkSJ37CskVbPp8WIaxR7TNGC3bBORyNvcVkiuY2R5GHx3ABdIwrG7hbfJA0zSJnPM617mvkFzD2qgMRCTDO3RNYBw553Wu7xm29O49nunqaquPOKKePuItx+Om4xjpNHC38RgGVM7rXOe+bDxhH2FJYH+uXl//23UDTk6HL+Gjenp29FrA+r1w8XJe73ZmDmXJWM29ZDc21anetnoRD+l5tcI2VouGsWNdxYLYu4QluksAm/LomA0aiN0qAeyNT/3NdKh31lMCmPn/ZPH23cH+AauQ+7c8XU9ZAAAAAElFTkSuQmCC",
    "gl": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABO0lEQVR4XmP4/////f/0AfcZQAS6KI3AILLs94s3/z9s2Pv/afWE/0+KO/+/Xbjh//erd9CVEQtwW/Z65sr/l8Rt/1/gMcbAD1Nq///58AldCyGA3bL7MWUYFqDjq+qe/389eYmuFR/AtOztks0YBuPC90IKkLUSAqiW/fv95/9laQcMQ/HhjzsOI4zDD1At+3bxJoZhhDAo8RAJUC0DpTZ0wwjhu76ZCOPwg/sMV9W9fsM0PspuRldAEHzefxLDAdgwyB4Uy25aRaKbRRC8mrgYw2BsGMOyiwJmJOcfUIpENxgbxrAMhB+lN6CbhxOAUiK6obgwVstAGFREEQKgDA3K2Oh6cWGcloEwqCz8++Uruh1g8G7FNpLzI17LQPiKshu46AIlAlBZCUqtN8zCMNQRgwlaRk08vC0DAOj2YHqnPxIeAAAAAElFTkSuQmCC",
    "gm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAaUlEQVR4Xu2UoQ0AMQwDvWRZFysuK+gCDzqKR8m79FWYBLxq6UICTpGswAAKS4DY47CI4MpckKz3aWOscOSR0mg5IYCm0SwBXpkH/LFsV/Lb0aAQddVZnrKi2R5dpzfS9LXi4ZV5kCt7AU9KRaVvGmBmAAAAAElFTkSuQmCC",
    "gn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAQUlEQVR4Xu3NoREAIBTD0O6/AdMxygfd6xGHqng20Uj7mqdhWmirMxLirjMW4q4zFuKuMxbirjMW4q4zFuLu7+wACraamTJi5b8AAAAASUVORK5CYII=",
    "gp": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "gq": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABhElEQVR4XmMwmpDyz24Ww39a49AlMv8YuKt2/Nftt8SQpDaGW8Zatu+/+TRxDAXUxHDLGIrP/eevmfffdhYzhiJqYRTLQFi2NRdDEbUwhmUgTKv4A1smXHsQxTLuymP/K3bk/G8/kEBVPGVPxl8G+aaL/5AtA2GbKbf+//777z86OLh79v+TB2f8P3Vw0v9Th6b9P35oBboSnODP82e/sVoGwhVbn6Kr/3/x4sX/l25c/Z84o+z/1nP7wXxiAV7LQHjHjY8oGu7fv/9/3bld/2OrY/7PP7IGzCcWkGzZ5cuXwfS0tkoUPjEAr2XYgnHfvn1gen5v3f/Pnz/D+cQAnJbhSiDPnz//f/r06f8bN278f+nSpf/v379HV4ITgC2TLj70B9ki4eLj/y+XVP5/W5JHXVyQ9ZJBMnvXb2TLllh4/X+sKEF1/ERR4j6KZdm+FRiKqIVRLDNNWPL/vpI0hiJqYbhlQrkH/p/S0sFQQE0Mt4xW8YSMwZY1umS8QZegBQZZBgBsEUNsVmGU6QAAAABJRU5ErkJggg==",
    "gr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABFElEQVR4XmPgiV3/mzdu/X8YTp919j8IPHz9FS5GLcxAV8sUc7Z+QxbAZ9nqE49vv/388zy5mEGjYAfRPjt0/TVYjlzAULvyys+2ddf/w/DmM8/AEh++/oKLwXDC9FNXY6ec2k8uZgD64B+aA3ACr7bDGL4lBTPM2H3n15JDD//D8LGbb8AGf/n+Gy4Gw7Urrt5sXnvtMLmYvnGmlLPtB7GWLT786NXdl18ek4vpm8/oatn1J58u3H7++TkM333x5cX9V19egTCyOAh//v77ye+//x6TixmAnrgPjT+aAwbHhgMbrWr2HaYHZgCG5X30sKUVZlh+5NG6daee7KcHpm+cbTv/bNeWc8/O0wPTN8546WgZAElSCnW5cv15AAAAAElFTkSuQmCC",
    "gs": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAEUklEQVR4XqWVbUxTVxjHG0HeClpEtMFSXjJkUQS0BQpUoKUUaClILeUWCm2tMOR1GEBUGDhQHCGwBUwExYImOpQPU8kSo4kfiFmcUyK4VWHkLusyt8XA4oLMzfnfvcWC7bYs2g//m3vPec7zu+d5/vdcxoPcvJeLZjPM5scQCI6DwSi105OhIXzFYIDU65GS0mU3x+EcwLVjg/gylo+vP+lBeJgeq1ap/pHjlUjG4GHT00cpKfixtRV/LD5HT88NeHtX/S+scs9pzJSUYValwrWR0zD1fgBClgkfptIRsgKjL+LkTkw1H8NDoRALd+6AJJ8sJ3aEBQcfxHhHP77h8zE3Oor5+QUYDAOIYYch2FdMrdE4Quxh9IOHRwX6Dp3FtFwOS10d/lpchMl0yw420HkZM5oC6/2L+XlcvXrfWkp6PZspR2mEK6qj3ODhSjiClmC3r9z6fXb8Hmyy3J7E3PUbeDY1heckiZ+6uqwwulz0rn8bH8ezb2fx+O4DXB+5jM/Pj4L84j7OdfcikRuO5IAt4PpIqApUYceOKri7G1dgE5zAl3Syt9EEh4N+rRbDDU1oWecLdfxOJL+ThM3sTJSVfQQ/v5XeOw2jdZGxBkX+RhTvzIZYuAuJ8TkIDS2Cm1s/BTDYw2ZODr2g+/Jf+m7vXmtS2jyOc+YTJzDc1o64qCLUEn2QS+UoJLSIjByEu0snBBEbYdTzwFqrX4IFBR200A6jRRADsFjmsDAxgemMDEyfuWBnkMnJH6zGoQ00oy1GY20fdu3Ow9YIJTibkpEqliI9TYbobbuxwUcFYYIYwUGbwd6oXYLRFxbrfZw6Nb6c6FF6utWZtEMdra/Tmax2/3VsDP0yGTTFOqRJiyHNzYVWH4acmkjk7yvA/v1nUVJxiIJ42cpJMtTqgZ/p3Ty9eRNmgQD3PuwGn390udaOMHqMza7DpUt3MXLhUwji4yESi0G81wjiuAuyOhgobmpDPtGOqO1xYLFY1BrFEszy0PLn95WVmM5VoqP2DFxdy15v6r/CaDG9tVCqNZArspEuo3plbEBmYygkB5ho+PgKNnGMSEhMpl6MTcVnvdoZr/6XIl6NtWevQ2xSJLTAGL0P6tgG0OW2jUdtV1L9UlElVECTlw2Fphyy2lqIS2VIJZrgt94AorAaaWkZVLz1IyeXT5A3VSBXDVGqBFJRIhTCd5GXEoG88iPY09yL8opGGApb0GDQISAghIq3Hs5vD/N0V0ASGwWRgIc0wVakx4RinZAPr5I4GNpa0Nk5jNb6NmRnV8LLiz4znYDRYq4ugM6Xiw0sCbj+GZDyI6AWhSB2Cx9rmWpIg7YhwyPGFk86BeO6ZkFOnYdj7athql+PIkk0chLiUaMMx2dH3NFhWINYN5EtnnQK5uKSj4uH/XDS4AFemNBurlnliW6dJ0TRSbYx0ikYrWCvJFQHhoDjX2g3rgznIc4tjrpf/pmSTsPeQOTf7DP8MTjTHNoAAAAASUVORK5CYII=",
    "gt": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA9ElEQVR4XmPwnH7hPhD/x4eJAeh6sOD7DCACiwQKJgag68GCRy0jDND1YMGjlkHAo2f3/9+4e+X/pq1z///58/v/1v0baWPZrsNb/tf05v+/tK/1/7xpsf9nLO/4P2Fe8/8zl09Q37LlG+f+D81y+f/g7u7/L653/q+dnfo/MMPh/8K106lv2arNC/97hZn+37Kk4v+pg9P+bz2w5L+nr9H/6bO6qG8ZCLRUZP4PS3b7/+Xbp//5pT7/65vz4HLoerBg0izbd3zn/7krJv1fuX3B/wkT6v9//PyBdpbhA+h6sOBRywgDdD1Y8KhlhAG6Hiz4PgD9G2ZkjOCt+wAAAABJRU5ErkJggg==",
    "gu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACMUlEQVR4Xr3V70sTcQDH8f0rEeGjEUEhtgcVRinc5tKrq2FY2oOiIAmCCiKxEMHqQlwm/iybw839OJ3tct02bOp25xyO5VoYC8yIeiBlkQjxaXeSVF8c2xfswXsPdnzuBXdfOF1QV5LNhf9QVqf+XDBcA1PVsW2p99/EasvvwGAZLCgzw8NawuFo9SPi2lap9y8aUyH7nlOYGQvDsZMpGCwa+w3JrxbBR0cw6hvFyC5jQWBRmMnYDs+OCsRSGXTIAuqeNeHWZB9eiBMaeOhEL7Ghxq6XXsZ0vxc9cyJO+25in43T0MCbBURud6L+cDOxocYG9BuP7+XiW9yNOsC5GtE169ewmDQD6/7zxIYac++1QHm3rOVOxSCEvRq8+Z+eJTZU2MkjrfCfa4KSzEDpdkCxCZAEF+ZCUcjN7Ui+/wj/wbMoZ7uJbdEYW9kGkbsKJZNFfEyC4hQxJbiRiMQRf+LB/NIGlu+QFIypeXez2uP6tPId6Q+f0Tn+EL2zIgYSEvoSAQzrTcSGGhs2nMG4ksLK1zWs//gJKS3DGbDBlZyE1/EUQ9WXiA011sLcwETPY7glAXafA0LQAzHiQmjajtetV9DWyBMbaoypsSJqqMBqtiv3jsJ4np7PHYwQviTuYaqsEge4fmJDjaldbOARKjNjecmJ9bVBrCbvQzHWoKo+P0SFqTXU8ogxLL4tPIBsPg6mbusT+GdUmNoxE4+hUkveo/5v1BhNf2FB8hO+HWV/AVuA0t8DavswAAAAAElFTkSuQmCC",
    "gw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAqklEQVR4XmM4J6h2H4j/48Of10oe/nNR7D+F+D7DqGVYNJOKR5JlJwRV6GdZMDv//yMCqBbSzDI+Rqb/jVwStLNsH7/yfwtWrv8sDIz/GRgYwFiYkeV/AzfEUqpaBvOBDSsP2CJGIN7Krwj3mVqL82GGeZ7/KcSolskzsf2PYBf4L83E+r+OW5x2lh3iV/k/nVcGbPhpQdX//TxStLMMHx61jAAetWwIWgYAzESvHIyVaLkAAAAASUVORK5CYII=",
    "gy": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACYUlEQVR4XrWVXUhTYRzGx2Z2rDPPKkkjdcYEA1mQhVhEhZBXkX0TJOKFd7kLk0KpCwPJJKgbU6QIc7gCC6PWB32SRWPJrJXiQPQoZSrVFtM6pNTT3uM5ub29ubNVF7+78/5//M/zvOfobEfLpYbblShutWBDI/c/EXW2PCOyMnh4u5vxTLyFqpu7sKmJpx/8F4i6F9kCHCt4WIx6OFvTgUAd/MFXaPOcxj57Ln3gbyAyE4ZWmeDOTMb6pATUVSUAIg+M7QCmOtHz9hFq75VhS7OJPhwrczLCQJYJ+42JKNlpgNTPAUMhRsyA/zi+THWj43UTSq/k00O0EilTqU9ZhI1r9RhzL5wVqrwvCm3bAd+ECw2PK7DtfCo9cD7YMoI9jcfqND1eOhMjhfK2K4GPlZiWPHD2t+FQZxE9mMWfZYT76UZYjQZcb2EIVUY3A5N2jPi9OPf8GLZfNNMSbTKCJ1NAAacUhxaFM5wqb/td8uLJ4A3WFYouI5Di7OGp4syHvO1lTASH5Su0+1KOdhnh8BIOWwsYpWGhFOnbTAB3fQ410+iyXrOA4tBWFaUGzAwwBquQ0nyqBqZ96B13y20tbEnR/hq7MpJh5Qy4cGrB78N/bVEob/H56yjae87ioGMdXYzoMlL9nOV6uK4xmhhWBvI9rblzgC4DC7asZmkS8q2MfJSavwv0yTWP8U8RKVPzKdsb1jplixgvMIs5mZpP4wklH2WLvvGnrLDjYVZG8rEs0+NBuwB8sCE42RUt7HgQdfVrhB95uYsx+OYkXOJVrWHHg6irri2Xzjw8EmvY8SD+BD9pl/cns3+kAAAAAElFTkSuQmCC",
    "hk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABYUlEQVR4Xu2Sv0sCYRjHb3DwD3BwcBBx10UQdHdwFHERHB2cnfwD/APcFHR0cHBwECowMhAVNSxKcjjoFCsjSSopqW88D9RwL8d7wuXkwWe4e573/dzzQzlSFOwLRf/hPznI/ugGg3hqNnHu9QoxGTvJSPC93WK7WmEQiQhxGTvJprkcPpdLll3EYkJchlQ2r1RwVyhwJVTZ62SCx0YDHZ8P69GI5YtqFS2HQzirRyp76ffxNp1y+2hel8kki9fDIT4WC6wHA4491OvCWT1S2VUqxW2jC6mitseDbiCAXiiE22wWz60W1HzemsqIcSLBM+r4/Tix2zGOx6EVi3hXVZw6nUK+EaZkxDAa5ZUn5uUy7ms1lplp3y+mZGcuF7eR5rPRNNxkMjxLeqcF0ecbYUpG20jP12aDWamEY5sN1+k0/wDNTJ9vhCkZXd52u4X5UIW9cFjIN8KUzCoOMkvYq+wHwiwGoEYaqwYAAAAASUVORK5CYII=",
    "hm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACvElEQVR4Xr2VT0iTYRzH34OHHUQ8ePCwYAcPHjx4MJQQGU2b5UFj7NJF0JBA05FmlGsbDGXlcAQTLIVVrDJXYUrsoGQX0cBaDVFm5kMbzBI2Lf+l2b71e9de9P1jMaHB5zk8z/t8v8+f7/MbN3vWmNien8fERAgazVVwXIOA1TqCGY5DSKtFba3nwNiJ4i4E261YqKzEg+4nB8YUYNzNlv61RYMByw4Htta30NrqQ0bGBUWzzMyLGDDf5U1W+vqwurqJ6upesbAcjKMmP9+C19e7edHNQABTUx9BfWKzipNOzJnasVhTg51IBD7fG+TkXBKLKsG4sjJnVKt1QqfrQb/jGZbq6vBtfBx7ewkEAmHBLDgdQthkQszrRSy2CYtlBDSPoIXJiIthXMja9TNqs0EJMgtqNJL+/TxtdoiF5WBcQH0sQYJHYaz0jCCq19/ij1/WLHi8OEErV4LE3qpUkv79+CvPCaIu1zifbJWqUWrmdr9c83gmQQwNzSAcjmOHMcQHB7G9sc2b0Z3t7u6BfqvDw5h9PgGvd5qfQ9TX3xNEKa2E7M6STQM/gWK84nYjpNej9/IA7PYXgllT0yM+fZRCSiOl8vQpl1hQlj/mjMvLM0do2/SwF8rL8e5aJ0pKkhcujj71GQx9iETi/M6p/7H5DrKzTRKDFB0dwxgdfZ80W/rwZfez04mFqircaBkQHrSSGUHidHw/YjFsTE7ilblHYkKQVmPjQ14nK6v5E9em74hZdSYUFNgkHxcW2uEoPQ9LRSt+n4Bk3Gi8jWh0DTbTfcmYDEy4s3Sh1e8/jRT02EW1lh3ZTAk6lf9mJgOTmNHlU60rKuo8NGVpwGTNlpe/Yn39O3Jz28QTjgKTmFHq/P5Z/m9GLqF/I1UbZULDJGYE7UitviL++J+g2jg2NidfG5ONdFK6HFYbfwH9aOD/lHT6jQAAAABJRU5ErkJggg==",
    "hn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA0klEQVR4XmNgKD5/H4j/0wHfZwATmBK0wKOWUQXT2bLopQ9exi9/+J/WGGQPw+MPv37/xwFmnnj9/8TDL+jCWMFxoLpZJ9+gC8MByB68lhn13/gfsvAeujBWELLw7n+jvuvownBA0LLff//9//77L4rY1Rff/ltPuQOmkQFIHUg9LkDQsjtvfmBYBuI7TbuFVRykHhcgaJlh343/YYuJC8awRffB6nEBgpbdePUDr2uRAUgdSD0uALaMrkkfnNkwMyAtMJ1LEDCBKUELPGoZVfB9AMjn5UQI7EIVAAAAAElFTkSuQmCC",
    "hr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABm0lEQVR4Xu2SMUsCYRjHb3SplkiIEKtP0BpUSlHW1iAODp5oIEdGHdHU4CAlJSUdWEOIEZEUhENgYFEh9AFcmsTNcC5ouPJfz11i3JnvmxQ09MCP93/P8773uztOeOmz1SAI+G3II/x52XN3j6nHgltW8C3i3uWBPBzDfiiKka0k4nIKs65jFGe8uBXnTWeMcMnUzi4MbaTglI+w2uGGOKdgatmNYMAPz/gEptNFjG0r2j7j2W/LCPfeHfpjeazbfJD9B3ArSYQChxidTODGG0Q+qpjOGNFkT6GFV4giWnG/ruBy9wTqkgxIEuDzaStdU5/mxjNGyCNUKo8qWHV6qj/h9bWOMdOcUeThk+VyQCSiE483ch2aM4pfVijoq8OhY8z1eYvil52dAXY7kM3qUD4/b2SaM4pfRjelt0indeo5k9EzzRnFLyuVAFVt/hmpT3NGaTJJylfD4SuweIgmgMQH9Dt/5OrajmlvM8gjWK3J8jtgMdCr4G4liVruArBYtJWuqW/c+wVlbtlnnIObph4H7cna5F/2I5TfAPahWAG9Re/bAAAAAElFTkSuQmCC",
    "ht": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA/klEQVR4XmMQl5v8m0Fh/n9aY7A9o5ZRikctowomyTL/1L3/6/vP/08qXPg/q2j1/7jcWWA+SBxdLTZMkmXzV9/+f/vWjf/lrVX/pc2V/tf21P9//Og+WBxdLTZMkmWdk/f8b80p/p8aHPG/Mtv+f4p/yP/yuEywOLpabBhszyUB4/uXBEz+E8K3Jsz5725n8t/WUOV/lrvqfyst+f9OFkb/706ch6EWOza+T7RlPRnR/60dFf/rqgv/zwo0/a+pwvff3V3pf39WGIZa7JgEy3J9bf/HpPv/zyyO/R+fFfQ/oyj6f1xWAFDcDkMtdkyCZZTjUcuogkctowo2vg8Ao48WNLEAwg0AAAAASUVORK5CYII=",
    "hu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAXElEQVR4XmO44W3w+4qp2H9aY5A9DKOWUYqHuWXPuyo+PGnM+09rDLKH4f////f/0wfcH7WMGmA4W9azN/tD846E/7TGIHsY/GbK/LboZfhPawyyZ9QyivHwtgwA/q+Qxj3YHzsAAAAASUVORK5CYII=",
    "id": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAQ0lEQVR4XmN4ziB4H4j/0wHfZwARWCRogUctowoetYwqeDhb9u/L15f/6QBA9jAA6fvoEjQC90ctowYYtYwqYBhbBgDyZEGN3275CgAAAABJRU5ErkJggg==",
    "ie": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAS0lEQVR4Xu2NMREAIAzEKgRDiEAIDtCAAEx2gD0D/MT0ucuaRFktY9Z9U6LH3VEyPHvCOPVMgnHqmQTj1DMJxqlnEoxTzyQYp79nB5kJ43zbnaqRAAAAAElFTkSuQmCC",
    "il": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABJ0lEQVR4Xr2Uu2oCQRSG5zmsLcXSwnYLH0HQci0EF1tbKxstBVvfYEtLC0ttwkZyEe+iooGgITG6JH+YKYZlXOIZxfngb87u8M2cOQyDQdh4fISpMMZ6MJezwh1TLi9hKky9xEtstz7q9Y1aJqEtKxZncJyZuHBdSLJabS3akM9PkUg8oVRaIBbry/a023t1SSgkWaWyhOd9wbYn8P1fUWs0NkKSzY4wn9NOSZIdDj+Ixx/huu+yxqWp1KvYCBUNWR+t1k7WuMyyXlCtrgN//g9Jxnff7X4inR7KNnIJl2cyI6xWJ2VFOCRZcEAikQckk8+IRj05IJ3Oh7okFJIsSKEwRS43wWDwrX66iLaMt4yf9BpYs/kGUzH7EJ8X7hj+CpiK9oDcwh/sVfyqkW8KUAAAAABJRU5ErkJggg==",
    "im": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACAElEQVR4XsWTT0jbUBzHA3pScUIvpbCJiAy9iYK9TKin4i5ShMLqwT94ELqDomwKCttFb+rBizTtartGMW1NilaTiYqom0K1SEFh0GkvgkiPvfldEsfEl1RfJ7rAhzx+7/d+n0d+vzASw+C5YMjAU/L/ZSGDmApre4OY06aLqwQMYiSGMn9dHZY/dGjrUHk5Nt1uHMRiiIU/IpXcwmJt7Z18eZAB19mOL+/sYN+2aGfImnllcYWFkW58nZzEz2QSqVQKIstC+PweicQeEjMzd/JXXxRD8HrB9fQg2vAagkHNvDKVwEsLWLcDYlUVuD83Fa1WpNNpXF1cQCgt/Xsxj92OdZ7X1SDJK1ssUd5tDIJFt7Hp6kqc/ToFri/Bd1kRYW76uxMO4zAY1NUgySszQhgewL7UjzWuGdlsFsc+H0L19ZBlGXxvry6fhFq2MzoK9VH7F/W4tHUul8PR4Tfsbowg7nDozpBQycTWVmQyGZwr/ToaH8fUKzMkpxN7ExM4UT7hj8AYViwW3TkSKtn3yCdsy32Iu1xan8h9WqhkXFMT+NlZrEsSJJvxT00DlUxlyWTCvjJxu8owyBUVENRpNci7D2qZRlkZFoaGsDo9hTm3CdFig5x7KEym4FcGQRZF+M1m3d5DFCyLtDXD096oi9NQsGy+puafJ7Jg2WN4VtlveKL21rRxR5wAAAAASUVORK5CYII=",
    "in": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA2UlEQVR4Xu2SPQuCUBSG79beX6nVsX/kP1AhcBAJwpagWRcntxbBPq60C8UdbXM0kHjzCC2XMgV1CF947nIO57kcDsNmJkowAILR86HQB6OsE4aWHVc++DrsndLDAAi0SBBcYRgRLIujKJ5yuS6ilUxV94jjFJzfS1KY5kluqUtzWZY9YNscrptA1w/wvASOc0GeF3LrtzSX0VAaThJNiyqpbZ+rTzRMcxmF1kbre6+R1toi7WR0EHQYdCBBcJPLvyLYYqf4ynYe9g152HQ5ESUYADHKuuCPZS9ER7n6wr5vwwAAAABJRU5ErkJggg==",
    "io": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAE6UlEQVR4XmWUf0yVVRjH3z9cc80Ga0askQNyBQwWsZsyJAKkgCACLg6UHwOhjVuQTGD8CPDKr0vIb5AwwCGYowsFNCAIkhAdhdVdyUQjdkEsVCraqHQw/Ha/B97r5Xa2s3vf97znOc/383yfI32fX/7wxmfD8PevgiQlQptVj5ve3rC1zYKlZSraE9W4U1eP0rwuTE7OwXysrPyDmpoRMfX6ZfNl8S4vrwfnz09CsrBIeVgdU4jbpyqhbR3F5yeaxGG5sVW4mV8EXc8Y3N1LRCKcTIKbE/KOIS2/USQkr3Hy24qKYXR2TiEiohE7drz9aH2moAS/qdXGqY+Px0+2ttvecQ7VadHScgnOzgVio0uQP5wCfBH0ZjXeqIhAdV8L1Oo+WFsfNwbfuTMZyckd0OluYWLiZ0jTIeFCiTyvu7pCZ2m57R3nsPo0zk2cQ25rLgaHLiOntRQeh15B0oUkvFrpi8lvdQakK1hf38DY2A2BbXl5VaDkYaurDyA5OuZvqFQdWOgbwnRJJSbKW0TwtrYrWO7pw0jmB9ivKMSuXe/gZZ9s2Me6wC/jdYOSGriGvwiLVCtY7vOCQ8g+2B6IFAhnZ++KQ4lSoSgSKgXOrqYvsFBSBs2RYvHC1CB79+Zg9JNxzGvKoVHVQaGMhvSSEx7zsIZDihMOHvfFniP2IgFlRibcPTYRm05iJd60tE5I473f/D4/d0e4hnP6hzk0FmmhVDYiOroZo6PXsbj4J0YujyD1bCoy2wpw4L0gPBVlhdfSfaHUHMK91XtG9xEhA9McREmF8pCmpvS/xsQ0Y/fuY+Avpd+/v2b8gIUNDW2AjU0GUlI+RkV3CxRHFUivSoePyhOB774Fd5UX7AMPIu9EF2Zmlox72RZlZYOCkp9fJSQbm8x14iNbHkjptLOnZ5mRN+vF/8/YpcIuzNlQu8NITPwIbiEu8FTGwSMwBfbBCjzpGC6+d3VVIyCgWriRz3QwD5QMJ/8hN6NcVG/vcnEAeTMzZsixsLCErJxasZkJRgb74mT9aSMqnW5WIGRgrpMIychDWlvbmO/u/k4g4kG0qOkgUjozI0Mr6icH1ut/QXtxnLB3cXG/mLS4+SBWJsAeldzcCh+YuofS4+PPiuvHvEk5razCEBkUgNL4UOQm2CLSVQl3hwTjOlXzhmHw4ODa7e708Tn1b0PDReFEOsn8iuH1Q+V0JJU7Osbh8B4LtFtLqPV6HANPSLjYeFIoYIKiNlt7WXuqYt9RtUQiREdEMkKiGRqaNl68S0t/CfYywu7aF1CreRYXmp7Hlx02GP80Fteu3RZr/ObqVT16e3mjbNaaIhhDSk/Xrsiu4S+lUwGVMEBSUpvRVXQrnwcGrmBkcBDdrR8aUDcbUG+S4CVAhFTBhJuavoaDw/uPMNL67AGipGTzW5xIo6LOiHX2oYz4uaePIszOTXxP8/CaYrtsq9FWAlxjEpKB56LQujXoPhaX7szO7hYKTQefuTk1oQpnVHH/cy8RMjAJEKXpkAy1WWI/sK+IkAeZBujv/1F0PxHSpXxmXf6+ewuXNHECFbPnpEJT+7NOTFi+JARG1oSNLDtJvjEYQHYVD5QR8+CggArsd9qsJevC7+XaMg6Dy8jpaFG7hoavlpmBqRIqZX/xMNZKviv5SyXczIOZoCkqWQkDc50kTJX+B9L9blNBQLqWAAAAAElFTkSuQmCC",
    "iq": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABG0lEQVR4XmM4J6h2H4j/0wHfZwARWCRogUctowqms2U3XEI3XrP1O0xrDLKH4f////f/0wfcJ8myHbdO/v/+++f//ffO/X///TNY7PXXD/+vv3r4f8WlvWiqMQDxloEsOv7oyv/7757/n3tmK5gGgdtvnvzP2dT/v2HvPDQdGAC/ZY8/vPqfsaEHbJjD7Lz/CWva/tvMzP6fDhQDWf7775//ESsawGIl26eCLcYD8Fv2+ee3/12Hlv2ffXrz/wVnt8Pxnjtn/x9+cBEchDAxEP/yi3voRiAD/JZRGdxnMDc336ivr3+Y1hhkDwMQ3Afi/3TA9xmgBLoELfB9BiiBLkELfJ8BSqBL0ALfZ4AS6BK0wPcZoAS6BC3wfQBWZqc7+tt5HAAAAABJRU5ErkJggg==",
    "ir": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB1UlEQVR4Xu1STUtCURC9/6V/URuLIOlTqWWFWZZK9AFta9MHlJRShoWZgbiRsLL2LVpo+cyCaNEyP3g+iaJAF1mnOyNtWsQTypUDw8w598ycdy9PNAUNqFeKn8R/ZsPsT1L0xmzoOraiU6b5dAKEKfvPHBLbYTwawcCZk8/bo0PoPKnqOo4sPEdao+y7Y2Pc04wpVt1D2vboIOuJF4uXm9i/i2Dpyou15C620yG4FD8810FspPawnvJjJemDOx2QdQeryg486SC2bkKYj7uxeXMAdyqAhYQHvtswQvdRifexruzBJzWupB/u6wBzAjXE5/s7Ks/PeA2HuRKuJXSbfcjlT8vLKJ2fI2MwcCVMvN7QbfZ2eIgXrxeVYpHNqBImXm/oNivH43iLRFC6uKjeTFbCxOsN3WYUFVWFarEgbzZzJVxL1GRGP0RZUZA1GlFKJPBZLv+U/Bqi4HBAm5yEOj4ObXqae+KKc3NciedeVtVmQ3F2lnnSEv6ep3Oeo/OpKT4vOJ2c3/Mi29YGzW5HtrUVOfnFBXqmvj7kenqgDg8jJ/tMczM/G2kzLS08SLd7pF4a0ixptJkZaNIsbzLxjoLVioyc4b2joxAPQqBe2TD7k6yr2RcJfpUtCileLQAAAABJRU5ErkJggg==",
    "is": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAeElEQVR4XmNgsJh+H4j/48IgcF1DA4y/njz5P75pH4YaojHDqGWjluHDDPS0zC5jwzOHrI3/cWF0y9oXnsNQQyxmeHz5zu9fT578x4dhln3ctg1DjhTMcNPe8R/MMFpj+lpG12CkawJhoGfSZxi1bNQyfJiBjpYBAJ6KsH2nyl/kAAAAAElFTkSuQmCC",
    "it": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAWklEQVR4Xu2NMQ3AIBQFv5A6QEAFNGHDALIQUEldKoeB7pcXYOr0Lrn1Lo679mh5zNzhSefU9yo9PFvBOPWMXQnj1DN2JYxTz9iVME49Y1fCOPWMXQnj9PfZBz0LqcAuiND/AAAAAElFTkSuQmCC",
    "je": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABhklEQVR4XmP4devef5LB3w/oIgQByB6GBxIm/9+3Tv7/78cPdHkMcPfq3P/7ds38v3Nt4P/1q/v/P7w5H10JBgCZCzL/gajBf4b7grr/Qfixvvv/r1v3oatFAZeOlv4/sFT3//Jmw/+Hlln+v3C4GF0JCgCZBzIXZgcD2Fag72ACL0Iy/v+6+xBdHxisrSn/vyVW/P9ad6n/q3wl/x/qbkNXAgYg/SBzYGbCQo8BnyR60LbHxP/3V+b+P1tW9v8UNbn/68qKUOThQYbD8WDLYADd2+hBu6d/yv8Cc5H/i5wk/h8Ilv+/u28K0XpBAMUyEMDnutfPX/yf5KX0P8+E//8SO20wn9hQAQEMy2AAlyHXt+36/8Yu9P/1zdtxOgoXwGkZDGALnkt1nRhi6EGGDRC0DASwBS2hIMMGBpdl2ILxw4S5GGIUBSOuBALzBTbfkpxASDWEkKOQAUmZGh8gRi9JxRUhQChUSCqIiQW4HE9SFUMqQA9akipPcgBK5UlWs4AMALIHACMROaifwAbyAAAAAElFTkSuQmCC",
    "jm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABCElEQVR4Xr2WPQrCMBiGv1m6ewAHFxfv4R16FM8hCAU3wcmti4NOolsPkEk8gKDg8plXbWnSL02UNoWnEJq8b/vQP7ru6M5n4tuRON0Q06I7kIdc5KOH1JaeGJRkOXGybC78BaxHTj0XPTQd06VYmweKA/Fk1QwJAeuw3sjT+eghvalkoM9kbk74R2tdW2VK5yIfPe8yDQaczvTkvTU592uVtCEHeWV2owxMRp/LNjS0aHVpQ049VywDoVo92mzkshKX1mEWpM2mvQxIWh8nc+zQZuMvA5LW6krd2mwUfXf2AYNoZdE0RrlBJG293PqStl4eape2Tl9Xodp8eLSquJ+YqB/PmL8FL/wJxSKmPeJ0AAAAAElFTkSuQmCC",
    "jo": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA4klEQVR4Xr3WQQqCQBSA4bcwEleFGwnrBIEewDvMEdxHR5iLdAYJXXkBD9DOdeAyWqWrFq+Jeht1cKZmHPhBFN7HiANCCdAxAIQ5agCe4govIusoYZRVtI9RVlAZRhlFpzDKCPrwvO49TLWb77dnxmrOeaUbYBgq7WxQHCMWBeosOea6w3tjaaDjWJIgZhliEAyHy1JAx7E0Rczzz4D+M1k/Y44z42tUSQOhBffVQuvTv26WLT/u6iiLKt2gWSse6q041AdxME9/NIUZQSgZZhSh+pgVhCLMKkKVe/FbYBv59gJQkQB0JxM0XwAAAABJRU5ErkJggg==",
    "jp": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAApElEQVR4XmP4T0fAgC5ASzC4Lfv3/fv/H9evg2lSAdGWfVyz5v9tA4P/V1hY/l9mYADTID5InFhA0LJ/v3//fxgSArYAFwbJg9QRAgQte9nQgGE4NgxSRwjgtezn7dvwYCOEQepA6vEBvJa9nTIFw1B8GKQeH8Br2ZOUFAwD8WGQenxg8FhG12CkawIBAbolfRCga6aGAboUV+iALgUxNcDwtQwA8b1oCPX+o/gAAAAASUVORK5CYII=",
    "ke": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABMUlEQVR4XuWUIW/CQBTHTyCqJklFBQ0G2QS5D0DSgGHJFjAEg6AJFo1G8AH4APUVmM5tfmb+JvgWiLf3f6nhcWHXMMgyLvnl3fvfXX8JXGuiKDoYY+jaiOe+ZUmSUBiGJzlAjnWda7xlQRBQnucybzO7NJWKHjnW9RmNtwxkWUbdOKaCH7zfbqWiR673uhAPEVnyHGW/T++tlshQ0dcY1ryxsWTzTxTMppp/rddS0SPXe13A4y1bMcNq/sH/GSp65Hqvi1qyOfNYzT8nE6nokeu9Lv6u7KY/469cEFxJfUddw1pLr4PB0dVHj9xzWBMt2TjjF+8cU/5kLRLqPDepeKheaq7okWP95IxCPD6yxrhBvWVPHtp+4s/VSyoVPXKs6zMab5kwcmTnckU92YX8b9k3UcB9gznwT8IAAAAASUVORK5CYII=",
    "kg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB30lEQVR4Xu2UOyxDURjHG5H0XvVo6bsepV4bg8FgsDNISBi8NgNhQCIMIgaDQcIiBptYzFi83++UtqGe0RAkTautieSv3xHLEfde8ZgM/5ycc7/v/O73nf85qnlVHv5KKn7hN/UPw0JsLpbic7Buz8Kq2YEVfTab0zof+5kUwWjDtVQH9kvTcNpuwHGTCRe9enjbjNjMz1QMlIUtCrnYLrTjvEcP/7QGoW0BD1MJCO0LCMzF4WogGTtFGYqAsjCq6LI/BRG3Gt5WI6sstCPgfjIBpx0GPHnVOGk2YVmb8yGXlySM/navJB2340m47EvBms2Bwwobbka1OKqyYsORiYtuPa6HdOws+XxekjBqobMsFcFVEWedBjwHYuCqsbJvBKO5p84C/6wGngazbCslYeQ2MkFwKQ6eegseN0R4Gs3wthjhLLcxCLU1fKBmhvkWjJLp8H3DOviirTrvMsBda8FLOIaN14Nv6zdjWhbH5/OShJHo4KlFYWfUCC0muCqtCCyI2Cqwwx1taeTwrSoyEp/LSxZGIuuTI4MrIkK7Au4mEqNXQIR/RsOuxG5xumwLSYpgtBFdXqqQLE9W943o4Kq2steEj/9MimDvoieKLE5gGmnOx0jpS7Dv6h/2I3oFcWExXPipIE4AAAAASUVORK5CYII=",
    "kh": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABkElEQVR4Xu2UTUsCQRjHF6rPURevEQSZpwg7RFhEdIqiFvJQ5sGDGtELletmq1QHN3BDK1gJSj3EuiEYksZqSX0E+x4d/jkjeHAFdyE9RIff8LzMMz8GhmH6hm9qddADagxZ2jS6wb/sV6gx2sDo9xdjgRlKzJCu1gniMS3LM4O43edMCw3L7m0OfPQ34tTIFBRFwbN1luakTvqtM60YkhXqN7gIBHFnX6C5yzYJMRrFgX2O5lHbNGKhcMebGpIlWTfS6TQCvm0o5yIkSaIk4nGa+zddUFUVqXWPbta0zLe4BI7j4HG7oWkaMpkMcrkcZFmmuZNlaT+45tTNmpbxq04IgoCjnV3E+BCEkxAuRRFCkMcVf4o9rx+RcBgRdkM3a0qWt0ygeC2jUnqFKiXwlnygVMuVZkzqpE/2Fer7W88wLCscCignkqgUS1BEicaEqlZuxqRO+iTWjs90ZxiWvY/PU7LLLmStjmb+4vQ248exGTytbNH409Z4se2gMvKNtPlaukGP/0aytGl0gz8s+wEY3D8FlT/5jgAAAABJRU5ErkJggg==",
    "ki": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADRUlEQVR4Xr1SWUhUYRi9Dz300EMPPfTYQw89tFg5aqGlKWIb+lBEEYkNFCWt0k60EWlqhkW2GCKaFoUhZRK2qZGVlYUtkmWLOvfO6MzVcZnGpdM9n9yBnMoJyoHDvfOf77vnO+f7FXXeNIwWlOEH/xMjirXGB6FlkwX2ZAv0Q+FwrA2GGjkNzpQ56DwTic7CaGhJFr++X2FEMUIzBO1WC9rTwtFXGYeOslh478ZBz4iAti7Er/53CEhMsGwmnDsNN6Ux6DHEum7GQi9aADUx2L/2NwhczET0dDi2h0FdNMOfGwF/JWZLnA1HUjBs20LRttEC25Igv5o/IWAxbWsotNMRcF+Nhn7diPLyAjhz5kFN/sc701bNQkfufLjLY9FxOwaeqoXG03gvi4F+YT40a2B7C0jMtWcOuo2L4TFu4veaRT503zEEjXPbsbloSRg5UhGzL42AfnAH7AlRfgXq8hDohSnoebDREFv4k5jnfhx6H+6H85QVtvhhYlFBcO1KhmvvZmgxQ86VzmdP8X1gAPzx6aquRFPqYXw6kSrvg729wvHXq72B/VUm1NoD0JtK4O3UfFx3w1vpaTywB46bpfA67D5u0OuFu+45lIr6z7CeK8ekzWexIrsU5S+b4Onrl6JGzYUt+Xcweet5hO0vQEH1a3R5vMKxJv3GE+kL3pePnIo6tLmHBtN7vuFYaQ2CdudJ766iB7j/5gsUZWUaIo8UCxl99DL4f+yaTEzccFrep6TkYt+VKiTmlMn5uKQshB+8hPHWkwJy63Nvy/mY1ekizr4J67JF5EjJIxmGZ4qqd/umMd1k3aqVST85OuSMbuiEk3Oo5LwKXwI8I89+9pCvbmhG/8Cg8OZ3+VSozIioPHXnRSmu/9om5NXHDeKaE9NFSuE91H0e2sW71nafW3JcBVfCvprGVuFMt0yMkSu0y0J+mHGwUSwbYHF8RonsikOYEfGcT8aTV1kvH+JuzD6CUZNjL++CrIV2idqPqthmJDdefJCFmheFHCNl3fXa9xIX4zY5uiRHZxzavCisMZPgT6EruuM0Zhxs4Ee4fPOiMI7Fx6+h+NFbNDvdMpBv8QYY1YV7ryRCOjJXQzARpia3cbTwA7WBjXc+u5ACAAAAAElFTkSuQmCC",
    "km": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABmElEQVR4XmPI3GPw5cFHrv///zPQHDPYrLT7rbvY+f/ia7IYktTGYMuU57n9B+GobSb/H3/mxFBELYxiGQjT0pcYltHSl0DLolAs89mQ+T92e/l/tQWeQF/6A3258T+1ANwywyVB/zff2////Ktr/7vPzP2fsrsG7oDU3bX/n395ja6XZAC3bPv9Q/9//Pn532J5ONgit7XJKMEKcsza27vQ9ZMEwJYFbMoBc5Ze3wI2uPnEdGCclWDEI6W+BFsGMhwEao5OBBsI8pnn+jQMiyj1JYNpjxPcsq7Tc8CGgSwN31qEYQkMa013/V/rZPJ/H4M6SRhsGcgXIHD6xWWwYdn7mv6DghbdEhD2KrP7v0pEG8MgYjDYMpAhoPgCAZNlof+LDnaAswA1fIPVMlCemn159f9rb+/8bzoxDSUYKfENVstgGJT0Yb6ihm+QMYPatACsxZVmb+x/i+QZ/62jFlMNY1imMtv7v2FZDYZCamAUyzT6o6nuG2QMtkxljud/g4rK/9bRCzEUUBMzaHekfDFPnYIhQQsMAGr0gQa3ZPcSAAAAAElFTkSuQmCC",
    "kn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACBUlEQVR4Xq2UP2gTURzHv0OggWYIJVOJcEKGDDcERFqKYJZOURDSQiGDikNExCUtCDo4CBHcjBjoZEtpKWkNYhEFMaKWaooOOW1pEfyHxsE9Q4av790R7L33EtJrDj7b3fdz3/fe7+HkAjhIrj8HvzTAmXMgoKC+HJTMKvjWAZcegLERg2hQsruvwN1t8MykQTAo2fQ66OyB94tgZNgQrqIG9MP4Iji/CTbegKfGwGg0ylgs5gbG43FdIrCOBZBdfAzu7YN3boLhIS8oFArRcRzWajXatq2Jrl4C/74+hOz0ErhSBz+8AFP2/yApKhQKbLfbbLVazGazvja1KvhHLHNdLrMaauLaU/Cr2JvZKzLc/9fhcJiWZbFUKjGfzzOdTrs/0GnzeQLcgkdP2eQyuPHR+7vEcb9EJZVKuRK1TUfUU3ZDDOe3HfDyeT24G6Y2PWWd4dwQexQf1QNNyPderoHN23qbrjI5nD8+gVNnvZBEIuGFdTnOkgszQvJMzNsJPVzFlXWG8+E9/1VTrVZZqVTcjVclss0TMW+/b4Hvh/RgE5DDuV/Xr5pMJsNms0n5FItFd/ODtPHJTFeNe6osi7lcjuVy2T1p8oYI0sYnU5fnIJFIhMlk8kht+pZJjtqmb5ls80vchQ1b/zAIRpk8kZV58Occ+C6kfxQUTSZn7PujwbU5yD9eoYnYkVLkdgAAAABJRU5ErkJggg==",
    "kp": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABDklEQVR4XmOwC5vxn16YAV2Alpi+lrVP2/+fXpjhcUPDf3phhmMMDP+x4XMqKv9vRUf/v5ed/f+yjc3/4ywsGGpIxRiWneDg+P988uT//37//g8CP+7fB9Ofjh8HOwBdPSkYwzKQRTDw8/Hj/zdjYuB8kMUneXgwDCEWo1gGcjkyeDphwv+TIiJwX4LAw/JyDEOIxSiWgeLoz+fP/2+npPw/AuQj49MKCuCgfLt+PYYhxGIMy2Dg2ZQpcIvOGxiAHQECVLMMORgft7T8PyEg8P+ihcX/UzIycHGqBSMIwxLIvYICcAIBxdfjjg5wEFI1gYAwetKHAZokfRimSaZGL1JoielbEKNXA7TEw9cyAJUW3Rz6pQRyAAAAAElFTkSuQmCC",
    "kr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAC60lEQVR4Xr2VX0jTURTH11AKk17UkDDwYYgPIUYKUlYGlqMt2my1Howc07AyBBUy7MHmcLokRhhJWOJLUW/BEAtBxMr5BySkGUiWBG2xaKw9+LDq2+9c+l1/v3tR20tfOA+/e8+9n3POvff8DPiPMogD3d3dyMzMFIfTktfrxeLiojish83MzMBgMCArKwt1dXXaqX9WQ0MDent7UVhYiFgsppvjMJogkNFoRHFxMTo7O2E2m7G2tqb131CpVApWqxU+nw8FBQUIhUIYHh5GMpnkPhxGEIJVVlbC7XajrKwMXV1d3JH0U1n4Y2oK0cFBxMfGkIrHdfODynhVVRULlNY7HA7YbDYWCInDKG3KpKamBhaLRSpjdGAAs9nZmFYCUi2UkYFP7e34/Xcz0tzcHDweD5xOJ+x2O4aGhvic7swmJibQ0tLCslOjIX1QzkELEe2dko0KVMvpcrkwpmSvlXQbFxYWENeUJx4MSpurNpmxHaM7c/B6mxFf+vv5GjonylCUBBMVrq6WIGSP9uyD2X4bh8/fh83qwVPTAXGppC1hr3J2S6CXO3bheO0dBlLtpK0PyY+r4nKdNoX9Uq794zyTBLt6qFEHUu3t6KS4hU6bwkiXLdcRzM7joAd790sQ1RLfE+JynbaE3bzYg6POe7h20I1LR67g2Nm7EoTMZb8lLpUkweghB5UbqOrb5yhO2fukzbVGwbx5vl5CuvLNzc38W5UOVl9fD7/fj9zcXPYEVE0/e4ETjoAEUUFPvA+578rKCkpKSljQ9N60z4jDKioqEAgEUFRUhJGREeTn5yMSiXDHr6sR+Bp9OFfbwyCnz/hx44IX70Pr3Z3829rakEgkUK08mXalu1DbUsVh4+PjLKP5+Xm0trYyx9LSUl0n2UrU7qjrU0+kxk6V0j5uXRmpj5lMJgaiTCmAdLS0tMRABCwvL0c4HNbNSxeko6ODRag9s3REGTU1NbEfqCgJRmVbXl4Wh9PSRv/APy+f6pzzQTjOAAAAAElFTkSuQmCC",
    "kv": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABd0lEQVR4XmNQ8Vp6FYj/0wFfZQARWCRogQehZZbRa8G0Tdz6/9mth/5rBSwH0yA+sjwBjNsydd9lYEPsEzf8v3b33X/fnG3/i7qP/l+29RZYHkSD+CBxkDxIHUi9dsAKDLMIWtY88wzYQJCliTX7/usFrwSzQRjmGBAGiYPkQez5G66D9aGbRdAy55RNYNeii2fmN/3PKWzCEMenB4pxW4YLV1VU/7+wLOD/hqkJ/91jJ2PI48GkWRaf1fH/1OIgsGUgvHVG7H8d/4UY6nBgwpaBDDMNnvu/vb4EbDjMIhgG+RBdDw5M2DLfhIn/jy4MxbAEGa+dnPS/qKQeQy/JloHw4r50DAvQ8aTWfAx9aJg4yyzDZmEYjoxPLAz5bx4yB0MfGibOMhCOTOv+v2pSElaLiAhCECbeMhAGJXWQBYfnh/8vKakFWxKW2oOhDgcmzTI1n8X/986J/G8YOA9DjghMmmUgDMoCWr6LMcSJwKRbRgEexpYBAJNMjQP0BTidAAAAAElFTkSuQmCC",
    "kw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA2ElEQVR4XmNgcBX9wrDd/D/DTUfaYwYJ9t8M7Ez/GcpV/jNcc8BUQE0MtoyB4T8YG/D9p6kvUSwDYVr6EsMyWvoSp2W08CWrCOdXDEvQMIeG0CedS/HH9B+kHqYEM8jIyOD2GRK+f//+f0rBqGWjluEFDGJsHASTvhGf0Ifn9oHHvjmHHaYEM0gzs+L0GTcj0/9ePpn/nyUMqIJxWmbLxvP/qqgWhgZKMIZl1PYNMkaxzJSV+/9ZEQ0MRdTCYMs4gL5p5ZX6/15CH0MBNTGDLzv/F1r6BhkDAIRcsAWrRMymAAAAAElFTkSuQmCC",
    "ky": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADkUlEQVR4Xq2UfUxVZRjA7wYDQmts2PrYxajl8p+YVusLo7tCpFLBIUJBogJJsIsXqOASSy5eBnRvmCIINAQGIgLKuF7RYHhXUBe6GDNBQrRjX2DUoqmMUuQX51gnPq7MgD9+79me87zP732f875H0R22hdHeXkpLv8DNTYNC8ZaESmWkT6WSiIgoleNiTk3yPi4EBtJfa5bjd4CgCA/4eKxvSyQD6ekMDQ4TFFR4W1nY+lx6o2P5OS2NoZ9+JSSkeHrB2RAUE8ONJUsSpdWe9/fnmtXKsWNnCA4ukmUJCTUc1+7h4saNjHR1UVHRjjjHTsHZEBRGY9NNsYUiTeYuBsoqGBse5vr1MVk2InzP73V1XBm+RnPzOSlXxGD4dHrB2RAUXyuX0qlQzAlxrp2it2PhZI6OMax91YhBn8+LL+zinrvtyKqrbeMWSx8iNtslrl79kxGbjb8GBuU2jo+Pc3N0lKGmU3R2XJByRQ4d+koulp+Tg6k4nOYDa/j28528pNLNlE0MN1xc4qT+i9/mu9BQOpLS2bq1TJalpBzFar3IH2Yz/QEB7E8oQJzzbyGvZ8JZFbSGZc96oPR6gNTkDdx/33/XSJb5+u4e7u//haHCQs6Hvo42skBqib2jHxdXxZXLv/GDRkPP2zvw9cmW4s7OUbym2Yy7z6M4PX4v7k8/zBPe0TNllyztY+KRtmiNeHpq5Zf2ZCJKZbJ0NcQrcjbkTVxdI4hYl8jejBwyd+aRkbaXJHUym9ZF8dzKpKmylUr1wPKlU4ISYptWeMRLLF6snvFeXNhDynelp+UpV4qXu7BP5YztyUWcWHUXDY8souWdWzuXZbeGqYX+D6LsE09XDm52oDzMASHRCVu0Eyf9nBde5jGx81qdjpKJf6VJq6U+Kor6mBhMSUmUGA9OzhXmLRN3tv7DI6jTfNhmyCGyqIXYVG9id+/ivT1tk3OFecvCnk+htXeQ93UrMJ0qx3LmGzKyvKk9nkudvkw62f/kCnOWPegejzHTyLkP1lJZf5TVH50mMz+STTHLUJe3kVDZyYD+Fb5szMbrsdT5ybSBOoYOqDlRuprB7mxO91wmpciAfv8OajsG6bZW8dlhP35s3Ea7Vjrtc5e5u8Vjacjj5JESmqve4HBROA3mCgpq6jFVamipDqa1MY+zbSW87KOfn2wyjg7RhARsJy9rOz2tRiqLc/H3y5qeJyyI7A4R/gY0WQPRQlD/bgAAAABJRU5ErkJggg==",
    "kz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAChklEQVR4Xr1WO2hTYRTO4Ojo6Ojg6Ojg4ODg4Ojg6OAoWKFI8IHGgNYQa0OtVkjbmKYPW5tWEawYaa1CqVKs+EJ6/0fuLSh06KCgIPKZ74RE73/TW4Xa4UvuzT3n/875zuMmccKDOa8CFMwosuolavf/CybBj1v6AfJmCkVdcg02E3WynJ5D0QxhwIy7BpuJOllaLYuMOf3MNYjgtFpFt54RJW7qaXSoN2j3vkXsWqBOltGvQMTV7JT6IgQTNidkDPCanke/ncA9m4n1DZExo0f2rGTXwkiIiqaEPlOuET3Fsr8f34PtWA12Ybbahsv6HfK6LAG7vhGyTr2AMXujFvmkayCgVGXTJTL/DLYBK4kQlL8PF42HIVOQwFz/EBkloP7rScFu7VXTMP7eCFEDlLhgR0Ve1z9ExjkjUasGOal+oEdX5Dmlc0kaeGgv1Lp5LE7KOhkPG7F59Ou7rgGS3lpz4Ff8PRGSBjijBAOnX0oZt0vjyWhMeVgzPiNcEuJzsBspbTFpO+WbPk9suwQaIVtPRv7+0T8gMrL4V9ULiX4t2NkkeusfQlp7mLJZ9JgK5uxxfA12YKF61D0vvkH4GyVcqh6WLuP1sB5ARi0h5VmcqQ34FfVaMkorDxWbFIUeV5OYrx7DOe9TlKzZ+jrc+iS7pD4ImB1lyepFlPRtDOpBybRLP0e3msGsbZM6ccOwtrT/86wmWdxQ8xk7jITj9rpcs5YEIx+2fSIt7xkcVeCosItbkm20rriWWDPWkOC6um86cMf0Ng9lUIvVI5KZ6x8i+5dFTJthk5dMeTD9SMwZixno32TyitF/94qhXMyGO5Gd+N4/KM1A6TbY/nWyLX15btXfgl/vYcMXBAIVYgAAAABJRU5ErkJggg==",
    "la": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAtElEQVR4XmN4ySD0n16YAV2AlnjUMqpgBgbbS/9JwQZJt/67F98H0+hyBDGGAA4s4X/t/+nr3/4jAxAfJI6uFifGEMCCRXyu/b/+8AeKRTAAEgfJo+vBijEEsOD6eS/Q7UAB6d1PMPRgxRgCWPD+c1/QzUcBq/d/wNCDFWMIYMEgw/ABkGPQ9WDFGAJYMCiY8AFQMKPrwYoxBLBguiYQEKZb0kfGFGVq9CKFlnjUMqpguloGANz3rw2MRn6JAAAAAElFTkSuQmCC",
    "lb": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABXklEQVR4XmP4z8Dwn16YAV2AlnjUMqpgIEkauP7q+v+AxQH/H394jC5FEJBk2e+/v/8bTDL4z1DJ8F+gUeD/hKMTwGLEApIsK9lW8l9vot5/hS6F/xJtEv9lOmT+n35yGl0ZTkCUZSDXgyzyWuD1X71P/b9Kj8p/m5k2YEtzNuX8//zzM7oWrIAoy0CGgQxX7lH+z1LNAvYRKChFWkT+a/Vr/W/Y00BUcBJl2YqLK/77LPT5r96rDrYEZhkIy3fK/8/YkPH/++/v6NowAEHLbr+5DU59IINBwQayCJQ4YJaCgtRimsX/OafnoGvFAAQt23Jjy3+dCTrgBOEy1wXuI45ajv81u2rADnGY7fB//9396FoxAEHLQMEDC6LD9w+D4wxkGU89D0rQvf/+Hs7GBQhaBgPnn53/37Kv5f+eO3v+r7m85n/Mypj/U45PISphwACdiyssgrTCo5ZRBQMAW3zQvcjWX8oAAAAASUVORK5CYII=",
    "lc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABoElEQVR4Xr2VPUvDUBSGL5hJHDJEcOgf0N/QWbo4iIMiSCcpSBZpEDcdCi5KxcWlQ9WlizRQqAXBRQdRqcZagm2lflA7KEqJ0KHDa+8tBZubjxtBA0+G+55znuGeELJ4jXoX/AN1Ql8OgSdLBn8mwO9kp+/8mQDBZZtVsGfd5DMfgssuPoB0Oo2TNz7zIZhsuQSY91VIkoSnRhNqsLsLJjtsAJqmgRCCRCKBg2e+xoNgskarDUVRmCwUCuHR6nA1HojLtmtAJpNhoj66rmOjwte6IC67+gTC4fCALBKJsIWx17ogJovfAcZtiQkUmSC7RTAy3BOWyiZbHHuPA2IyuhiqqkIaIjjeJUCxJ6QyujA0t/c4ICajiyHLMpJaT9RnLUbYOc3tPQ74y3YegFQqhejUoKjP7CRhOa2z9waWGS1gYWYc7XNeRLHOCOanJ1idvTeQbKW7GMWLAl6OeMlPaE7rVsv8DGFZ7rWDan6MG+5ELT+KQtPzI3eXxW6Ar0qUG+qFZc55/evcZarRwX4xh2Q2KczepY64YXGzfGV/QP0b/P5xvXCg244AAAAASUVORK5CYII=",
    "li": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA80lEQVR4XmNg0K6/D8T/6YDvM4AJTAkwZtcrxRCjAOOxTKP8v4mdLTUtxLSMWyXov5Wzw39bJ8v/2rrK/01srP87ulr+F9YKRNdMKsa0zMbZ7v/FLTb/mwvk/0f4iv1PC5f8f3On5X93LzN0zaRiTMsc3Sz/N+TI/Y/0Fvtfl63wPwpIlyTJ/I+NNEHXTCrGtCw42v//iZUG/2/uMPm/b6He/wd7Tf+fWm3wPzneCl0zqRjTMhbduv+qhnb/RaWV//OLSP4XkpD/L6dh8p9LKxVdM6kY0zIaYjpbdk5Q7T4Q/6cDHrWMKnjUMqrgUcuogu8DAJGU5DEw5UOAAAAAAElFTkSuQmCC",
    "lk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB/klEQVR4XmP4v53hPhD/pwO+zwAiIsq1/yskWUJwvOX//+kMCNzK8P9kM8f/LVl8/2cbq5CMF7rK/D+cL4iwzCHP8D9DmCMc/49mQOA6hv9XOjj/rwyU+N+hK/+/V0GTJDzPUxJsIdGWPZrIhWEIKRjkw6FhWa6M3P8cCeKDlCLLNhdx/E+Tlvnfr6z2f3E87//tBTz/C214/68rYv9/qJHt/xxTJepZtqeG/f/SaIH/Xzcw/H++jOH/CyBeWsDyf24i1/9+H/7/zQEc/2f7C+OwLJs0y65NYP0/J1jw//5m5v+vVzL8vzuP4X9XKOf/ib78/yts+f9vyOb+X28mhsOyJOItK5OX/39pAsv/Njn1/4uSuf6/XM7w/91qhv+3ZjD/vz2V5f/DOcz/361k/N8XwEu5ZSWqMv/XFLP8r7Hj//9/GwN6KQHHh2o5cVhGQjCWSyv/n5fG/v/TGsb/b1ZCDP69meH/13WM/x/MZ/r/ewtEDBSn2C0jIYFUKyj+P9XJ+n9WsMD/Tm/e/9+AiWRhmBBYbmGEwP8nCxj//9jI8H95FESMIstAuFFVEUxPcBH9/2YFMHFYSYD5rRYSQN8x/r88keX/gmAqWQbD9QaS/5tMIBaBMIidpi30vwVoaZGiLHUtIxYPXsuoWsUQqjzPtlGx8vyPJVPSAN8HAL1LdUOfe1U+AAAAAElFTkSuQmCC",
    "lr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABJElEQVR4XmOQkSn/zcCQ9h8fPmlg9v8MAwPFmAHdMg6ObAzLTjh5/7+koEAxxrCsv38PhoX799/8Tw0AtkxEpOi/g0PPf2fnvv+fP//4X16+FszX0KgDW3a4a+7/NwsWUIzhPouPn///9evPYBf8/v33/+TJ+/4LCBTQLs5AwXX//huwhQoKlfBgPFLR8f9ZQwPFGG4ZKCiLi1f/Z2HJ+G9h0fE/OHgGbeIMOTFgw8dC4v/fdHCgGBNlGdXi7MGDN49B8YQPf37w6P/P+/cpxgw/Hjx4jC5IK8xwUUbmN7p3aYUZ7gYEfEGPSFphBmCKvI+eRGkFGJ53dLxFz3y0wvSNszdLlrxELzBphekbZ+d5eP6eYWH5Tw/McIaZ+R962NIKAwDJk4Dt6DKBdQAAAABJRU5ErkJggg==",
    "ls": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA00lEQVR4Xu3TIQqEQBiG4T97BsFNNsHogsk9gMKUTd5BrHoGQdgkuGyTzUavYPAEHsI44Vsc2DIg+iMW8YWPQWbgSZJ5/0q6vXH0lHNhe3dyDMAIRlJKJEmiTmYjG2vbFnEcq5MZHyvLEo7joCgK/WotPlbXNQzDQFVV+tVaPGyaJti2DSKCZVnqm9F2rO97RFGkoP+CIMAwDPrTpbZjaZoiDEO4rgvf9+F5HoQQyPNcf7rUdmyu6zpkWabgGWmahvMLjGR+npJeDxw95VzY3p0b+wFgX2lvQ5MM0wAAAABJRU5ErkJggg==",
    "lt": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAaUlEQVR4XmN4vIbx1//NDP9pjUH2MIxaRike5pZNm8n8Zv5s5v+0xiB7GBiKOa4C8X864KujllEDD2fL8gyZX1dpMv+nNc4H2sOwVIDxx34Ghv+0xiB7Ri2jGNPfsuX8jF/RJWiBQfYAAGf1IW+1Hu+JAAAAAElFTkSuQmCC",
    "lu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAZUlEQVR4XmN4q2l5H4j/0wHfZwARWCRogUctowqms2WfSxtefqls/k9rDLKH4e+Ll7//0wGA7BnGlj3++psuloHsGcaWRR9+9TL+yKv/tMYgexgYFt67D8T/6YDvj1pGDTyMLQMAUYMqrOnoV5IAAAAASUVORK5CYII=",
    "lv": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAPUlEQVR4XmPYamP2e7Wy7H9aY5A9DKOWUYpHLaMKpr9l////v/+fPuD+qGXUAPfpm0BGLaMUj1pGFUx3ywDiku9tbNpbHwAAAABJRU5ErkJggg==",
    "ly": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAjElEQVR4Xu3SsQkEIRQEUAMDQ+EMzK8FOxCuAUNLMjS/ZizGMmbXDW9wuUB/tMITGT8MiKqrF6So32Cnp2wJda6xSaFgJwpuee+Rc4Zzju7+QMFUSgm1VlhrYYy5shACzd2gYKq1dhWNs9YaMUb03lFKodkJCqZEy0SfcRD7IAtQsM/7+4GUp2wJ0bIDmhpCN+tZI30AAAAASUVORK5CYII=",
    "ma": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAi0lEQVR4XmM4qK57H4j/0wHfZwARWCRogUctowoetQwVd5vrYYgRgcmzTCLaGEOMCEyaZXGuBv89fQz/q4QbgmkQH10NHkyaZTu0dP87+Bv+r7fWB9MgProaPJg0y0AY5BtQMJLoKxAm3bJEoCXrdfTANLocAUy6Zfs0UGkSMOmWUYBHLaMKHsaWAQCIhFjrNJxoQAAAAABJRU5ErkJggg==",
    "mc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAO0lEQVR4XmP4ImFw/7OEwX9aY5A9DKOWUYpHLaMKHrWMKhhs2f///+//pw8YtYwqYNQyqoBRy6gC7gMATQiIY9zjQFAAAAAASUVORK5CYII=",
    "md": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACUklEQVR4Xu3UT0iTcRzH8d8wMxuLp3Vxaegq1y5Kz4JJ9MdYUFmkkbkMskTMJY01NnCRfzYvTSUpc7TIQUsGaxI6EcxqNcPBjMCFYVGzjRbRrW5dgj49e4KFP8cei52iw/vw8MDndXi+PISwrjgXMoUYESwmZ4SKk/9YsvgsV4gbfiZaAr2ayiIWGlLi+7scTPsI/MY8+O2VmBsT89C31yKM9m7FQIGYHqcTxtRVHfC278Kb8ULEwwTz47noa2ER8kh5LOhm+Pee3ZvocTphrFZ7gR8LDhXj60uCLy/E0B0pReCOhMecXdJfWLWCHqdbORYxyRDbLsWUQoL5Q2KMbVuHaDmDQN36LGE7nCnsg5lBnOUOgiGIBLlD2cylIVg8nZ/CppUSGlghtqcHpL4ax06eT2GRDdw3qiUIHyWYqePQkt/Y9ZoiTOzNeCQZsGT7zGB1lfyYr68GPW2X4burBkDwYELOPzvaT/HvB88UYHHLMuAPME03KuoPwmYrg/uqARf1rTC0WnCuWQF79xXoGudgNZl5zNVQRI/TCWCq26hoOoAuSxkWJmVo0zehudGIW04ZOixGDNhO8Ffpsarg1srpcToBjOtww1loOzci0Z+L54Z8PBlWwm7WY+RaOYItUnweEaHfXJyFa+SqOm7Co848zKoIEsE1eOgoxQ09C6+VRfS+BB/3c9+vNwcuTQk9TieMrVXfBKIETy8RvA2sgn+QwbBlJyYdhUjMrMYnI8HCPYLHy8fphLFk9B8+7GXw4/3Sn3Gacbq/w9KVZpzuH8Z+AkH2fIwxNV+NAAAAAElFTkSuQmCC",
    "me": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB70lEQVR4XtWV3ytkYRjHlVas7MxOXAzmwmKZH41mzOyQCyskbVJyo70gaVtKDZrkd5tkSY0UsbXutnDhUtEqdd7zA2WJe3/Kd5/nVbs6p5Fzatr24nuenh/f99M57/t2cu4Om+5vD5uQbTEnhx+q9xVEbn7WxOv/HzCl1GWpPSXHMK3Th9PPIajt5ZZeJj0bprqLoIZL/uTKmB/6dBBi3P93hvo8Z/bah7X5oKcCUIpd0AmkfqyE1lsho56sfahTn+fMXtswfbQGF5sxiOYyCFrw124cIliCq+9xmXOd+zxn9tqHzYRwuRXHzX4jRIUHp0sJHC81yMg517nPc2avbZgxHcL5RhQ3e434ORzG6NggNua70TU8IXOuc9+YClq89mB5BVCTfpyvR3GxHYPxLYHZVB8OvrRgZ+6DzLnOfdFcavXbgvFguw/qQDW01QhE+h3Wpt5jMdWB1clWKJRzXe2vgsh/afHah9GxVrwuKGV06ubCOFmPIb3cIKO+EKa6G0dDdTiqyXzvng2Tw5/eQhuphZaiOzYexPWPBMUA5Sw/ztIE76m0+BzBFALJPSl3w1iJ0KejA/E1InPhocv8xmPxOIbxQVGKCuW+aMkAjHS9jE/tk3PYY70ooDd5/RDNvQxyDnOgfwcz/8KzIeb8BrpwWX4zE+2OAAAAAElFTkSuQmCC",
    "mf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "mg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAQ0lEQVR4XmP4/////f+EgLEkNfB9hv+jllGORy3D0EgOHrUMQyM5mDjLGM5oUAOPWoahkRw8ahmGRnLwqGUYGsnB9wHM0MNgN0tZqAAAAABJRU5ErkJggg==",
    "mh": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACvklEQVR4XrWUaU9TURCG+V8kLvGDhkQTEw0KFNCiBGhARIiNCyJIcIGAIkQUKaWCVLBABVSESCmylKVQlaXorWwBIhJAVJD42hm4l/aWNiXiJG9OenrOPDN3Zk5AYIhOCAwpw//UEeVDPM1LXA7wBQtOrPHY26lUSdn4UKFA/5OI3x6wPQodr4djq6BKf82r676/2hdWige31Bh/HszygO2PKGenMWmvcPWuCQUVfbzS74NRlfy/3Ol2Oh5dCNPjsxKI1GO8syrBCELKKGxnSEvXF7T3TfJa2TiES7mtUjBy565SqzMxqg+VIGN18RgeGsbc/Ip7ZsrLDSjS92NiZgmira//gWNqkQOIv9HkFXYgvISaYCsbQwj622rx89ca+5l1hQVF6zn6pncCA+RG++ezmvmcHKSIy0dvWaQE+tiQgYnJObf7Euyoqpqb4Z6uBybLuNsh0Wif/r+Y/RbHEgxS/bLSrkGoOskQoVaJwd5u+VUO3thiX/TIjGq0ndG+a2ZBpx/BWKCSsrE2a7CwuOJ2hyD1rWObI6QT3GoWqX7B0VONXC9QDamWVDM6F5uYA1t5OENGjMmw24UtgtNW19a5qcSx2ZAMRp+GWp0cv2z7jE7rFEemMQxudqMWBVkbs+MwhKPX3MSOfUO8wEjinJHz7JJuJN9ugSLFiNAEDUyaOAYNNOZgeuabBFleWUVx1YAXiA+YKBpiAlGNLqTc5Nmx18Rg0GrzgNBZ+X1P+YCRTpzToywnibOxNOvx3emcbH7hB39q/yB+wEJj89FZqoSt7go+OaYlSK7W4vez5S4vsPTU6xitjoKlw8zd+G8QUTLYoVPFqL0fj676Qsx+XeKWp7fS2xO1M7nAziTkwlyhhu396C5DRDlhe8O0jrzMVJjfGGEbmeE5212IKCfsmbZoydQxxG+e54HdlE74C6dThSVfq1+9AAAAAElFTkSuQmCC",
    "mk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABpklEQVR4Xr2WvUoDQRSFL2onWFjoO4hgIYqClVj7FHYWFj6BYGGeQLCwEkG0sPMBrAQRMRpBo4sWSUCDPwliDDjul+u4k9ldXEG2OLnMPXfO2bk7MxsJZqXaPhVjKornDTHFPjFnEsfFQFQHGPs1gPno2Dr08ZGQDEpDYho7EVlfiwtYtI60huhzFsy3Wuiij0/HzD5NbVnM570WPazERcDLpvJEnwPMg0cHPadLkZnF7YwuO82wtqQc0eesEfPR8fi4GXDb6hsGc5onJhk5bfORbAbctlYXo3xpUEWJNgef0DYf6WYWtq2VBR0Xe8WUJzQyJp/SNh+/mwHa8rot5no0jFvRKq5GNJ/SNh+BvB9K6+1AzNO6CtzNh6JjYs77u4sRrheiLd05IgXNu3XMYz466KGLPj7ycSxtV8AF7Wnu6bkpT4YrCrp5xuThqXMvBx/4ZDa7mY7zoDz+B7OsbbwcDsXOuwWa+5rP3EZenFucBDbA46q+n8bu95Oe6Jh85g3CTwLxg9jW7wlbOqWR8b9s/dwOdW7XVS4XcW6fmNw+nnn+LfgCSD6UGAftMw4AAAAASUVORK5CYII=",
    "ml": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAQklEQVR4Xu3NoQ0AMAwDQe8/QpfLKGmxLSVGRQZH/4GDenrSbcCqkNlK4ywzg8ZZZgaNs8wMGmeZGTTOMjNonP2dXfX6m01cDtV0AAAAAElFTkSuQmCC",
    "mm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABTUlEQVR4Xu2PP0vDQBiH72PoN+goRCgddHFy6OIiOnRykX4PsS7iYAeHfoJCaQSnggkdHHSqim5ngxBa1FKaQQrJa3+HKdxdmlyKLuILDy/3/ns4Ft0xHt0y+nVmHvYvk7gv6LUslpVRcKPVMllK9rhGCGStlwZkDWelfXG92jXl4bXhQYas9tKAh1m2xddti0zxAuESWe2lAc9CWblTpuZLky49e47rO0IUh+u7Uh/z2FNvZcrAvrNHfMIlwaLAHObVG8YysHm1Qa1+Szo8DafSG33Mqbu5ZTEnvZokiKPWO9Zmk8glqz+dqx4RqKuzSQhZ/bDYPqsWu1l8DPoBjkdhGA295zEy3qirs0nAw4aFEp9Babxv7YhfhP6ARpWqqCHjjUBf3UmAG8kmR6f02XHprbQt1fFGHX11JwEz2Wj3QKvl6X9jJvsh/rDsC99aZvunjfC9AAAAAElFTkSuQmCC",
    "mn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABD0lEQVR4XmM4oq5/H4j/48OMgdMJYnQ9WPB9BhCBRQIFoxuMDaPrwYJHkmUXA1X+H9XUo49lL2YI/D9tp0F7y47q6f6/GqP4/5iuLu0tuxym9P/neab/twulaW/Z7QKZ//frJP7fr5aknWUnzbT/30iV+3/KRvP/gxqJ/5f8Vf5fClP+f85djfqWgVIgKPhAFjzpFf5/M0Pu/5ulvP/vQX2IbjA2jMVwdIxqGcgn15Lk/5911vj/ejEfbS27DgzKt6t5gJaI/3/cJUJby07baf5/3C76/0q40v8XswVoaxkokdzOk/5/p0Sa9nF21kUdXIJciVaknWVYJFAwusHYMLoeLHjUMkzD0TG6Hiz4PgCk+ljoyNrLwQAAAABJRU5ErkJggg==",
    "mo": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABbklEQVR4XmNgqIi7D8T/6YDvM4AJTAla4FHLEFi+OfT/kk16YBpdjgAm3rLCBXb/tduD/nNUx/zPnW8PpkF8kDi6WhyYOMtYKmP/i9RHQthVif9NpzSAaRAfJA6SR9eDBRO2TL0tCOwTEJujJvn/9BN7/9949QxMg/ggcZA8SB26XjRM2DKQq2EuN5hY8//+u9f/b795AaZBfHQ1eDBhy0DYYlrj//hVs/47zGr7//rLp//33r4C0yA+SBwkj64HCyZsmc2Mlv+///4BY5BvkH0GwjA5kDp0vSRbJtNe8H/15VNgA2Fg3ZUzcDZIHCQPUoeul2TLQBgUXMFLJv1ffuH4//VXz/zP2rAQTIP4IHGQPLoeLJiwZSLN2f+Lty7/X797HRj7L5oADjIQDRMDyYPUoesl2TIQBhmUvXHR//lnDoFx2/5NcDZInAiLQJg4y2BYobPof/SK6eBgBNEgProaPJg0yyjEo5ZRBd8HAB5sM2fKPTNVAAAAAElFTkSuQmCC",
    "mp": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADP0lEQVR4Xr2UX0xbVRzHG12c2YMSExONWZao8cHogzHR6NsSE5+MWbYF3AhQGsqfsUE7OqCz2GaUQG9bS+loBy2z7HILBWmhW0Ohg24sqIQ0c8uiJuqLDz74ZybEF41+bO8icnd2N3zQm3xyk+85v+/3nnvO7xgMljz/G4LwAB4/KrOnaUHQd4Qg3IOXTo1R7Roi3Wfmqvt9HO8c5KK1lXzEhRQfpqJhDMPxrFAnIAjb2GVZpN51mY+tRr6WjGwWfKzmImTzC1idx7i9JLHuMbFcGus6p2BozQgeOwp71LZMRLrGZGMjG+fNTM3KtISTvNjg55kqJ88ZPVQ6wyRTsdKK60l1HcQoRQWfHYUNxMcJNh6gmDiNLTiqai9YLuD1eDkbOovH46OiNqTq9f2l1fqMJN0Oqt2Lgtd9w56yTPNZ5jx9R16lNTi5pT95IkkgECQzn6HJ4dXsU3VviLaa/UxP3fkrd3vqhtk/nOHL4fcIjTgxGMc1Yx/4wpSf2i6Ptq4th9lax4zdw4GBnOCpG3bGvUah421sUxs8XBvlUM8oneEZukMTrKysqGGZbE7Vyhz2zat1DuUi8c63kMZ1WkMQSrgH18h7Bzki3VnVnuYE/bOfqiHbn9//+JNT8iq7Tl5W59lGPmKsy0pyeknw1A1rl2SGvBEO9f2zX+Vj3ROd04RVDmkPQ93oFQIxH7aOOcFTN+z1pnqCk72EL61r9NjcMpubmxSLRfVtj2kbuT+eweSowjm8Knjqhj1tSXBiwMhPP3zLs+2Kqu02K9y49QXKhILf6yedSrP4SRGDSVbHX+mZR4n6yRRmefOkTnMLQpmWNNaAwq8/F5Gzq+yui7KvY4bG3nNqn/1NjZTksWOT6nW1vHGLBWUQ14V/2WdlypsuZwv8dnuNxNWbvHwmT1VLtybsDXMfz7fHWf/qO6YDVuSFa1uH5Z4IwjYq7AWiqVm+/3yMX378huY2myassrmTtUK6dHMYGYwlqDBFBY8dh5Upf6lducL1nB97t10T1tDaxKWJXt4dSKlNfXetgCDo8IQpQo3NvRV02uHitaMdGA77hLm6CMJ9eMiyxN62BHuPyzxSMyKMPxBB+A/5C82j/tWeF8aQAAAAAElFTkSuQmCC",
    "mq": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "mr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABMElEQVR4XmNgSDK+D8T/6YDvM4AJTAlaYMKWMSYZYYhhw0SoI2wZNmxaroEhRgTGb5lghj6GGAif28iFIYZPPRTjt0y7WBuFn94p///tXpb//48wAGlmIF8Or3o0jN8ynwYVDLHVSwT//zrMCKbR5bCpR8L4LWubJoEhVjtZ6j9HiiGYRpfDph4J47ds3VLB/zxphhji2DBIHUg9ujgSxm9Z/0yx/1Nmi2KIY8MgdSD16OJIGL9lGkXa/78fZPpf0ifznyXZCEMehEHiIHmQOpB6dHkkjN8yEC4GGgRKfcfXc/8PaFD+L5OrCxYH0SA+SBwkD1KHrhcNE7YM5HKQQSCXgwwFYXQ2SB6Xz0myDIZBQQSKk8Nref4/380KpkF8AkGHjIm3jAp41DKq4GFsGQDrb3eXCxJISgAAAABJRU5ErkJggg==",
    "ms": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADF0lEQVR4XrWUfyyUcRzHv2suFmvEuJVi0UbNxvRHNZcrFvIjhlyYH+nqVAqPkbnF/Ch2Us1lVuaOMq2TKf7oWPRH/NGKmUSsnkqpkevHIpvyzvdpjjtk2vnj9Tx7Pt/v3q/v9/N8n4f0iqJ//+zrQ23tE1hZpYKQ4xz29plg4+LwlBAoFO3aOiUqqAT90bH4IJXCe2+hztg/YEm6+MbYgOgIPhUXY+TjF4SGli8ps7XNQPN5OQYDAjDe1YXGxm6dBS4DS+iFhrRkXuJCJnp6oFI9g5tbvo5MIirFQEwchnNyoBn9hthYhX7YcrAkI+PuWHb2fVDuVbXhfWERpkZHMTk5pZV9HfuOEbmc201v7zCKih5w8ym0A4sELwZLngeGTL8UCrEY3Xw+J9Ovzydy5wra2GW7eZoG/i8Jron6oUvBksFy5a/PSiUWo9/DgwvUr88ncE+2fuhSsMTOLnOI9t3LqwSdnW/xva0Nr0UiqBVq7Tvr6HgFjWYcmro6DEbHID/tJveuKCYmp/RDl4IlPF7iG4ZRYXxUg3fJyXhx4jQO+ZUsOPrm5sncnX6T9NQ+PleoPRwSVQtcZde1bDuZrvMceEcNR0fpEGlt7Z/42tSEAV9fKBk5zMySuAB92ewK/f1LMTSk4U7nYPhh7HZOR5i6C6T6IYj0KojAB+s2boGV63aQ+FSubl/f/ldWnVT8oyk8ccGfgH6sDfGZaPE4iISEKp0xukuZTI0aWR0EDmfmZDMYl9XDyTcAwfFeML5Qpivjermwvytivsy6ogHWAiFc4jxAsopWV0Zx8vREZII/SOnt1ZU5pDIzMgHIgc0geTLDy0JUj7hQl8t58MmVgO/uCOK1CYRhuPrWW82wsWHeGUR2lknDFT87yKMskCe0xLF9PPDcLBG+az1qBCbIjxbQeaxBZEERBajcb8EFV4bxUCHmYY27FXbvMOVqTGoanccaREZJnglUCv/upCBgLSL3bEBZsDOyxMHg8w0sMzISIyIyC7lJEbjma4uLR71xOkUKU1PJ7BzWYLI5ouDsnAJj41j9MfYP9AnuU8JiADEAAAAASUVORK5CYII=",
    "mt": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA50lEQVR4Xu3SvwsBYRwG8PtnDRR/gSyYSBe95/3BdboruSRGEgNZFIvF5IoyGih1pUf3DtI7kLyx3FPP8n2GT3e9BoAdPszJ96crw8CH3Rn4Nxb0yxCkAFbNITys1Fkvtu1k4TgOOOcIg5k668WWbg6WZYExhuOiq87fY5teHkORwKiZRKVSkphpmnAdKu9R92OqB/NrGfnrokaQ53nyywghj/uMp/RgQysBUS+gQYuglMK2bYlxzuQ96rqV1oM9Z+CWJSiEwKRD1Fkv9tPX+FMsPAa4zNuyt+tZnfVi7xJjMfYyMaZid7By2t6CzDvrAAAAAElFTkSuQmCC",
    "mu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAVklEQVR4Xu3UoREAQQhD0fRfwjb3S+FAH5KgEC/MbETcKiRSLEAVTeFwYyNQXv7vFtzYBHbH8pBiAapoCgdU0RQOqKIpHFBFUzggvYyXv5bfjY3YHfsAr0WAOyCLXf0AAAAASUVORK5CYII=",
    "mv": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAhUlEQVR4XmO4JGB8/5KAyX/aY+P7DKOWUY4Hg2VSBVb/GerIxyD96GaSbZlAm9t/14X5/1UnhmPIUdWy+HXN/w8+uPBfoS8YLsZcb0N9y3SmxPz//PMbikXYMFUsq94z8//hhxcxxNHx0LOMrsEIwnRLIDBMt6RPDCbJMtrgUcuogulsGQBNGzUpNuezeQAAAABJRU5ErkJggg==",
    "mw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABQUlEQVR4Xu2RP0sDQRTE998lt4mg4ImFIFgoImIhKMSYRgQLS4sURgsFBQshhYUBCysbO7+NX8YPYGHAdCmeM3cpwnHxDsI1IcWw8Jid385btWb0UCkleaprJfBKu2qlFRg5q1jZslpchjdLMacI7AKAbs3JM/RaD+QytPLonbwvBPGc4PSdtHJhbPOEsDsEsxGbsN2qSc49Z2IwH0EP/emMQrAQFx980oaQRa1lB+GcsRHD1zGn7yBI5jehm7jWf2GnWA1b7QPAgBes72fFy++YviMfr5ONGgByxfSns3JhH3j9NVZUQ1AzsPK5VJ2oXWskwlqv4L/12f8Xc+697XdgGtd5xcgRXnoyOovoGGqN/LyfziRHDZbDr0EUSukCZw6bXrMN67U3+93OtpQtclSjdzjceGtK2SJnDptasw37AyeEldfruBfcAAAAAElFTkSuQmCC",
    "mx": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA8ElEQVR4XmNgyHC/D8T/8WFiwDlBNUL4PsOoZYQAFsPR8ahlhAEWw9ExaZbdv3fm/8Ud8/8vKAv6Xxdu+//5vRu0s+zy2fX/r2xv/j+nOOJ/uafW/644F9pY9uLl3f93r+39v6gv8H9Hmvv/SaUp/3vyY/+/e/ec+pbdvXvs/4ztW//P7XL+31MV/L8uPeD/3u1r/9+4cZD6lr15ffv/+r0r/qd0dP6Prsn8H9XT8X/V3rX/Xz67RH3LQODmxRX/V/UX/F9Qlft/8bSm/48fHIPLYTEcHZNmGT6AxXB0PGoZYYDFcHQ8ahlhgMVwdHwfAGVROX5QISG6AAAAAElFTkSuQmCC",
    "my": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABv0lEQVR4XmMQZ4j6zciQ9p8cbMLg8/8MAyOx+D6DrGD2X3RDiMU2GiX/38yfTxR+NWXKBwZ5icJ/yAYk+Dj83z9T6n9zptF/VdmI/6zMKWBxTrZkDMvsLVr+/7x/nyj89eTJ7wzIwViTZPr/8Tbu/4pSkWA+yCJRgbj/jsY+/0OcXP8bqgXDLQdhkoNRTjQP7DNB3oT/v08y/Y/xdIIbBjIY5oDPh1j/d+fr/ZcUjoHL2xnU/P+0fz9R+P369V/gltka+P0HWv9fViwabpipVuD/3dOkweIgfHml0H8XM2+470i2DBaMoPgBGQiyAGYZKNg298uBfQySO71IFBykZAcjcgI5PEfi/+pOJbhhoKC11A34P7lM+//sGo3/HpZeKMFIcgJBTvqgIDw+X+z//Hq1/7rKIeAUKMgbD5YDJRperkS4RSBMctJHz9Sg+AAFJSgLgIIRWQ4dkx6MMqUo+YwU7OjQ859Y8PPx498Mk2wSPvTYJP0nBy90Tfx/Pz6BKHwvOuYlwyV5xceXFBT/0xwD7WEAeQ/dy7QA4GC8YWf/7KaD439aY5A99LWMrsFI1wQCSpLoyZQWGJz06RmMAHMGL3g3N0QhAAAAAElFTkSuQmCC",
    "mz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABaUlEQVR4Xr3UQShDcRwH8F9Ebja0TDm6WWmsiOwoLrRwmVg5KDnphXJUXKQlTd5ByYVWHLVirXbbTdxXprTctrQ0+fr9zbPt/f8Hen8On/q////33rff//3fo9NBKnTuEsj8Bzk3lRlG1hSLuokwEKHcQFgPKQp0ssIsl30EV1RRqIM9TMi2EwY2FcVOqcKEUhNhaU5xgxOvbe4XexAaq+PnoUA+mbxIJzKJlFOUI0VnAdZdGT+yO9bLyKnasBKbZuYEYd9POPqaF4pswX7zb32H8dadjxGiES/CUz6sRvpxu90FzNR3fcha7A/5qdrOshw4PuyDYRiIx+OILU/Wby9pDNtjO6EenG2N4ul6FslF/+c7E2t6t9Eyz5qZi4Urc9oOyHtHq3z0a7wFffni/UG6+HCccorgURx9QXS3wTL6qMO87EQudkoOC7IbuVCHapj4Ra3IBTpVwjx8YcqLuvFXTAVcyQt/4QO53jac7fU4GgAAAABJRU5ErkJggg==",
    "na": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACO0lEQVR4Xq2UwUuTYRzH38OCEevm0YMH/4AdIpRGGoFEvLRDK7wEIiOGjArcofBQUAdhEgmzFjV1613O5qG1MYjEkRSl4dLUmrbNSe+ro3cxlqeI+NYzWGzv73mnLg+fy/s87/fzfnmf3yMc6w3gILl27xUKOQXr3d14Kwg1CNrN1bTbx8gzPcT+KbxekqFKEt43NRFRXZlr6CrGQmfxQDoHx63rZL0atzSHUmYDKVEkgl1lLHx0woqZ6aOIRDvw7HknrP13yL4LAxEsZ1TkPR7Mm0wkXAtXdj9ggxQ+A2wLZbx/27GmlfV2+2M8jCyhtLyCFYuFhPJYaG7+xZWxZiP+8/j59RCKmSPwT4joco6U13pvx5HOqVAGBzFnNJJQHhtOJzaVRZkrO9Xnhe+JFb6gFf6nIm4MO3D6yihCLz/jx0ISH81mEsgj2dKCUiKBcMqDDunwb66MwU4i+0+WSz64huNQZBU5lwvvDAYSyoO1kfOr6HvRiTa/UEZXxui6PInYm3T56z60tpJAHtVtTgZN/0R1ZQPeWRTkPLIOBwnUg9emrqwynMVYjJ0gEsiD7SvOTCP06S5poytjw7mjbGPNZiOBeqR7epDdnIc93kbCtZRlleH8Nj6ue9VoYW2+RyMIrg7hhGQkwTwEz1SyuPMlvetVU81+2tTIttzuwl6uGkYjbWpk2kA9Gm2zL9n/ttmzjLVJZWdxMWomLzYCV8ZOpBqexKPFmzgeMJCXGoXI2IytrScOrE01fwDGk3WkaX4cCAAAAABJRU5ErkJggg==",
    "nc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "ne": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAv0lEQVR4XmN4mKb470EQ239aY5A9DKOWUYqHuWWP5uT8fTM55T+tMcgehiffXvz+TyT49/3z/0/bpv9/Uevy/+3MnP9/P75GV4ITgOwh3rI/v/8/KzZFCZqXbQHoqnACkiz7ce0IRjyA8O+XD9CVYgUkWQYyFN0iEAY5ghhAkmUgAAo2ZItAwQoKXmIAyZaBEgQoYYASCCihgBIMsQBsWcrZspfpZ6v+0xqD7GHg3aB9H4j/0wHfH7WMGngYWwYAqdSKueuw/pIAAAAASUVORK5CYII=",
    "nf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABgklEQVR4XmOQbGK4D8T/ceEdNzec/08EAKlD14uG7zOMWoYMXrx+gS5EG8vu37//v25xKbIQGNDEsvNXzv43j9H/f+DMHmRh6lt27NTR/4k94f+1EuT+ly3IQbaL+pbNXzv7v3qc9H+tOLn/rlWW/6/fu0oby27fvv2/c2XTf6UI0f/intz/TQs1/sdODPz/+/dv6lt299Gd/6ET3P/LZfP9V0uU+K9ZI/pftZH//8odS6lvGSgV5sxO+G9XavBfIV3gv1qx8H+nUtP/l65dpL5l6zat+Z/ZkfhfrpgLjI2z1P6bFqv971vQ9f/x48fUtWz19hX/LXK1/wuFMv8XDWf7r5Qo/N+4ROV/w8zK/zfv3KCeZcfOH/5vUa/xXx4YXyBf6RXI/ZcsZv6vWyb7P7LZ///+U3uoZ9nnz5//7zyx9X/Hhrr/kb0+/9VLRf437S75v/ncmv9LNiwEp1SqWQZOAUjAudnk//fv31HEaGZZ9HTf/xdunUMRo5ll2MDItgwAXCzRpaOAcBgAAAAASUVORK5CYII=",
    "ng": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAUUlEQVR4Xu3NsQ2AQBADwSuEOqiCJj+nQ4JHn45OQETklTa0t45zu/ZR88kvuNHVqcTecKOJ+dviRhPzt8WNJuZvixtNzN8WN5qYvy1u9PfYDeiPa1RsAMRfAAAAAElFTkSuQmCC",
    "ni": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAxklEQVR4XmNgSD92H4j/0wHfZwATmBK0wKOWUQXT2bLoebdexi+4/Z/WGGQPw+N3P3//JxL8+fkejL+8PfP/17fnYDaxAGQP0Zb9+/f7/+8fr///+f35/7MH18E02HIgTQwgybKfXx+D6an7TP4vXhjz/9pHiK9APiQGkGQZCIB8seGsy/+NZ73/LzgUSLSvQIB0y9DiCJ2PD5BsGSjOvn+6DaZ/fLkPpokFYMvomvTBmQ0zA9IC07kEAROYErTAo5ZRBd8HAFYEz1Q683DqAAAAAElFTkSuQmCC",
    "nl": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAaElEQVR4XmPYbmL/a52Mxn9aY5A9DKOWUYqHuWXnKxvfnCms/E9rDLKH4f///1f/0wdcHbWMGmA4W1Y/de/rws6t/2mN66fsec3gmDD7h6Jb939aY5A9o5ZRjOlvmV3crK/oErTAIHsALNiP0cvkEpwAAAAASUVORK5CYII=",
    "no": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAm0lEQVR4XmN4r617H4j/Y8Nfq6r/33/y5j+DRgYYL1h//P/P9Rsw1BGJ7zOACCwSYDxqGZF41DIqWfatr//t96nT/mPDv/bsxbDsz/XrGOqIwSB7GI7sPf1n/8mb/3Hh5VtPwy2r6F2PIU8sBtnDIG9f/g9mGC0x2B66WkbXYKRrAgElSSzJFIypnvRBBBYJMB61jEg8ahl1LAMAwLQh5Muq1c0AAAAASUVORK5CYII=",
    "np": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABz0lEQVR4XmNIc6n5enjj8f90APcZMrXiftaw6//Pcq78//r1Z3QF1AT3GXK1Y3+eY2D4v4+B43+ypP//yQ0r/v/+/RddITUAwjIYXsQs+T/OJP//0YPX0RVTCjAtA+HTDEz/GyQc/udHT6Rm0GK3DIZBQZtumP5/Wt82agQtxLLLMjL/LwoI/H+3fPn/L8eP/7/l4PD/kogI3NKlYjr/kzya/x8/fhfdAFIAxLKrKipgi2Dg8+HD/5+Wl2MEbYtR1P+izPnkBi0iGB/n5///8/49GD+rrwf7FD1YQfggv/j/bPfa/zNmHCA1aDHj7CwP3/9Qdqf/UXzu/7MEHHFiX8Wk/0XZC/+/f/8V3VBcANMyEN4vJv/f17n9//PnH9A1UAJQLTvPwgIOPhBNAwsRloFS4Nv58/9/3r8fHGeg1EhlCyGWXdPQACd5GPj3+/f/R+np1A5SiGU3LSz+/379GkXm1eTJ4OCkooUQy64oKPz/dv48XBTks4fJydRONIg4u+Pu/v/D+vX/v54+/f9Fe/t/UKlC5VSKmRpBCQMWfNgwyEI/ty5yLMSezwjhQyq6//08eki18D5Dvl3ht1yFwP+k4gSd1P8ZaQtJKbLuAwAINe6Zsl1imQAAAABJRU5ErkJggg==",
    "nr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA4klEQVR4XmNgUCz4TzeMIUBLjCFAS4whQEuMIUBLjCFAS4whQEuMIUBLjCFAS3x/geR/emGclj1YrIAhRinGGowaLm3//dPm/BfQr/xv4teLIU82RuawqBT9twjq/989a9//81ef/L9889n/6ILF/3XcOzE1koPRBUCW/f7z9z8MXL/z8r+IUTWmRnIwMgdkaHnnZhTLbj94/T88dyGmRnIwukB+07r/2w9cB1v4/cfv/9OXHP1vEzoJUyM5GEMAiJPLV/zPrlvz3z1+Bhijy5ONMQSgmGrxhIwxBGiJMQRoiAF10q7XMeyZGwAAAABJRU5ErkJggg==",
    "nu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAC6ElEQVR4Xu2UX0jTURTHr+GDNULrJaFBksON0BolYg/FMggFIQkiw6BFoJKGQkJSPkgmvlTOB8nUcLSJGv1ZhA/JdLlVJlRLJ8n6FRMlTZkbNnXqsm87l6bbfpv0ED1EP/jy41y+53x+9/7OuUzIyVlwGwygx2B4D6WyBowViqRWa/HNZMIbxtZEsUp1Q+Ql0bql7g5GMzO55s0dYGZt98ynvDzYZDI4tVr88Pmg1b6CTFYVFTaSsikqjGJzvQ52lQoflErQRgRhGhVlfp9MdnWFdtNV/xhCbu4adMW7zKGJiRUhsHeSGMxqN8MaHxMCiwahvNjYYiTtPA0mlV72Bb6KoB3X9TwhAF30LEKjMaKy8lHEY6yqMmwICdTmsP5++6TJZAeJ/hntxmodx4LVCldnJzwWC/+f9FDxBywBl1gaf1P83e3m7/mBAe5xuxeg17/mdYLV3KgDG83I8A4nJSFYNvmukDig5u1p/q8sQknhEf6+vW2vyMPzk8X5L7MPgg1Jpb7go3kby+BsiltrgmDlSo6irWkfvM4E6FrTcDw+S+ShPMqnOsHr/QdkYhhpaEcMb4Tw9YtMibMFxzio6HwWLrD9Ig/lUX74OoctjY1NLDsc+B0JLTrkSw5hKzuHk5LDPA73RJNj8FloN8bFlaC8vAtTU3NY9XgwWV2Nj9nZcD55CotFiNiNNtsX+HyrvFHIP6JQYLT2JspK23m9kG4kGLUoterEhAurXi+mNRoMS6UYLy3FwzYTUlOr+RxFGmrK89fg4+H1rmBJEOBQq3n+YE0DzhS0rsOKi/VzNBd0c9BckYnMPfo+pKfXhtwMgaF26deHmmABD10A4VDa6fNrjcg/cQXMPxoOgtAQ07Vlae8RXUHBsPBjDIZtBH15KgestyX1s7Epec54N2W2u0XhaqtLQSR13JIv92nlM9z7SxTfb5AvhnuDc4z3FNO9uj1fzfrdbjb5YosXdv8G/4L+w/6I/l3YT44cXcbDQrmeAAAAAElFTkSuQmCC",
    "nz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB20lEQVR4XmNYGV7+/f6T9//9M5b+Z1CpheP6ifv+nxHR/v+sayqKOAiHJ837fyWzCkMcL1auvc/QVzz341W3yP8X1Gz+bz9467+Kcz9Oy0By++um/QeB7z9+YxqID4MsAxEwQ0AWgixunnoAjGGWcWg3/p9UvQhsAQggO4poDLJs0/LDXw9uOv4fhK8cOP///cHj/99v2P7/68WrYMseVXeAxX4+evL/052H/y8fvABWC8J+sbMxDQViaetuDDGwZed1nf+BDCUHdwRiWlRVs+r/lZDU/zYRaA4BWXZq8rJfN6Yt+w/DN4H40fzV/1/NXwU28E5c3v/Xy9b/fzxnBVgOWW1KPGbisQ+a+n9H3cz/HFqNmJaBCagAKEWCUuY5aaP/L7fsgccZSAwEQCkQlBLRLcCHxS06US0DRTYo0mEJBJQY0BMIiA9LIKDEhJxAlJ2wJxaQRZfi8v9HJs2GWFbTt+ctLOkjG4Ir6YMcBQIgPSAxt4gZ/6/4xv13icSeWBoql/7X8piEGYzIWMCo9b+ZVcN/bZt2DDlkDPLVkqqZOH0Hx/gsozoetYxUDE4Q6OK0sGxG9cL/l11C/4elouVHWliWlbvo/8mSLnBqRpGjhWU48ahlVMFAewCHBv3w+yilbwAAAABJRU5ErkJggg==",
    "om": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAy0lEQVR4XmN4r6v5/72uxn8Q/cnLFUzD8PdpU/5TEzCADP1gY/H/U0r8/0/ZGf8/+bj//xwfRzvLPnm7//+xbMn/Lw21/7/19f7/6O9LO8u+VJb9/1xc+P9Lcf7/z6lJ/78tXPD/o60VbSz7YGHy/0tW+v/PsZH/P6cl/3+vr0M7n33v6vz/wcoMnjC+dLT9f2+sTxvLcOHPSfFgC6mF8VpGbTxqGVXwCLVsWpDGf5tyNaphvJZVxKv/Z5igSj2MbsGoZWRhdAuGjWUARHNi8DvMOzMAAAAASUVORK5CYII=",
    "pa": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABKklEQVR4XtWSu2oCQRSGp7TwASwstrTcWnwECx/Bx7Cw2MrKB9h0W1gIsRAEm0CmURQsRcgFMoKFkM1FXXRCNvHXWVjRQdSRQyAf/HA458AHM4cBEDAkaDQwtiyzpNMhwxWyhefhmTHjnJRx/qq3Ishlk8kKtn2ntyPIZNOpRKHQRSrVAmO3sKw2SqUhwnC92yGTKaT8iSRKViwO9DGtzPe/kMtxeN4Y+XxHH9PL4mfbr2NIZee4WuY4ow/1Lya5qfQjoUnmruuzbPZeqkMwybGjuQDxf2XfQuA3CPR2DK3ML5cxr9X0dgyNLGg28ZLJ4DGRwFMyCWHbWHJ+sAMqmWJRr+Nhe94qq15PHyvoZG+Og9n2xN+rVXy6rj5W0MnWUh6t96CTXcDfyjYby+ew8Df8cAAAAABJRU5ErkJggg==",
    "pe": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABR0lEQVR4Xu2PzysEUQDH90/wF7hI+Q9cJaVsbTlI4YQsG+FEnNReJLvrworD5lekmGnZ/GiaIrPImi1SszPtHBQZWgdvqS2+9l3UPq/dUXPYtN/6vMN7ffr0XFpVjZkHxbAz1uFguujBeSjAzliHQyVWeqzDocxjBnnAjjqP5Gl/wT3rcLAfe8w+wXp/xmr6BC+pNWwKbkxcL8AklsOxr08Mxf0IxGfQvjwHRerD3U0QAWUK01eLzsboj5qjbTjWRMi7vUjEWnEherCtrcBz5HU29pbLomW/E2FpErdLDdAj9UiHmzAa60ZjtAevOfLL4WAvRjd4Povxw2EYYjV0oQ5GsBYbsh9j+XtHf0ZnfWQwIvuwt9WBVMQNdb0LPmkAakZ3PkZH7i+RkEM4O/BCUEIgZvLnjXU4/C1WbKzDoRIrPdbh8I9j32DYc0GrG5K3AAAAAElFTkSuQmCC",
    "pf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABlUlEQVR4Xu2UXSuDYRzGn4/gI/gmSk6IrU1L0ybLIuFkI6TJS1tbS5G3NRYhLWaTZRsx0XZgSMKoYZqtZ4WD2YvMy2V7Du+e6T4YR351nfz7X/fvfnrqZu5KS/BXYcjBb+ZfVpQwAMKg5DMZxwd7hpDdjqejTXyln3LDd3KtEGE6We7At8AM0jYFHqfq8cAwSIxVILUswevOALldCDpZ9mqDE4WMAkTNXUBOxuplCBoqkVoQIHvpICt80Mnyt09ZpfC3NiBmaudkUX0LDtvkCE6KkPH0kBU+6GQZVyfSK3JsSYTYmNLAplZjTdOM6yYZJ8t/HcW/o5OllsRIzpbDW1sH1ZAFBrMbvToL7GIJN0/OV5EVPuhktp1bzKxfYVvUAJdQCe3EOkZqFHCVVWPOeQ3r9g1Z4YNO5vRFIFB7oNLtQtqxCHG3G8p+B7TTfjQO7uHglCUrfNDJ8kTiSYxazzFkOcFwLs36ffSZAvAexxB/zpDrfNDL8tzGEpyw3ejD+OoF7tkXcuUnwn/7XJGD38y/rCj5BpczBXnJ6oRwAAAAAElFTkSuQmCC",
    "pg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABpUlEQVR4XrXTMUjDQBQG4AeCU4SCWDoU7JhJMjnHKTh1qCiITl3FCoIOXXR20MGxkElFcHSrICjYQR1czHiLNJPgXuH8X9vEXO4SU7CFjyTvLv3J35S2iC4HRKEkklMmCJ/7BaKvD6JXw4ZiLJg3zFViGAaSdYgecTIwbMy2CDfgGtZUQgljHlEwUa1r8AJ7NAouG/aMCC2MFap1BlZgk0ZhD+PjCWUFCmNYJLdWGw7GAWn8tOn9eWGWZQ2Pq0Rv30R95UZ+Ga4NIewOzrWg7DAO6na7stVqDa/LRJ99ouf4RgdO4Qx24Gkc9Aj7cAGzBcNYu92W9XpdmfnYK021bsAxdGAZrmC7QJht2/F5JKqUGWuN8Nt4COuwq60LJazZbMowDGW1WlWCer2edF03nmm1Ji3BEcxpa2pYrVaTnufFXxrhoEqlos39rFrNhBJmYqo1KbdWlfgzjJ82PUvLrfWXwF5zWPJ3K8rPr1Vgjx5WKpVkEATx/2wSObUKrOthrNFoSMdxtHkRGbUKrJnD/oOv1iowm14YS9QqcD3dMMa1vhPd/gB6jU9c7Mw0hAAAAABJRU5ErkJggg==",
    "ph": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB8ElEQVR4XrWVPWgTYRjHb+jQsR0sGRy61A/ErYi0pYM4KIUODgbBRQfdVOjgEoljaTelDhYcKtjWGPCLUqJIsVixik0IfpA2PWs4zUeTpuZCrrn3ff8ml+uFPJxnkqYP/Dh473n+P96XlzvpxaKiDlx9DenkzH4jS7FEXgcvYDqwgYPDz2lDK5ElJZ7S+c9rENsBFHYYvJNhtA/6aGMrqOxMqB8APY3dKq3B7VmizXvFPMZ/1GIwhd5LATrULA4yoRkPnQlMPovCNfSUDjeKvUwUvkEotyxhubZyRdycCKGtf5aG1EutTKSnwDcfAEUFPDkBsCx4fAxCXbKkq7Echkbe0qB6IDsrS1L3wNfPg33pAZMvgm89AbhqtezWq+U4jrjnaKATVZnIfzSCheIFC3VZiMw0eOYRsLNRNWkRcMUDXS/gri+CjtN+GmyHLBWV303LRDGP5P2HCHX34nPnof9RlRnVwDH+WXiHryfO0EAnamU1FyRhf0G06A+sua/QoHogOzPL7uqz7DaU2+NYOXCUhtSLvcwoUyR0hs2pxwgf7qPDjeIgK1Xu/Sd8P3WODjVLRUY/xKU1yJdv0Oa9UpZFdR67bvxiuKbh1+gdBF3HaWMrMI+x9PPM+F8ifGyQNrQSWcrOv1EjZy/QF/uB/BcYtl1EVdT9cgAAAABJRU5ErkJggg==",
    "pk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABC0lEQVR4XmP4jwPwRHJTHTOgWwID6AqpgUctowomyTKROOH/yplKGOLEYqIts6qw/L/k4GIUMfk0ObDl4oliGOqxYaIsA/no6qOrYAuRxYO7gv8/efvkf/r0NAyDsWGiLAvvCf///df3/wIx/HAxENun1RvsiLw5eRgGY8NEWTZl25T/v//8BvsQ3QD1bDUMMVyYKMs613WAxUA+QTeAFEyUZaBgBAFQkGHzHbGYKMtA+NTtk2BxEG1UbIgiFz8p7r90shSGHnRMtGVaeVr/z949C5e/++Lu/2M3jv1/+OrB/4B2fwz12DDRloEwKAUmT0n6P2f3bHCeq1pSSZSPyLKMUjxqGVUwXS0DAL5Pc3UDgY6/AAAAAElFTkSuQmCC",
    "pl": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAP0lEQVR4XmP4/////f/0AfcZQAS6KI3AqGVUAaOWUQUMZ8se6AX+viNi85/WGGTPqGUU41HLqIJHLaMKBtkDAFS/fqmeuTNOAAAAAElFTkSuQmCC",
    "pm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "pn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADJElEQVR4Xq2Ta0iTURjHXw3DokIrxWT5Ojenpi03b/NCE9fGvOvIG27qnOa85EITynJRTaLATKpPSWKEgVlUoi7SIhT1Q6EISVioFdQXKz+kBmX/dt5h6tRcuQN/Duec5zy/c87zP9RYggrTHd0gbeb1W9xo6oWTsBYUt2aFng2O45VAhqHd/kxPxpYxRGS/4WIHJs43YIQjwrjqKOZGx0AtTFoDXQ+2FmR+7jue95lglkF/g64FWw9Ci+vMB1rrZKtBe19MLoORsVWQBZHTWYokmXw3hbnJD5gdGcWPqS8M9Nf8/DIYSfpt8KUZMDPLrH+dnsXA0PsVOZlXIJv+RcNufAZGesu19USRjbaSPsgLN91o3OH6wLiTt2L9v29m9PDBg0w/DKiEzPxjoQQVMglKZFLUxyainR+NkUAprgQKMRgsMd/M8l0Xavbx0zR+mupAGqkZqR2pEdlEYP0hYvQYz0B9QYHRp93ob7mNvGwFjhWp0NLaweS539mP2quZyNbnmGtm6UbiOuI+0ogbiSuJ24jrlrqxM0oM3aUqpNYkQKIV4WFzPRrTZCiLcYe+/CATn6nVQF0cg63cnEXrrwdZ7Z+1RUZBkO8NljwIe8M1KNTpoC0oQOPl08gr4MC4PxifB4Toe+SG0oo4M8wayIKWwkh/rbkVm1kh2OIpwwGZAJocFeoMZ2HQixGZysWJXBa65Lw/+ShrIGvB2p8Mwz2sHPzDbOzLpRGRmgL/FCF8FQLwFdFQVMhxq6kOb5SlzKenKE7NhGVSa+UcKoYzHQHvdDYCy2iwkjNAJ2XAUXcPHlnZ8IgUwdHfVC/OKTCcjcCcQuUIMD0TnRQMXqEAd7t60NB0HQ7aNmxLrkSIMgCbOEfM8RuFufKV0Fe7w1MqgYsqF+rj7sg/6QpWYRq2S1Wg47zgJj0Eil25cRiROF4CB78S8CsEiFG7QFbkCn4JG47BudgRFL8YawuYk68SPqI4hGf5ILHEFfEmmCidh118New5usVYW8AoryqcM0TAnq1BrOnfJWh4sKfVMBjCsCekeDHOJrAlsvMsgx23esU8IxPnN6aKqh8m+vk3AAAAAElFTkSuQmCC",
    "pr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABhklEQVR4XmNwt1jxZauwxf+3DAw0xwxS7ld/MwR8+B9mPPP/ZU4pDAXUxHDLQJjb5+n/avWS/8+YOTAUUgOjWAbDcm6X/i+Q8sNQTClmkE96/w/dMhh2qPny//LDP/+pBfBaBsIswR/+Z0z/9v/9l3/oekkGBC2DYYHoj/+nbPv5/zcFHsVqWXTf1/8yyZ8wLARhnbzP//dc/I1uDlEAawJZffTX/+yZ3zAsQsZe5kv/n+FWwkgE+DDcMlDctK/9geKSz9///fdv+4phEQyz+774X6xZ/f8RCzeGwdgwhs/y53yHW2ZS8hnDAnTLyjUqiM6XGJZN3/Hz/+IDv/4fvvYbHHfoFsBwkMlckkscjATiXPcFTIOCFZTP0C0B+RbkEHIAhmW4sEjcx/9zdtMg6SNjkA9LFnynfab2aPzy//qTv+h6yAYYCQSEFV3P/V8t5owRwZRiFMv4vR/+b1LJ+f+SkQVDITUw2DIW/zf/Yw0n/b/OIY6hgJqYwc9s4ee9AoYYErTAAC90bOTAgFhQAAAAAElFTkSuQmCC",
    "ps": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAmElEQVR4Xs3ToQ2AMBBA0ToGwJHACnST7kEYoYswAyHpDgxQV43H4o8zh6CEAO1duOSfuIqnqpRSIFh04MucD5zhBo+JoLiBYkdxHxjFhuKOMGoty20yJlhr5xzdYkdaAzgHqfMMy4S+wxLRH2MfEZpnWCJCc4stVbHZvgnt2M45usR8jZ+6w6chcyIIJYJQIggVHTiLDozt/0AWHxt8OJ4AAAAASUVORK5CYII=",
    "pt": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABlElEQVR4Xu2UzSvDcRzH34cdkB085emiNE5TalKEaZGEdmAZeZ4hD3FQTFGT1JK1RCg1eZgtpRxIS8nDwcE/IBot5ea8Um9fcvv2+22ldtAOr9OnXq/D9/P5AnaEBIyGxoYwAf6BEBKxfxjrBgs7wLZxRFwG8C1XksSKeiy9H7ROgo0Cix0RRym40gwemyVRLCjHkkRocxvcsGbzQJdJb5OWPn06D81aLrcX0+uQZNFQjhnqQacTvCgu4NXICDc8RzzfC/DGaOROXRk9o+C7LFRDOTYxA/ZOgIs1aXQPDdMffObZ3Std1iK6zTqui/m2URKqoRyziXdq7gG3DAX0T80xEHxi8D5Mn6mC7qYSrk+BnipJqIZyrLwL7J4H1/qquW/N4uXpA0+WFnnbpWVrQyq9YnYjC9VQjqWYwOk5sLoxhXudJXzMz2Ok1sgtm55jg6BrFvyQhWoox77JaAEHF0RQrPrAePKns0FDXx+4K9b/RZZFQz32gwXUiaO2iKNerQSvcyRJrMQQ+yU+31UiFp1QXGNfiq3Fq9B5vTkAAAAASUVORK5CYII=",
    "pw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABDUlEQVR4XmPwWnvtP70wA7oALfEItix4/Zn/kw82/D941uv/pYtm//ed8f3fsa/3f8D68xhqCWG8llXtmvf/3U2R///vMWDgB9dU/6dt3YKhBx/GaVnm1o3/v93hwrAEGb++Kf4/etMhDL24ME7LzlywwTAcG95wIg5DLy6M1bKIDUcxDMWFQcGMrh8XxmpZ0Y7lGIbiw8QmFqyWpWzZgWEgLvzzDjuGflwYq2Ug/OKGNIbB2PDJCw4YenFhnJb1HmjDMBgd/7nH/L90xxIMvbgwTstAeO2JRAwLkC0CZXZ0PfgwXstAuH73dHDJgWzJsXPO4ESErpYQJmgZMo7btB9DjBRMkmWU4lHLqIIB7kvsnU1zFXAAAAAASUVORK5CYII=",
    "py": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA+klEQVR4XmO4qi13H4j/0wHfZwARWCRogUctowqms2X3Ivw23g3yOExrDLKH4f////f/kwBev379//Dhw/8PHDiALkUI3CfJsgsXLvwXFBX5L6el/N/b3/f/sWPH0JXgA8RbBvLNtGnT/rNI8v7Py/T875kR9n/Lli3/379/j64UFyDesuvXr//v7e39zyLD99/CWeG/Vbzn/3nz5v1//vw5ulJcgHjLvn///v/EiRP/QyPD/yuZaP3vndj//9y5c2BxIgHxloEAyBdr164FB+njx49JCUIQuM9QMe3ixpqZlw/TGoPsYWCwWHEfiP/TAd8ftYwaeBhbBgC47GKFU7RF3wAAAABJRU5ErkJggg==",
    "qa": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA7ElEQVR4XmP49OzV7/84wIuL1/+fnLLk/6qQvP8TlZz/90rbUoLvM+Cz7PePn/8fHTv3/1DrjP/z7aPRNZOKcVv29/ef/1dWbvu/Pq7s/yQ1N3SN5GDclsHAry/f/t/efuj/IrckdM2kYtyWgYLw0rLN/2eZBKFrIhfjtgwZPDx0+v8Sz1R0zaRi3JaB4uziog3UsASGcVsGA+/vPwFbStM4AwFQwthd3v1/rnUEukZyMH7Lvrx6+//a2p3/txe0/p9h4I+umVQ8iCyjazCCAF0SyIAkfRCgeaYekOKKLgUx3asYulWeIEDtZgEAQLxmWPM1IrwAAAAASUVORK5CYII=",
    "re": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "ro": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAT0lEQVR4Xu3NsRWAMBDD0BshKzAC+2a2ZJRALftxHZWL30pV99yv8+Wsaq1rdHZl1jFxykzjZOKUmcbJxCkzjZOJU2YaJxOnzDROJk7/zh63sbM1ruUi+AAAAABJRU5ErkJggg==",
    "rs": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACJklEQVR4Xt2S7UsTARzH9wf0j4QWvcnF5sNQFFOi3ENaGWKiprVe9OImOZaG5TLk7Fav3FLEMGtt03Q11HmXm7XRA4nlRHwZ9FJ64ZuCT+rLu52cEr3oCx+O+/H98uHgTMtFxfwrTOpDPpasFs3tMOwrSxVZSVXXELpcybs6x967unMQdGVKUy2J204SdiszYg2LZ08y7asn3nle0zWKrix1vZx0dxHzDWbS/SdYtp9iwWMm0W7TdI2iLyu1sthXyPuhAlal46TFo8S8hSQrzJquUUw9ljrUDFRdYtR+hchNF1HhDFHPOWI7z1ce597dX+bSbIxgOmITUFNW38vqVTeR6lIUSSDsvsG02EWsyowiilhL2zUbI+jKsm8VZHGI9R4vmx8/kRsaJNN3j7WVL5RXtmo2RsgrK64TWEnOs5JOEWpsZM5/n5mOThJTUaZGQpyudWs2Rsgr2/2yzUyG77lvBBwOZqQA4ZY2Xr98QTYRx1bRptkYQV+mJNmQZUKCh/j4OLP9fuSJCTayy1hKWjQbI+jKPo+O8XVH8rS5mbmHAWKt7aSfjLAWiRz+Bxl/8wE1z+JZJi80oNztIP5IIhyQWBgeRh5089zpIhyRNRsjmNDJrMeFVF9A0Oelq0tg9IGfx45jhK9Vq6uGoyv7kcsx0VTC2J1bDPh8BLq7CV608HN9XV01HF3Zbn5vb7MUDDLp6yU1HOLX1pa6cqDsK/vb+X9lfwCHFrTETN2x+wAAAABJRU5ErkJggg==",
    "ru": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAYklEQVR4XmP4/////f/0AfcZQAS6KI3AqGVUAXS2bMnO+y8XbL33n9YYZA+DjP+G3wyWy/7TGoPtGbWMUjzMLWuySvjbahD4n9YYZA/DPgP9f1e15f7TGoPsGbWMYjy8LQMAdNKYfXrr0wcAAAAASUVORK5CYII=",
    "rw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA00lEQVR4XmOQWXbkH8PCe/9pjcH2DGnLhBafBWOxJSdRxKlqGcvC2/9llx7677xq7v+ote1gGtlCqlrGvuj6f6MVa/+v3mb5f+MOk/8ztvj+11++ES5PVcs4Ft74b7Nyyf/ZWzz/39/L9n/aFj8wH+QIkDxVLQMFI8hnMWtb/hdtKPifsLbxv8LS/XB5qloGwyrLdv9XXrYHbBH3oitwcZpYBvIhCKOL08QyXBhsz+NjHL9/XWL8T2sMsmfUMoox/S1TSLC9D8T/6YDvj1pGDUxfywDpJAQ8pdjRUgAAAABJRU5ErkJggg==",
    "sa": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABuklEQVR4Xu2USyhEURjHZ2FhaUlRFoosPLOwIg2SRzQZlFeeEWNCBjNezQiNR6JYGENkpmQM8mgYjyHj/cxMlEeUnZ39372nFPfSmTSUWPy65351vt/5zv2+K/DQCPBTCLiB7+QPyry0Lu+eLN4jrvAdc4PfuBtZc/fQ+FQWNxMGra0fih0JYo2hKDKLUbVZALm1HK37MuivhhFtDEbXUQsipvyhueiD1JKLvJUUXi6qrHg1DY/PD1AfNiJ3OQmBOnekLkSh77QNvSetaN6tQsehAqo9GSNIhu5Sg6bdStRby3i5qLIQvScRGa4nMHc7ifwVEYzXOkRNB2DgTI0Igz9G7QOkGslGNmq3S2C80aN6q5CXiyoLmHBHwlw4qaTQnEqup2GnAsv3s7A9naLnWAmFVcLEpChZy0DddimUezUYPO/m5aLKskzxaD+Qo8KSg/SlGOYbaYks25QI0UIkhNNBKFvPhHhRSA5UYBYhZT6SVMjNRZV9hbed+xFOldH4fTLa9b1ClYVP+kDFDDHbLC3MbHUeNRHYd7Zh2LXpbhY6+xBvLxeqzBHYX1cgMyrcOBenyBzlX+YUXgB6ee10+iDbKQAAAABJRU5ErkJggg==",
    "sb": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB3ElEQVR4XrWTv0sCcRTAv4ODgzQ1NDg4SEhEXGXgICGuDg2ODhX+AQ0ODo4OBlISzv3ClpaooDWkswxsE7KyVBKz0jT6ofmjXr7TO+w89c704MMdd++9z73v930JIZfxGqBURkGhuAJ8FkKjuW15J52ajKJi4HZnweF4hvHxuz8Bw8PXYDAkIBgsMHe5PCJQRCw1GXaVTlcgHi8zxflBXm8O8LJaH1q+SaMmGxm5AYslxRSTyep/rtPFuSCzOQlabQzm5pICBaTQ2DMWXCab7RHC4S9wubKAS9ya1Cs8GYJdVCo/4PO9CiT0hmF6CziZXp8Atbo+cdgN7qPJdM8F4zLzC4gBJefbE+9wQYCR4Z6EQkWg6U9m4pqDcWA8nhfI56vgdGY6Ho92EuSJJt9cZ5FIiRlvfhJitz9BNFr602k7UHK2SRWaJUseAnJrozP8e0SligqeI/ZAdzrYHSULDVDGT5QCSk43Jous5Jkm1RbJf2V6agcC61MlUZJeZdToHhytzXKdZGhS6SqRKkPJocdQZiXZACmLloiV9UXSTYaSg1VjtWm6vnqWtJPxJUk/KcwvE5AtCiRLhZWhZH/F+MNKUn7y0TcJy8zYbmrgEpbc8VAeJekT8jYwSYNffuH6lw3sk1IAAAAASUVORK5CYII=",
    "sc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACH0lEQVR4Xq2UMWgTYRiGfyXKUU7IEKlgFiEUwSIHWszQIRBcqlAhYIfg1EqHIBQ6iHQI2kEhgQwliW1RwVCEROiQocgNEQcdChZUuCFDKBWkRClSaalHff1+j7R3990lOfCDZzmO5znuvvtFVDwxhVhEv8wkbgMQ/bNPTBJCQASJhZUCDowQF/rRIjQrFDj24fEFLvRjjQgfhwLFJrS7gOkhdSPvyTojgWJKqIi9jVNc7KZNJHkkUKw+e5mL3awTUR4IFBu7eM/aKLfczgIR4nI3PWM7jQEu77BLpLnUj66xauYKD3RoEsNc2A3f2Ej0Af7snOARSY1QuawXvrHt+hkekWs9yyV9EYl4x/Kp6zz0jUh4SLqhqvRN04Cu04OaPDYUeYTDtuv1NYhzHjIvFMUKrK7SFu/DPizWfHHWGcqJ3mstA+PjQKVCG7rrCNjHEXt446a8ZCHXOuUh7hCiAzmZBJaXuwbscxQbVHMwWyflJeAzEfMISEZHgXKZjqa228WHXuPelw1svnmFtZf3j2OfFs7jX6gi+FrH40ChAGxtuXVHc9A08FWvobGSRf5pCreKwxCLwomMTcXvWEdSxhbQNGB+nn7epkNqbraw/baO9WoOpaU0JooawmWFi724pGR//9JPA1cpEIsBc3OAYeDwexs/3uv4+LqAlWfTmCrGMVhWuSAItbGRn8bkNbzLT6P6PIOZUgJDpQi/8T/wFyQM5iWjjGNIAAAAAElFTkSuQmCC",
    "sd": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA+0lEQVR4XmOISWb49JyP4f9/BtpjBplOht8SPQz/92hgSlIbgy1jmMXwn2UGw/8GX4b/v5kwFVELwy2DYZdChv+0ClYMy0CYVsGK1TJaBSuD+CTWr+gWIWPzZu73D220Tv7X1z9MKWaQWSaD1WfIWGKJxP89T/b8pxQQZRkIs8xh+d9wtuH/77+/0c0gGhBtGQy7bHX5//zrc3RziAKD0zK6BSPVEgjXdC68SV96svT73PrckzU1NYcpxQwMODI1AzBTMwAzNQMwUzOAMiRVMDbLgMUVgwa6QmpgdMuABTEDH7oiamGYZTQJNnQMsoxmwYaOgc0C2gUbKgYAqNY2dVJpCUIAAAAASUVORK5CYII=",
    "se": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAaklEQVR4XmNgyFr+HxdetcZi/78zDP9hOLQ7fz+6GpIwhgASHrWMaIwhgIRHLSMaYwggYapbhmwYOv5/hgHFMiA+j66GFDxqGQxTZhlGJCJhqicQDAEkPGoZ0RhDAAmPWkY0xhBAwtS2DAAYcMytflSo3wAAAABJRU5ErkJggg==",
    "sg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA+klEQVR4XmO4z8Dwn16YAZnzgIPj/6vwcDAGsdEVU4rhlj3R0Pj/6/bt/9+2b///WEHh/yMJif+voqP/P2BhwdBELoZb9uv69f9/378HW/JQQACMXycng+VAbHSN5GCwZU8NDP6DwMf+/v+PRETAvoP5COTjT7NnY2gkB4Mte2ZhAbbsfXMz2BIYBsmBfEWtoARbBkoMf54////z8mWw4HNn5//vqqvB4l/Xr///kIcHQyM5GB5nL/39///7/fv/l9Wr/z9WVgYHJ0j8iYoKhiZyMUrSf6qj8/9Ddzc4OKnlG2SMYhmtMQM4ZdAJjFpGFTBqGVXAqGVUAQAQN1GAtpV/tQAAAABJRU5ErkJggg==",
    "sh": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADMklEQVR4Xq2VfyyUcRzHv5VNa7bWZpFwYrhNlEs1nU6JaJwprR+bHyOdH3fuDN2dH5H5VXFY5Ve5UX+kWIxV//inMrayMWPk58N0aTRbWfmj9M730ZE7SZ0/Xt8/vs/neb+e7+f5PHtIv0gx/6WzB42NXbC0VIAQEUt1dRs6dzhg4NaDpb2tW8XIk1ZjJCoR09W1sOUol66tA4aEBt+Zepucg3epufikmYJC8QRGRjF6Mh8vFXpTCjAuTcPch4/Izn7G1q0S+icYQhcTk3iUy2swEibBTF0z+vsn0dExxsrGKh+iKXPhNCFxmG19jZaWPnC5GbpB64Eho09ffqchq0FlmqxCvX0t9jZy3cC1YEi3k+AHDf0fDlnLdAPXgiGDeeXzk9dvYzVoIG2f7r4WJ06SbuBaMITDSZmwsUlBZmYzvs7OYbKwDKNXC9DXPc7KJqoeoadHAzqxY9HJeK6qw/792aD3/POAuLpma1pbh/D5RTt7ioZ0NczNk1dMIw2VyR5jRjON97klGJCkI/JcKRsiFMqQk3MBDQ0+UKt5qCjjo7eXh/Z2N9TXC5GUdA7u7mwHGDLeNfSNjnNPmgoC/o2lJ9EdfQr9Dmtr32BucASj4fFwtk5CTU0QAMLS1GSB4nw/qFS7lvYokZFxizIXq0QN7b1uS0xNE9kBsLfUfy9USttobBS9QkYRixwQGOgMpdJKX7a46PV33fwuGx4mKCsjC+1blm+oLDWrBDcrKlFwV404eSrCY+IQnRCNoycEiJAkoPj+Q0TFFtJaxmCZJOAIrkl5qDxviYiceghOXwbfTwi7vTwEJxShuA3w9M6jtYzBsiAvb9RdIEhLJDh1SYmAUBEuStPB5fHhFyZHZtUr8NzSaC1jsMyTH4LSkIX3EkTg5mkOt+O+CMtQQ5RbjkB/IUplWdi+XUxrGYNlZmZiiM8YIz90Cxx9OHA64IR9/h44ZLsZZ7kEngcPa2sZg2UUH18BcoWbwI+6AgfJPdgpKmArvw0LUSy27ZRq65gNkVFcTsaCE5UHTmklLFT52C1Twv4YO4VamA2TURw9MrBHKgc3qwgmpst//V8wGyr7C8xPKw3wrwqDE6kAAAAASUVORK5CYII=",
    "si": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA+ElEQVR4XmP4T0fAgC5ASzBwlv159/Z/aljPf3vXlv/W3vX/7f1q/3u7d/0/uHgLsjKyAYplv588+i9v0fefw3LOf/2AFjANwtOSGpCVkQ1QLPv76eN/LbOO/wL28//7Fuz4L+66CGzZspIeZGVkA4bFW2/9R8ZhXm3/bzx4///D55//X7z59r+g59j/2TmdKGrIxQywoILh4siO/w+eff5/5/FHMJ6x4tJ/fTNEkFKCMSwzNG3639G35//Ve+/+bzpw/3+wbzeGJnIxhmUgLGPR/z/VvQoYf+0YcpRgrJbRCg9jy0AZll6Y4Z6mxH964VHLqIKHr2UASTqMbqftnJkAAAAASUVORK5CYII=",
    "sj": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAm0lEQVR4XmN4r617H4j/Y8Nfq6r/33/y5j+DRgYYL1h//P/P9Rsw1BGJ7zOACCwSYDxqGZF41DIqWfatr//t96nT/mPDv/bsxbDsz/XrGOqIwSB7GI7sPf1n/8mb/3Hh5VtPwy2r6F2PIU8sBtnDIG9f/g9mGC0x2B66WkbXYKRrAgElSSzJFIypnvRBBBYJMB61jEg8ahl1LAMAwLQh5Muq1c0AAAAASUVORK5CYII=",
    "sk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABnElEQVR4XmN48vLTv/90ACB7GEYtoxQMHsveyajC8deSqv+fQmPgfBCbVAC2bO6a838X77nzHxmfOnMXbOh7df3/nwIj/v+Yv/j/14paMBsk/tHd7//G4w9R9BDCIHsYVD2m/Ob2W/QfGU+auhts6AdT2/+/z57//+fGzf+/T535/2v3Poi4hcN/j6qdKHoIYZA9eC0D+eRLWs7/n6vW/v8+cer/r/UtYIuoalnnpF1gyz4nZf7/PmPO/9/HTkAsnDLj/0cH9/8fbFz+O5ZuwzAQH8ZpWXDT3v/vtYzhCeJb7ySUBPI5OfO/WNgyDAPxYZyWycWs/P8pPu3/HnXH/3cU9P+HOdX97zBL/H9RyeT/OWXz//faJ2MYRgjjtAyEp0za/l/UZ85/ft8FcDEQ28qr/3900y4M9YQw2LJ5ukEvZ+oH/0fH8yyj/69pmv+f3w9hmaLPzP8HuxZgqCUGg+xheCeteh85AyNjUD471zT1v6PfhP/pkX3/H5c1YKghGgPtwWsZDH/yCwUnd3RxkjCxllEFj1pGFQy0BwBh4cUQDanWCAAAAABJRU5ErkJggg==",
    "sl": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAXUlEQVR4XmNgOMtwH4j/0wHfZwATmBK0wKOWUQXT2TKpS1K7RC6KnKc1BtnD8P////v/6QPuj1pGDTCcLauoeLqxpubpYVpjkD0MwFwNytn/6YDvj1pGDXx/+FoGAPk9PihQs9G4AAAAAElFTkSuQmCC",
    "sm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACF0lEQVR4Xu2N30tTYRyHd9FNN9FFE4IgJCgMKgLrKkORGCFFYBFURgVlIP0gMzQqxrQlpLD8hdPW5sk2txa1H8etpjPTOm6ZW50gV9HxwsUCoYv+gCct2MVZ6RGsKx/4vC/vy/fzfXSAwv9B0c0d6t9/xLLsN4qiIMsycqzx171ItMtEUeSutYF3vnbG7McY7G1EejWkHpsP7TJ/xM8H2wE+7V5Bsmo130pX8TnUrR6bD22ynqc9CC8Fwq5iJsPbGfMWIvu3EA1doD7VxkTmvbryJ7TJjtfvxeM5xcjwYboSHxFexxEkickXRbQmmzgZu8L0j4y6pmZhWSqTwtx5hhZHMVYpiiU+g3MijWN8GvdwHQ6pmnMxI9LXN+qqGkW3tv+7Mhv+Fr1rlELbJU7fO0qf5KEzliYop/GMTxEcqKS0v50SXw1bw56crioLy9bYn7PTVMI2434eBSq4HbTQGmzgTqCZ+2IZhoc32NFvYV3gS0530TK9M8HKa0co7yyh+nEtXb4KOiL76HUf4sSDixRFb7FrwER+IJnTXZQsz/6WPG+KgqbL6GsN1AgmOp6YabHX0ew2U+51UTbUxp5Rf3ZevUOzbLNNojKY4GpoHHMojtEZ4Lytm2cDNzlr92L2RrguxqhyDXJQiLLBOpKzQ7NsLgWBNOvFmezbEBlkU2hq9o5m/zaKGfL7UjldVRaWLWGWZUsS5ScaxNz9e4wpMwAAAABJRU5ErkJggg==",
    "sn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAx0lEQVR4XmPgLlK7D8T/8eH//xkI4j0MBPF9hlHLCGEshqPjUctQDT52jxNDDIvh6Jg8yyx75f///stIe8suPmEHi6H7Dovh6Jg4y77/Zvyfv0b8v1aL4n+5WmWwGIgG8aMXSP7/8I0J3WBsmDjLQC4HBVvrTmEUcZADYMGJxXB0TLxlIPzkAwuK+MkHHNQPRpiBM48I/HeZLAuOt4BZ0v+btovQzrL9t7jgwQaiN1/moZ1l+DAWw9HxqGWYhqNjLIaj42FsGQCjk1ioKpg0VAAAAABJRU5ErkJggg==",
    "so": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAzklEQVR4XmNwWPb/P70wA7oALfGoZVTBg9+yCacxxYjBJFuWuPX//2+///93W4kpRwiTbNnSq//BoPEIphwhTNCylO3//2+58///9rsQ/OEHxLKHHxFi627+/x+6AVMvOiZoGQhn7YIYjg2cf/n/f8RGTD3YMFGWgTAojq6+RrVo131Mdfgw0ZY5L0cE4eefEPrGW0x1+DDRllUcgKRCULIHWTz/0v//f/79/x+9GVMtLky0ZS3HMOMGlA2qD2GqxYWJtowaeNQyqmC6WgYAm806p6cnCwAAAAAASUVORK5CYII=",
    "sr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAzElEQVR4XmMwr7O/D8T/6YDvM4AILBK0wMPZspcfX/3+TwcAsoe+lu1Sc/63hUv3Pyl4p4wOhhghDLKHLMvuTFbCECOEybJsn57W/zcnZME0uhw+TLRl24V1/l+tUv7/dIP8/+c75cGWgWgQHyQOkkfXg46JtgyGz8argS2CYRAfXQ0uTLJle1S1USwD8dHV4MIkW3Y+VfX/jRZlcGoE0SA+uhpcmGTL9huiJgp0Pj4MtoyumZquloEKSCyFJi0wnUt9EIFFghaYvpYBAFaoAMTTWq2WAAAAAElFTkSuQmCC",
    "ss": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABXElEQVR4XmPgMqr6wiKo+Z+BgYHW+D4Dr/3s3/zu6/9z6RX/Z+IQRldATYywDIxdV/1nVw7/z8DEiq6QGhjNMijmtZ/zn1XCBl0xpRi7ZTDMbdb2n5lPBV0TuRi/ZWDstuY/p3bWf0Z2AXTNpOL7DFrRO/BbBsVywVv+96+89f/3n3//yQT3GTScF/xDNzihqgzDMhjWcZj1f56S6/9bQlIk4Xu6Jr+xWvb2svD/iNKa/xNmhP43jJmOYSEIu1q2/98lZYhhKC6MYpmw55r/blkd/6fMDvr/5y4nGPdMC8ewBBkLAeMz1bDg/1lRZQzD0fHAWYaMaR6MyJhmCYSuSZ/PbyF+yzzW/udJrP3P3mz9n73TgBKM3zLesIn/Oau90DWRi7FbBhT7z1UUg66YUoxmGTD5c2fk/2dvN0ZXSA2MsIwntuU/R5MdugJqYmCpH935hbPKD12CFvg+AL3s33CX0vXaAAAAAElFTkSuQmCC",
    "st": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABJElEQVR4Xr3VMWvCQBjG8QexUnBxLWTqKKV07CLo5tDNoYtjvkGhX6FDHTKVUhGh7dhOleKgOPoBHNxcHBwcpCgELPo0hxyau0s69HrDf0nuvV8yXIJbH5tsE0TLQf1zbJ8vQSegwL5yoBNQYhI8fjQsstXgbI+JukUw/2BYaKOJF8dEwwuw+g6WP+2G5Sm+VUy0qoDbJUjaKxH7DzAVk+DHmz4om07B0Ui/bioVGx6BQRYs5sHXNhiG8eFOB/R9sF4Hez19c7VUTHSdiRZht7E6vFiAngcWCuB8rt9X+xW7r+yeOglrNKK3D8DZTL+vloqFN/rAX0rEbEMi46F+qekH0kYYn8Sxu6rhM2OrQ+ypZFhgM4k5+cUIzAkkCq6wdgJF/QCoC1c9ql7vBwAAAABJRU5ErkJggg==",
    "sv": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA+klEQVR4XmPgd19/H4j/0wHfZwARWCRogUctowqms2WpnWdeZvSc/U9rDLKH4enrb7//Ewv+fv7//+fj/0/u7v3//9dzIP87ugqcAGQP8Zb9+/2/rS35v1Nk9v+jW1b+d47K/t/fXQhxABGANMt+3PkvZu7/f9Pcvv/zS9P+n9y97r+YhS9Q/C66SqyANMuAwaboGPe/anLo/4Iqm/+uOSH/OQxj/////RpdJVZAmmXA4PIM1P2vYO71X1Qv6r+Gtef/kChjouONNMtA4OeT/76hlv8FJBX/u/iYg4OWWAC2jK5JH5TZsGRAWmA6lyAgAosELfCoZVTB9wFi1HLYETMNBwAAAABJRU5ErkJggg==",
    "sx": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABwklEQVR4XrWS3StDYRzHd+Gv4FJNwj1SbkgKiaTccUHmrUh5Ky+lmNeYhciSku3Ky5mXsdnFkuUkzTKvw1w4hkPC6pgv50wzz5SXnfOrz805z3M+PZ/zyF5OXRSbnMXcRCdAamQAnPB6mYeqBpp8KTY+mW84z+Kq6TYuiSMXiUWgTJjX61taqqxBMmEkyvq9zDeiZ/0iu3RZcb6dir35eBzutAjPxMzqlz0Pj8DeXI/T6lysFKVhvSQbjKLi/XycaFk/ZRMa5FMKFE9OYFJvgGprH3PNHR9nFibkrIKMZS/AqtUo7OhD/6AKOp0OjV29MNa1wWbbDBSGlFWQbWwkg+1WIqe0Aj0DKuza7VDU1GKhsR3WrSKcnc34ZYz7kQ5P1DCyyCH8GV42v5aCe80IWhpa0T81A6NtD519Q9jPK4DD2YSjk2new2n1h6awKDUX9JHfwst2HOPQLssxO5YOVtmFx/JKWEbrcOzKhMmRAY/nicktW6KDNv8VXsa93zi9QQOKioHREgutQQ6zOQJGayWu3O7tf2cj4WX+H/J1Qs9Ggm9kXu+rONlISFlIt+0nAmTiZyPhZZJlIzlw3lGSZSN4A0RjC60qqMAZAAAAAElFTkSuQmCC",
    "sy": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA3klEQVR4XmP4z8BwH4j/0wHfZwARWCRogUctowqmt2UGBqv/a2vvpzkG2gO08v/V//QBV/FatuLOCnQhvOD7n+//N9zfgC4MA9gtu/3x9v+Ugyn/JRZL/K84WfH/86/P6EowwOHnh//7bPf5r7FS43/PxZ7/v//+RleC3TIQaDjT8J9jDsf//U/3o0vhBAE7A/7zzOP5//zrc3QpEMBt2Z4ne/6//v76//GXx9GlcAKQnvuf7oNDBgvAbRkNwFUGPT29tSoqKsdojUH2MADBVSD+TwcMsmfUMorxMLYMAOnOpYSCS6jFAAAAAElFTkSuQmCC",
    "sz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACUklEQVR4Xr2VX2hSURzHL8Wa85pIc5oba652m9seJrGcYi3/dNdGgS7KekkiB3sYI4hohLBIpKekjdYtl7liRVQjLKjYwxAScb0k0YP55IujyL1UENTLt+OFa/7b8MV74MOBH7/f/ZzzO4dzqSH3CsSCKg/UE3FlN25ehlhQSFMQC+qVTIZaCdM0uNZWBE0mPOrowD2pFC+r5G1GTbKQXI4Jkxl7+2zYtr0BsVgM+fFnYwPvZ2YQVioraqpRIbtPVlvMFa0WvQwDhrGDdS1A22VFNBrlZcL4mc1i3mhEsKiO02jwWKfbXBbeRZJ0EizadvB4R3ugVrXA4XDAeNgJdngaBvMYZCQ3Ho8jEokgk8nw8/evWcydHcDdIw144jbjrXcK8clJPFepSmXhtibM9zdiwdBYEE2P9JGP0qAoCh6Phxe6XGdwlB3lY4FAAKFQCKlUip9zuRz+/v6F4LlBcKcG8OaCDc8MEszpaSzpmoplUjgsbgyPeHFLL8fyIEk6cQBS0o5imTDnY36/v0L25fMnrI5b+fqnByUYtxyH/fQdXOrZ91/GKVpwkr2KoWPX8JDcOGHbs3o9lM3NvMBisRRmp9OJZDJZ0saPa2tYtdsLtYsyOcYM53GI9eLi7v2lZ/ZApYWvrbfkQPOEurvBdHbyuxHQk0XkJcL4lk7jndVaUcvROzG1px+zpEMlsq1YVigwQW6bRq3mZTpyyxKJBH6sr+ODz4fXJF5eU42aZAJLpMW3yZW+TnYWbG/Hiyo5WyHuc1X+WNYTcX8x5YF6IqrsH3XIt/yFwkbvAAAAAElFTkSuQmCC",
    "tc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADJElEQVR4Xq2Va0hTYRjHj7lo3Q0jjVbah8IgSIrCD0ULyoKoFGeYflippSGVWMzJMFGIQtdapEJq5Rp2sbRRpqOyOa2hXZw5bHl9g6Y2Q7ObFTn/+b6jVWutC+fD73x43uc8v3P5n/NybdJEfDCbodU2YvbsNHDcHoZUeg6twcFoF4shFitddZEoHXqZEj0xMTBqalz1v4Bw2zbkjrbtPQCbXI4hmx0JCRqPMoEgGVm7C9Eh2Y5XJSWwWHqxenWu+0BvEG788EUoTEH+/gJ0RUXhtU6HhoZOyOWVLllKshaP92fgeWIi3tv6kJ5eweQeBnqDcFcLb44ZL94F5UFFHWzFZzFiseBTD0GrSARrWBje1jdguKoKdnMbGiuNrJdSkFPuPtAbhGsWLcAjjvsvmkJXuQ/0BuEsWyLZo/JEs1AIs5/fL/VvmCRS94HeIFxq6mVHVtZ1ZGffQG2tFR/7X8KuVmPweZ/rnQ0Pj8Dx7h16T5xEjeY266Xn0BB5GPo7CAsITZXV2s9S1hGzA4pd+YiPL3XJwsPVbPjbLsJC0pSaieXLst2H/QnCqdV3HDQQ3RIJ+37od0QX3aNPayEhh2EwtOONXs+Sq4x31uk5wcEZvyUw8JBTViQr/lwdkYDozaqfroTebc2mWFRF72WSH9fi4s6gtMiA/K3On4DdcgqdujAMGNZirHUdw9Ey/s4vrMDQ/TUwG0qcMufhl1v+JwZbZGg5HoTyfWI8Ui2Co8EH/Zpp0Epn4vYRIfRlMtpHeJM9Uy1G/cGdsKliMGr0wUDZFFyI9ceTU5PxsDqH9hFeZC9MqbDrJsGk2AjLyaXQpgkwohegIskPn2t9YdJl0T7Ci6y5WsEeXfcVH0SsnICUSf4w5k3EU/V09F3zxaXTx2gf4UVWkKtkMoo4cipWLJmF6MRpztq9iUjaxVJLeJHR6Dseh+JD3QQszAjAvLQAhJYuYLKPLZGgP3qOLxmlUKmGsXwG5isCMfeICL5Hg9Ctm4N9e1x7IeFNRrl1OQ95Sn+oymbifLEIhXnfN12ObxllZ9z4Ln4vE+HrWSh+hPAu8wL5Cg0y6HnlofcGAAAAAElFTkSuQmCC",
    "td": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAO0lEQVR4Xu3NsQ0AIAzEwBfLMnaKjJHiSY+AHrlwZ+kkzeh8q2qkLR8rZY9+FALbADAwMDAwsFvxL7YA5lBySSx2bb0AAAAASUVORK5CYII=",
    "tf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABUElEQVR4XmOQsV74j0F56n8Yvv/4039k8N4l6P9bTUs4LsxeDVdLIr7PMGrZqGV48HC2zC5y/TOHqA3/icUSFvPRDSEW32cAE5gSJOPtBx+CQwUZL998C1kN5ZZpuC0D0wKGc/4r2C/6v3r7nf/rd937H120GyzGojb9v4rTEpAayiwDGQQyPL50z38e3Vlgw+evuQ72Vffs82D54raj/2evvPqfVX36A4osg1kIwiDD++ddAFtWP/EUOAire0/859CaAcZge8AEFkNIwQY+K/8/fv4Z7KPrd979P37+BZh+/uorLAhBmDqW+adv+++dsuW/e8Lm/99//Pn//uOP/86xG+HiUHXUsQyEQYkDRIOCML/5MIoYFFPHMlCcgZK+Tfg6cEIB8UG+BKVKJHXUsQyEYQkhOHsHOPMjJQwYpp5lMAzKBiAL0cUZaGEZHnwfAE1QRZ5aLc2mAAAAAElFTkSuQmCC",
    "tg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAzElEQVR4XmM4LMTw7wYDw39isVYpw3/BNvIww8iy7LaIyP+nwcEYFlFs2R1Jht/oBj5PTv7/cfFiDItA+Ndxhv//H5OHUSx75Oz8//fz5/9h4N/v3/9f5ufTxjIQvq+jA7fsVXEx7XwGwqAg/Lx+/f/X1dX/P61eTV3LjgmjJhCQz2DsByYm/2+ysKBY5lLP8F9/InkYa2rEhylKjcPXsof7GZ492AuMH2LxVYb/D2+Qhxn+P2G4j55qaIWHsWU6Exh+o0ckrfCoZVTBAJava2Uy1uc2AAAAAElFTkSuQmCC",
    "th": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAf0lEQVR4XmN4JSPz+zkDw39aY5A9DMPXsi8dHW8/NzT8pzUG2cPw////+//pA+7T17KDJ54/23/s2X9aY5A9DDKmy34zSM/6T2sMtmfUMkrxMLesY8qFtw29Z//TGoPsoW+mBhHoojQC9xm+LVny8tuCBf9pjoH20LeKGbaWAQDMtEl0Jq/OrQAAAABJRU5ErkJggg==",
    "tj": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABCUlEQVR4XmM4w8Dwnx74qIfdRwZ0QVrhUcuogsGW3XRw+E8PfCgr5g3Df1LA3+/////5/P/PywUIPpFg59Wdt4m27N+v1/9/3yuBsL9eRuETA4i27O/bLf//fb8P4QB99vfTSYTc6xX///18DufjAkRbBjbs93sw++/n0///POmGByHYEUAHEALEWQbyyaslKEJ/325GcJDjEA8gzjIg+Pflwv9/Px7///tux/8/jzv+/75f/v/P8xlAX90Gi4PikBAg2jIwAAYj2MIvF4FxdgoYnOfAfGKCEARIsuzvx8NgX4GCDI6BfJA4MQBsmUOPw396YOsu63UMDGkM/+mC0xnmj1pGOaa3ZQCRmm0dYfRFYQAAAABJRU5ErkJggg==",
    "tk": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABaUlEQVR4XmNgUK69z6BS+5/mGGTPyLGMRb0eUyE1MDbLootW/zfwnYqpmAgsYVr4v6/V/L+GfSaGHFbLyME8OuX/m2pt/387zfJ/3zJ5DHkwJmSZf8bS/xzajRjiyDg6KeD/o318//9dZABjEB9dDRjDLMtu2PKfR68ZQ4GCfS+GGFzOMvf/rsWKcEtgOD7VD0MtimUSlp2Ykjgwi1r1/+Ii1/+fTrJhWATC5aXOGHpQLMOQwIFBvjm0QhbDAmS8aLIuhj6SLfOPCvv/7hgHhuHoGJRIQKkSXT9RloFS2rRuYwxD8WFQykQ3B6tlwdnL/2u4TQSzDVxS/1/bJoJhGCEMik8TjxTCloEsUrDrBEf0r/NMGAYRi0HZASU4sVnGoVX5v63BGpw5YfjWDqH/9/YIkIyPrZb+39Vk+d/GNwG7ZaB8Aipy6qvscWKQAfMm6GPgWb2GGGpB8eccFIPdMprhUcuogoH2AAAq1+4UhIwBOQAAAABJRU5ErkJggg==",
    "tl": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABcklEQVR4XmOINGX9fdSC9/8ZZv7/pxloixnkRBn/CfMz/l9fzvn/tgdtLQVbxsDA8B+EaxLY/r9bxEMzS1EsA2EnY+b/D9dx//+0lPqWYlgGwuJCjP+393H+/3GAB2zpHVc+DI3kYKyWgTALMyRYv+zlAVv6fg7v/5vWlFmK0zLkYH26kRtsIaWWoliWnJz8n4eHB8yG0SAsLcr4f99kSLBSYimKZd3d3f9Xr179v7m5+f/8+fMxgrUljQ3FQlIthVtmYGDw//Dhw/9hQEdHByNIQdjNDDVYSbEUbJmKisr/yZMn/79+/TrcMpDv0C0CYVjWQLeMmKyCEowODg7/b9++/d/CwuJ/fn7+fwUFBZRgRE6dpFiC1TKQ4f7+/hi+Qc535FiC1TIWFhYMi9CDjRxLsFqGjNGDjRJL8FqGXlxRaglOy2DBBkrKt+z4qGIJDMMtgwXb61mE8wu5GGwZKNg2FHPRzBIYZgA3C0x5MSRogQGUDNhNcXw15wAAAABJRU5ErkJggg==",
    "tm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACZklEQVR4XrWV7U9SYRjGz9/SluCcphUR74K8iLyFkQwOuZYCJShqNJ2yFdkot9LEYlZQ0WrGzIiXcrpeWC9fCCmLKVYf+xv6esU5bjh2vtCAD78959nu3ffu676e+xAPPD1IHhXga08fiv02fFNKkTwsxMvBbrBfOOoKseAw4P2IB9tzTny84cOj1FVk3RI8NuvLQZzUKH22xM8xEvwPdLF3VgFWX/nxKTSJfOA08jMzeGrRloN46XEIX3uhe3MZhxIuRpJqIcIjWqS4JRllXdix9WHLQCJ5RID42T0Zles+dK5N0N9UwdkfK4wk1UKEPVo6eUShRHGMh5BaRc8sPrA/M6oIdU5vRjGZe8hIUi3EvN2I80Yp7gxI8NMlQIgUwN1bOTNz5jrdUWArVqOMpc4iKiWWXQZs2Dvg71eW7rLGuJGaWV7ahakDLCzI+LjAYiErViBpVzGCa4UIOg3w8TjQtTfh9kUr1Fw2hjitWCb33Vgv9ooJOTDxmpEZJqFpa4Jb3FZh/XpBRDwaWkYvmw2PTQZ780F8kSrK1q8ntEHS3SUXurtwbZSP4LgcK3pxhfXrBS1j0KuHe1oFXkAL57wFnikznph1jOBaKW+QsOI47g8JEDMdw7qch6SjAW6ktv6qWY3dz3eR27iFtUUjFkl9Y2SkNkg+MYffb6P4dSmAfNSPbOJKxQapF8TNQSPujZnwPVb6l6Vn8ffPB2SWhvH8jJoRXCt0Z9snxVhq4WCitR2RDj4KJyR4RmoYwbVCd1YwSrAplCPLVSDHl6PQ24noqQbJSBUoWkTYsYqwS4roR96IYv8AgF/HKi6vbjoAAAAASUVORK5CYII=",
    "tn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABLUlEQVR4XmN4ziD8n16YAV2AlnjUMqpgoi17KaD0/+vk2f9/X772HwT+3L73/9vsRWBxdLW4MFGWvVIw/P/n8VO4JT927P3/9/lLCB8o/lrHBkMPNkyUZT/3HwEb/DGj+P8LHrn/X2csgFsOAr/OX/7/nEUcQx86JmjZGxNnsIEgC0D87yvWQfhT5oDpv+8/gOm3zoEYetExQcs+ZpeBDXvnEwn21Z8nz/5/W7L6/wsOKXDwwYLzU3Ethl50TJJloMTw//v3/z82bAMH2xsD+///vv+gnmUYwbhmE4QPDMa/r9/AfUaVYARheALJKQfz3wfEghMFDPw6fpo6CQSEwUn//kOwwSAaI+lrWGDowYaJsgyEQYnjS/cUeKYG0aBMTvVMTS08ahlVMF0tAwCdWaICxoaNMAAAAABJRU5ErkJggg==",
    "to": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAnklEQVR4XmP48fjx7/9EgBfz5/8/yMBACb7PgG7ZiwUL/l90cPj/8/lzZGHaWPagoQEs+f3+fWRh6lr2fM6c/zcSEv6fMTAAS14NCQHzv16/Tn3LQAZjUfD//f791LcMBugSjDBAV8t+v38Ptujfb9QcQRXLbkRHv7wRH/+fEL5gY4OumVR8nwFEYJGgBR61jCp41DKq4FHLqILpaxkAF69NKfxN+VcAAAAASUVORK5CYII=",
    "tr": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABaklEQVR4XmP4Imlw/7OkwX9aY5A9DKOWUYoHp2VfVKz+/yhq+P9r3nIwBrG/qNtiqMOHibLsm3/i/7+Pnv4Hgb8Xrv7/2TH1/4/ixv8/e2b8/xaahqEeFyZo2Rcj9///Pn4CW/Rzwuz/n2WM/3+WMIDjLwZu/7+aeWHow4YJWvZrxUawRX+OnkaxBBl/BToIpPZ7ejmGfpIsgwXfj6oODEtQfAiMU5DaXwtX///R2IthDlGW/f/xE2zZ99g8DAvgPrP0/f97+z6wun9fvoItRjeHKMtACQIcX8BEgW4JOv57+/7/H2Ut/78nFGCYQ5RlP2q7IC5++/7/Fy0HDAtA+JtbJFjtV9sADP0kWfZZ1vj/n5PnwBb+vXLj/1fncBSLvmdW/v8sb4qpDwsmbBkIK5j9/zVt4f//v/9ALL336P+fY2f+/5y2AGf8YMPEWQbDQEu/uoT//+oRBWZjyBPApFlGIR61jCoYZA8AG5/v0aXkubgAAAAASUVORK5CYII=",
    "tt": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABL0lEQVR4XrXWMY6CQBSA4VdQcgALj8IRKCk5BAU38AIUHoGS0hvQWlhY2Olmt92NIdGYbPF2frO4EZllHLD4TYjMfGEkL8pxsfis61rDMFQRuRXHsV72e32fzfRgrsf2MZ9/Cx9fWaZ9YJIket5uJwFvGBeAVVVpEAQvAe8weiX4gFFTFFbwtF7rmznq7kYu9WJkA9M01Yv5bX1AK0aAhUnkD6PMHLUP+C9GzXI5GTiIHcwxnsxx2sDzanW952FdT8MYDYB85wK6YfQL5nnuDbpjZDbj2Nhc5B7kqYfA5zATLwQvhg3khequaXsao0HQ1F1DXhi1IFNFxA30xgiQ8eUKjsKIwcyA7gPLsrwO9vbe0RjZQOYq87UFJ8EIsNlsNIoiKzgZRoDH3c4K8vfjB2kKB+VJ/LRGAAAAAElFTkSuQmCC",
    "tv": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAC1klEQVR4Xq2UXUiTURjHX1FoF0G7kOgiZNACLzIKMkyERl12IREh1EVCpvMjt8rIyHLhypmZplRSLbecXznSHLalU0vNhbiWM0MlUVeoUbRCvfBj++c5tum740KXFz+e9zzPe57/c57zwfWdlbuc9fXQ660Qi7PAcYmU+HgNBiUS9HAcxhUKiESXqT8kRIqUuLvoS0iBIy0NETkvZ7mybqyJvZG57jvJxRg6dhyT6jKUqTtoYl8xUohHZEwqRZOuFRLJbXCxpWxSfyTKql0ksVLZiNGKWowrlZie/A6LZZgn5jB34mtmJqYHhqDRdNFiCFsSKtik/rAfiHbbRSKsxnuBgIrZhEIm5iEiXcMm9YctLMxNEgbK7tTHbNIVHDGVLI8VeaYFhcIAlcoEp3MGcxMT+FldjdmpGV4b5+ddWHA6aay3awBkDiE0tYYR8BDbVIipX1txqk255NuxM8stl9dgfNCBLxkZ+JAkQ/qZJ5BKdTyxqCgViorM+NH7CQ65HMbkazgYo2IOSIjW4rXhej0V3PX8b0FW2/AcSfYxWYasdC2EQvk/jz6JkxVNWvvogRGfq+IJbC5/g0f2OCriu1Ju002TK7igFUF5LeBym70E3WpBcEEbSIxYTmXmxck4KH9x3r1OmuhB7wlcspzHnrpKWMb2L7duJVxJO+tcJ6JnBhg/H8KVdzIInnZCXFvH/EPZCDHC9ppGxsf4N0psNQ43ltKWevcvULFtVSbaMmJ9Y2TfPLa8/yiiGrRLsUDFyGUld2jfCx3jH/kmRnZ3Ku+U0nigYjEGNQpt8YxYaGUzcnsS+S+Hh0DFSLWkjcQSyEqS2q8y//Hgcoy/uZxXWCuiYh21MeoiGOwShD/UQnS/Eh2Dkch/fRKCGw3grptYso0z3KJiP1PBKpCXgVzcjtFo+gzFmfPot6ddxOc7x4eRNYsRLry9iHzrae/Y393yw/rE/pORP9sKGOgkRTwZAAAAAElFTkSuQmCC",
    "tw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA0klEQVR4XmO4pylwH4j/0wHfZwARWCRQ8BNv3v8vU7gxxEnEmJbd1+f//zyCB0XhEw/e/6+LuP7f18YwgBSMadmLRO7/n+eyoSsEY5APX8SR7UOEZY8c+P5/38Dy/+9lxv//7jD8/3WUCSPoQJa9zudCN4RYjOqzh1Z8///fYwDjN6Wc6IopxaiWgYIIFISg+Pk0hR1d8f/Hbrz/31Zzkht3mD7DxoZhClMlZgLBhsGWpJNtCQwTbxkoYZAZfDBMnGVUwqOWUQWPWkYVPGoZVfB9AFGxbLBnvwHDAAAAAElFTkSuQmCC",
    "tz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABFklEQVR4Xq2TSwrCMBRF43cdnQiCKOK2sgrBgSDi2A24hxbsZxEiaouLSNtpfE1R0ySNSergTMTc886gCB0R/SfYR5QUiEYRop4HvyEexQMXvBMILiAiIMRIkLxRPLQFB7oaHsVjU1jN9VcNj2LEBPOamvoYxZAOVnMDUW5WUx0SxT1KyrGdDJ/ta0jep1G2giOfZjJWc7esgYNIOaI4OcAGrRGHRXBYPXKoSZd1zVukk7Gah2NNvG9KdDIcu9T04LiFXNMmYzWpY024k8dFPjWJY819rq/hYTWZQ00xhE9hKw/qYDWxZc1tZl7DY10TbOQRU8RhEVZDoOY6dasxkX1rBt1qeERJo+Yy6V7D01rjr+U/d+QF+gfr0VXuL7kAAAAASUVORK5CYII=",
    "ua": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAPElEQVR4XmOQyVz+myF6939aY7A9o5ZRikctowoetYwqGGzP/6sM94H4Px3w/VHLqIFHLaMKHrWMKvg+AD6DK+Rci6d6AAAAAElFTkSuQmCC",
    "ug": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABN0lEQVR4XmNgYGD4T0eMIUBLjCFAO9xcznCYXpjh/3OG//TC9LXsx3HGw6Tgl7sZj11axX92ZTvj5c+HGY+gy+PDDPcsOf4Tg29bcPzfF2H1f1dv4/81M0v+Xz1y8P+BRDcMdfgw0ZatcFb7/+3T5/8bV6/6X1tb+///XyD6+OH/VXthDLW4MNGWne0oAVuweMni/8Xlxf/XrVv3//fP3/8vViZgqMWFGTDyAg4cFRkFtuz40eP/vX29/9cnR/1//vT5/+KiYgy1eDCGAFbMzc39/+b1m/8vnr/4f0L/hP/bli35//jR4/9aWloYavFgDAGc2MbG5v/iRYv/V1dW/589a/Z/WxtbDDV4MXouJ4STIxnOl+bwnK3IZTiOLkcI0zdTowvQEjO8n8RymF6Y6HxGDTx8LQMAQQ0+yPjOw2YAAAAASUVORK5CYII=",
    "um": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB90lEQVR4Xt1VS0tCURA+f6NFEBS0MCoqRCkRy15oD5AiiVv2sIcRtxeGPexFDyIIIpBAgpZtgtoVWUELoU1BiwgMiaDatLJEaHHqGzhQZxHX4LbowsfMfDN35szM0csKS1rfba4AzyhQeFGVyg1WH+n25kmSsMFDR1xmkYfnmL3cWDvMZ031PGKxawbLK/W+NXgWeG5ZLyUAUMDdv0pScPCLOPAovDazefN8cnaqFay4Sn3HST3qOs8xeSlZU8/KNwme/J9xrq4lKgZ99+Ccp/OwfKMnNTIb5lnGTu5U5niNO0i6f2GbJGzw0BGHwpZGPx1krrbtJepWHrSCGUydb0g0EAjxbHM3ddI9ukE7goQNHn7EYbzYIXa3PDh/exfePtcKGqM6tUUvowucGoV6/ZskYYOHX8Rhhxhn2mM0FCspkQgnRyfQUQgSNnhRCN2anWPkT3+MxvYk9oOXcdtEZ4KDDf4rh2LY2WLr0P11IHipFTRGJJhY2qEbhpv2tTNx8+AXexS/u7THWGDuSIr9oAN70ySNC11AwhadIQ4civ2qM0dFz1N1pS9hs3oT9vI+AvQ6h/oqc3JcqGMsJif8Ceyzu7jcrl4PuxqfPpJPoBdYtEW5kK+oXvjbMcZC4X35b0Uv/OMxPh4e78kfOb3AIpaKuPz51gsfEq6uXSUC0xkAAAAASUVORK5CYII=",
    "un": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABi0lEQVR4Xu2S3SvDURjH9/+5V0otEiWKC5GLIUXixnLjbbM0ZpGM5ELe37nAhbxs++197K21FjL5Ot8jLg4Xv18budjFt9M5z/d5Puc55zFVWL1ahfUOvy+vZirDitd/hFWN+1E56kPtVADVE360z4fRMB2Ue54zruZ8lw5YiyuEkY0EGp1B1DkCaJ4NocauoU0AN69zcs84fWquYZj7LIOOhQjMNu0LyO7Ymfs0g/7VODoXI9Kn5hqCsfChLy87IaBnOYatmxwcBylcxZ/gucjKS5gnNemjX62hG8anch6lJah1LgyXuP3KZRb2/RQKr28SShjj9NGv1tAN438si9t3e2K4fXjGefhRPiW7S+QK6PJEJezTx1WtoRtGscjEbhJNMyG58q9cJ2m8iM7Gdj4Gx7aXlD411zCMU3as5TG0di9HnTA+W58YDK4Da3EZL8k0UpzG0e0khtcfYFmKYlCALeJpuec542rOd+mEURzv3pWYKJ5AveiOK/c8V70/ywCseJVhJdEfw94B3TfjP1C/ehQAAAAASUVORK5CYII=",
    "us": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB7ElEQVR4XmMwMIn+7Rhc+V9SP/a/kVv+f237LDDbJawaTIP4IHEQG6RO1ijhv4pl6n8zz8L/DRZ+//fauhCNGXSsU7/6JzT/V7dJBxsAwiALIjO7wDRMDCQPUwcSB1ncUz/l+ot9B/YTixmM3fJ/g1yakN8PdjHIsNC0DhQaWT44uQ1sGYi9ctPh/6QABj2zhB9FDXP+K5gl/feJbfzvEVkHZpc1zwPTID5IHMQGqQNZYhtQBnZIo2fc2+ORsY+JxQzaFklfQQZlV06H+yyleBI4jkA0zGcgeZA6UPCC4hAUd+25TTfvzpl3mFgMDsb8mplgzSBfgFwNsii9bAqYBvFB4iB5mDpQHIKCk+Rg1DaO/QEzCORykE9AbJBFIBrEB4nDLAL51tKnBCxPejCaxX8DxQ9IMyi1wXwGEwPxQeLIYiDLQHHWGl3w8HJl3XliMTgYQQZUtS0Exw0opSH7DJbyQPKweITlO5KDUd8y8RssfkA+cAmtBgcXyBcgGsSH+QykDiQGsowsn3k7pz13d8367Gif+tnFKQOMQWxf7/wv6GLo6qYnltxBNxAfZgD67j66d2kFGC6U1+5CdwGtMMPxiNhT6EmUVpi+wXhn+pyN6MUKrfAwDsZnO/esQ6/kaIUZ9to630evvmmFAUOxrmQB62SbAAAAAElFTkSuQmCC",
    "uy": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABsklEQVR4Xr1VS0sCYRSdn5C1iYhwXwRtolUEbYKgx0ZaZIsWQS4iiHDRkyAISjKpsLKHZCQ2phSGPdDAygeNUfhAMqdWYRRRBkGzODEfNNXkanI8cIaPYYbDuefe+1EAWOQHLMU/fr5hzkNgUwlkMhlyziG+xeLxOLiPN9gt/VjQd8FFjyOZCBLhL/ROh1Gn8Uhii9b3JohxHIfNJQ1iXjXs81Xw28oR9mjx/BAXxPifqBqrJJY27XBELBqNgrYM4sTRDMNAMZyGQgx3KxDcrgW93A4mdEzE1lwsRk0RSZwwx56IGF8q02wf6LlK2PUK3OwXIbChgHGkBIs6FdjrgODuH/jO7My7Ch/dAM9KGRwzBbBOKbBnrodrXYXMS5p87Q7cE3dSaHHfpokYwzDwnxwidDQGxt0By6QSW4YKmHSNiFyeCl2Zk8yIx1QSz4938Dh7YNSp8Zr2wmHT4YLxESEebUNnULbuSmJ158F79jlLXgnnHOLvUMsIluLtiS3LQVJGElyWQHNNosO3pLhN5aDQ+uLiygSW4teIeLXIQbKu8poZv/rF14Ec/HXF5AH5HepPpE2SKnXfgN4AAAAASUVORK5CYII=",
    "uz": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABMklEQVR4XmNgmLn1PhD/R8YiC3f/Z5m1DUUMhDnmbv/PMhtTnEh8nwFMQAVABs249ui/9cZjYD7//J1wxWor9v8P3nX2v//OM/91Vh/8n7j/0n+ZxXvQDcSHUS0L33Puf8nx6+iKwD4C0TzzdoAxiE2GD1Etqz9z638A0OXIiuSW7P2fcvDif12gb+L3X/zvv+P0f7N1R/9H7jn/X2nZfnQD8WFUy2SABm999BKuQAAajDCfgfggn4F8BfMhCRjVMhCWAMZDysFL/3VWHfqfdfQyMLHs+h+48+x/g7WH/vvsOPPfaetJcJyB4k5i0W50A/Hh+wyr8uuvbc5veEJrDLKH4dfT57//0wGA7Bm1jGIwzC3bVJpybWdp+hNaY5A9DHJbre4D8X864PujllEDD2PLANts1/O1XhTKAAAAAElFTkSuQmCC",
    "va": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABpklEQVR4Xu3SvUtbYRTH8fwDBRf/A12FLp1EUJfSShfJIL6huw0litXBGE3Q5IovMRaDqYlp1aEGAxrUK5JBC6X4Eo1IhItXr9lcRLFJCMm3iYNcshTJM3TwB2c5h+d8eOAYuDSo+eJZdWOM8Pyohhfsv8IURWFry1fc1kcMVoAkaYjlpQkCAZ9+pI8YzGaz8Mn0loH+d9is7fqRPqVhc7NWctlbXK4RWpvrsFo+8Lm3A7/fz8y0Be+cJAbLZrOEw2usBt3s7/9muPM97pZ6JqVB5r/O0NpUydhooxhMVVXi8TjX2jnHR5scHawTXl+i22xE3nDR3lJFn/k1ictw6Vgul0PTNFKp1OMmyW6juuIV0mgbDocdzxczXk/P07dKwgqvM5kMsdghwZV5Vr7V8qa8DFmW8Xo9pNNpPVRIaVhf/hiWA23YhxqIBKcImUzsbn9Hu1JIJBLc312IwyadNY9bFtxdOK1mrhYXOdneJBIKkUwmiUaj4rBfP33sBI14uj+i7O1x6nTyEJf54XDkj+eE9J+YOKw4Z+PjxS19xGL/yAsmBvsL8HbS8aqvlYMAAAAASUVORK5CYII=",
    "vc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA6ElEQVR4XmOQzpz+myFi1X90PHOH/f8vHxlIxosuMPyXnIWJjZYw/GYYtYxYPPQsu/GM4f/jV6gG33kBwVS3LGA9w//8vagGJ25j+J+yg8qWwQyQncPw//h9iNjaqwiDDt6homVuaxCaSvcjfAoTy9hJRcu234RoUJgLibtzjyC+AYmBfHvpMRUtA+E4YPx0HWf4f/gew3/leZCEAfJRw2EqxxkIgwx/9Zbhv/1KiGZQwrgPFaO6ZSC84RqqAehZgaqWfXiP8Bl6NqC6ZSAMShhq87H7iuqWgfDph5hiNLMMHx61jOaWAQDzvOudJFQ8wAAAAABJRU5ErkJggg==",
    "ve": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA/ElEQVR4XmN4vJ3v3/8zDP9pjUH2MIxaRike5pZNqzf5O79X/z+tMcgeBnGlkt8MKrX/icEs6vX/e+cd/S9g0Aqkj4H56GpwYbA9xFgmYNT6/+rtV/959Jr/Hzn9ECx2+MwjMB8kDpJH14OOibLMJW7Bf13vKf9d4xf859BqRJED8UHiuj5T/jsDaXS9yJgoyxatP/+/omsXhjgyLuve9X/BuvMY4siYoGWrtlz+bxEyC0McG7YInvV/1bYrGOIwTNCyguYt/w19p2GIY8OGftP+5zZtxRCHYbA9bZIeL5ukvP7TGoPsYTgvrH3/vIj2f5pjoD2jllGOh7VlAE0lobs+tX7aAAAAAElFTkSuQmCC",
    "vg": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADXUlEQVR4Xq2VbUxTZxiGT2Ky+AMVGMWiDX7AdExgfBTc1jFJJLjGMrEOikVBQlsLVAFRKIWuzZxjCirgR9hHV5zihGAlRBxhi4kOMVuc/CBZzDbdln2RYfZ3P4xe63kNrtolMOmPOznnzfPe13nu93lzpInG/Q/unr+A13uN+PhmJMkidPXoaW5IEj2t/Y/W1MkuvrDY+dVuZ8Rz6dH6rBUeXnPv8M527tibCIQGwgIhv4yNU13dy/z5VcFmM+mYs+e+bNjXPsDNox8x1X+ev2/fYfKTHgGb+vwyf3Z1MTU0zNcDX3LuiE98gMvmCTabSTdVscL0/+qrlMxgs5k09s6JB7fajiPrh/aT/Hayi9/dbhGZbPpHaytT3m5+cjTzXWunqJM12NgZbDajJMu9lJT9XOi/wd3ubm5V7MZtPMhox8Mzk+N1uQaZvHqdn/fUMWBqZlWc4z+MZqFuz+j9QMj0wT85jf5Begz6QZGDqKg9bGtworNWYWhwCAU+yypxuEWdgOVn2P8qzKwPmq5XkpooT6kgafXjXcjQ7Ow2XlvTwPLljSjykvzv4SSYVEhlCZQVpqLIXcKr2sVklCuJK0kTdQ/3S5Yfg9qdpWQTlSGd9ZsWodAvFbDK3aWk5qWyIltB1vYIVBZN6GCLC1IxFIbxkjWGF3esw+fzUXuoFs1mBUXWhaiM6aGDLXsjkZzchSLGktoChoaGOHC4nsx1EaQVR6Papg4dTI4p0d+F1phAjnMrXo+H7XuLWZWrQG14NrQxxhRnEJ+vZKd1ASannpHhYcre3SVi1BnDRIxK5d7QwNS6F9BsieB5oxJzh53x8XGcx1rQvhlNjjlKxPjvnjnA5GuQZc4lY+Mi5m1cxpb3KpmYmODiyCViNZG8vDWS9Lr8gD1zgGnW7uLtt+ooLw8j0bQUfX0RhzpacLU0kWOIpsw/jWuzStmwvnpusOQ1Vr7/LI7Jy9Gc6z2A2qZjQd4KcdfCN68kqVJPha2Kb/qW8O3gStRp1qeHrX7ORlvTJq5/msy1j+dxe7SUM3315De+ztmzNYz5CrjY+QxjvWo63Xp//b6nh01LqTThbbdw5ZQKX5vElQ/9v59Tkr+jWN4/uIMYpTmgfo6waUVGmtFu2EeNxYZOWyfen6z5B6kbvWLuFhpgAAAAAElFTkSuQmCC",
    "vi": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADlUlEQVR4Xt2U7U9TVxyATfYf7C37uJfMD6DRYbcok5nhIC5jiyS6MVSWyBAXMBOyD5si4EDD+5S30s5CGfKOwKAt9kXBFgtU2lJmpRtIIYw1km0syxaiRJ5xb2lrq26LybZkT3LuvTnnd37Pvb97zlkHuPl3cK8TLqG9/xD/kWzc3MDl1jSc5lpW7vwUHHYP9itSrp7fyfzkQOhQgLu3mbmhYeJKHhPG077egOzO0iKW1rfol29GdXYjfdVbsely+P3Hb3zBuN1uRgfOMajchkub7O8XWLm9gOdGA4MNb3BJtoVZzVbGO7ZjH+72hQSXccxqRFUVSV/lJi6UbGC4PkK8G7+KYWlpSYxxaD/ht6tRDDXu5OeFWe88/UlszRLmtdvoWI3XSzdx+UsJQ/oalpeXfekf8M9WS3CtN52aYy/SWboRZ8fLovT4iUIiX08iMuptng1/nyeeS+TJ5w/wTkI2lguJokgvfYnusg10VcZiH9EEpcUnGx1zMGB1ij3918YZsTnQteciPxFOc8FmzMoIstJe4+n1qfe1qOhEcVwnldBSEIauMZXpKW8uAcOQDSG/XzY3/wM7inrEwdhSFRa7lYoWKW1dTaiqd9D5xRZyM3aRmZxN6t4MDu5O97cj7x6gryoCVXkEBnUdy3dXMDm+9cvizqjx3FoIyISnfVVqDLYJEipVDDtG2HtyP/2WAW7NDHFRuY/SnPcwlijQHj0d1OpS0mk5E4dzWMGptn6SpBp6LS6mbk6Lsj1y/6oNyEyzv/JC8ikM07/g8Xj4TJbNh8VpzMzOiJFWfRHaksogUXdqFpqCVNzTU8zNzRGd10Ty2TZRsLi4+HCZwFNpcrEMwgpS6OrZ/mkszYY2piftjLdH0iVLoDfTK+pMOY7s8GFxAU2NKsX5KTIVn59Xo7YE/plQxrWvDMiENxP2kXAX+O77SXZlxxN/LIGe+o9Q1cRwsT2f8pw45EcyqTi0h9bqD9DUJtF3bjcVdU3El7SjNo74Rb68azkfsPTXEEpZJitGXyPBaSqmt+drRjviaS0MoygzHFnWesz1EnTqJm5e13I0I5qSsqzQNPfycJkPhaIQubFOfHZcyvfuJ9krtBeF0Vj6prgvY/IbefxgMY4xW/DkYP5aJmC97k3icrkwq1ZPi9ZXaavaz8iQibxmHY/lmnjm49qQWffx92ShDPb7zzuRxAIl5Xpx4/4ZjyZ7RP7Hsj8ABxdV6oAEy8YAAAAASUVORK5CYII=",
    "vn": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA/0lEQVR4XmN4wyD6n16YAV2AlnjwW/aWQwRDjBhMlmXf2rkwxIjBpFvGIvr/32um/x9sBDDlCGCSLfvozP///3+G/9+aSfcdyZZ97+cEW/bnNvP/dwpCKJhQXBK07HM03/9/nxnBFuDD37q5wEGMrp8ky0D4vY7g/z+XWTAsAGGQQz7582HowYaJsgyE3/KI/P+1nxXVoveM/9+rCGGoxYWJtgyEf5/G9N07GWEMdbgw0ZaBDAX75jvj/6/V3OAEAuJ/yebBUIsLE23Z52ResAUfDATBfFCw/ljO/v/XbjYMtbgw8ZYBUyXIAgxxoCMIJXkYJtoyauBRy6iC6WoZAIhBYaW2x7qNAAAAAElFTkSuQmCC",
    "vu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABz0lEQVR4XrWVv0uCQRjHv5WUEIGUQ0FTQ5k0KAQSor0gYYORRZuULRElJOLgKCQNrS1NNWQg5dAf4GBQFGm6JCgIFQ06uEhLJMjTe74o73s19PrjhQ+8793z3If37rk7uPW4fQCKWYB6DQoFfAcOUD8ewL3Y8MUHdBPY7Sil06DHR5BrFqUk8MIHdQuIz5tGA/L7QZUKKBIBBQfxlAGqfHCnNGSQXmhyEhSLgfJ50NoCPm+ADJ/QCQpZE6cTVCyCTk9BWyPIpYAyn9gOf8oYWq00pUy66UbtHEjxyWpRyNjamUxKqcEASiRA8ThofRwf4jZ55wf5Ly2ZwwHa2wOJ1dkoFiaRSz0eaS19O6gfAc93QEUtLRkT6HRSgbDvUOj31LJ+to7JJMjrVU9LFgxKg7lcIEEAhcM9lOn14hT5QNGo9JdsG8hFzWnc3e+vG/3GrO3CVlFLS9aEl8gLxLg8+mGL2t6Fa4Ha4Zesibz0NzyamvnQnOKT1fKnTL6pp1cncouxxTKf2A4Kmfy4ElaGPi0nlgyf0AkNGX8Qz25PPQlXQpUP7hTFFTPvHC5Zz6wvfFC3aFye/kBffS5gvBcbvviAboKZpbFb+6X9le/oBT9gLs8SNBZHNgAAAABJRU5ErkJggg==",
    "wf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "ws": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAlUlEQVR4XmOQYYj/zcCQ/R8dy8hUY4jB8H4G6f9ABqn4PgM2y1hYcv/39+8D0xwcBShyVLWsvHzDfx6eIjAbRNfXb4XLUd0yDY0mONvGpg/OpollMKyi0gAORnRxqlsmIFDyf/Pmy9S3rIPB+G0Dg+l/UvB9Bl50g4jB9xlABBYJWuBRy6iCRy2jCh61jCp41DKq4PsA/C8GWxtlC8UAAAAASUVORK5CYII=",
    "xk": "iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAGYktHRAD/AP8A/6C9p5MAAAH+SURBVDhPrZQ9aBRBFMd/u3PJfRvwQA5s/AjeiU1E1E4wUUx1NkJAsDAWapEqrUVEJIQUVmIEbQQh2NgEjYUgnKiNFywCMRIIiiaixSWa/bjdmXX2spKc2ZwW/uAxy+P//vvezs4YovIg4D9iRmssUgXIho/0JNLVq1TNCIKgGXFsMQyF0vaQjk9CGAyc3E9Pd4ErlYPsLeYp7sygfIWyvFjTFsNQEIpHLh6h7+hunl0/xfznVWxPsPjVwtbdvhzrpyufZGr0DMqVW0xbDA3DAG3o67Gev/lE3/ATZubqCLfG9Ksllr816D4/yUrdZuLpvK421ms2Ebsp0vEwk4nms6rv4vvoOWpLe6g8HMbxkpimj/IUolM0NZuJ3RSR6kBJHasFDpffUuha43RplheDN8FNowIRaxYSayj9BP2lGSYv3aA2dA3L6mDNTnJ83wLjZ++BE5q2jvqb+JHVuji4fQFruZOAjeJs1uX9lyLlsTuI7I8ou0H8yKZ+h51jYrqXTK4RZUNbndeTDjwagk4nyrcSa9gk/ZOrjy9z//UJsilXd9Ygs6PB3Wov7xbLmAkvErbS9uiF3zKlO7FHBjlwa5xifoXq7DHMXF3/LpHoD7bvUGMIH6eRYmquhw8fS1QXDiHy25uF/PVy0MeZwMkg0laUaU/bDkP0YfhnM4BfSqPRkVzFO4oAAAAASUVORK5CYII=",
    "xs": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAzklEQVR4XmNwWPb/P70wA7oALfGoZVTBg9+yCacxxYjBJFuWuPX//2+///93W4kpRwiTbNnSq//BoPEIphwhTNCylO3//2+58///9rsQ/OEHxLKHHxFi627+/x+6AVMvOiZoGQhn7YIYjg2cf/n/f8RGTD3YMFGWgTAojq6+RrVo131Mdfgw0ZY5L0cE4eefEPrGW0x1+DDRllUcgKRCULIHWTz/0v//f/79/x+9GVMtLky0ZS3HMOMGlA2qD2GqxYWJtowaeNQyqmC6WgYAm806p6cnCwAAAAAASUVORK5CYII=",
    "xy": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAA7klEQVR4XmNgoCf4T0fA8PPcxf/0wgyPucT/0wszvMsp+U8vjDfOfl29/v/LgqVgDGJTCrBa9u/zl//v0vLAXn9hYv//Q0XD/48dff8/9U0By5ELsFoGs+hdZuH//79/o8j9PHoChU8KwLAMFFwgi55rmvz/9/0HujQY/Hn89P/7ykawQ37fvY8ujRNgWAaKH5BlbxOz0KXg4PPM+f+fiCv/f8Iv9f/r4uXo0jgBeZbNmv//KdCyxwLSQMtWoEvjBBiWER+MDZQHIwjQLYGAAF2TPgxQPVOjFym0xPQtiNGrAVpivHFGbYBecdMUAAD2YJSuzs71rgAAAABJRU5ErkJggg==",
    "ye": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAZUlEQVR4XmP4rCTz+yMbw39aY5A9DKOWUYqHuWU/uzve/mhu+E9rDLKH4f////f/0wfcH7WMGmA4W9bR0fG2oaHhP60xyB4GGRlgZmNg+E9rDLZn1DJKMf0tExMT+4IuQQsMsgcAYl/9IudIOL0AAAAASUVORK5CYII=",
    "yt": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAV0lEQVR4Xu2NoQ3AIBQF/xgV6OqGAbCMxQSdtqlCUH95AVTVu+TsXaRy9zjbmLnDc1xT31x7eLaCceoZuxLGqWfsShinnrErYZx6xq6EceoZuxLG6e+zD1SnjhiebqbsAAAAAElFTkSuQmCC",
    "za": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB6klEQVR4Xr2WTSgEYRjHn60tXGhLlJSP9rAOllLK3dHBgXLzUQ5ycl+HdXHbu0nkgEKs9uaj2Sxq14o12chOK4PUhi2jtcbMY95lind2mRkfb/1qLs/z7/f2Pu87ABMtSRXU8B3NBlFRROT5a3S5XhAAfwugwwgNC13n6ewDh7KcxbGxC7rIKlA57d6gwwh2plVi4sssImZUywTW1T3SxWYBjEJyZKU6aGNaRDqQ4F7q4d8tH9Hr5egGZoDhbgi8ROD6bKdIKJ9qOqDDNMuFxDqxlPDyMo719Xd0IyOAupKOUkjHF2FLtcSvLNv8/Sfic+Ykd4DGxyN0s+/IhcHbB6qWu3IEbuPbxedlk80cHaZZriTZN0tBCKPHEzLKpzBChQNuE37YlfZs0uByDasGZOhAQntgiHuSszyaWLow2jIWKuELWZqmUBht2bdUy6oFkq6BGYyGvW/p34T9yzbmscl7QNr8A8c/OiC9HRAmNmTAHZPNMTqA8HHAUynpwOO5ChklF0aG+nAOQkaHWlFQ9PluggBRNIXR62rmNLCp2TidnKBrZARyEY+uVm0VstEuYss2H6maalyjAzQb7YlJp2XOss0n8jyezvlO4T77cEiCGCbF2u37kr7QCnl+CxRURGLjdh/z+gLrvAIhPFmEvRwcxwAAAABJRU5ErkJggg==",
    "zm": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABAUlEQVR4XmOQ7GL4Tyd8nwGLIElYtJzhvzIWcWQsUQJW95hiy1QTGf5PiGH4PyWD4X8skO1cwPA/LJXhv2U9w/+sbIb/KUAx91yG/7I5DM8ptkyiheG/USzD/wRXhv9zQxj+7wIaPi+c4X+jB8P/9XEM/x0iGf7LB1HJZzAs3cjwXzuF4X9AEsP/KqDFWUDsFgCUK4c4SJIacYaOpTIZ/geHMvw3zMOQo75lICxVjCkmSQ3LZrly/T+qywfGM6y4/jMLMsBxfATD/yt1EHyogeE7xZatseb5f09BAIxXG/H8Z2BggONkYMJ4XwvB1+sYfo9ahhOPWjZqGV48ahndLQMAOdeKkIrrwJ4AAAAASUVORK5CYII=",
    "zw": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAB70lEQVR4Xr2WS0gbURSGj6DOIEKUUvEJo1AKbQWjiJvixlKtC7XQhcuu2lU3bkqhihsJEjXgG1TahqqlSEURLdYgdKpGRwwxaiJoghgYJWBAjC6i/s1cmEGIm5BJfvg2Z+69P+fMuQ8aHRvBo+oCPGnlYOzlEwr5fD7IsowXL2sgvE2LGqAnzExROByGyWTCQyMXKu/i/ZV9/LHeaGaqRFFElbEQrl8EbOtLlJmiU48b9a9qMfg5ekI8aGY+7wFcW19wE7qA3PqRxZSyPi9LPT/7neK8+ZfiiBfNzLX2BmtzhHNbO/Yrn+L2OsziSllLS4oxlZcJr5AVF5rZ7bUM6U8ONqY57DdnIySts7iiYDCIpsZGvDfwUQvEAnntq/C+rsOykIPgKo8TJ8G/Rdg18/A8y4X7cRFOzR0sU4vFggfpaZfvDLy9JZsXY4Vlpiy02fYBsoMQ2CUs/SQ4Fgl2K4fL7SktQ0WSJEEQBBBR7KhlPHR/g0ckTAwSxgcIs18JC+OEZZtVfzOn1I3hTsJQhO8Rs552gs2awf6XKl3KqOhofgz2SQ6ev7mRRsnHj/5MTH8ysG+6NYhqdrEisj12V1d7O1iZndG/9e9Twjb1XQUCgcQeV6qSchCrV0xhRXqovo/zN4xwx3qT3Mszmc+C/4K39Tk4+/u3AAAAAElFTkSuQmCC",
    "_af": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADH0lEQVR4Xp2Ve0zNYRjHX5vLH/6xGTM2s6HViDW3RIQuCxsbZrRmY5aKChWnG6UpRSLCRtZUhkYZK8NKqE4XE11XipUluugiWa2v5/m9xzn165yc2s5355yd3/t8ntv3PSK/FRiq8m7AOeUspkZux+6HiShuB9I/NSNG+wZa+v1Mfg7edwKuaedQ8wuYfd4dImQDpkRshQjdBHHK2bTUsLIuIKmiBjNi9mBmzF6Io0sh/JdD+Fjh9NsXqOoBavuA1y39KGkD6IWmASClph4icKUhMCWgyBTsA4FKqBLhvZAe3KjL1Ek+GOYkg2nWYNu9OAjfRRAn7WB11RvzLx3E9OhdEEHr9SDra36wvOIlE9XYQwQ7GGBc0YUSLcRhCxlY3YJ/CnOkoPbyGf7MQSjg9bIyTI7YIhPk3zRr8fRzK6IK8+D26AbmxO2TsELqRe63Pgg/axlADfifQulMiANeNVOMI5aGRE6shghYoXTpK7VaX1n9H/oSuGr0qkYTtdQ98yZu07yV1gWtgzhug4nhrrhTXY/SDh1MS3PKaGiRLVQHMVecJEEiC3IxLWoHXFKjkFxViy/9tAcdsiB9Zbwch7JSDa3k3rN4PjwXdXBjYuAxG3hl34VLWjQCch7j3U/DAg7bRl5pv+fpCnBS+GZlq1xSo7HgsgdZYMnI4KbE4yAoF1AwJL5Rn1WSl+r6JLySjFveI30l/JeNDKwWWYMrfNbUrW+fSZgxFdOhB3VNhk1TA/Qge1gkeCpz4jPqOGbBWBVUnf/LDGqR7UgIK9QRE+idb5OCtpHnxwRjccaKd4xVp9vGim45p6J26d9xwZSDPwalf4wZn2G0RLFF+cqsU8hbmQ3fhwHNhvFNv/9JsrwRjIFoAxcn+ihVheRlQ3jMpSXpgnY8MA7Cq6z331AYVWt7S4PmQaC6F7BO9MWsWDfU/h4ew2wYi5dk+/2LytWkrsqTjMy24YRcydDxpcXKFTVuGA89q7FTd4c6StHnefEH0DhgeI6BahBrTDBWFZl8Z3qC9BzNzy4pGDW9w28KUxozjMVZf+yS/xTcWnNArL/cWuqCIh3XOwAAAABJRU5ErkJggg==",
    "_al": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABl0lEQVR4Xu2TzatBQRjG/a1K5DPJRzYWRGwkFFEiyUJWNhR7kqwsKAsR5WNjQajnNk8d9565w924Vn41ndM857y/d+bMMeCNGOSJ/+Qjewl/ymazGSaTCc7nsxyR9XrNfLFYyNEvHsqGwyGsVissFgvMZjOMRiNqtdo932w28Pl8cDgcsNlsHIFAAPv9/kcVPUrZfD6nJBqNYrlcclXj8ZgFq9Uqrtcr7z0eD9LpNAaDARqNBlwuF9xut1zujlKWSCTYsczlcuFqY7EYV1WpVHR5r9eD0+lEt9vVzWsoZaJrUVBFq9WiSAyZ0+nEJnO5nBwRpUzrXoXf74fX6+XWydxuN8qy2awcEaUsFAopt7Fer1MWDAYRiUTkGNPplO81m005IkqZ2HvxsVOpFA+DoN1u8+OLLd7tdrwWCgXde+FwmAfrcDjo5jWUMkEymWSXdrudQxP1+33mq9UKJpOJJzKfz/MqRJ1OR6r0zUOZYDQaoVgsIpPJoFwuY7vd6vLj8YhSqYR4PM7nxC/zjKeyV/ORvYS3yr4AEhjsN+CPWOEAAAAASUVORK5CYII=",
    "_an": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAABUklEQVR4Xu2POy/DURjG30/BJ2BskGgirmnKLhJGMbCiUuJWYiIR0a4dGrZGDNJBRAgGl380pC5xCwtpmrjXpSw/5/iT9CLVoUwdfjl5n/M+z3OOrF/DfyHJwl+SK8sKubKskCvLCrmyrJBStnkDwXswblOXf2PjB23r1szTp+gFPexF4fgFVsOvjBvrBC4inMXg4An21V3oEXYeEgN1QEjdHSnfqdoN3sHZq8p5Njl/g+WrKJPbBkuXj8ihWvYEDRpm3NimhpFuK+IsRTosFLhbsU+PUO+foCXgo33Bz1rknV1VfKJCV8Ixmue8FHrayBttRHorEEcR0mn59IvzK0vTVYKIo9gUe8uRvirEZUeG6tRZi/TXKK3SDFGG/LEmIsDg2jxWrxPpKTPRewM206t92v+dET8nDOlQhV2Ls1T7XObr4x+WKSlCOvQPdUmyniEfVqINAE32DfAAAAAASUVORK5CYII=",
    "_as": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAC60lEQVR4XrWVXUiTYRTHX7oKuu6i7oRuEiqpJn1ZWFpUF0FReGE3EpUYqYhppi7EiFJoC8N0YVYzi5oIWs5S0zS/Z+H8mOJMza9SV+bHlib/znneNrZ3WEHz4ryM932e8+N/zv+cSZL6IFYkEnfDT3MGL4ZsaJoC6icByeuQLyI5GBuzovB6+DsaCNK4ojAOAkoX/RGQHQ3T15WGpewXpdSYmlE6OCnU+R6WGgIpYQek2M2oGp1DXocFrT5TlhpKCnZBuryHSieriSp/IozRNQcE5SUj8U0JTN/+F8YgUpJUU4bw4hwB1Fv60TMPtFHyboIdeXwDPXZfKGNY0l4cLriOjhkgoiQfIfp0DC0ClVTC1WlHoWlr9WEZSc3xZ1r0OYDigQmUDkwi+L4awQ/UeNTd5wL5BsbqYregYQIisXF4Gob+MdGvFjeQDOPG8gVlkn8NtjjNlHlGTthAFnduDGVIJ6gEUtxWuhTinejKPtETr/cpB347j1wY7Y/MlkbUjC+IbaEEeMC4mQLI6pxA/h2vQsDdWITqr9Hc7PQArVIfwtqbYQgrysYrWkkPqTdNNu/kypD4wc29WlchDyODYjbhlOEORpaAgQVgfeZpWYWavsVtQ/cskFZXiV673JfaLz/JffN/V8YPvlDYOygazUOZ9q4KVod84P00kPzWCJXukqyQyqrSxePjgvyd5+l8WQG0bhZfLgSMgy+vST9GyYIwuuR5iJ11u82EDdqzVN5ASJF+tO+mROk4DNZR5LZ3oHrc8Ud1LtgHUhBTUYR1GeEuVc5g5RpTqyjpSUMWAnUJ4rwzsfHTNO6Zu1D7eVG4UQnxgvFFtixv6UhjoSiPC2bjjTCPC+VPYaFV1Dkrv+cz5WSQdrK91tSC7bnx4rcS4gVzAllFs5uz+K+BS3bupV4407l+GPrcOiLGppHOMYTvu99VhgdsueCSZTTXw+9WBHTmTgES48KGIvdWj9mR026mnv1AflfvsmPwCw6OhT6BWQhWAAAAAElFTkSuQmCC",
    "_eu": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAEJUlEQVR4Xq1Ve0yVZRx+07XKVpl/tGZttbVqUpKWVmTghRNJIy+z1k2Xl3VD5WIaSsIJAfHuSpAhsKGAME0lal5AZ0UHOcjhcrxwCyGGlVKSkmGT+fT83rcPjl8stfXHs/PufN/7e36X5/l9qvwX4P/CkV+Bo12A9wJw8iJQTzT1ACe6CZ6V/cJ/QQVJjv8OVJ0DChpbMac4GxNz4jEoLhg3O0OgIh/HjO2roaq6/nn5RlDHKo6SZM4XmVBR/lCLn4KKCTBYPhGKhCr+BajYQKgNleU6M3uQa0HutPwJJLkOQUU/AbX0ORM03sHzOPhvjsCwlFcNmVQnkHLLzlzGkQECDoTq38wcatiRMGnNkjGGQIJJNQsfxZetZ+FhMn6p8011FpmXw7sRorVuF/w2fUCSsVDLxplq/iaKLtkJcmB64TqoiBFsXRDUx+OJCeYde0ALMkt7EqIqFeFHkud1q/QcJIgQxjyLzdUercKEsgNQHz2D+9fNhCM3EaF5yYbUTiIQ6W7yVOqzL6EEGvHZu6zqaUSXfo5phWvNrOIcuImE4fu26+rbLvMeR/PgxrkIyIrBbYkvm1bbier/ADJrvVALHsG8ogztD9/nMi83f0emLUA1VThIKgt/CG/uTscPJGng/cms5O2iLUYcUpE1U99AzT0i4WysYBtCtiXoXpf9fAk1581zUaDMWPw0fM3rKO04j9QqNxrpsTYqc/f3p/nfBdyRNNWIxZqnhata9Ok7UHPvwVt70lHReYWXpkEtGoXChhZdofhpyaE9zHylbt+QFWFsnwN3p8yA+vBJgh5bTHXGTbqaxE4mvZ5Fkoy6OjRfAqbmJZnLFENg1lJsO9mEO5OnmxktCzRZa8M6+o3rFJ/ZqhmITFBLYXhIevDHi9jZ3A4ekVFbg7CCNTQut8PySf8e7FrwJeurkjNK/u4g7pLeR400frFftCCmvd4E7ESV58zmlp3Xycr8qTptyvgQ0zK954L6dt9jqeFmH0rV9uB2+BK5qbYdjW0ooCBKO7rhZR+HpbxiBi4SjiUi/RC8NQEbKl1a8nHf7MUxduKWT0INqe8utKOPiBV9xZ2m3n/AKEqra7TJeNFo3LvqNT1D2YkioI3ucmR5j0PNfxhv7EpDC/9Lp7gGO1/s95esNF9yX7LDFIbOzpqBXkMBSOMaEjNb74mXxmfHookEHb3Ae3tzMTRxCva3diI4x6kTDeLz4tYzuD0xrJ/QIhMVrueSlUz1TGT/MbNb2Z72XqPUY93mIylf4MM/9Wiz555oRH7DKW6bLdqLp2juIQkvYdauVJy+AswuytRe1XO3yGQHus72aj9JdjP5UmTJDrQx+1UV32Lh/gJMzl+J0PwUTNjqxH1csiXtXfiapPJeAyt3dZoFnsME8upb9NkjH9biLIxKj8Jfp43pTQGOqTIAAAAASUVORK5CYII=",
    "_na": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAEN0lEQVR4XpVVa1CUZRR++9OPmn7kn6aZ+qHNOEM1GI6RZuhI4kxOd2dLM9NxnHK8ZNzUBNkBSQgMgWDDC6aImqwbQllxcUtW5LKwy0UgWkHIBcQSxSsozdM552VNvw2jH8+87+63e55znvOc86lTfwL/FzUDgPMSUE9wDwLNV4HT1zSa6F5/Gajj55f1cx+UMRCj+iIFJFSN3vk754Am4SBHOnqR29yKtLoamB2lMB3JQsjeOATv3ogF1kxY3C7k/9qJ9HonEk7ZEV95XOBH1nQF+L77IqwdPXBcGMEPv1+SDLdT4FLvIBIr7Vj4rQWvHkrFuxT4oYTXoGLnIMpehOTqCiyyWaAip0J99CTUmslQUdOg1r+gwZmzJJxx2w1gVck3mH8oBfGOMpgrfkKasxqZrjrUUlUzdq1HyblBLC3ajcjyQqwtOQyTNQNdw4B3BOi+DUnw5/NDooylsREPmOdBffoSFJ+O/ts42N5FsrSILO8VfoWdzacl64cT34DaNBsTkk3IrKuF9YwXC23ZWFdqxY7GJszdvwWPfPYWnYlQm0MRmBOOlJpKdAzrAlqvA0lVJxCWtwUqZjaUigzSpUY/T6UGQ22cqUum8xnLWkzdGYVJGSvwWOpiPPHFB5i4fTlUeCDUJ4GYRyRJJF37TarC7abEZhFC8MqBZNg6+kSNRmqLipkzSrZhhmSv4sJ0qT7w59hQ6Yc+R+8bpuP1w2ki1742D5mlB8e6B7Dyx4PY9MsxrKKzwHNOHMoe4PYUd/1BUoZQQdTYYOqFNNVIaETcXJErv70TrWTzs7eAFjq5FSriOQGTTkxfQWa6Ks98TvZQ9YrnwknNjCUziJxcgZHESBhNcodPkaBZDQ1Iqa0k2V/UybJS3BJSYVnxHpkvn9PF+lVE9hsxR5HDJiS/I9n7kRjBgVl+Cvr4tiU6yc0v0/19hOVvxeKiXQjaEYkvXS6R8g6ZDyzL22TlO1YdD0al1eSzpB0zc2Ngpb7xvJpPlokz/cjYqk9nr9F/Mga9H0S+6QjIWo1uSri897osAt/GuUdGH1z0g9TaKqiPA0QSv6BjgXq0qDAH3r/uXXFG+K2rNqrOfLJc98DX9LsDcxI8MzRPIjcZ4qmMD2HvuylbwxjvvmQMtvXXLe2yLVRE0D+ETETgxofmJcBky8IkcuQF6MVtjGPEv5Ix+HVhdpQgvMxGhFM0IW2btmvauZ4hbajVtB8raM54WxhjGDEmGaOBZqTi/DC2cR/XPStkPSN6QLNpvnjh5tEW+bzGgcKz/Wi4Mna//pOMwfK4yThLi3Olh48mmeitkCq9olzEdcd7b+BoZ5+sKhu960703/KLMy4yBjuMN82ZIX1nAwXlRIhr+TMTsuz8imGJeS+ys41xxkV2N1gmDtRF/Yq2F2Mrbf0CjxfLvtuDB+PnI4Dm9M2CdHlmJPwb9ZwnmcTIUVEAAAAASUVORK5CYII=",
    "_nf": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAACcElEQVR4Xr2U7WtSURzH93flyHwa25x6p9eHdOr1CbFpsIKR9cK9iI25BsEa9GYU2yK1LZyw2psiGC1bEbEeFotIwy2NBrMMjba+XY9kenTuzhd94HDO+XJ+58O599zbgf9IBx18yWWRSqWQTqcFthQy25/pbZrSIFMppOjXaqHX6wU1lmVxQiTCPr1RExpkpUIepw0sOM4Bt9vdsjmdTmg0amylP9HbNKVBVuag+B1mEwt7C2FFxCCVydLlh9JURtj/CYvFCLudayJygNFosb3zla5qyeEywi8MWM11j9TFn4jRssju5unFR3KErILTNsCfxgWXywUdf3lye0V6iSAEyS4EvOAcDthtNv6kXDVff5pENBrFUiKBzE6upqI5gmTDfg+svIhzech849kalL09kMvlcDic0PYzkEqlODd8kaqsR7BMpVYjXzzAx3cbEHV24sZcpG7N1ttXMBl0MNucdXktgmRDXg7BkTEyZpk+XJ+ZJ+NILEr6lXtx0pcKu1DIZYjFlyuFFIJkPrsJyw9WsZdLQyKRkWzx1iyUyj4MnvHx35sGl0Yuk3w0FIT37Pna8iqCZMEhPx4nX+D1y+fo1pqquddbvjR26I3/svjtOTCsrTqvRZCszJvN98h82OQvgoLMFyI3yR/EbDGTz2Hi6jTJpybHwHkDtaVVBMv+ourpQmzpPhmPjodJf2Wy0gO/0dvdhZn5yrukObbs4UoC4lMSPFpN1uVF/gfu83BgdMa6vJZjy8osRmYhFp+E3mBCKBRCwD8ImUwKk8WKb4USvbxKW7IyxR8F3F24g4lwGFPXprH2ZJ1e0kDbsnb4A2bsd/UkcgjxAAAAAElFTkSuQmCC",
    "_oc": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAADRElEQVR4Xq1VWUhUYRj9yaeeerJ6qKCgkoqMsrRosZ2gl4JIo8UiFAKTcWszbSHE0EKjMTKKNkjJrdByKSsb92WyXCcZTXPNXCfNrNP3/dcJvTPjVPhw5s7c+e8533e+5Yr0ph4siPZGUHYyPJJj8a4PqDIBTxs64RC2HbOjDuHjEFD0FSjoAoq7Ad0XIO8/IEp7iNjYCXF8ER7V1OPjd8ArNQ4i0AXi9Do4RuxFdnMv7lS8R3J9C64UvAE/875fCaBi9KomtgbBH9XfgN0JVyHOuCO+xoiclkEIv8UQx+Yhvq4RLjcCoMmIlwLZnwdIvB8OdDazuQ87HoYjs6kb9RRk4Wj2tsSlGIMPLyQ7Y8pKUDcItP4Csoi0miw99/oZ4iiz/C7l3qvWISnqmaSl7NdTYEswJXQrdB0jSDa2Iaooz6rgHzGzoCYzAb7pD+B2MxCPDZ+Q0zaEAvovt30YJVSvtx0/kU+/C0nYQLU8kZ0E4euEmZf3QQSthL5HyU4tZCHGKKPD5b1KTZgwxdgObWkRXrSYcDE3A7kUPZ9h67mZKgeAxPrPKO9Rzh5MvC5rqua1KmaGrlO5mmvAFrJA4w9Aq9djRoQHvFLi5L1rZaWIKs6XzcKBqrnsiqnBFnun3cN0Epl6YSdZtgqb755HB4CY0mKIYDfUmiyfGwu7Yhxp0wjg+fgahP8yiJCNEGc3Q4Rtgzi5BtMu7YJzrB+EZim05WX4MGDJ8VditWTRudwsrL51UhZfUMdJkbE4u0kJIHQLZbcK96sM0PdZck0oxlvEKcZHyYbb25qQGiEkfGotjcag/dYfC87KMXyPErWadCLQsDMMg5acNsUqyIojT27Luowj4wylbTYy5fsaZ+jaRyzmzaYYrx62QwSsIHJ3xUr+Tl3Ii1vZnRsU68aJbZHW/1NmPFfFBOEzG3OvHoZrXDASDc1oGIZcZ800b3MiD2BW5P7xVlOThNF601uZN5tiDM4uv/OnJK80Ka+XP8EQaqiuzxu75BtDBLtKIeG/XAak5rIrJklt7DkzuM0f0qsp8GWqHBPeoRyk+hzDrtjfgBd0Ja2q+dFHkUaZqhvDjEkRY/Bcxdcax1mtxqSJMWzZZ8ZvnQXSOU68hJ8AAAAASUVORK5CYII=",
    "_sa": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAC3ElEQVR4Xp2VS0hUYRTHvyBatKhNy0JwUVAmRKW96TFFCQa1KNrkQnqQFJWOmTqmiYVFhmIR2IvosUglUxJRETWd0XFKR5Pxma9iyleWmhr175z5xnLu3LndafGHy9zvnN895/ufM8L+Fah0TiEw8xgKe4boeRplHyeQY29BQkURSvpGkVJdijtNdtQNA7VD/y9heHQZ4mQARPRapNZW4KqlCm/HAOsoUDIwBtsXOjj4C/ZvQPmHcVgIyFIm0iPRMg60TwIvewYR/uw6hMmAnhkJ65oGnji6kVhZjHRLNV5//olGglc7Z8BxZpWEWhKzD/UjQOsE8LyjH9Flebhnb0ZoTizE2SCI2A2kEKp+DcS5YAhjCCIK7sJB599PyzhlYjX9gc2Fchs/AViedQIiYTvEpT2eSjJAxG2COE/wMyuxKjsK7d9lHLe4RgWkCmM1k2nmJe2GuLjFG+QBpTOmXViQEoZIqvRafQ0sFN9N1TK80Q33CWPHFfeNUPtWywqUADWZuNLN1N71smL6gMVXDsJYXoBSt6lUYawmqizLZiVgsPx6ZXItuasV8dsgji91udvlaF8wVhs51FiWD3F6hWynP1BubfI+vKIZ5ZGZzekTxmKX5XYO4FButjSKHiCfid+KwJuR6JryzKcJY/G8OcmZARkREIk7vJPPhdBIiJh1rrsr6h12OdsvGItnScSG+jYM/06gTFsDeP2xG5UgXbAGqux+c6v8YmUliTtle+ndkbzb6JiSW6Vm0DuPLhhfcFxFIcSFjX9Bbrctu3EUi9IO4EW3E45J71ilNGFmmg8bVeYxAjRH85P3Ykn6YWRYLej9Ie9VGasmTRj3PZ/cyBvCVQ3dS9jjNNe/QCe1bHZ+9EoTxskyrGa5HUhBt6LQSWuoTuXy9UgT9oZgSVUlEKcCsTB1P4r7R3W3TE2aMFYTLdMH7xwIf5qOh61tXu/90T9hLLY/u1JtdvzRb1R6mDy+qup2AAAAAElFTkSuQmCC",
    "_wo": "iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAEjUlEQVR4Xp1Va1CUZRR+px/VTJM1Tc30J6dodCZLy7BSASklYiYcsqxJp5ou1gzJKMRFua2OyEUigTUVb4ADErCVslEEOg43gQWXhV1dgQUXQUwuiihUYvp0zvv5sZfP6Uc/Dt/yXs5zznOec17RNAa0jbusanACqS31MPQOwdg/ijzrGegt7agcuIqWKwCfb72qfNmaydT103Tfeh3oIDPdXXM34fgb2G87i+KuPuy32rD88FYCsGF9dTnENy+RLYQI98Fui0U6YyA+3zEBdJLThpFb+G1wHH3kJ9/eg4+NB+luGRpHb6OX1rr+BHr+AuyTBLYkPxEL9kbioe1hCDmSjpf3RSOsLBsF9m6EV5VAxCxC1ImfcdBml2B8+dPKQjyd8wV2UcZrjuZhRdF2zEpdBRH3GsSmJYpFvYj7t70NETEHs9Leg++BWIhH099XNpPegIh9FcMAPjEewg5TI06N3kGpYxD2Kc7gH9QNTyOD1lcZcvDAtlB5Xmz2g0gIoPvLIXRvQmwJVox/x/shtPQ7vFWSQT7zIbrIkUhe4bL4ADySvhoPU6QlPf1on1D4ttA35mQF/At1eCzjA4jEQE/n3pYcJJOovHAFRVSis0xjN9GyIC+KolumHOIIKdJyx0UpGLW4XKNoAgs+kob5ezdSRkuV4LxB1Kw2LcbKsp045hxG+7W7ArHQj5TmWsmxjHb9HGS2NePMpKeSmMp3DXr4FySjg+5UDVxTwDjIxNc9wSijpPpq6NvNqOgfm1Gr4D+smiAq8vN7NqBm6IbcZEmrQCzj2ss3SQCLiWZ/GTXX6vHMD7GscAvm7gpX6s77zMzGF6QiOUAVaAaMjWu3lJSZUFeFCufITOpqveJqKxVBqDQRC8HFaZJOOoJnctchq60F920NQTz5cO8/DRgb90NmaxMSiYKIGgPO31TWuXZFXedlv4nYV1wC0AWhuNspi69rPC6p/7HvEnaaW+k7BJNb82vA2JwEMDv7c4gNzyGoOBV/3HFl9wspiyeLiPZV6rXZX+5xBtyDbKxYrnlKU61sHduN/wDj7Fj+0hnVgfuJI+c9nh4O3ufMqIFjThplk6t3mwmUezGp/ndS86CUPddUVbUGjGfbul+LFGknBMIn90sPhzzeHkxZKcFW//Q9fnAMaGYljzHONqw8h9Q4IjO+JxjbwC0orUCCSDc1eIiFgZ/K/owUN09SuqfTqgFjY6HI2UrsmMeVNQ0Yy7zu8rScaQtpTjqnPfc56rXH9uFZ/VeyZdyBVDAeACJirpyf4msfGRBnpwHjRb3FLGvGWbj3m2o8CLiHvNdnAClgrjMzFFqaJUXCr4AGjCmLPHEUWadNHvT9X1OfpcPnerVgXFjjhTGaJJOapryXcRbe99UJ5D6JuDzCfZGjYJlaKW0eW95OWKlMCVPENLIy+R43/7kp5YHk/+tJ/pK6kduyFDzszcSSqL54neQ5iuOXpvBt6yns7uyErqEGgfRiqw0ps6WB+o4hFyElOxBAz8yiA3F4InMNROR8qTi/giQaBPNcr7v8ksX44smsj+Qo+xcctXkZpj12GwAAAABJRU5ErkJggg=="
};


///////////////////////////////////////////правила
function datePassportIssuedMustBeBeforeExpired(issued, expired) {
    if (typeof expired != 'undefined' && typeof expired != 'undefined')
        if (issued > expired)
            return "date passport Issued Must Be Before dateExpired! ";
    return "";
}

function datePassportExpiredMustBeAfterIssued(issued, expired) {
    if (expired < issued)
        return "date passport Expired Must Be After Issued date! ";
    return "";
}

function dateMustBeAfterCurrentDate(date) {
    let currentDate = new Date();
    if (date < currentDate )
        return "Date must be after current date!"
    return ""
}

function dateMustBeBeforeCurrentDate(date) {
    let currentDate = new Date();
    if (date > currentDate )
        return "Date must be before current date!"
    return ""
}

function arrivalDateMustBeBeforeDeparture(arrival, departure){
    if (arrival > departure)
        return "Arrival date must be before departure date!"
    return ""
}

function departureDateMustBeAfterArrivalDate(arrival, departure){
    if (departure < arrival)
        return "Departure date must be after arrival date!"
    return ""
}

function maxDaysBetweenArrivalAndDeparture30(arrival, departure){
    let day = 84 * 1000 * 1000;
    if ((departure - arrival) / day > 30)
        return "Your tourney can not be longer 30 days";
    return "";
}

function passportsMustBeValid6MonthsAfterDeparture(departureDate, passportsExpiredDates){
    //ищем самую раннюю дату окончания паспорта
    let minDate = new Date(3000,0,0);
    passportsExpiredDates.forEach((date) => {
        if (minDate > date)
            minDate = date;
    })

    //проверяем, что при добавлении 6 месяцев к дате отъезда, самый рано истекающий паспорт все еще действителен
    if (addMonths(departureDate, 6) > minDate)
        return "Passport must be valid at least 6 months after departure date";

    return "";
}

function secondArrivalDateMustBeLaterThanFirstDepartureDate(secondArrival, firstDeparture) {
    if (secondArrival < firstDeparture){
        return "second arrival date must be later than first departure date";
    }
    return "";
}

function someCountriesCannotRegitsterInPiter(country, registerCity){
    let restrictedCountries = ['Singapore', 'Malaysia'];
    if(registerCity == 'YES_Piter')
        if(restrictedCountries.includes(country))
            return `${country} can't register in Saint Petersburg`
    return ""
}

function processingDaysForCaucasusCities(city) {
    let caucasCities = ['Makhachkala', 'Pyatigorsk', 'Vladikavkaz', 'Magas'];

    if(caucasCities.includes(city))
        return 'Visa processing for Caucasus cities is 10 days'
    return ""
}

function someCountriesCanBeDangerous(canArrive) {
    if(!canArrive)
        return 'Unfortunally, your citizenship is not allowed in Russia'
    return ""
}

function citiesCannotContainDuplicates(cities) {
    let isDuplicates = false;
    cities.forEach((city, index) => {
        let citiesCopy = JSON.parse(JSON.stringify(cities));
        citiesCopy.splice(index, 1);
        if (citiesCopy.includes(city))
            isDuplicates = true;
    })

    if (isDuplicates)
        return "Locations can not contain duplicates cities";
    return "";
}

function warningRegistration7Days(arrivalDate, departureDate, registrationValue) {
    let days = 0;
    let day = 86400000;
    if (registrationValue !== "NO"){
        if (typeof arrivalDate !== "undefined" && typeof departureDate !== "undefined")
            days = (departureDate - arrivalDate) / day;
        if (days <= 7 )
            return "Your journey is less than 7 days, so you don't need registration!";
    }



    return "";
}

function valueCanNotBeEmpty(value){
    if (value === null){
        return 'This field cannot be empty'
    }
    else if (typeof value === 'undefined' || value.trim() === ''){
        return 'This field cannot be empty'
    }
    return '';
}

function valueMustContainOnlyLetters(value){
    let reg = /^[a-z]{1,}$/gi;
    if (!reg.test(value) && value != ''){
        return 'This field must contain only letters'
    }
    return ''
}

function valueMustContainOnlyDigits(value){
    let reg = /^[0-9]{1,}$/gi;
    if (!reg.test(value) && value != ''){
        return 'This field must contain only digits'
    }
    return ''
}

function emailMustBeValid(value){
    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/gi;
    if (!reg.test(value)){
        return 'email must be valid';
    }
    return '';
}

function transsiberianRailwayCanNotBeAlone(hasSiberianRailWay, anotherCitiesNotSelected){
    if (hasSiberianRailWay && anotherCitiesNotSelected)
        return 'Transsiberian Railway can not be only one location';

    return '';
}

function userMustReadTerms(value){
    if (value === "no")
        return "You should read terms and conditions";
    return "";
}

function userAgreeVisaSuitable(value){
    if (value === "no")
        return "You should check 'yes'";
    return "";
}

let currentYear = new Date().getFullYear();
let minDefaultYear = currentYear - 100;
let currentDate = new Date();

// setTimeout(()=> {
//     $(".datepicker_jq").each(function(index, item) {
//         let minYearAttr = $(item).attr("data-minyear");
//         let maxYearAttr = $(item).attr("data-maxyear");
//
//         if (typeof minYearAttr === "undefined") $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
//         else $(item).datepicker("option", "yearRange", minYearAttr + ":" + currentYear);
//
//         if (typeof maxYearAttr === "undefined") $(item).datepicker("option", "yearRange", currentYear + ":" + currentYear + 20);
//         else $(item).datepicker("option", "yearRange", currentYear + ":" + maxYearAttr);
//
//         if (typeof minYearAttr === "undefined" && typeof maxYearAttr === "undefined")
//             $(item).datepicker("option", "yearRange", minDefaultYear + ":" + currentYear);
//         else $(item).datepicker("option", "yearRange", minYearAttr + ":" + maxYearAttr);
//     });
// },500)


//ВАЛИДАЦИЯ СВЯЗКИ ДАТА ВЫДАЧИ/ОКОНЧАНИЯ ПАСПОРТА + ДАТА ПРИЕЗДА/ДАТА ВЫЕЗДА

/////////////////////////////////////////////обработчики изменений данных

$(document).on("blur propertychange change input paste", 'input, select', function(e){
    if (e.type === 'focusout'){
        $(this).attr('data-visited', 'true');
    }
})

$(document).on("blur propertychange change input paste", ".input-group-size", function(e) {

    validateGroupSize($(this));
});
$(document).on("blur propertychange change input paste", ".input-entries", function(e) {

    validateEntries($(this));
});
$(document).on("blur propertychange change input paste", ".input-purpose", function(e) {

    validatePurpose($(this));
});
$(document).on("blur propertychange change input paste", ".input-delivery", function(e) {

    validateDelivery($(this));
});


$(document).on("blur propertychange change input paste", ".input-passport-issued", function(e) {

    validatePassportIssued($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-passport-expired", function(e) {

    validatePassportExpired($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date1", function(e) {

    validateArrival1($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date1", function(e) {

    validateDeparture1($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date2", function(e) {

    validateDeparture2($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date2", function(e) {

    validateArrival2($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-citizenship", function(e) {

    validateCitizenship($(this));
});

$(document).on("blur propertychange change input paste", ".input-registration", function(e) {

    validateRegistration($(this));
});

$(document).on("blur propertychange change input paste", ".input-birth-date", function(e) {

    validateBirthDate($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-city", function(e) {

    validateProcessingCities($(this));
});

$(document).on("blur propertychange change input paste", "[name^='gender_']", function() {
    validateGenders($(this));
});

$(document).on('blur propertychange change input paste', '.input-firstname', function(e){

    validateFirstName($(this));
})

$(document).on('blur propertychange change input paste', '.input-middlename', function(e){

    validateMiddleName($(this));
})

$(document).on('blur propertychange change input paste', '.input-surname', function(e){

    validateSurname($(this));
})

$(document).on('blur propertychange change input paste', '.input-passport-number', function(e){

    validatePassportNumber($(this));
})

$(document).on('blur propertychange change input paste', '.input-email', function(e){

    validateEmail($(this));
})
$(document).on('blur propertychange change input paste', '.input-phone', function(e){

    validatePhone($(this));
})
$(document).on('blur propertychange change input paste', '.input-country', function(e){

    validateCountryApply($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-make', function(e){

    validateVehicleMake($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-color', function(e){

    validateVehicleColor($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-lisence', function(e){

    validateVehicleLisence($(this));
})
$(document).on('blur propertychange change input paste', '.input-hotel', function(e){

    validateProcessingHotels($(this));
})
$(document).on('blur propertychange change input paste', '[name=haveRead]', function(){
    validateHaveReadTerms($(this));
})
$(document).on('blur propertychange change input paste', '[name=agreeVisaSuitable]', function(){
    validateAgreeVisaSuitable($(this));
})







//функции-обработчики

//валидация даты выдачи паспорта


function validatePassportIssued(e, trigger) {
    if ($(e).attr('data-visited') === "true"){
        let index = $(".input-passport-issued").index(e);
        passportIssued[index] = {
            val:$(e).data('datepicker').date,
            element: $(e)
        };

        let errorsText = "<div>" + valueCanNotBeEmpty($(passportIssued[index].element).val()) + "</div>";
        if (valueCanNotBeEmpty($(passportIssued[index].element).val()) === ""){
            if (typeof passportExpired[index] != "undefined") {
                errorsText += datePassportIssuedMustBeBeforeExpired(passportIssued[index].val, passportExpired[index].val);
            }
            errorsText += "<div>" + dateMustBeBeforeCurrentDate(passportIssued[index].val) + "</div>";
        }

        $(e)
            .parent()
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)

        if (typeof passportExpired[index] !== "undefined" && !trigger) validatePassportExpired(passportExpired[index].element, true);
    }
}

//валидация даты окончания действия паспорта
function validatePassportExpired(e, trigger) {
    if ($(e).attr('data-visited') === "true"){
        let index = $(".input-passport-expired").index(e);
        passportExpired[index] = {
            val:$(e).data('datepicker').date,
            element: $(e)
        };

        let errorsText = "<div>" + valueCanNotBeEmpty($(passportExpired[index].element).val()) + "</div>";

        if ( valueCanNotBeEmpty($(passportExpired[index].element).val()) === ""){
            if (typeof passportIssued[index] != "undefined") {
                errorsText += datePassportExpiredMustBeAfterIssued(passportIssued[index].val, passportExpired[index].val);
            }
            errorsText += "<div>" + dateMustBeAfterCurrentDate(passportExpired[index].val) + "</div>";
        }



        $(e)
            .parent()
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)

        if (typeof passportIssued[index] !== "undefined" && !trigger) validatePassportIssued(passportIssued[index].element, true);

        if (!trigger && typeof departureDate2 !== "undefined") validateDeparture2(departureDate2.element, true);

        if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
    }
}

//валидация даты вьезда
function validateArrival1(e, trigger) {
    if ($(e).attr('data-visited') === "true"){
        if ($(e).attr('data-visited') === "true"){
            arrivalDate1 = {
                val:$(e).data('datepicker').date,
                element: $(e)
            };

            let warningText = "";
            let errorsText = "<div>" + valueCanNotBeEmpty($(arrivalDate1.element).val()) + "</div>";
            if (valueCanNotBeEmpty($(arrivalDate1.element).val()) === ""){
                errorsText += dateMustBeAfterCurrentDate(arrivalDate1.val);
                if (typeof departureDate1 !== "undefined" && $(departureDate1.element).val() !== "")  {
                    errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>";
                    errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate1.val, departureDate1.val) + "</div>";

                }

                if (registration.val !== "NO" && typeof validateWarningRegistration7Days(1) !== "undefined"  && validateWarningRegistration7Days(1) !== ""){
                    warningText += '<div>' + validateWarningRegistration7Days(1) + "</div>";
                }
            }


            $(e)
                .parent()
                .next()
                .html(errorsText);

            $(e).parent().next().next().html(warningText)

            checkIfFieldCorrect(errorsText, e)

            if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
            if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
        }
    }
}

//валидация даты выезда
function validateDeparture1(e, trigger) {

    if ($(e).attr('data-visited') === "true"){
        departureDate1 = {
            val:$(e).data('datepicker').date,
            element: $(e)
        };

        let errorsText = "<div>" + valueCanNotBeEmpty($(departureDate1.element).val()) + "</div>";
        let warningText = "";
        if (valueCanNotBeEmpty($(departureDate1.element).val()) === ""){
            errorsText += dateMustBeAfterCurrentDate(departureDate1.val);
            if (typeof arrivalDate1 !== "undefined" && $(arrivalDate1.element).val() !== "") {
                errorsText += "<div>" + departureDateMustBeAfterArrivalDate(arrivalDate1.val, departureDate1.val) + "</div>";
                errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate1.val, departureDate1.val) + "</div>";
                errorsText += "<div>" + valueCanNotBeEmpty($(departureDate1.element).val()) + "</div>";
            }

            if (passportExpired.length > 0) {
                let passportExpiredDates = [];
                passportExpired.forEach(item => {
                    passportExpiredDates.push(extractObjectField(item, "val"));
                });
                errorsText += "<div>" + passportsMustBeValid6MonthsAfterDeparture(departureDate1.val, passportExpiredDates) + "</div>";
            }

            if (registration.val !== "NO" && typeof validateWarningRegistration7Days(1) !== "undefined" && validateWarningRegistration7Days(1) !== ""){
                warningText = '<div>' + validateWarningRegistration7Days(1) + "</div>";
            }
        }



        $(e)
            .parent()
            .next()
            .html(errorsText);
        $(e)
            .parent()
            .next()
            .next()
            .html(warningText);

        checkIfFieldCorrect(errorsText, e)

        if (!trigger && typeof arrivalDate1 !== "undefined") validateArrival1(arrivalDate1.element, true);
        if (!trigger && typeof arrivalDate2 !== "undefined") validateArrival2(arrivalDate2.element, true);
        if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
    }


}

//валидация даты вьезда
function validateArrival2(e, trigger) {
    if ($(e).attr('data-visited') === "true"){
        arrivalDate2 = {
            val:$(e).data('datepicker').date,
            element: $(e)
        };

        let errorsText = valueCanNotBeEmpty($(arrivalDate2.element).val());
        let warningText = "";
        if (valueCanNotBeEmpty($(arrivalDate2.element).val()) === ""){
            errorsText = dateMustBeAfterCurrentDate(arrivalDate2.val);
            if (typeof departureDate2 !== "undefined" && $(departureDate2.element).val() !== "") {
                errorsText += "<div>" + valueCanNotBeEmpty($(arrivalDate2.element).val()) + "</div>";
                errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate2.val, departureDate2.val) + "</div>";
                errorsText += "<div>" + arrivalDateMustBeBeforeDeparture(arrivalDate2.val, departureDate2.val) + "</div>";
            }

            if (typeof departureDate1 !== "undefined" &&  $(departureDate1.element).val() !== "") {
                errorsText += "<div>" + secondArrivalDateMustBeLaterThanFirstDepartureDate(arrivalDate2.val, departureDate1.val) + "</div>";
            }


            if (registration.val !== "NO" && typeof validateWarningRegistration7Days(2) !== "undefined"  && validateWarningRegistration7Days(2) !== ""){
                warningText = '<div>' + validateWarningRegistration7Days(2) + "</div>";
            }
        }


        $(e)
            .parent()
            .next()
            .html(errorsText);
        $(e)
            .parent()
            .next()
            .next()
            .html(warningText);

        checkIfFieldCorrect(errorsText, e)

        if (!trigger && typeof departureDate2 !== "undefined") validateDeparture2(departureDate2.element, true);
        if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
        if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
    }
}

//валидация даты выезда
function validateDeparture2(e, trigger) {
    if ($(e).attr('data-visited') === "true"){
        departureDate2 = {
            val:$(e).data('datepicker').date,
            element: $(e)
        };

        let errorsText = "<div>" + valueCanNotBeEmpty($(departureDate2.element).val()) + "</div>";
        let warningText = "";
        if (valueCanNotBeEmpty($(departureDate2.element).val()) === ""){
            if(typeof departureDate1 !== "undefined" && $(departureDate1.element).val() !== "")
                errorsText += dateMustBeAfterCurrentDate(departureDate1.val);

            if (typeof arrivalDate2 !== "undefined" &&  $(arrivalDate2.element).val() !== "") {
                errorsText += "<div>" + departureDateMustBeAfterArrivalDate(arrivalDate2.val, departureDate2.val) + "</div>";
                errorsText += "<div>" + maxDaysBetweenArrivalAndDeparture30(arrivalDate2.val, departureDate2.val) + "</div>";

            }

            if (passportExpired.length > 0) {
                let passportExpiredDates = [];
                passportExpired.forEach(item => {
                    passportExpiredDates.push(extractObjectField(item, "val"));
                });
                errorsText += "<div>" + passportsMustBeValid6MonthsAfterDeparture(departureDate2.val, passportExpiredDates) + "</div>";
            }
        }

        if (registration.val !== "NO" && typeof validateWarningRegistration7Days(2) !== "undefined" && validateWarningRegistration7Days(2) !== ""){
            warningText += '<div>' + validateWarningRegistration7Days(2) + "</div>";
        }

        $(e)
            .parent()
            .next()
            .html(errorsText);
        $(e)
            .parent()
            .next()
            .next()
            .html(warningText);

        checkIfFieldCorrect(errorsText, e)

        if (!trigger && typeof arrivalDate2 !== "undefined") validateArrival2(arrivalDate2.element, true);
        if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
    }
}

function validateCitizenship(e, trigger){
    if ($(e).attr('data-visited') === "true"){
        citizenship = {
            val: $(e).val(),
            element: $(e)
        };

        let errorsText =  '<div>'+ valueCanNotBeEmpty(citizenship.val) +'</div>';

        if(valueCanNotBeEmpty(citizenship.val) == ''){
            errorsText = '<div>' + someCountriesCanBeDangerous(false) + '</div>';
            Visas.Russian.Rules.RuleChecker.Current.IsTouristVSDServiceAvailable(citizenship.val, function(res) {
                errorsText = '<div>' + someCountriesCanBeDangerous(res) + '</div>'
            })

            if (typeof registration !== 'undefined')
                errorsText += someCountriesCannotRegitsterInPiter(citizenship.val, registration.val);
        }

        $(e)
            .parent()
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)

        if (!trigger && typeof registration !== "undefined") validateRegistration(registration.element, true);
    }
}

function validateRegistration(e, trigger){
    if ($(e).attr('data-visited') === "true"){
        registration = {
            val: $(e).val(),
            element: $(e)
        };

        let errorsText = "";
        if (typeof citizenship !== 'undefined')
            errorsText = someCountriesCannotRegitsterInPiter(citizenship.val, registration.val);

        let warningText = "";
        if (registration.val !== "NO" && typeof validateWarningRegistration7Days(1) !== "undefined" && validateWarningRegistration7Days(1) !== ""){
            warningText = '<div>' + validateWarningRegistration7Days(1) + "</div>";
        }

        $(e)
            .parent()
            .next()
            .html(errorsText);

        $(e)
            .parent()
            .next()
            .next()
            .html(warningText);

        checkIfFieldCorrect(errorsText, e)

        if (!trigger && typeof citizenship !== "undefined") validateCitizenship(citizenship.element, true);

        if (!trigger && typeof arrivalDate1 !== "undefined") validateArrival1(arrivalDate1.element, true);
        if (!trigger && typeof arrivalDate2 !== "undefined") validateArrival2(arrivalDate2.element, true);
        if (!trigger && typeof departureDate1 !== "undefined") validateDeparture1(departureDate1.element, true);
        if (!trigger && typeof departureDate2 !== "undefined") validateDeparture2(departureDate2.element, true);
    }
}

function validateBirthDate(e, trigger) {
    if ($(e).attr('data-visited') === "true"){
        birthDate = {
            val: $(e).data('datepicker').date,
            element: $(e)
        };

        let errorsText =  '<div>' + valueCanNotBeEmpty($(e).val()) + '</div>';
        if ( valueCanNotBeEmpty($(e).val()) === ""){
             errorsText += '<div>' + dateMustBeBeforeCurrentDate(birthDate.val) + '</div>';
        }
        $(e)
            .parent()
            .next()
            .html(errorsText);
        checkIfFieldCorrect(errorsText, e)
    }
}

function validateProcessingCities(e, trigger) {
    if ($(e).attr('data-visited') === "true"){
        processingCity = {
            val: $(e).val(),
            element: $(e)
        };

        let index = $(".input-city").index(e);
        cities[index] = {
            val: $(e).val(),
            element: $(e)
        };

        let citiesVal = []
        cities.forEach((city) => {
            citiesVal.push(extractObjectField(city, "val"))
        })

        let hasSiberianRailWay = false;
        let anotherCitiesNotSelected = true;
        citiesVal.forEach((item) => {
            if (item === "Transsiberian Railway")
                hasSiberianRailWay = true;

            else if (item !== null)
                anotherCitiesNotSelected = false;
        })

        let errorsText = '<div>' + valueCanNotBeEmpty(cities[index].val) + '</div>';
        errorsText += '<div>' + transsiberianRailwayCanNotBeAlone(hasSiberianRailWay, anotherCitiesNotSelected) + '</div>';

        errorsText += "<div>" + citiesCannotContainDuplicates(citiesVal) + "</div>";

        let warningText = '<div>' + processingDaysForCaucasusCities(processingCity.val) + '</div>';

        $(e)
            .parent()
            .next()
            .html(errorsText);
        $(e)
            .parent()
            .next()
            .next()
            .html(warningText);

        checkIfFieldCorrect(errorsText, e)

        if (!trigger){
            cities.forEach((item) => {
                validateProcessingCities(item.element, true);
            })
            hotels.forEach((item) => {
                validateProcessingHotels(item.element, true);
            })
        }

    }
}

function validateProcessingHotels(e, trigger) {

    if ($(e).attr('data-visited') === "true"){
        let index = $(".input-hotel").index(e);
        hotels[index] = {
            val: $(e).val(),
            element: $(e)
        };

        let errorsText = '<div>' + valueCanNotBeEmpty(hotels[index].val) + '</div>';

        $(e)
            .parent()
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validateWarningRegistration7Days(entryNumber){
    let res;
    if (entryNumber == 1)
        if (typeof arrivalDate1 !== 'undefined' && typeof departureDate1 !== 'undefined' && $('.input-departure-date1').val() != "" &&  $('.input-arrival-date1').val() != "" && typeof registration !== "undefined")
            res = res || warningRegistration7Days(arrivalDate1.val, departureDate1.val, registration.val)
    if (entryNumber == 2)
        if (typeof arrivalDate2 !== 'undefined' && typeof departureDate2 !== 'undefined' && $('.input-departure-date2').val() != "" &&  $('.input-arrival-date2').val() != "" && typeof registration !== "undefined")
            res = res || warningRegistration7Days(arrivalDate2.val, departureDate2.val, registration.val)

    return res;
}

function validateGenders(e) {
    if ($(e).is(':checked'))
        $(e).closest('.radio-buttons').next('.input__error-label').text('');
}

function validateFirstName(e){
    if ($(e).attr('data-visited') === "true"){
        firstName = {
            val: $(e).val(),
            element: $(e)
        }
        let errorsText = '<div>'+ valueCanNotBeEmpty(firstName.val) +'</div>';
        errorsText += '<div>'+ valueMustContainOnlyLetters(firstName.val) +'</div>';
        $(e)
            .parent()
            .next()
            .html(errorsText);
        checkIfFieldCorrect(errorsText, e)
    }
}

function validateMiddleName(e){
    if ($(e).attr('data-visited') === "true"){
        middleName = {
            val: $(e).val(),
            element: $(e)
        }
        let errorsText = '<div>'+ valueMustContainOnlyLetters(middleName.val) +'</div>';
        $(e)
            .parent()
            .next()
            .html(errorsText);
        checkIfFieldCorrect(errorsText, e)
    }
}

function validateSurname(e){
    if ($(e).attr('data-visited') === "true"){
        surname = {
            val: $(e).val(),
            element: $(e)
        }
        let errorsText = '<div>'+ valueCanNotBeEmpty(surname.val) +'</div>';
        errorsText += '<div>'+ valueMustContainOnlyLetters(surname.val) +'</div>';
        $(e)
            .parent()
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validatePassportNumber(e){
    if ($(e).attr('data-visited') === "true"){
        passportNumber= {
            val: $(e).val(),
            element: $(e)
        }

        let errorsText = '<div>'+ valueCanNotBeEmpty(passportNumber.val) +'</div>';
        $(e)
            .parent()
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validateEmail(e){
    if ($(e).attr('data-visited') === "true"){
        email= {
            val: $(e).val(),
            element: $(e)
        }

        let errorsText = '<div>'+ emailMustBeValid(email.val) +'</div>';
        $(e)
            .parent()
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validatePhone(e){
    if ($(e).attr('data-visited') === "true"){
        phone = {
            val: $(e).val(),
            element: $(e)
        }

        let errorsText = '<div>'+ valueMustContainOnlyDigits(phone.val) +'</div>';
        errorsText += '<div>'+ valueCanNotBeEmpty(phone.val) +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function checkIfFieldCorrect(errorsText, e){
    if (errorsText.replace(/<div>/gi,'').replace(/<\/div>/gi, '').trim() === ''){
        $(e).closest('.input__wrapper').addClass("input__wrapper_correct");
        $(e).closest('.input').addClass("input_correct");
        $(e).closest('.input__wrapper').removeClass("input__wrapper_error");
    }
    else {
        $(e).closest('.input__wrapper').removeClass("input__wrapper_correct");
        $(e).closest('.input').removeClass("input_correct");
        $(e).closest('.input__wrapper').addClass("input__wrapper_error");
    }
}

function validateCountryApply(e){
    if ($(e).attr('data-visited') === "true"){
        countryApplyIn = {
            val: $(e).val(),
            element: $(e)
        }

        let errorsText =  '<div>'+ valueCanNotBeEmpty(countryApplyIn.val) +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validateVehicleMake(e){
    if ($(e).attr('data-visited') === "true"){
        vehicleMake = {
            val: $(e).val(),
            element: $(e)
        }

        let errorsText =  '<div>'+ valueCanNotBeEmpty(vehicleMake.val) +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validateVehicleColor(e){
    if ($(e).attr('data-visited') === "true"){
        vehicleColor = {
            val: $(e).val(),
            element: $(e)
        }

        let errorsText =  '<div>'+ valueCanNotBeEmpty(vehicleColor.val) +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validateVehicleLisence(e){
    if ($(e).attr('data-visited') === "true"){
        vehicleLisence = {
            val: $(e).val(),
            element: $(e)
        }

        let errorsText =  '<div>'+ valueCanNotBeEmpty(vehicleLisence.val) +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);

        checkIfFieldCorrect(errorsText, e)
    }
}

function validateHaveReadTerms(e){
    haveReadTerms = {
        element: $(e),
        val: $(e).attr('value')
    }

    let errorsText = '<div>'+  userMustReadTerms(haveReadTerms.val)  +'</div>';
    $(e)
        .closest('.radio-buttons')
        .next()
        .html(errorsText);
}

function validateAgreeVisaSuitable(e){
    agreeVisaSuitable = {
        element: $(e),
        val: $(e).attr('value')
    }

    let errorsText = '<div>'+  userAgreeVisaSuitable(agreeVisaSuitable.val)  +'</div>';
    $(e)
        .closest('.radio-buttons')
        .next()
        .html(errorsText);
}

function validateGroupSize(e){
    if ($(e).attr('data-visited') === "true"){
        groupSize = {
            element: $(e),
            val: $(e).val()
        }
        let errorsText = '<div>'+  userMustReadTerms(groupSize.val)  +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);
        checkIfFieldCorrect(errorsText, e)
    }
}

function validateEntries(e){
    if ($(e).attr('data-visited') === "true"){
        numberOfEntries = {
            element: $(e),
            val: $(e).val()
        }
        let errorsText = '<div>'+  userMustReadTerms(numberOfEntries.val)  +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);
        checkIfFieldCorrect(errorsText, e)
    }
}

function validatePurpose(e){
    if ($(e).attr('data-visited') === "true"){
         purpose = {
            element: $(e),
            val: $(e).val()
        }
        let errorsText = '<div>'+  userMustReadTerms(purpose.val)  +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);
        checkIfFieldCorrect(errorsText, e)
    }
}

function validateDelivery(e){
    if ($(e).attr('data-visited') === "true"){
        let delivery = {
            element: $(e),
            val: $(e).val()
        }
        let errorsText = '<div>'+  userMustReadTerms(delivery.val)  +'</div>';
        $(e)
            .closest('.input__wrapper')
            .next()
            .html(errorsText);
        checkIfFieldCorrect(errorsText, e)
    }
}

function initializeLocaleDatePicker() {
    setTimeout(() => {
        (function($) {
            $.fn.datepicker.language['en'] = {
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                today: 'Today',
                clear: 'Clear',
                dateFormat: 'dd-mm-yyyy',
                timeFormat: 'hh:ii aa',
                firstDay: 0
            };
        })(jQuery);

        
        // .mask('99-99-9999')
    }, 500);
}

$('.datepicker-here').change(function() {
    let date = $(this).val();
    let array = date.split("-").reverse();
    if (date.length === 10 && new Date(array[0], array[1], array[2]) == "Invalid Date") {

    }
})

$(".hint__tab").click(function(){
    $(this).closest('.hint').find(".hint__tab").removeClass('hint__tab_active');
    $(this).addClass("hint__tab_active");

    $(this).closest('.hint').find('[data-tab]').removeClass('active');
    $(this).closest('.hint').find('[data-tab=' + $(this).attr('data-head-tab') + ']').addClass('active')
})



$(".input__select, .input__field").on('focusin',function() {
  $(".hint").each((i, item) => {
    $(item).removeClass('active');
  });

  $(".input").each((i, item) => {
    $(item).removeClass('focus');
  });

  $(this).closest('.input').children('.hint').addClass('active');
  // $(this).closest('.input').children('.input__highlight').addClass('focus');
  $(this).closest('.input').addClass('focus');
});



$("#phone").intlTelInput({
  // allowDropdown: false,
  // autoHideDialCode: false,
  autoPlaceholder: "polite",
  // dropdownContainer: "body",
  // excludeCountries: ["us"],
  formatOnDisplay: true,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
  // hiddenInput: "full_number",
  // initialCountry: "auto",
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  separateDialCode: true
});

$(document).ready(function () {
    $(".input-country, .input-citizenship, .input-city").each(function(i,e){
        new NiceCountryInput(e).init();
    });
});

$(document).on("click", ".step__subtitle", function() {
    $(this).toggleClass("step__subtitle_close")
    $(this).next().toggle(1000)
})

setTimeout(function(){
    $('[data-steps]').click(function(){

        let clickedStep = $(this).attr('data-steps');
        for (let i = 1; i < clickedStep; i++)
            checkIsStepCorrect(i);
        checkIsStepCorrect(currStep);
        currStep = $(this).attr('data-steps');
        // setTimeout(() => {
            if (currStep == 4){
                $("[data-role='nextStep']").text("Confirm!");
                $("[data-role='nextStep']").attr("type", "submit");
                $("[data-role='nextStep']").attr("data-role", "confirm");
            }
            else {
                //иначе сделать изменить "continue" на "next step"
                $("[data-role='confirm']").text("next step");
                $("[data-role='confirm']").attr("type", "button");
                $("[data-role='confirm']").attr("data-role", "nextStep");
            }
        // },200)
        //hide all steps
        showCurrStep()

        $(".steps__item_active").addClass("steps__item_visited");

        $(".steps__item").removeClass("steps__item_active");
        $(this).removeClass("steps__item_visited");
        $(this).addClass("steps__item_active");

        $(".steps__line").removeClass("steps__line_filled");
        $(this).prev().addClass("steps__line_filled")
        $(this).prev().prev().prev().addClass("steps__line_filled")
        $(this).prev().prev().prev().prev().prev().addClass("steps__line_filled")
    })

},1000)

!function(n) {
    "function" == typeof define && define.amd
        ? define(["jquery"], function(i) {
            n(i, window, document)
        })
        : n(jQuery, window, document)
}(function(n, i, t, a) {
    "use strict";
    var e = "countrySelect",
        s = 1,
        o = {
            defaultCountry: "",
            defaultStyling: "inside",
            excludeCountries: [],
            onlyCountries: [],
            preferredCountries: ["us", "gb"]
        },
        r = 38,
        u = 40,
        l = 13,
        h = 27,
        c = 65,
        d = 90;
    n(i).on("load", function() {
        !0
    });
    function p(i, t) {
        this.element = i,
        this.options = n.extend({}, o, t),
        this._defaults = o,
        this.ns = "." + e + s++,
        this._name = e,
        this.init()
    }
    p.prototype = {
        init: function() {
            return this._processCountryData(),
            this._generateMarkup(),
            this._setInitialState(),
            this._initListeners(),
            this.autoCountryDeferred = new n.Deferred,
            this._initAutoCountry(),
            this.autoCountryDeferred
        },
        _processCountryData: function() {
            this._setInstanceCountryData(),
            this._setPreferredCountries()
        },
        _setInstanceCountryData: function() {
            var i = this;
            if (this.options.onlyCountries.length) {
                var t = [];
                n.each(this.options.onlyCountries, function(n, a) {
                    var e = i._getCountryData(a, !0);
                    e && t.push(e)
                }),
                this.countries = t
            } else if (this.options.excludeCountries.length) {
                var a = this.options.excludeCountries.map(function(n) {
                    return n.toLowerCase()
                });
                this.countries = y.filter(function(n) {
                    return -1 === a.indexOf(n.iso2)
                })
            } else
                this.countries = y
        },
        _setPreferredCountries: function() {
            var i = this;
            this.preferredCountries = [],
            n.each(this.options.preferredCountries, function(n, t) {
                var a = i._getCountryData(t, !1);
                a && i.preferredCountries.push(a)
            })
        },
        _generateMarkup: function() {
            this.countryInput = n(this.element);
            var i = "country-select";
            this.options.defaultStyling && (i += " " + this.options.defaultStyling),
            this.countryInput.wrap(n("<div>", {class: i}));
            var t = n("<div>", {class: "flag-dropdown"}).insertAfter(this.countryInput),
                a = n("<div>", {class: "selected-flag"}).appendTo(t);
            this.selectedFlagInner = n("<div>", {class: "flag"}).appendTo(a),
            n("<div>", {class: "arrow"}).appendTo(a),
            this.countryList = n("<ul>", {class: "country-list v-hide"}).appendTo(t),
            this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), n("<li>", {class: "divider"}).appendTo(this.countryList)),
            this._appendListItems(this.countries, ""),
            this.countryCodeInput = n("#" + this.countryInput.attr("id") + "_code"),
            this.countryCodeInput || (this.countryCodeInput = n('<input type="hidden" id="' + this.countryInput.attr("id") + '_code" name="' + this.countryInput.attr("name") + '_code" value="" />'), this.countryCodeInput.insertAfter(this.countryInput)),
            this.dropdownHeight = this.countryList.outerHeight(),
            this.countryList.removeClass("v-hide").addClass("hide"),
            this.countryListItems = this.countryList.children(".country")
        },
        _appendListItems: function(i, t) {
            var a = "";
            n.each(i, function(n, i) {
                a += '<li class="country ' + t + '" data-country-code="' + i.iso2 + '">',
                a += '<div class="flag ' + i.iso2 + '"></div>',
                a += '<span class="country-name">' + i.name + "</span>",
                a += "</li>"
            }),
            this.countryList.append(a)
        },
        _setInitialState: function() {
            var n = !1;
            this.countryInput.val() && (n = this._updateFlagFromInputVal());
            var i = this.countryCodeInput.val();
            if (i && this.selectCountry(i), !n) {
                var t;
                this.options.defaultCountry
                    ? (t = this._getCountryData(this.options.defaultCountry, !1)) || (
                        t = this.preferredCountries.length
                        ? this.preferredCountries[0]
                        : this.countries[0])
                    : t = this.preferredCountries.length
                        ? this.preferredCountries[0]
                        : this.countries[0],
                this.defaultCountry = t.iso2
            }
        },
        _initListeners: function() {
            var n = this;
            this.countryInput.on("keyup" + this.ns, function() {
                n._updateFlagFromInputVal()
            });
            this.selectedFlagInner.parent().on("click" + this.ns, function(i) {
                n.countryList.hasClass("hide") && !n.countryInput.prop("disabled") && n._showDropdown()
            }),
            this.countryInput.on("blur" + this.ns, function() {
                n.countryInput.val() != n.getSelectedCountryData().name && n.setCountry(n.countryInput.val()),
                n.countryInput.val(n.getSelectedCountryData().name)
            })
        },
        _initAutoCountry: function() {
            "auto" === this.options.initialCountry
                ? this._loadAutoCountry()
                : (this.selectCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
        },
        _loadAutoCountry: function() {
            n.fn[e].autoCountry
                ? this.handleAutoCountry()
                : n.fn[e].startedLoadingAutoCountry || (n.fn[e].startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(i) {
                    n.fn[e].autoCountry = i.toLowerCase(),
                    setTimeout(function() {
                        n(".country-select input").countrySelect("handleAutoCountry")
                    })
                }))
        },
        _focus: function() {
            this.countryInput.focus();
            var n = this.countryInput[0];
            if (n.setSelectionRange) {
                var i = this.countryInput.val().length;
                n.setSelectionRange(i, i)
            }
        },
        _showDropdown: function() {
            this._setDropdownPosition();
            var n = this.countryList.children(".active");
            this._highlightListItem(n),
            this.countryList.removeClass("hide"),
            this._scrollTo(n),
            this._bindDropdownListeners(),
            this.selectedFlagInner.parent().children(".arrow").addClass("up")
        },
        _setDropdownPosition: function() {
            var t = this.countryInput.offset().top,
                a = n(i).scrollTop(),
                e = t + this.countryInput.outerHeight() + this.dropdownHeight < a + n(i).height(),
                s = t - this.dropdownHeight > a,
                o = !e && s
                    ? "-" + (
                    this.dropdownHeight - 1) + "px"
                    : "";
            this.countryList.css("top", o)
        },
        _bindDropdownListeners: function() {
            var i = this;
            this.countryList.on("mouseover" + this.ns, ".country", function(t) {
                i._highlightListItem(n(this))
            }),
            this.countryList.on("click" + this.ns, ".country", function(t) {
                i._selectListItem(n(this))
            });
            var a = !0;
            n("html").on("click" + this.ns, function(n) {
                a || i._closeDropdown(),
                a = !1
            }),
            n(t).on("keydown" + this.ns, function(n) {
                n.preventDefault(),
                n.which == r || n.which == u
                    ? i._handleUpDownKey(n.which)
                    : n.which == l
                        ? i._handleEnterKey()
                        : n.which == h
                            ? i._closeDropdown()
                            : n.which >= c && n.which <= d && i._handleLetterKey(n.which)
            })
        },
        _handleUpDownKey: function(n) {
            var i = this.countryList.children(".highlight").first(),
                t = n == r
                    ? i.prev()
                    : i.next();
            t.length && (t.hasClass("divider") && (
                t = n == r
                ? t.prev()
                : t.next()), this._highlightListItem(t), this._scrollTo(t))
        },
        _handleEnterKey: function() {
            var n = this.countryList.children(".highlight").first();
            n.length && this._selectListItem(n)
        },
        _handleLetterKey: function(i) {
            var t = String.fromCharCode(i),
                a = this.countryListItems.filter(function() {
                    return n(this).text().charAt(0) == t && !n(this).hasClass("preferred")
                });
            if (a.length) {
                var e,
                    s = a.filter(".highlight").first();
                e = s && s.next() && s.next().text().charAt(0) == t
                    ? s.next()
                    : a.first(),
                this._highlightListItem(e),
                this._scrollTo(e)
            }
        },
        _updateFlagFromInputVal: function() {
            var i = this,
                t = this.countryInput.val().replace(/(?=[() ])/g, "\\");
            if (t) {
                for (var a = [], e = new RegExp("^" + t, "i"), s = 0; s < this.countries.length; s++)
                    this.countries[s].name.match(e) && a.push(this.countries[s].iso2);
                var o = !1;
                return n.each(a, function(n, t) {
                    i.selectedFlagInner.hasClass(t) && (o = !0)
                }),
                o || (this._selectFlag(a[0]), this.countryCodeInput.val(a[0]).trigger("change")),
                !0
            }
            return !1
        },
        _highlightListItem: function(n) {
            this.countryListItems.removeClass("highlight"),
            n.addClass("highlight")
        },
        _getCountryData: function(n, i) {
            for (
                var t = i
                ? y
                : this.countries,
            a = 0; a < t.length; a++)
                if (t[a].iso2 == n)
                    return t[a];
        return null
        },
        _selectFlag: function(n) {
            if (!n)
                return !1;
            this.selectedFlagInner.attr("class", "flag " + n);
            var i = this._getCountryData(n);
            this.selectedFlagInner.parent().attr("title", i.name);
            var t = this.countryListItems.children(".flag." + n).first().parent();
            this.countryListItems.removeClass("active"),
            t.addClass("active")
        },
        _selectListItem: function(n) {
            var i = n.attr("data-country-code");
            this._selectFlag(i),
            this._closeDropdown(),
            this._updateName(i),
            this.countryInput.trigger("change"),
            this.countryCodeInput.trigger("change"),
            this._focus()
        },
        _closeDropdown: function() {
            this.countryList.addClass("hide"),
            this.selectedFlagInner.parent().children(".arrow").removeClass("up"),
            n(t).off("keydown" + this.ns),
            n("html").off("click" + this.ns),
            this.countryList.off(this.ns)
        },
        _scrollTo: function(n) {
            if (n && n.offset()) {
                var i = this.countryList,
                    t = i.height(),
                    a = i.offset().top,
                    e = a + t,
                    s = n.outerHeight(),
                    o = n.offset().top,
                    r = o + s,
                    u = o - a + i.scrollTop();
                if (o < a)
                    i.scrollTop(u);
                else if (r > e) {
                    var l = t - s;
                    i.scrollTop(u - l)
                }
            }
        },
        _updateName: function(n) {
            this.countryCodeInput.val(n).trigger("change"),
            this.countryInput.val(this._getCountryData(n).name)
        },
        handleAutoCountry: function() {
            "auto" === this.options.initialCountry && (this.defaultCountry = n.fn[e].autoCountry, this.countryInput.val() || this.selectCountry(this.defaultCountry), this.autoCountryDeferred.resolve())
        },
        getSelectedCountryData: function() {
            var n = this.selectedFlagInner.attr("class").split(" ")[1];
            return this._getCountryData(n)
        },
        selectCountry: function(n) {
            n = n.toLowerCase(),
            this.selectedFlagInner.hasClass(n) || (this._selectFlag(n), this._updateName(n))
        },
        setCountry: function(n) {
            this.countryInput.val(n),
            this._updateFlagFromInputVal()
        },
        destroy: function() {
            this.countryInput.off(this.ns),
            this.selectedFlagInner.parent().off(this.ns);
            this.countryInput.parent().before(this.countryInput).remove()
        }
    },
    n.fn[e] = function(i) {
        var t = arguments;
        if (i === a || "object" == typeof i)
            return this.each(function() {
                n.data(this, "plugin_" + e) || n.data(this, "plugin_" + e, new p(this, i))
            });
        if ("string" == typeof i && "_" !== i[0] && "init" !== i) {
            var s;
            return this.each(function() {
                var a = n.data(this, "plugin_" + e);
                a instanceof p && "function" == typeof a[i] && (s = a[i].apply(a, Array.prototype.slice.call(t, 1))),
                "destroy" === i && n.data(this, "plugin_" + e, null)
            }),
            s !== a
                ? s
                : this
        }
    },
    n.fn[e].getCountryData = function() {
        return y
    },
    n.fn[e].setCountryData = function(n) {
        y = n
    };
    var y = n.each([
        {
            n: "Afghanistan",
            i: "af"
        }, {
            n: "Albani",
            i: "al"
        }, {
            n: "Algeri",
            i: "dz"
        },  {
            n: "Angola",
            i: "ao"
        },  {
            n: "Argentina",
            i: "ar"
        }, {
            n: "Armenia",
            i: "am"
        },  {
            n: "Australia",
            i: "au"
        }, {
            n: "Austria",
            i: "at"
        }, {
            n: "Azerbaijan",
            i: "az"
        }, {
            n: "Bahrain",
            i: "bh"
        }, {
            n: "Bangladesh",
            i: "bd"
        },{
            n: "Belarus",
            i: "by"
        }, {
            n: "Belgium",
            i: "be"
        },  {
            n: "Benin",
            i: "bj"
        }, {
            n: "Bolivia",
            i: "bo"
        }, {
            n: "Bosnia and Herzegovina",
            i: "ba"
        }, {
            n: "Botswana",
            i: "bw"
        }, {
            n: "Brazil",
            i: "br"
        },  {
            n: "Bulgaria",
            i: "bg"
        },  {
            n: "Burundi",
            i: "bi"
        }, {
            n: "Cambodia",
            i: "kh"
        }, {
            n: "Cameroon",
            i: "cm"
        }, {
            n: "Canada",
            i: "ca"
        }, {
            n: "Cape Verde",
            i: "cv"
        },  {
            n: "Central African Republic",
            i: "cf"
        }, {
            n: "Chad",
            i: "td"
        }, {
            n: "Chile",
            i: "cl"
        }, {
            n: "China",
            i: "cn"
        },  {
            n: "Columbia",
            i: "co"
        },  {
            n: "Republic of Congo",
            i: "cd"
        }, {
            n: "Democratic Republic of the Congo",
            i: "cg"
        },  {
            n: "Costa Rica",
            i: "cr"
        }, {
            n: "Croatia",
            i: "hr"
        }, {
            n: "Cuba",
            i: "cu"
        },  {
            n: "Cyprus",
            i: "cy"
        }, {
            n: "Czech Republic",
            i: "cz"
        }, {
            n: "Denmark",
            i: "dk"
        }, {
            n: "Djibouti",
            i: "dj"
        },   {
            n: "Ecuador",
            i: "ec"
        }, {
            n: "Egypt",
            i: "eg"
        },  {
            n: "Eritrea",
            i: "er"
        }, {
            n: "Estonia",
            i: "ee"
        }, {
            n: "Ethiopia",
            i: "et"
        },  {
            n: "Finland",
            i: "fi"
        }, {
            n: "France",
            i: "fr"
        }, {
            n: "Gabon",
            i: "ga"
        }, {
            n: "Georgia",
            i: "ge"
        }, {
            n: "Germany",
            i: "de"
        }, {
            n: "Ghana",
            i: "gh"
        }, {
            n: "Greece",
            i: "gr"
        },   {
            n: "Guatemala",
            i: "gt"
        },  {
            n: "Guinea",
            i: "gn"
        }, {
            n: "Guyana",
            i: "gy"
        },  {
            n: "Hong Kong",
            i: "hk"
        }, {
            n: "Hungary",
            i: "hu"
        }, {
            n: "Iceland",
            i: "is"
        }, {
            n: "India",
            i: "in"
        }, {
            n: "Indonesia",
            i: "id"
        }, {
            n: "Iran",
            i: "ir"
        }, {
            n: "Iraq",
            i: "iq"
        }, {
            n: "Ireland",
            i: "ie"
        }, {
            n: "Israel",
            i: "il"
        }, {
            n: "Italy",
            i: "it"
        }, {
            n: "Jamaica",
            i: "jm"
        }, {
            n: "Japan",
            i: "jp"
        },  {
            n: "Jordan",
            i: "jo"
        }, {
            n: "Kazakhstan",
            i: "kz"
        }, {
            n: "Kenya",
            i: "ke"
        },  {
            n: "Kuwait",
            i: "kw"
        }, {
            n: "Kyrgyzstan",
            i: "kg"
        }, {
            n: "Laos",
            i: "la"
        }, {
            n: "Latvia",
            i: "lv"
        }, {
            n: "Lebanon",
            i: "lb"
        },  {
            n: "Libya",
            i: "ly"
        }, {
            n: "Lithuania",
            i: "lt"
        }, {
            n: "Luxembourg",
            i: "lu"
        }, {
            n: "Macedonia",
            i: "mk"
        }, {
            n: "Madagascar",
            i: "mg"
        },  {
            n: "Malaysia",
            i: "my"
        },  {
            n: "Mali",
            i: "ml"
        }, {
            n: "Malta",
            i: "mt"
        },  {
            n: "Mauritania",
            i: "mr"
        }, {
            n: "Mauritius",
            i: "mu"
        }, {
            n: "Mexico",
            i: "mx"
        }, {
            n: "Moldova",
            i: "md"
        }, {
            n: "Monaco",
            i: "mc"
        }, {
            n: "Mongolia",
            i: "mn"
        }, {
            n: "Montenegro",
            i: "me"
        },  {
            n: "Morocco",
            i: "ma"
        }, {
            n: "Mozambique",
            i: "mz"
        }, {
            n: "Myanmar",
            i: "mm"
        }, {
            n: "Namibia",
            i: "na"
        },  {
            n: "Nepal",
            i: "np"
        }, {
            n: "Netherlands",
            i: "nl"
        }, {
            n: "New Zealand",
            i: "nz"
        }, {
            n: "Nicaragua",
            i: "ni"
        },  {
            n: "Nigeria",
            i: "ng"
        },  {
            n: "Korea (DPR)",
            i: "kp"
        },  {
            n: "Norway",
            i: "no"
        }, {
            n: "Oman",
            i: "om"
        }, {
            n: "Pakistan",
            i: "pk"
        }, {
            n: "Palestine",
            i: "ps"
        }, {
            n: "Panama",
            i: "pa"
        }, {
            n: "Peru",
            i: "pe"
        }, {
            n: "Philippines",
            i: "ph"
        }, {
            n: "Poland",
            i: "pl"
        }, {
            n: "Portugal",
            i: "pt"
        },  {
            n: "Qatar",
            i: "qa"
        }, {
            n: "Romania",
            i: "ro"
        }, {
            n: "Rwanda",
            i: "rw"
        },   {
            n: "Saudi Arabia",
            i: "sa"
        }, {
            n: "Senegal",
            i: "sn"
        }, {
            n: "Serbia",
            i: "rs"
        }, {
            n: "Seychelles",
            i: "sc"
        },  {
            n: "Singapore",
            i: "sg"
        }, {
            n: "Slovak Republic",
            i: "sk"
        }, {
            n: "Slovenia",
            i: "si"
        },  {
            n: "South Africa",
            i: "za"
        },  {
            n: "Republic of Korea",
            i: "kr"
        }, {
            n: "Spain",
            i: "es"
        }, {
            n: "Sri Lanka",
            i: "lk"
        }, {
            n: "Sudan",
            i: "sd"
        }, {
            n: "Sweden",
            i: "se"
        }, {
            n: "Switzerland",
            i: "ch"
        }, {
            n: "Syria",
            i: "sy"
        }, {
            n: "Taiwan",
            i: "tw"
        }, {
            n: "Tajikistan",
            i: "tj"
        }, {
            n: "Tanzania",
            i: "tz"
        }, {
            n: "Thailand",
            i: "th"
        },  {
            n: "Tunisia",
            i: "tn"
        }, {
            n: "Turkey",
            i: "tr"
        }, {
            n: "Turkmenistan",
            i: "tm"
        }, {
            n: "Uganda",
            i: "ug"
        }, {
            n: "Ukraine",
            i: "ua"
        }, {
            n: "United Arab Emirates",
            i: "ae"
        }, {
            n: "United Kingdom",
            i: "gb"
        }, {
            n: "United States",
            i: "us"
        }, {
            n: "Uruguay",
            i: "uy"
        }, {
            n: "Uzbekistan",
            i: "uz"
        }, {
            n: "Vatican City",
            i: "va"
        }, {
            n: "Venezuela",
            i: "ve"
        }, {
            n: "Vietnam",
            i: "vn"
        },  {
            n: "Yemen",
            i: "ye"
        }, {
            n: "Zambia",
            i: "zm"
        }, {
            n: "Zimbabwe",
            i: "zw"
        }

    ], function(n, i) {
        i.name = i.n,
        i.iso2 = i.i,
        delete i.n,
        delete i.i
    })
});

(function(e){e.fn.ddslick=function(l){if(c[l]){return c[l].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof l==="object"||!l){return c.init.apply(this,arguments)}else{e.error("Method "+l+" does not exists.")}}};var c={},d={data:[],keepJSONItemsOnTop:false,width:260,height:null,background:"#eee",selectText:"",defaultSelectedIndex:null,truncateDescription:true,imagePosition:"left",showSelectedHTML:true,clickOffToClose:true,embedCSS:true,onSelected:function(){}},i='<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>',a='<ul class="dd-options"></ul>',b='<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>';c.init=function(l){var l=e.extend({},d,l);if(e("#css-ddslick").length<=0&&l.embedCSS){e(b).appendTo("head")}return this.each(function(){var p=e(this),q=p.data("ddslick");if(!q){var n=[],o=l.data;p.find("option").each(function(){var w=e(this),v=w.data();n.push({text:e.trim(w.text()),value:w.val(),selected:w.is(":selected"),description:v.description,imageSrc:v.imagesrc})});if(l.keepJSONItemsOnTop){e.merge(l.data,n)}else{l.data=e.merge(n,l.data)}var m=p,s=e('<div id="'+p.attr("id")+'"></div>');p.replaceWith(s);p=s;p.addClass("dd-container").append(i).append(a);var n=p.find(".dd-select"),u=p.find(".dd-options");u.css({width:l.width});n.css({width:l.width,background:l.background});p.css({width:l.width});if(l.height!=null){u.css({height:l.height,overflow:"auto"})}e.each(l.data,function(v,w){if(w.selected){l.defaultSelectedIndex=v}u.append('<li><a class="dd-option">'+(w.value?' <input class="dd-option-value" type="hidden" value="'+w.value+'" />':"")+(w.imageSrc?' <img class="dd-option-image'+(l.imagePosition=="right"?" dd-image-right":"")+'" src="'+w.imageSrc+'" />':"")+(w.text?' <label class="dd-option-text">'+w.text+"</label>":"")+(w.description?' <small class="dd-option-description dd-desc">'+w.description+"</small>":"")+"</a></li>")});var t={settings:l,original:m,selectedIndex:-1,selectedItem:null,selectedData:null};p.data("ddslick",t);if(l.selectText.length>0&&l.defaultSelectedIndex==null){p.find(".dd-selected").html(l.selectText)}else{var r=(l.defaultSelectedIndex!=null&&l.defaultSelectedIndex>=0&&l.defaultSelectedIndex<l.data.length)?l.defaultSelectedIndex:0;j(p,r)}p.find(".dd-select").on("click.ddslick",function(){f(p)});p.find(".dd-option").on("click.ddslick",function(){j(p,e(this).closest("li").index())});if(l.clickOffToClose){u.addClass("dd-click-off-close");p.on("click.ddslick",function(v){v.stopPropagation()});e("body").on("click",function(){e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")})}}})};c.select=function(l){return this.each(function(){if(l.index!==undefined){j(e(this),l.index)}})};c.open=function(){return this.each(function(){var m=e(this),l=m.data("ddslick");if(l){f(m)}})};c.close=function(){return this.each(function(){var m=e(this),l=m.data("ddslick");if(l){k(m)}})};c.destroy=function(){return this.each(function(){var n=e(this),m=n.data("ddslick");if(m){var l=m.original;n.removeData("ddslick").unbind(".ddslick").replaceWith(l)}})};function j(q,s){var u=q.data("ddslick");var r=q.find(".dd-selected"),n=r.siblings(".dd-selected-value"),v=q.find(".dd-options"),l=r.siblings(".dd-pointer"),p=q.find(".dd-option").eq(s),m=p.closest("li"),o=u.settings,t=u.settings.data[s];q.find(".dd-option").removeClass("dd-option-selected");p.addClass("dd-option-selected");u.selectedIndex=s;u.selectedItem=m;u.selectedData=t;if(o.showSelectedHTML){r.html((t.imageSrc?'<img class="dd-selected-image'+(o.imagePosition=="right"?" dd-image-right":"")+'" src="'+t.imageSrc+'" />':"")+(t.text?'<label class="dd-selected-text">'+t.text+"</label>":"")+(t.description?'<small class="dd-selected-description dd-desc'+(o.truncateDescription?" dd-selected-description-truncated":"")+'" >'+t.description+"</small>":""))}else{r.html(t.text)}n.val(t.value);u.original.val(t.value);q.data("ddslick",u);k(q);g(q);if(typeof o.onSelected=="function"){o.onSelected.call(this,u)}}function f(p){var o=p.find(".dd-select"),m=o.siblings(".dd-options"),l=o.find(".dd-pointer"),n=m.is(":visible");e(".dd-click-off-close").not(m).slideUp(50);e(".dd-pointer").removeClass("dd-pointer-up");if(n){m.slideUp("fast");l.removeClass("dd-pointer-up")}else{m.slideDown("fast");l.addClass("dd-pointer-up")}h(p)}function k(l){l.find(".dd-options").slideUp(50);l.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")}function g(o){var n=o.find(".dd-select").css("height");var m=o.find(".dd-selected-description");var l=o.find(".dd-selected-image");if(m.length<=0&&l.length>0){o.find(".dd-selected-text").css("lineHeight",n)}}function h(l){l.find(".dd-option").each(function(){var p=e(this);var n=p.css("height");var o=p.find(".dd-option-description");var m=l.find(".dd-option-image");if(o.length<=0&&m.length>0){p.find(".dd-option-text").css("lineHeight",n)}})}})(jQuery);

$('#demoBasic').ddslick({
    data: ddData,
    width: 300,
    imagePosition: "left",
    selectText: "",
    onSelected: function (data) {
        console.log(data);
    }
});

//Dropdown plugin data
var ddData = [
    {
        text: "English",
        value: 1,
        selected: true,
        description: "",
        imageSrc: "img/eng-flag.png"
    },
    {
        text: "Russian",
        value: 2,
        selected: false,
        description: "",
        imageSrc: "img/rus-flag.png"
    }
];

// $(".input-country").countrySelect({
//     preferredCountries: [],
//     defaultCountry: "gb",
//     responsiveDropdown: "true"
// });
