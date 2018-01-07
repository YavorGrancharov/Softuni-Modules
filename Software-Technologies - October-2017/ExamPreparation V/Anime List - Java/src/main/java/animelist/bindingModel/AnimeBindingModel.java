package animelist.bindingModel;

import javax.validation.constraints.NotNull;

public class AnimeBindingModel {
    @NotNull
    private Integer id;

    @NotNull
    private Integer rating;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private String watched;

    public AnimeBindingModel() { }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWatched() {
        return watched;
    }

    public void setWatched(String watched) {
        this.watched = watched;
    }
}
