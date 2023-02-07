$(document).ready(function () {

    $("button#next").button().click(function () {
        var currentTemplate = $("input#currentTemplate").val();
        var currentScreen = $("input#currentScreen").val();

        /** ********************** **/
        /** [TEMPLATE] SPRING BOOT **/
        /** ********************** **/
        if (currentTemplate = "springBoot") {
            if (currentScreen = technology_spec_spring_boot[1]) {
                /** [TEMPLATE: COMPONENT] ENTITY **/
                $("div#" + currentTemplate + "Container div#" + currentScreen + "TemplateContainerClone").each(function () {
                    var entity = {};
                    var name = $(this).find("input#entityName").val();
                    entity["name"] = name;
                    var table = $(this).find("input#entityTableName").val();
                    entity["table"] = table;
                    var shouldBeThreadSafe = $(this).find("input#shouldBeThreadSafe").prop("checked")
                    entity["commentsForChatGPT"] = (shouldBeThreadSafe) ? "Please use @Version annotation for Optimistic Locking." : "";

                    var attributes = [];
                    $($(this).find("tr#entityAttributeROW")).each(function () {
                        var attributeRow = {};
                        var name = $(this).find("input#entityAttributeName").val();
                        attributeRow["name"] = name;
                        var type = $(this).find("select#entityAttributeType").val();
                        attributeRow["type"] = type;
                        var mappingType = $(this).find("select#entityAttributeMappingType").val();
                        if (mappingType) attributeRow["mappingType"] = mappingType;

                        attributes.push(attributeRow);
                    })
                    entity["attributes"] = attributes;
                    spring_boot_template_values.entity.push(entity);
                });
                console.log("Entity-> " + JSON.stringify(spring_boot_template_values));
                $("div#" + currentScreen + "TemplateContainerClone").css("display", "none");
                $("div#subNavigation-" + technology_spec_spring_boot[1]).css("opacity", "0.4");


                /** [TEMPLATE: COMPONENT] SERVICE **/
                // [WEB_PAGE] Sub Navigation //
                var subNavigation = $("div#subNavigation-" + technology_spec_spring_boot[2]);
                if (subNavigation.length == 0) {
                    subNavigation = $("div#subNavigationTemplate").clone(true);
                    styleSubNavigation(subNavigation, technology_spec_spring_boot[2]);
                    $(subNavigation).appendTo("div#subNavigation");
                } else {
                    $(subNavigation).css("opacity", "1");
                }
                // [WEB_PAGE] Container //
                var templateContainerClones = $("div#" + technology_spec_spring_boot[2] + "TemplateContainerClone");
                if (templateContainerClones.length == 0) {
                    spring_boot_template_values[technology_spec_spring_boot[2]] = [];
                    cloneAndEnableComponent($("div#" + technology_spec_spring_boot[2] + "TemplateContainer"), $("div#" + currentTemplate + "Container"));
                } else {
                    $(templateContainerClones).css("display", "block");
                }
                $("button#back").css("display", "block");
                $("input#previousScreen").val(technology_spec_spring_boot[1]);
                $("input#currentScreen").val(technology_spec_spring_boot[2]);



            } else if (currentScreen = technology_spec_spring_boot[2]) {
                /** [TEMPLATE: COMPONENT] SERVICE **/
                $("div#" + currentTemplate + "Container div#" + currentScreen + "TemplateContainerClone").each(function () {
                    var service = {};
                    var name = (spring_boot_template_values[technology_spec_spring_boot[0]]).split('.').pop();
                    service["name"] = name + "Service";

                    var functionz = [];
                    $($(this).find("tr#functionRow")).each(function () {
                        var functionRow = {};
                        var name = $(this).find("input#functionName").val();
                        functionRow["name"] = name;
                        var processingLogic = $(this).find("textarea#functionProcessingLogic").val();
                        functionRow["processing-logic"] = processingLogic;

                        functionz.push(functionRow);
                    })
                    service["function"] = functionz;
                    spring_boot_template_values.service.push(service);
                });
                console.log("Service-> " + JSON.stringify(spring_boot_template_values));
                $("div#" + currentScreen + "TemplateContainerClone").css("opacity", "0.4");
                $("div#subNavigation-" + technology_spec_spring_boot[2]).css("opacity", "0.4");

                $("input#previousScreen").val(technology_spec_spring_boot[2]);
                $("input#currentScreen").val(null); // as there are no next screen      



            } else {
                // --------- //
                // -- END -- //
                // --------- //
                $("button#next").css("opacity", "0.4");
                $("<div title='Confirmation'>Submitting the request to the server. Please check the 'staging' folder for the generated files.</div>").dialog(
                    {
                        modal: true,
                        buttons: {
                            Ok: function () {
                                var serverPayload = {};
                                serverPayload["technology-spec"] = "spring-boot";
                                serverPayload["application-components"] = spring_boot_template_values;
                                console.log(JSON.stringify(serverPayload));


                                $.ajax({
                                    type: "POST",
                                    headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080', 'content-type': 'application/json' },
                                    url: "http://localhost:8080/spring-boot/code",
                                    data: JSON.stringify(serverPayload)
                                });

                                $(this).dialog("close");
                                //window.location.reload();
                            }
                        }
                    }
                );
            }


        }
        /** ************** **/
        /** [TEMPLATE] XYZ **/
        /** ************** **/

    });
})