require "test_helper"

class QuestionTest < ActiveSupport::TestCase
  test "Question can be created from strings" do
    question = Question.create_from_string("What is 7343 - 6708?|635|688, 7171, 7023")
    assert_equal "What is 7343 - 6708?", question.text
    assert_equal "635", question.true_answer.text
    assert_equal "688", question.distractors.first.text
    assert_equal "7171", question.distractors.second.text
    assert_equal "7023", question.distractors.last.text
  end
end
