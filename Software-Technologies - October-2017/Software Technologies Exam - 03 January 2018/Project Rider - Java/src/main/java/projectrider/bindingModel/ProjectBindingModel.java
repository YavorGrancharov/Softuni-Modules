package projectrider.bindingModel;

import projectrider.entity.Project;

import javax.validation.constraints.NotNull;

public class ProjectBindingModel {
	@NotNull
    private Integer id;

	@NotNull
    private String title;

	@NotNull
    private String description;

	@NotNull
    private Integer budget;

	public ProjectBindingModel() { }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }
}
