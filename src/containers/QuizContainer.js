import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import * as actions from '../actions/quiz';
import * as uiActions from '../actions/ui';

const mapStateToProps = state => ({
  loading: state.ui.loading,
  activeUser: state.ui.activeUser,
  quiz: state.quiz.quiz,
  results: state.quiz.results,
});

const mapDispatchToProps = dispatch => ({
  getQuiz: quizName => dispatch(actions.getQuiz(quizName)),
  getQuizResults: userid => dispatch(actions.getQuizResults(userid)),
  postQuizResults: (score, id, name) => dispatch(actions.postQuizResults(score, id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
