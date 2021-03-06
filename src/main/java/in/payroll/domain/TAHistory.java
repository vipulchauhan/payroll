package in.payroll.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A TAHistory.
 */
@Entity
@Table(name = "ta_history")
public class TAHistory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "jhi_date")
    private LocalDate date;

    @Column(name = "city_category")
    private String cityCategory;

    @Column(name = "current_value")
    private Long currentValue;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public TAHistory date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getCityCategory() {
        return cityCategory;
    }

    public TAHistory cityCategory(String cityCategory) {
        this.cityCategory = cityCategory;
        return this;
    }

    public void setCityCategory(String cityCategory) {
        this.cityCategory = cityCategory;
    }

    public Long getCurrentValue() {
        return currentValue;
    }

    public TAHistory currentValue(Long currentValue) {
        this.currentValue = currentValue;
        return this;
    }

    public void setCurrentValue(Long currentValue) {
        this.currentValue = currentValue;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TAHistory tAHistory = (TAHistory) o;
        if (tAHistory.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tAHistory.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TAHistory{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", cityCategory='" + getCityCategory() + "'" +
            ", currentValue=" + getCurrentValue() +
            "}";
    }
}
