$(document).ready(function () {

    $("button#reset").button().click(function () {
        var currentTemplate = $("input#currentTemplate").val();
        var currentScreen = $("input#currentScreen").val();

        /** ********************** **/
        /** [TEMPLATE] SPRING BOOT **/
        /** ********************** **/
        if (currentTemplate = "springBoot") {
            // [WEB_PAGE] Container //
            $("div#" + currentScreen + "TemplateContainerClone").remove();
            cloneAndEnableComponent($("div#" + currentScreen + "TemplateContainer"), $("div#" + currentTemplate + "Container"));
        }

    });
})