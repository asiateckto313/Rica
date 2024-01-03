"use strict";
var KTFormsSelect2Demo = function () {
    var t = function () {
        $("#kt_docs_select2_country").select2({
            templateResult: function (t) {
                return (t => {
                    if (!t.id) return t.text;
                    var e = hostUrl + "media/" + t.element.getAttribute("data-kt-select2-country"),
                        n = $("<img>", {
                            class: "rounded-circle me-2",
                            width: 26,
                            src: e
                        }),
                        r = $("<span>", {
                            text: " " + t.text
                        });
                    return r.prepend(n), r
                })(t)
            }
        })
    };
    const e = function () {
        $("#kt_docs_select2_users").select2({
            templateResult: function (t) {
                return (t => {
                    if (!t.id) return t.text;
                    var e = hostUrl + "media/" + t.element.getAttribute("data-kt-select2-user"),
                        n = $("<img>", {
                            class: "rounded-circle me-2",
                            width: 26,
                            src: e
                        }),
                        r = $("<span>", {
                            text: " " + t.text
                        });
                    return r.prepend(n), r
                })(t)
            }
        })
    };
    return {
        init: function () {
            t(), e()
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTFormsSelect2Demo.init()
}));