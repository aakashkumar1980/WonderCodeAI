$(document).ready(function () {
    var templateContainer1 = $("div[includeTemplate1]");
    var templateContainer2 = $("div[includeTemplate2]");
    var templateContainer3 = $("div[includeTemplate3]");
    
    $(templateContainer1).load($(templateContainer1).attr("includeTemplate1"), function () {
        console.log("templates/template.html loaded.");

        // [WEB_PAGE] LOAD: Project Template //
        cloneAndEnableComponent($("div#projectTemplateContainer"), $("div#container"));
        $("div#projectTemplateContainerClone select#projectTemplate").selectmenu({
            change: function (event, data) {
                $("div#bottomBar").css("display", "block");
                var selectedTemplate = data.item.value;

                /** ********************** **/
                /** [TEMPLATE] SPRING BOOT **/
                /** ********************** **/
                if (selectedTemplate == "spring-boot") {
                    $("input#currentTemplate").val("springBoot");
                    $("div#container").append("<div id='springBootContainer' style='display:flex; flex-wrap:wrap;'></div>");

                    /** [TEMPLATE: COMPONENT] BASE_PACKAGE **/
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
                    }

                    /** [TEMPLATE: COMPONENT] ENTITY **/
                    if (technology_spec_spring_boot[1] == "entity") {
                        // [WEB_PAGE] Sub Navigation //
                        subNavigation = $("div#subNavigationTemplate").clone(true);
                        styleSubNavigation(subNavigation, technology_spec_spring_boot[1]);
                        $(subNavigation).appendTo("div#subNavigation");

                        // [WEB_PAGE] Container //
                        spring_boot_template_values[technology_spec_spring_boot[1]] = [];
                        cloneAndEnableComponent($("div#" + technology_spec_spring_boot[1] + "TemplateContainer"), $("div#springBootContainer"));

                        $("input#previousScreen").val(null);
                        $("input#currentScreen").val(technology_spec_spring_boot[1]);
                        $("button#reset").css("display", "block");
                        $("button#next").css("display", "block");

                    }


                    /** ************** **/
                    /** [TEMPLATE] XYZ **/
                    /** ************** **/
                } else {
                }


                // [WEB_PAGE] UNLOAD: Project Template //
                $("div#projectTemplateContainerClone").hide();
                $("div#projectTemplateNavigation").css("opacity", "0.4");
            }
        });

    });
    $(templateContainer2).load($(templateContainer2).attr("includeTemplate2"), function () {
        console.log("templates/spring_boot/entity_template.html loaded.");
    });
    $(templateContainer3).load($(templateContainer3).attr("includeTemplate3"), function () {
        console.log("templates/spring_boot/service_template.html loaded.");
    });



})