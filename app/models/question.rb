class Question < ApplicationRecord
  has_many :answers, dependent: :delete_all
  accepts_nested_attributes_for :answers

  def self.create_from_string(s)
    parts = s.split("|")
    question = Question.create(text: parts[0])
    Answer.create(question: question, text: parts[1], distractor: false)
    parts[2].split(", ").map do |text|
      Answer.create(question: question, text: text)
    end
    question
  end

  def true_answer
    answers.first { |answer| !answer.distractor }
  end

  def distractors
    answers.filter { |answer| answer.distractor}
  end
end
