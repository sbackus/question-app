# run this to populate questions
# $ rails db:populate_questions_from_csv lib/questions.csv

namespace :db do
  task :populate_questions_from_csv, [:path] => :environment do
    ARGV.each { |a| task a.to_sym do ; end }
    path = ARGV[1]

    File.readlines(path).each do |line|
      next if line.starts_with?('question|answer|')
      Question.create_from_string(line)
    end
  end
end
