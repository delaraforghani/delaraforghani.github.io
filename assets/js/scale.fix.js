(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };

    // Add a CV header/link inside the wrapper's header after the DOM is ready
    document.addEventListener("DOMContentLoaded", function() {
        var wrapper = document.querySelector(".wrapper");
        if (!wrapper) return;

        var rightDiv = document.createElement("div");
        rightDiv.className = "site-header-right";

        var cvLink = document.createElement("a");
        cvLink.href = "/CV_LastUpdate_Jan2026.pdf";
        cvLink.target = "_blank";
        cvLink.textContent = "CV";
        cvLink.className = "cv-link";

        rightDiv.appendChild(cvLink);
        wrapper.appendChild(rightDiv);
    });

    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);
