$(document).ready(function () {
    var templateContainer1 = $("div[includeTemplate1]");
    var templateContainer2 = $("div[includeTemplate2]");
    var templateContainer3 = $("div[includeTemplate3]");
    var templateContainer4 = $("div[includeTemplate4]");

    $(templateContainer1).load($(templateContainer1).attr("includeTemplate1"), function () {
        console.log("templates/template.html loaded.");

        // [WEB_PAGE] LOAD: Project Template //
        cloneAndEnableComponent($("div#projectTemplateContainer"), $("div#container"));
        $("div#projectTemplateContainerClone select#projectTemplate").selectmenu({
            change: function (event, data) {
                $("div#bottomBar").css("display", "block");
                var selectedTemplate = data.item.value;

                var packageName = $("input#package").val();
                let pattern = /^[a-z]+([.])[a-z]+([.]?[a-z]+)*$/i;
                if (!packageName || !pattern.test(packageName)) {
                    $("<div title='Warning'>Please enter the package name (with correct format)!</div>").dialog(
                        {
                            modal: true,
                            buttons: {
                                Ok: function () {
                                    $(this).dialog("close");
                                    window.location.reload();
                                }
                            }
                        }
                    );
                } else {
                    spring_boot_template_values[technology_spec_spring_boot[0]] = packageName;
                    angular_template_values[technology_spec_angular[0]] = packageName;
                }

                $("input#currentTemplate").val(selectedTemplate);
                $("div#container").append("<div id='" + selectedTemplate + "Container' style='display:flex; flex-wrap:wrap;'></div>");

                // [WEB_PAGE] Sub Navigation //
                subNavigation = $("div#subNavigationTemplate").clone(true);
                if (selectedTemplate == "springBoot") styleSubNavigation(subNavigation, technology_spec_spring_boot[1]);
                if (selectedTemplate == "angular") styleSubNavigation(subNavigation, technology_spec_angular[1]);
                $(subNavigation).appendTo("div#subNavigation");

                // [WEB_PAGE] Container //
                if (selectedTemplate == "springBoot") spring_boot_template_values[technology_spec_spring_boot[1]] = [];
                if (selectedTemplate == "angular") angular_template_values[technology_spec_angular[1]] = [];
                if (selectedTemplate == "springBoot") cloneAndEnableComponent($("div#" + technology_spec_spring_boot[1] + "TemplateContainer"), $("div#" + selectedTemplate + "Container"));
                if (selectedTemplate == "angular") cloneAndEnableComponent($("div#" + technology_spec_angular[1] + "TemplateContainer"), $("div#" + selectedTemplate + "Container"));
                // [WEB_PAGE] Container:Screens //
                $("input#previousScreen").val(null);
                if (selectedTemplate == "springBoot") $("input#currentScreen").val(technology_spec_spring_boot[1]);
                if (selectedTemplate == "angular") $("input#currentScreen").val(technology_spec_angular[1]);

                // [WEB_PAGE] BottomBar //
                $("button#reset").css("display", "block");
                $("button#next").css("display", "block");


                // [WEB_PAGE] UNLOAD: Project Template //
                $("div#projectTemplateContainerClone").hide();
                $("div#projectTemplateNavigation").css("opacity", "0.4");
            }
        });

    });
    $(templateContainer2).load($(templateContainer2).attr("includeTemplate2"), function () {
        console.log("templates/service_template.html loaded.");
    });
    $(templateContainer3).load($(templateContainer3).attr("includeTemplate3"), function () {
        console.log("templates/spring_boot/entity_template.html loaded.");
    });
    $(templateContainer4).load($(templateContainer4).attr("includeTemplate4"), function () {
        console.log("templates/angular/model_template.html loaded.");
    });



})