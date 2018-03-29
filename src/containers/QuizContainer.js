import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import * as actions from '../actions/quiz';
import * as uiActions from '../actions/ui';

const mapStateToProps = state => ({
  loading: state.ui.loading,
  quiz: state.quiz.quiz,
});

const mapDispatchToProps = dispatch => ({
  getQuiz: quizName => dispatch(actions.getQuiz(quizName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
