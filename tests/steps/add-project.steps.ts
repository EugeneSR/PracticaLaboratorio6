import { Given, When } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { addProjectPane } from "../../src/pages/components/add-project.page";

Given('the user sets {string} as Project Name on the Add Project popup', async function (this: Context, projectName: string) {
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.setProjectName(projectName);
});

Given('the user selects the {string} color of his preference', async function (this: Context, projectColor: string){
    this.scenarioContext['PROJECTCOLOR'] = projectColor;
    await addProjectPane.selectColor(projectColor);
});
Given('the user clicks {string} in add to Favorites', async function (this: Context, projectAddFavorites: string){
    this.scenarioContext['PROJECTADDFAVORITES'] = projectAddFavorites;
    await addProjectPane.clickFavoritesToogle(projectAddFavorites);
     
});
Given('the user clicks {string} the type of view  of his preference', async function (this: Context, projectView: string){
    this.scenarioContext['PROJECTVIEW'] = projectView;
    await addProjectPane.clickOptionView(projectView);
    
});

When('the user clicks the Add Button on the Add Project popup', async function () {
    await addProjectPane.clickAdd();
});
