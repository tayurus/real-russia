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

function initializeVisitorsDatepickers(){
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
$(document).on("click", '[data-role="confirm"]', function(e) {
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
        alert("Check steps. You have errors!");
        $('.header-sticky').addClass('active');
        $(".sticky-errors__links").html("")
        errors.forEach(function(error) {
            $(".sticky-errors__links").append("<a class='sticky-errors__link' data-error-step=" + error.step + " href='#'>" + error.name + "</a>")
        })
        e.preventDefault();
    }

    console.log(errors);
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
    $(this).before($(this).prev().clone(true));
    locationCount++;
    $(this).prev().find('.input-city').attr('name', 'visitCity' + locationCount);
    $(this).prev().find('.input-hotel').attr('name', 'visitHotel' + locationCount);

    $(".location-wrapper").each(function(index, item) {
        $(item).find('.button__remove-location').text("REMOVE LOCATION " + (index + 1));
        $(item).find('.step__subtitle-text').text("LOCATION " + (index + 1));
    })

    checkIsStepCorrect(3);
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

$(document).on("blur propertychange change input paste", ".input-country", function() {
    if ($(this).val() !== null){
        let text = Visas.Russian.RussianConsulateSettignsRepository.Current.GetTouristNoteByCountry($(this).val());
        if (text !== null) {
            text = text.replace("{Country}", $(this).val());
            $(this).closest('.input').next().html("<b>CONSULAR NOTES</b>\
                                                    <div class='step__note-text'>" + text + "</div>")
            $(this).closest('.input').next().removeClass('disabled');
        }
        else{
                $(this).closest('.input').next().html("");
                $(this).closest('.input').next().addClass('disabled');
        }
    }
});

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
initializeVisitorsDatepickers();
initializeLocaleDatePicker();


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
    if (typeof value === 'undefined' || value === '' || value === null || value == "__-__-____"){
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

$(document).on("blur propertychange change input paste", ".input-group-size", function() {
    validateGroupSize($(this));
});
$(document).on("blur propertychange change input paste", ".input-entries", function() {
    validateEntries($(this));
});
$(document).on("blur propertychange change input paste", ".input-purpose", function() {
    validatePurpose($(this));
});
$(document).on("blur propertychange change input paste", ".input-delivery", function() {
    validateDelivery($(this));
});


$(document).on("blur propertychange change input paste", ".input-passport-issued", function() {
    validatePassportIssued($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-passport-expired", function() {
    validatePassportExpired($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date1", function() {
    validateArrival1($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date1", function(e) {
    console.log(e);
    validateDeparture1($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-departure-date2", function() {
    validateDeparture2($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-arrival-date2", function() {
    validateArrival2($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-citizenship", function() {
    validateCitizenship($(this));
});

$(document).on("blur propertychange change input paste", ".input-registration", function() {
    validateRegistration($(this));
});

$(document).on("blur propertychange change input paste", ".input-birth-date", function() {
    validateBirthDate($(this));
    separationDateIntoThreeInputs($(this));
});

$(document).on("blur propertychange change input paste", ".input-city", function() {
    validateProcessingCities($(this));
});

$(document).on("blur propertychange change input paste", "[name^='gender_']", function() {
    validateGenders($(this));
});

$(document).on('blur propertychange change input paste', '.input-firstname', function(){
    validateFirstName($(this));
})

$(document).on('blur propertychange change input paste', '.input-middlename', function(){
    validateMiddleName($(this));
})

$(document).on('blur propertychange change input paste', '.input-surname', function(){
    validateSurname($(this));
})

$(document).on('blur propertychange change input paste', '.input-passport-number', function(){
    validatePassportNumber($(this));
})

$(document).on('blur propertychange change input paste', '.input-email', function(){
    validateEmail($(this));
})
$(document).on('blur propertychange change input paste', '.input-phone', function(){
    validatePhone($(this));
})
$(document).on('blur propertychange change input paste', '.input-country', function(){
    validateCountryApply($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-make', function(){
    validateVehicleMake($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-color', function(){
    validateVehicleColor($(this));
})
$(document).on('blur propertychange change input paste', '.input-vehicle-lisence', function(){
    validateVehicleLisence($(this));
})
$(document).on('blur propertychange change input paste', '.input-hotel', function(){
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

//валидация даты окончания действия паспорта
function validatePassportExpired(e, trigger) {
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

//валидация даты вьезда
function validateArrival1(e, trigger) {
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

//валидация даты выезда
function validateDeparture1(e, trigger) {
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

//валидация даты вьезда
function validateArrival2(e, trigger) {
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

//валидация даты выезда
function validateDeparture2(e, trigger) {
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

function validateCitizenship(e, trigger){
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

function validateRegistration(e, trigger){
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

function validateBirthDate(e, trigger) {
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

function validateProcessingCities(e, trigger) {
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

function validateProcessingHotels(e, trigger) {

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
    $(e).closest('.radio-buttons').next('.input__error-label').text('');
}

function validateFirstName(e){
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

function validateMiddleName(e){
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

function validateSurname(e){
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

function validatePassportNumber(e){
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

function validateEmail(e){
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

function validatePhone(e){
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

function validateVehicleMake(e){
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

function validateVehicleColor(e){
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

function validateVehicleLisence(e){
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

function validateEntries(e){
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

function validatePurpose(e){
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

function validateDelivery(e){
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

        $('.datepicker-here').datepicker({
            language: 'en',
            minDate: new Date(new Date().setFullYear(1900)),
            maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 20)),
            onSelect: (fd, date, inst) => {
                inst.date = date;
                inst.hide();
            }
        })
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



$(".input-country").countrySelect({
    preferredCountries: [],
    defaultCountry: "gb",
    responsiveDropdown: "true"
});
