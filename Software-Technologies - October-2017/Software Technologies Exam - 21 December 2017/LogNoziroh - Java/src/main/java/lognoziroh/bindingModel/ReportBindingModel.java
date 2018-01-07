package lognoziroh.bindingModel;

import lognoziroh.entity.Report;

import javax.validation.constraints.NotNull;

public class ReportBindingModel {
	@NotNull
    private Integer id;

	@NotNull
    private String status;

	@NotNull
    private String message;

	@NotNull
    private String origin;

	public ReportBindingModel() { }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }
}
