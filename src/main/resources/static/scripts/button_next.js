$(document).ready(function () {

    $("button#next").button().click(function () {
        var currentTemplate = $("input#currentTemplate").val();
        var currentScreen = $("input#currentScreen").val();

        if (currentTemplate == "springBoot") {
            /** ********************** **/
            /** [TEMPLATE] SPRING BOOT **/
            /** ********************** **/
            if (currentScreen == technology_spec_spring_boot[1]) {
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



            } else if (currentScreen == technology_spec_spring_boot[2]) {
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


                // --------- //
                // -- END -- //
                // --------- //
                $("<div title='Confirmation'>Please confirm if you want to submit the request to the server?</div>").dialog(
                    {
                        modal: true,
                        buttons: {
                            Ok: function () {
                                //$("div#" + currentScreen + "TemplateContainerClone").css("opacity", "0.4");
                                //$("div#subNavigation-" + currentScreen).css("opacity", "0.4");
                                //$("button#next").css("opacity", "0.4");
                                //$("button#back").css("opacity", "0.4");
                                //$("button#reset").css("opacity", "0.4");
                                //$("input#previousScreen").val(technology_spec_spring_boot[2]);
                                //$("input#currentScreen").val(null); /** as there are no next screen **/                                

                                var serverPayload = {};
                                serverPayload["technology-spec"] = "spring-boot";
                                serverPayload["application-components"] = spring_boot_template_values;
                                console.log(JSON.stringify(serverPayload));
                                $.ajax({
                                    type: "POST",
                                    headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080', 'content-type': 'application/json' },
                                    url: "http://localhost:8080/code-generate/spring-boot",
                                    data: JSON.stringify(serverPayload)
                                });
                                $(this).dialog("close");
                               
                            },
                            Cancel: function () {
                                $(this).dialog("close");
                            }
                        }
                    }
                );
            }


        } else if (currentTemplate == "angular") {
            /** ****************** **/
            /** [TEMPLATE] ANGULAR **/
            /** ****************** **/

            if (currentScreen == technology_spec_angular[1]) {
                /** [TEMPLATE: COMPONENT] MODEL **/
                $("div#" + currentTemplate + "Container div#" + currentScreen + "TemplateContainerClone").each(function () {
                    var model = {};
                    var name = $(this).find("input#modelName").val();
                    model["name"] = name;

                    var attributes = [];
                    $($(this).find("tr#modelAttributeROW")).each(function () {
                        var attributeRow = {};
                        var name = $(this).find("input#modelAttributeName").val();
                        attributeRow["name"] = name;
                        var type = $(this).find("select#modelAttributeType").val();
                        attributeRow["type"] = type;
                        var mappingType = $(this).find("select#modelAttributeMappingType").val();
                        if (mappingType) attributeRow["mappingType"] = mappingType;

                        attributes.push(attributeRow);
                    })
                    model["attributes"] = attributes;
                    angular_template_values.model.push(model);
                });
                console.log("Model-> " + JSON.stringify(angular_template_values));
                $("div#" + currentScreen + "TemplateContainerClone").css("display", "none");
                $("div#subNavigation-" + technology_spec_angular[1]).css("opacity", "0.4");


                /** [TEMPLATE: COMPONENT] SERVICE **/
                // [WEB_PAGE] Sub Navigation //
                var subNavigation = $("div#subNavigation-" + technology_spec_angular[2]);
                if (subNavigation.length == 0) {
                    subNavigation = $("div#subNavigationTemplate").clone(true);
                    styleSubNavigation(subNavigation, technology_spec_angular[2]);
                    $(subNavigation).appendTo("div#subNavigation");
                } else {
                    $(subNavigation).css("opacity", "1");
                }
                // [WEB_PAGE] Container //
                var templateContainerClones = $("div#" + technology_spec_angular[2] + "TemplateContainerClone");
                if (templateContainerClones.length == 0) {
                    angular_template_values[technology_spec_angular[2]] = [];
                    cloneAndEnableComponent($("div#" + technology_spec_angular[2] + "TemplateContainer"), $("div#" + currentTemplate + "Container"));
                } else {
                    $(templateContainerClones).css("display", "block");
                }
                $("button#back").css("display", "block");
                $("input#previousScreen").val(technology_spec_angular[1]);
                $("input#currentScreen").val(technology_spec_angular[2]);



            } else if (currentScreen == technology_spec_angular[2]) {
                /** [TEMPLATE: COMPONENT] SERVICE **/
                $("div#" + currentTemplate + "Container div#" + currentScreen + "TemplateContainerClone").each(function () {
                    var service = {};
                    var name = (angular_template_values[technology_spec_angular[0]]).split('.').pop();
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
                    angular_template_values.service.push(service);
                });
                console.log("Service-> " + JSON.stringify(angular_template_values));


                // --------- //
                // -- END -- //
                // --------- //
                $("<div title='Confirmation'>Please confirm if you want to submit the request to the server?</div>").dialog(
                    {
                        modal: true,
                        buttons: {
                            Ok: function () {
                                //$("div#" + currentScreen + "TemplateContainerClone").css("opacity", "0.4");
                                //$("div#subNavigation-" + currentScreen).css("opacity", "0.4");
                                //$("button#next").css("opacity", "0.4");
                                //$("button#back").css("opacity", "0.4");
                                //$("button#reset").css("opacity", "0.4");
                                //$("input#previousScreen").val(technology_spec_angular[2]);
                                //$("input#currentScreen").val(null); /** as there are no next screen **/                                

                                var serverPayload = {};
                                serverPayload["technology-spec"] = "angular";
                                serverPayload["application-components"] = angular_template_values;
                                console.log(JSON.stringify(serverPayload));

                                $.ajax({
                                    type: "POST",
                                    headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080', 'content-type': 'application/json' },
                                    url: "http://localhost:8080/code-generate/angular",
                                    data: JSON.stringify(serverPayload)
                                });

                                $(this).dialog("close");
                            },
                            Cancel: function () {
                                $(this).dialog("close");
                            }
                        }
                    }
                );
            }


        }

    });
})