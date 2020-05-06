User.destroy_all
Category.destroy_all
List.destroy_all
SwimLane.destroy_all
UserList.destroy_all
Task.destroy_all

u1 = User.create({name: Faker::Name.name, username: Faker::Name.first_name, password_digest: 'user1', email: 'noreply@noreply.com'})
u2 = User.create({name: Faker::Name.name, username: Faker::Name.first_name, password_digest: 'user2', email: 'noreply1@noreply.com'})
u3 = User.create({name: Faker::Name.name, username: Faker::Name.first_name, password_digest: 'user3', email: 'noreply2@noreply.com'})

c1 = Category.create({name: 'c1', user_id: u1.id})
c2 = Category.create({name: 'c2', user_id: u2.id})
c3 = Category.create({name: 'c3', user_id: u3.id})
c4 = Category.create({name: 'c4', user_id: u1.id})
c5 = Category.create({name: 'c5', user_id: u2.id})
c6 = Category.create({name: 'c6', user_id: u3.id})
c7 = Category.create({name: 'c7', user_id: u1.id})
c8 = Category.create({name: 'c8', user_id: u2.id})
c9 = Category.create({name: 'c9', user_id: u3.id})

l1 = List.create({name: 'l1', category_id: c1.id})
l2 = List.create({name: 'l2', category_id: c1.id})
l3 = List.create({name: 'l3', category_id: c2.id})
l4 = List.create({name: 'l4', category_id: c2.id})
l5 = List.create({name: 'l5', category_id: c3.id})
l6 = List.create({name: 'l6', category_id: c3.id})
l7 = List.create({name: 'l7', category_id: c4.id})
l8 = List.create({name: 'l8', category_id: c4.id})
l9 = List.create({name: 'l9', category_id: c5.id})
l10 = List.create({name: 'l10', category_id: c5.id})
l11 = List.create({name: 'l11', category_id: c6.id})
l12 = List.create({name: 'l12', category_id: c6.id})
l13 = List.create({name: 'l13', category_id: c7.id})
l14 = List.create({name: 'l14', category_id: c7.id})
l15 = List.create({name: 'l15', category_id: c8.id})
l16 = List.create({name: 'l16', category_id: c8.id})
l17 = List.create({name: 'l17', category_id: c9.id})
l18 = List.create({name: 'l18', category_id: c9.id})

s1 = SwimLane.create({name: 's1', list_id: l1.id})

t1 = Task.create({name: 't1', swim_lane_id: s1.id})

ul1 = UserList.create({user_id: u1.id, list_id: l1.id})

# fetch(`http://127.0.0.1:3000/lists/${element.id}`,{
#     method: 'PATCH',
#     headers: {'Content-Type': 'application/json'},
#     body: JSON.stringify ({
#         name: liTag.value})

# })
