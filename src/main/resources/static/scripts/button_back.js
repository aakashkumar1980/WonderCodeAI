$(document).ready(function () {

    $("button#back").button().click(function () {
        var currentTemplate = $("input#currentTemplate").val();
        var currentScreen = $("input#currentScreen").val();
        var previousScreen = $("input#previousScreen").val();

        /** ********************** **/
        /** [TEMPLATE] SPRING BOOT **/
        /** ********************** **/
        if (currentTemplate = "springBoot") {
            if ((currentScreen == technology_spec_spring_boot[2])
                && (previousScreen == technology_spec_spring_boot[1])) {
                $("div#subNavigation-" + currentScreen).css("opacity", "0.4");
                $("div#" + currentScreen + "TemplateContainerClone").css("display", "none");
                $("div#subNavigation-" + previousScreen).css("opacity", "1");
                $("div#" + previousScreen + "TemplateContainerClone").css("display", "block");
                $("button#back").css("display", "none")

                $("input#previousScreen").val(null);
                $("input#currentScreen").val(technology_spec_spring_boot[1]);
            }
        }

    });


})