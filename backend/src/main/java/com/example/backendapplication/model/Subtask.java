// TODO: Solution File. Remove
package com.example.backendapplication.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "subtasks")
public class Subtask {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Task parentId;

    private String name;

    private String details;

    private boolean completed;

    private Date createdDate;

    private Date updatedDate;
}
