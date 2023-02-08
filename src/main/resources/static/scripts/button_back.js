$(document).ready(function () {

    $("button#back").button().click(function () {
        var currentTemplate = $("input#currentTemplate").val();
        var currentScreen = $("input#currentScreen").val();
        var previousScreen = $("input#previousScreen").val();

        // [WEB_PAGE] Sub Navigation //
        $("div#subNavigation-" + currentScreen).css("opacity", "0.4");
        $("div#" + currentScreen + "TemplateContainerClone").css("display", "none");
        $("div#subNavigation-" + previousScreen).css("opacity", "1");
        $("div#" + previousScreen + "TemplateContainerClone").css("display", "block");
        $("button#back").css("display", "none")

        // [WEB_PAGE] Container:Screens //
        $("input#previousScreen").val(null);
        if (currentTemplate == "springBoot") $("input#currentScreen").val(technology_spec_spring_boot[1]);
        if (currentTemplate == "angular") $("input#currentScreen").val(technology_spec_angular[1]);


    });


})