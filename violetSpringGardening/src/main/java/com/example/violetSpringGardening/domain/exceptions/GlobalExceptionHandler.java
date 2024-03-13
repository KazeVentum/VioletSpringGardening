package com.example.violetSpringGardening.domain.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Post not found
    // @ExceptionHandler(PostNotFoundException.class)
    // @ResponseStatus(HttpStatus.NOT_FOUND)
    // public ResponseEntity<Object> handleProductoNotFoundException(PostNotFoundException ex) {
    //    ErrorResponses errorResponse = new ErrorResponses("Post no encontrado", ex.getMessage());
    //    return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    // }

    // Post id not found
    // @ExceptionHandler(PostIdNotFoundException.class) // Clase del error
    // @ResponseStatus(HttpStatus.BAD_REQUEST)  // Tipo de error
            // public ResponseEntity<Object> handleProductoIdNotFoundException(PostIdNotFoundException ex) {
    // ErrorResponses errorResponse = new ErrorResponses("Error en la busqueda", ex.getMessage());
    //     return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    //  }

    //Otros manejadores de excepciones
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
            public ResponseEntity<Object> handleGlobalException(Exception ex) {
    ErrorResponses errorResponse = new ErrorResponses("Error en la aplicación", ex.getMessage());
    return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
