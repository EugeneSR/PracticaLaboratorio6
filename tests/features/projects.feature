@ui-tests @api-tests
Feature: Todoist Projects
    Background: Login into Todoist
        Given the user logged into Todoist

    @test
    Scenario: Create Project
    
        Given the user hovers the mouse on Projects label on the Vertical Menu

        And the user clicks the Add Project Icon on the Vertical Menu
        #Project Name: Project1, Project2, etc.

        And the user sets "Project1" as Project Name on the Add Project popup

        #Colors:Yellow, Blue, Green, Teal, Light Blue, Violet, Magenta,"Olive Green","Lime Green"
        And the user selects the "Teal" color of his preference
        
        #AddToFavorites: true or false
        And the user clicks "true" in add to Favorites

        #View: Board or List
        And the user clicks "List" the type of view  of his preference

        When the user clicks the Add Button on the Add Project popup

        Then the user should see the New Project on the Vertical Menu
