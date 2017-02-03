User.destroy_all
Board.destroy_all
NUM_USERS = 3
BOARDS_PER_USER = 3
LISTS_PER_BOARD = 3

puts 'creating users'
NUM_USERS.times do |num|
  user = User.create(
    username: "foo#{num}",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: "foo#{num}@test.com",
    password: "password",
    password_confirmation: "password"
  )

  puts 'create user boards'
  BOARDS_PER_USER.times do |num|
    user.boards.create(
      title: Faker::Hipster.word.capitalize
    )
  end
end
Board.all.each do |board|
  LISTS_PER_BOARD.times do
    board.lists.create(
      title: Faker::GameOfThrones.house
    )
  end
end
