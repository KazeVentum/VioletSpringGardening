package com.example.violetSpringGardening.persistence.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="gama_producto")
public class ProductRange {
    @Id
    @Column(name = "gama", nullable = false)
    private String range;

    @Column(name = "descripcion_texto")
    private String textDescription;

    @Column(name = "descripcion_html")
    private String htmlDescription;

    @Column(name = "imagen")
    private String image;


    @OneToMany(fetch = FetchType.EAGER, mappedBy = "range", cascade = CascadeType.ALL)
    private List<Product> products;


    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public String getTextDescription() {
        return textDescription;
    }

    public void setTextDescription(String textDescription) {
        this.textDescription = textDescription;
    }

    public String getHtmlDescription() {
        return htmlDescription;
    }

    public void setHtmlDescription(String htmlDescription) {
        this.htmlDescription = htmlDescription;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "GamaProduct{" +
                "range='" + range + '\'' +
                ", textDescription='" + textDescription + '\'' +
                ", htmlDescription='" + htmlDescription + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
