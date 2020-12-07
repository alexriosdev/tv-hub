require 'faker'

User.destroy_all
Show.destroy_all
UserShow.destroy_all

3.times{
  User.create(
    username: Faker::Name.unique.first_name.downcase,
  )
}

3.times{
  Show.create(
    name: Faker::Movie.title,
    image: Faker::Avatar.image,
    summary: Faker::Lorem.paragraph,
    language: Faker::Music.genre,
    show_type: Faker::Gender.type,
    genres: Faker::Music.genre,
    network: Faker::Nation.nationality,
    premiered: Faker::Date.between(from: '2014-09-23', to: '2014-09-25'),
    status: 'Running',
    rating: 7.5,
    runtime: 30,
    official_site: 'www.google.com'
  )
}

UserShow.create(
  user_id: User.first.id,
  show_id: Show.first.id,
  notes: Faker::Lorem.sentence,
  rating: rand(1..5),
  status: 'finished watching'
)

UserShow.create(
  user_id: User.first.id,
  show_id: Show.second.id,
  notes: Faker::Lorem.sentence,
  rating: rand(1..5),
  status: 'still watching'
)

UserShow.create(
  user_id: User.second.id,
  show_id: Show.first.id,
  notes: Faker::Lorem.sentence,
  rating: rand(1..5),
  status: 'still watching'
)