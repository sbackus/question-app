class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    @questions = Question.paginate(page: params[:page]).order(created_at: :desc)
    render json: @questions.to_json(include: :answers)
  end

  # GET /questions/1
  def show
    render json: @question.to_json(include: :answers)
  end

  # POST /questions
  def create
    @question = Question.new(question_params)

    if @question.save
      render json: @question.to_json(include: :answers), status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: @question.to_json(include: :answers)
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:text, answers_attributes: [:text, :distractor])
    end
end
