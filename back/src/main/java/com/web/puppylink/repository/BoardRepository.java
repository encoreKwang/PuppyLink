package com.web.puppylink.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.puppylink.model.Board;

public interface BoardRepository extends JpaRepository<Board,String>{
	Optional<Board> findBoardByBoardNo(int boardNo);
	Optional<List<Board>> findBoardAllByOrderByBoardNoDesc();
	Optional<List<Board>> findBoardAllByOrderByLikesDesc();
	Optional<Board> findTop1BoardByBoardNoLessThanOrderByBoardNoDesc(int boardNo);
	Optional<List<Board>> findTop5BoardInfiniteByBoardNoLessThanOrderByBoardNoDesc(int boardNo);
	void deleteBoardByBoardNo(int boardNo);
}
