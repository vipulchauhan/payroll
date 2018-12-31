package in.payroll.repository;

import in.payroll.domain.TAHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the TAHistory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TAHistoryRepository extends JpaRepository<TAHistory, Long> {


    List<TAHistory> findAllByCityCategoryOrderByDateDesc(String cityCategory);
}
