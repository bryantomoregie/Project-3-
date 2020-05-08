User.destroy_all
Category.destroy_all
List.destroy_all
SwimLane.destroy_all
UserList.destroy_all
Task.destroy_all

# Users
josh = User.create({name: "Joshua Miles", username: "j", password: '123', email: 'linkmiles@noreply.com'})
steven = User.create({name: "Steven Nguyen", username: "LinkWithShield", password: '123', email: 'stevenshield@noreply.com'})


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
labsDeploy = SwimLane.create({name: 'Deploy', list_id: labs.id})
labsReview = SwimLane.create({name: 'Review With Class', list_id: labs.id})

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

#Josh < Teaching < Lecture < Lecture Backlog < Task 
l1 = Task.create({name: 'The DOM', swim_lane_id: lecturesBacklog.id})
l2 = Task.create({name: 'JavaScripts', swim_lane_id: lecturesBacklog.id})
l3 = Task.create({name: 'DOM Events', swim_lane_id: lecturesBacklog.id})
l4 = Task.create({name: 'Asynchronous JavaScript', swim_lane_id: lecturesBacklog.id})

#Josh < Teaching < Lecture < Lecture Prepare < Task 
l5 = Task.create({name: 'Communication with the Server', swim_lane_id: lecturesPrepare.id})

#Josh < Teaching < Lecture < Lecture Review < Task 
l6 = Task.create({name: 'Rails API', swim_lane_id: lecturesReview.id})
l7 = Task.create({name: 'Callback Functions', swim_lane_id: lecturesReview.id})
l8 = Task.create({name: 'JavaScript Classes', swim_lane_id: lecturesReview.id})

#Josh < Teaching < Lecture < Lecture Presented < Task 
l9 = Task.create({name: 'Validations', swim_lane_id: lecturesPresented.id})
l10 = Task.create({name: 'Sessions & Cookies', swim_lane_id: lecturesPresented.id})
l12 = Task.create({name: 'Rails Routing', swim_lane_id: lecturesPresented.id})
l13 = Task.create({name: 'Rails', swim_lane_id: lecturesPresented.id})

#Josh < Teaching < Lecture < Lecture This Week < Task 
l11 = Task.create({name: 'Rails Forms', swim_lane_id: lecturesThisWeek.id})
l12 = Task.create({name: 'Understanding Fetch Request', swim_lane_id: lecturesThisWeek.id})


#Josh < Teaching < Labs < LabsQA < Task
l21 = Task.create({name: 'create README', swim_lane_id: labsQA.id})
l14 = Task.create({name: 'JavaScripts', swim_lane_id: labsQA.id})
l15 = Task.create({name: 'DOM Events', swim_lane_id: labsQA.id})
l16 = Task.create({name: 'Asynchronous JavaScript', swim_lane_id: labsQA.id})

#Josh < Teaching < Labs < labsDeploy < Task 
l17 = Task.create({name: 'Communication with the Server', swim_lane_id: labsDeploy.id})

#Josh < Teaching < Labs < Labs Review < Task 
l18 = Task.create({name: 'Review with Steven', swim_lane_id: labsReview.id})
l19 = Task.create({name: 'Post in SLack', swim_lane_id: labsReview.id})

#Josh < Teaching < Lecture < lotrBacklog < Task 
l22 = Task.create({name: 'Review all movies', swim_lane_id: lotrBacklog.id})
l23 = Task.create({name: 'Review all books', swim_lane_id: lotrBacklog.id})
l24 = Task.create({name: 'Check in with book club', swim_lane_id: lotrBacklog.id})

#Josh < Teaching < Lecture < lotrInProgress < Task 
l25 = Task.create({name: 'Write fan 4th book', swim_lane_id: lotrInProgress.id})
l26 = Task.create({name: 'create index file', swim_lane_id: lotrInProgress.id})
l27 = Task.create({name: 'edit buttons in app', swim_lane_id: lotrInProgress.id})

#Josh < Teaching < Lecture < lotrMoveToBacklog < Task 
l29 = Task.create({name: 'app has vr functionality', swim_lane_id: lotrMoveToBacklog.id})
l30 = Task.create({name: 'users can play app simultaneously', swim_lane_id: lotrMoveToBacklog.id})

#Josh < Teaching < Lecture < zeldaBacklog < Task 
l31 = Task.create({name: 'Review all movies', swim_lane_id: zeldaBacklog.id})
l32 = Task.create({name: 'Review all books', swim_lane_id: zeldaBacklog.id})
l33 = Task.create({name: 'Check in with book club', swim_lane_id: zeldaBacklog.id})

#Josh < Teaching < Lecture < zeldaInProgress < Task 
l34 = Task.create({name: 'Write fan 4th book', swim_lane_id: zeldaInProgress.id})
l35 = Task.create({name: 'create index file', swim_lane_id: zeldaInProgress.id})
l36 = Task.create({name: 'edit buttons in app', swim_lane_id: zeldaInProgress.id})

#Josh < Teaching < Lecture < zeldaCompleted < Task 
l37 = Task.create({name: 'app has vr functionality', swim_lane_id: zeldaCompleted.id})
l38 = Task.create({name: 'users can play app simultaneously', swim_lane_id: zeldaCompleted.id})











