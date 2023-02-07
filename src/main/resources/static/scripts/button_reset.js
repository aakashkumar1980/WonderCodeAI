$(document).ready(function () {

    $("button#reset").button().click(function () {
        var currentTemplate = $("input#currentTemplate").val();
        var currentScreen = $("input#currentScreen").val();

        $("<div title='Warning'>Please confirm, if you want to Reset the form?</div>").dialog(
            {
                modal: true,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");

                        /** ********************** **/
                        /** [TEMPLATE] SPRING BOOT **/
                        /** ********************** **/
                        if (currentTemplate == "springBoot") {
                            // [WEB_PAGE] Container //
                            $("div#" + currentScreen + "TemplateContainerClone").remove();
                            cloneAndEnableComponent($("div#" + currentScreen + "TemplateContainer"), $("div#" + currentTemplate + "Container"));
                        }
                    },
                    Cancel: function () {
                        $(this).dialog("close");
                    }
                }
            }
        );


    });
})