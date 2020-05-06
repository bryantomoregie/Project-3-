User.destroy_all
Category.destroy_all
List.destroy_all
SwimLane.destroy_all
UserList.destroy_all
Task.destroy_all

# Users
josh = User.create({name: "Joshua Miles", username: "LinkWithABow", password: '123', email: 'linkmiles@noreply.com'})
steven = User.create({name: "Steven Nguyen", username: "LinkWithSheild", password: '123', email: 'stevenshle@noreply.com'})


# ------------------------------------------------------------------------------------


# Josh's Categories
teaching = Category.create({name: 'Teaching', user_id: josh.id})
entertainment = Category.create({name: 'Entertainment', user_id: josh.id})
joshBeardCare = Category.create({name: 'Beard Care', user_id: josh.id})

# Steven's Categories
softWare = Category.create({name: 'Software Engineering', user_id: steven.id})
fishing = Category.create({name: 'Fishing', user_id: steven.id})
stevenBeardCare = Category.create({name: 'Beard Care', user_id: steven.id})


# ------------------------------------------------------------------------------------


# Lists / Josh < Teaching Lists
lectures = List.create({name: 'Lectures', category_id: teaching.id})
UserList.create({user_id: josh.id, list_id: lectures.id})

labs = List.create({name: 'labs', category_id: teaching.id})
UserList.create({user_id: josh.id, list_id: labs.id})

# Lists / Josh < Entertainment Lists
lotr = List.create({name: 'Lord of the Rings', category_id: entertainment.id})
UserList.create({user_id: josh.id, list_id: lotr.id})

zelda = List.create({name: 'Legend of Zelda', category_id: entertainment.id})
UserList.create({user_id: josh.id, list_id: zelda.id})

reading = List.create({name: 'Non-LOTR Reading', category_id: entertainment.id})
UserList.create({user_id: josh.id, list_id: reading.id})

# Lists / Josh < Beard Care Lists
beardHealth = List.create({name: 'Beard Health Schedule', category_id: joshBeardCare.id})
UserList.create({user_id: josh.id, list_id: beardHealth.id})

# Lists / Steven < Software Development Lists
jsGame = List.create({name: 'JavaScript Game', category_id: softWare.id})
UserList.create({user_id: steven.id, list_id: jsGame.id})

labReview = List.create({name: 'Flatiron Lab Review', category_id: softWare.id})
UserList.create({user_id: steven.id, list_id: labReview.id})

pythonRobot = List.create({name: 'Robotics Python Project', category_id: softWare.id})
UserList.create({user_id: steven.id, list_id: pythonRobot.id})

# lists / Steven < Finishing Lists
catfishing = List.create({name: 'Catfishing', category_id: fishing.id})
UserList.create({user_id: steven.id, list_id: catfishing.id})

deepSea = List.create({name: 'Deep Sea Fishing', category_id: fishing.id})
UserList.create({user_id: steven.id, list_id: deepSea.id})

# Lists / Steven < Beard Care Lists
theOnlyList = List.create({name: 'The Only List', category_id: stevenBeardCare.id})
UserList.create({user_id: steven.id, list_id: stevenBeardCare.id})


# ------------------------------------------------------------------------------------


# Swim Lanes / Josh < Teaching < Lectures
lecturesBacklog = SwimLane.create({name: 'Backlog', list_id: lectures.id})
lecturesThisWeek = SwimLane.create({name: 'This Week', list_id: lectures.id})
lecturesReview = SwimLane.create({name: 'Review', list_id: lectures.id})
lecturesPrepare = SwimLane.create({name: 'Prepare', list_id: lectures.id})
lecturesPresented = SwimLane.create({name: 'Presented', list_id: lectures.id})

# Swim Lanes / Josh < Teaching < Labs
labsQA = SwimLane.create({name: 'Quality Check', list_id: labs.id})
lecturesDeploy = SwimLane.create({name: 'Deploy', list_id: labs.id})
lecturesReview= SwimLane.create({name: 'Review With Class', list_id: labs.id})

# Swim Lanes / Josh < Entertainment < LOTR
lotrBacklog = SwimLane.create({name: 'Backlog', list_id: lotr.id})
lotrInProgress = SwimLane.create({name: 'In Progress', list_id: lotr.id})
lotrMoveToBacklog = SwimLane.create({name: 'Move Back Into Backlog', list_id: lotr.id})

# Swim Lanes / Josh < Entertainment < Zelda
zeldaBacklog = SwimLane.create({name: 'Backlog', list_id: zelda.id})
zeldaInProgress = SwimLane.create({name: 'In Progress', list_id: zelda.id})
zeldaCompleted = SwimLane.create({name: 'Completed', list_id: zelda.id})

# Swim Lanes / Josh < Entertainment < Reading
readingBacklog = SwimLane.create({name: 'Backlog', list_id: reading.id})
readingInProgress = SwimLane.create({name: 'In Progress', list_id: reading.id})
readingCompleted = SwimLane.create({name: 'Completed', list_id: reading.id})

# Swim Lanes / Josh < Entertainment < Beard Health Schedule
beard = SwimLane.create({name: 'To Do', list_id: beardHealth.id})


# ------------------------------------------------------------------------------------


# Swim Lanes / Josh < Teaching < Lectures Backlog
lecturesBacklog = SwimLane.create({name: 'Backlog', list_id: lectures.id})
lecturesThisWeek = SwimLane.create({name: 'This Week', list_id: lectures.id})
lecturesReview = SwimLane.create({name: 'Review', list_id: lectures.id})
lecturesPrepare = SwimLane.create({name: 'Prepare', list_id: lectures.id})
lecturesPresented = SwimLane.create({name: 'Presented', list_id: lectures.id})

l1 = Task.create({name: 'The DOM', swim_lane_id: lecturesBacklog.id})
l2 = Task.create({name: 'JavaScripts', swim_lane_id: lecturesBacklog.id})
l3 = Task.create({name: 'DOM Events', swim_lane_id: lecturesBacklog.id})
l4 = Task.create({name: 'Asynchronous JavaScript', swim_lane_id: lecturesBacklog.id})
l5 = Task.create({name: 'Communication with the Server', swim_lane_id: lecturesPrepare.id})
l6 = Task.create({name: 'Rails API', swim_lane_id: lecturesReview.id})
l7 = Task.create({name: 'Callback Functions', swim_lane_id: lecturesReview.id})
l8 = Task.create({name: 'JavaScript Classes', swim_lane_id: lecturesReview.id})
l9 = Task.create({name: 'Validations', swim_lane_id: lecturesPresented.id})
l10 = Task.create({name: 'Sessions & Cookies', swim_lane_id: lecturesPresented.id})
l11 = Task.create({name: 'Rails Forms', swim_lane_id: lecturesPresented.id})
l12 = Task.create({name: 'Rails Routing', swim_lane_id: lecturesPresented.id})
l13 = Task.create({name: 'Rails', swim_lane_id: lecturesPresented.id})