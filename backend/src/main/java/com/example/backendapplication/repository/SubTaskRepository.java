// TODO: Proposed solution to remove
package com.example.backendapplication.repository;

import com.example.backendapplication.model.Subtask;
import com.example.backendapplication.model.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SubTaskRepository extends JpaRepository<Subtask, UUID> {

    // Solution Steps
    Page<Subtask> findByParentId_Id(UUID id, Pageable pageable);
}
