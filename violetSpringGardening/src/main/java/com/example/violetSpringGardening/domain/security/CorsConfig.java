package com.example.PostSocial.domain.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**")
                            .allowedOrigins("http://localhost:8080", "http://127.0.0.1:5500")
                            .allowedMethods("GET", "POST", "PUT", "DELETE")
                            .allowedHeaders("*") // Permitir todos los encabezados
                            .exposedHeaders("Authorization") // Encabezados expuestos, si hay alguno
                            .allowCredentials(true) // Permitir credenciales
                            .maxAge(3600); // Cache CORS preflight por 1 hora
                }
            };
        }
    }

