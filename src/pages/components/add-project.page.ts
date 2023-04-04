import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";
import { driverInstance } from '../../core/driver';

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';
    private colorDropdown = "//button[@class='color_dropdown_toggle form_field_control']";
    private favoritesToggle: string = "//input[@name='is_favorite']/following-sibling::span[1]";
    private optionListView: string = "//div[@role='radiogroup']//child::label//child::div//child::span//child::button[@aria-labelledby='project_list_view_style_option']";
    private optionBoardView: string = "//div[@role='radiogroup']//child::label//child::div//child::span//child::button[@aria-labelledby='project_list_board_style_option']";
    

    constructor() {
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }
    async selectColor(projectColor: string) {
        projectColor = `//span[2][text()="${projectColor}"]`;
        await ElementActions.setColor(this.colorDropdown, projectColor);
    }

    async clickFavoritesToogle(projectAddFavorites: string) {
        if (projectAddFavorites === "true") {
            await ElementActions.click(this.favoritesToggle);
        }
    }

    async clickOptionView(projectView: string) {
        if (projectView == "List") {
            await ElementActions.click(this.optionListView);
            
        }
        else if (projectView == "Board") {
            await ElementActions.click(this.optionBoardView);
            
        }
    }
    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
        // Add Code
    }
}

export const addProjectPane = new AddProject();